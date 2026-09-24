export * from "./client.js"
export * from "./server.js"

import { createNexocodeClient } from "./client.js"
import { createNexocodeServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export * as data from "./data.js"

export async function createNexocode(options?: ServerOptions) {
  const server = await createNexocodeServer({
    ...options,
  })

  const client = createNexocodeClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
