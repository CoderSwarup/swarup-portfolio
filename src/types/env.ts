const envKeys = {
  NODE_ENV: "NODE_ENV",
  NEXT_PUBLIC_APP_URL: "NEXT_PUBLIC_APP_URL",
  UMAMI: {
    SRC: "NEXT_PUBLIC_UMAMI_SRC",
    ID: "NEXT_PUBLIC_UMAMI_ID"
  }

} as const

type EnvKey = keyof typeof envKeys

type EnvValues = {
  NODE_ENV: "development" | "production" | "test"
  NEXT_PUBLIC_APP_URL: string,
  NEXT_PUBLIC_UMAMI_SRC: string,
  NEXT_PUBLIC_UMAMI_ID: string
}

export { envKeys }
export type { EnvKey, EnvValues }
