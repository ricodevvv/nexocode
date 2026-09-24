import { registerCustomTheme } from "@pierre/diffs"
import { NexoCodeTheme } from "./marked-theme"

let registered = false

export function registerNexoCodeTheme() {
  if (registered) return
  registered = true
  registerCustomTheme("NexoCode", () => Promise.resolve(NexoCodeTheme))
}
