import { AgentV2 } from "@nexocode-ai/core/agent"
import { AISDK } from "@nexocode-ai/core/aisdk"
import { Catalog } from "@nexocode-ai/core/catalog"
import { CommandV2 } from "@nexocode-ai/core/command"
import { Credential } from "@nexocode-ai/core/credential"
import { AppNodeBuilder } from "@nexocode-ai/core/effect/app-node-builder"
import { LayerNodePlatform } from "@nexocode-ai/core/effect/app-node-platform"
import { LayerNode } from "@nexocode-ai/core/effect/layer-node"
import { EventV2 } from "@nexocode-ai/core/event"
import { FileSystem } from "@nexocode-ai/core/filesystem"
import { FSUtil } from "@nexocode-ai/core/fs-util"
import { Integration } from "@nexocode-ai/core/integration"
import { Location } from "@nexocode-ai/core/location"
import { Npm } from "@nexocode-ai/core/npm"
import { PluginV2 } from "@nexocode-ai/core/plugin"
import { Reference } from "@nexocode-ai/core/reference"
import { SkillV2 } from "@nexocode-ai/core/skill"
import { Effect, Layer } from "effect"
import { tempLocationLayer } from "../fixture/location"

const npmLayer = Layer.succeed(
  Npm.Service,
  Npm.Service.of({
    add: () => Effect.succeed({ directory: "", entrypoint: undefined }),
    install: () => Effect.void,
    which: () => Effect.succeed(undefined),
  }),
)

export const PluginTestLayer = AppNodeBuilder.build(
  LayerNode.group([
    FileSystem.node,
    FSUtil.node,
    Location.node,
    Npm.node,
    Credential.node,
    EventV2.node,
    LayerNodePlatform.httpClient,
    PluginV2.node,
    AgentV2.node,
    AISDK.node,
    Catalog.node,
    CommandV2.node,
    Integration.node,
    Reference.node,
    SkillV2.node,
  ]),
  [
    [Location.node, tempLocationLayer],
    [Npm.node, npmLayer],
  ],
)
