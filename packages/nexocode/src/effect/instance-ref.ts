import { Context } from "effect"
import type { InstanceContext } from "@/project/instance-context"
import type { WorkspaceV2 } from "@nexocode-ai/core/workspace"

export const InstanceRef = Context.Reference<InstanceContext | undefined>("~nexocode/InstanceRef", {
  defaultValue: () => undefined,
})

export const WorkspaceRef = Context.Reference<WorkspaceV2.ID | undefined>("~nexocode/WorkspaceRef", {
  defaultValue: () => undefined,
})
