import { createDirectus, authentication, rest } from "@directus/sdk";

export const client = createDirectus("https://m1n.ayomas.uk")
  .with(
    authentication("session", { autoRefresh: true, credentials: "include" })
  )
  .with(rest());
