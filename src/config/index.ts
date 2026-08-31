import { envKeys, type EnvValues } from "@/types/env"

const rawEnv = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? "https://swarupbhise.vercel.app",
  UMAMI: {
    SRC: process.env.NEXT_PUBLIC_UMAMI_SRC,
    ID: process.env.NEXT_PUBLIC_UMAMI_ID
  }

} as const

export const __CONFIG__ = Object.freeze(rawEnv)
