# @nexocode-ai/sdk-next

Effect-native scoped NexoCode host for in-process applications. This transitional package will replace the existing generated `@nexocode-ai/sdk` after its consumers migrate.

The SDK executes Server's assembled HTTP router in memory. It opens no listener and performs no network I/O, while preserving the same routing, middleware, handlers, codecs, and errors as the network client.

```ts
import { NexoCode } from "@nexocode-ai/sdk-next"

const nexocode = yield * NexoCode.create()
const session = yield * nexocode.sessions.get({ sessionID })
```

It also exports `Tool` and exposes local-only `tools.register(...)`, replacing the former `@nexocode-ai/core/public` facade. Registration uses Core's host-level `ApplicationTools` service shared by the host's Locations; each Location retains its own `ToolRegistry` for overlay, lookup, and settlement. Closing the owning Effect Scope releases router resources, location services, fibers, and scoped tool registrations.

`sessions.events({ sessionID, after })` replays durable events after the optional aggregate sequence, then emits newly committed durable events. `sessions.interrupt(...)` targets execution owned by this host, and `sessions.message(...)` retrieves one projected Session message.

The same constructor is available as a service Layer:

```ts
const program = Effect.gen(function* () {
  const nexocode = yield* NexoCode.Service
  return yield* nexocode.sessions.get({ sessionID })
})

yield * program.pipe(Effect.provide(NexoCode.layer))
```

`NexoCode.layer` adapts `NexoCode.create()` for dependency injection; it does not define another host implementation.
