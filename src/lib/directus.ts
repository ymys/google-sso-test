import { createDirectus, authentication, rest } from "@directus/sdk";

export const client = createDirectus("https://buatpoc-dir.q4ml5v.easypanel.host")
  .with(
    authentication("session", { autoRefresh: true, credentials: "include" })
  )
  .with(rest());
