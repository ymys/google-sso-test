import { createDirectus, authentication, rest } from "@directus/sdk";

export const client = createDirectus("https://adminfinx.goyong.in")
  .with(
    authentication("session", { autoRefresh: true, credentials: "include" })
  )
  .with(rest());
