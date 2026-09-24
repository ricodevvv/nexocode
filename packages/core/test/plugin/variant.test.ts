import { describe, expect } from "bun:test"
import { Catalog } from "@nexocode-ai/core/catalog"
import { AppNodeBuilder } from "@nexocode-ai/core/effect/app-node-builder"
import { LayerNode } from "@nexocode-ai/core/effect/layer-node"
import { Location } from "@nexocode-ai/core/location"
import { ModelV2 } from "@nexocode-ai/core/model"
import { VariantPlugin } from "@nexocode-ai/core/plugin/variant"
import { ProviderV2 } from "@nexocode-ai/core/provider"
import { AbsolutePath } from "@nexocode-ai/core/schema"
import { Effect, Layer } from "effect"
import { location } from "../fixture/location"
import { testEffect } from "../lib/effect"
import { catalogHost, host } from "./host"

const locationLayer = Layer.succeed(
  Location.Service,
  Location.Service.of(location({ directory: AbsolutePath.make(import.meta.dir) })),
)
const it = testEffect(AppNodeBuilder.build(Catalog.node, [[Location.node, locationLayer]]))

describe("VariantPlugin", () => {
  it.effect("adds GLM 5.2 variants after catalog sources", () =>
    Effect.gen(function* () {
      const service = yield* Catalog.Service
      yield* service.transform((catalog) => {
        catalog.provider.update(ProviderV2.ID.nexocode, (provider) => {
          provider.api = { type: "aisdk", package: "@ai-sdk/openai-compatible" }
        })
        catalog.model.update(ProviderV2.ID.nexocode, ModelV2.ID.make("glm-5.2"), (model) => {
          model.api = {
            id: ModelV2.ID.make("glm-5.2"),
            type: "aisdk",
            package: "@ai-sdk/openai-compatible",
          }
        })
      })
      yield* VariantPlugin.Plugin.effect(host({ catalog: catalogHost(service) }))

      expect((yield* service.model.get(ProviderV2.ID.nexocode, ModelV2.ID.make("glm-5.2")))?.variants).toEqual([
        expect.objectContaining({ id: "high", body: { reasoning_effort: "high" } }),
        expect.objectContaining({ id: "max", body: { reasoning_effort: "max" } }),
      ])
    }),
  )

  it.effect("keeps explicit variants over generated defaults", () =>
    Effect.gen(function* () {
      const service = yield* Catalog.Service
      yield* service.transform((catalog) => {
        catalog.model.update(ProviderV2.ID.nexocode, ModelV2.ID.make("glm-5.2"), (model) => {
          model.api = {
            id: ModelV2.ID.make("glm-5.2"),
            type: "aisdk",
            package: "@ai-sdk/openai-compatible",
          }
          model.variants = [{ id: ModelV2.VariantID.make("high"), headers: { custom: "true" }, body: {} }]
        })
      })
      yield* VariantPlugin.Plugin.effect(host({ catalog: catalogHost(service) }))

      expect((yield* service.model.get(ProviderV2.ID.nexocode, ModelV2.ID.make("glm-5.2")))?.variants).toEqual([
        expect.objectContaining({ id: "high", headers: { custom: "true" } }),
        expect.objectContaining({ id: "max", body: { reasoning_effort: "max" } }),
      ])
    }),
  )
})
