/// <reference path="../markdown.d.ts" />

export * as SkillPlugin from "./skill"

import { define } from "./internal"
import { Effect } from "effect"
import { AbsolutePath } from "../schema"
import { SkillV2 } from "../skill"
import customizeNexocodeContent from "./skill/customize-nexocode.md" with { type: "text" }

export const CustomizeNexocodeContent = customizeNexocodeContent

export const Plugin = define({
  id: "skill",
  effect: Effect.fn(function* (ctx) {
    yield* ctx.skill.transform((draft) => {
      draft.source(
        SkillV2.EmbeddedSource.make({
          type: "embedded",
          skill: SkillV2.Info.make({
            name: "customize-nexocode",
            description:
              "Use ONLY when the user is editing or creating nexocode's own configuration: nexocode.json, nexocode.jsonc, files under .nexocode/, or files under ~/.config/nexocode/. Also use when creating or fixing nexocode agents, subagents, commands, skills, plugins, MCP servers, or permission rules. Do not use for the user's own application code, or for any project that is not configuring nexocode itself.",
            location: AbsolutePath.make("/builtin/customize-nexocode.md"),
            content: CustomizeNexocodeContent,
          }),
        }),
      )
    })
  }),
})
