import { createDirectus, authentication, rest } from "@directus/sdk";

export const client = createDirectus("https://admin.forumbandung.net")
  .with(
    authentication("session", { autoRefresh: true, credentials: "include" })
  )
  .with(rest());
