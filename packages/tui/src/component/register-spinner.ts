import { getComponentCatalogue } from "@opentui/solid/components"
import { registerSpinner } from "opentui-spinner/solid"

export function registerNexocodeSpinner() {
  if (!getComponentCatalogue().spinner) registerSpinner()
}
