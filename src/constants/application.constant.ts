export const APPLICATION_ENV = {
  PRODUCTION: "production" as const,
  DEVELOPMENT: "development" as const,
} as const

export type ApplicationEnvironment =
  (typeof APPLICATION_ENV)[keyof typeof APPLICATION_ENV]

