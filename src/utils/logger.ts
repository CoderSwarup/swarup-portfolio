import { APPLICATION_ENV } from "@/constants"

type LogLevel = "debug" | "info" | "warn" | "error"

type LogMeta = Record<string, unknown>

const LOG_ICONS: Record<LogLevel, string> = {
  debug: "🔍",
  info: "📋",
  warn: "⚠️",
  error: "❌",
}

const LEVEL_COLORS: Record<LogLevel, string> = {
  debug: "\x1b[36m",
  info: "\x1b[32m",
  warn: "\x1b[33m",
  error: "\x1b[31m",
}

const RESET = "\x1b[0m"
const DIM = "\x1b[2m"
const BOLD = "\x1b[1m"

function isServer(): boolean {
  return typeof window === "undefined"
}

function formatValue(value: unknown, depth: number = 0): string {
  if (value === null) return "null"
  if (value === undefined) return "undefined"
  if (typeof value === "string") return value
  if (typeof value === "number" || typeof value === "boolean")
    return String(value)
  if (value instanceof Error) return `${value.message}\n${value.stack || ""}`
  if (typeof value === "function")
    return `[Function: ${value.name || "anonymous"}]`

  if (Array.isArray(value)) {
    if (value.length === 0) return "[]"
    const indent = "  ".repeat(depth + 1)
    const closingIndent = "  ".repeat(depth)
    const items = value.map(
      (item) => `${indent}${formatValue(item, depth + 1)}`
    )
    return `[\n${items.join(",\n")}\n${closingIndent}]`
  }

  if (typeof value === "object") {
    const keys = Object.keys(value)
    if (keys.length === 0) return "{}"
    const indent = "  ".repeat(depth + 1)
    const closingIndent = "  ".repeat(depth)
    const entries = keys.map(
      (key) =>
        `${indent}${key}: ${formatValue((value as Record<string, unknown>)[key], depth + 1)}`
    )
    return `{\n${entries.join(",\n")}\n${closingIndent}}`
  }

  return String(value)
}

function formatMeta(meta?: LogMeta): string {
  if (!meta || Object.keys(meta).length === 0) return ""
  return ` ${formatValue(meta, 0)}`
}

function formatLog(level: LogLevel, context: string, meta?: LogMeta): string {
  const timestamp = new Date().toISOString()
  const icon = LOG_ICONS[level]
  const metaStr = formatMeta(meta)

  if (!isServer()) {
    return `${timestamp} ${icon} ${level.toUpperCase()} [${context}]${metaStr}`
  }

  const color = LEVEL_COLORS[level]
  return `${DIM}${timestamp}${RESET} ${icon} ${color}${BOLD}${level.toUpperCase()}${RESET} ${BOLD}[${context}]${RESET}${metaStr}`
}

function shouldLog(): boolean {
  return process.env.NODE_ENV !== APPLICATION_ENV.PRODUCTION
}

export const logger = {
  debug(context: string, meta?: LogMeta): void {
    if (shouldLog()) {
      console.debug(formatLog("debug", context, meta))
    }
  },

  info(context: string, meta?: LogMeta): void {
    if (shouldLog()) {
      console.info(formatLog("info", context, meta))
    }
  },

  warn(context: string, meta?: LogMeta): void {
    if (shouldLog()) {
      console.warn(formatLog("warn", context, meta))
    }
  },

  error(context: string, meta?: LogMeta): void {
    console.error(formatLog("error", context, meta))
  },

  child(context: string) {
    const self = this
    return {
      debug(meta?: LogMeta) {
        self.debug(context, meta)
      },
      info(meta?: LogMeta) {
        self.info(context, meta)
      },
      warn(meta?: LogMeta) {
        self.warn(context, meta)
      },
      error(meta?: LogMeta) {
        self.error(context, meta)
      },
    }
  },
}
