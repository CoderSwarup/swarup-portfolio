import type { EnvValues } from "@/types/env"

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvValues { }
  }
}
