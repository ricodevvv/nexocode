import { Config } from "effect"

export function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

const copy = process.env["NEXOCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]
const fff = process.env["NEXOCODE_DISABLE_FFF"]

function enabledByExperimental(key: string) {
  return process.env[key] === undefined ? truthy("NEXOCODE_EXPERIMENTAL") : truthy(key)
}

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  NEXOCODE_AUTO_HEAP_SNAPSHOT: truthy("NEXOCODE_AUTO_HEAP_SNAPSHOT"),
  NEXOCODE_GIT_BASH_PATH: process.env["NEXOCODE_GIT_BASH_PATH"],
  NEXOCODE_CONFIG: process.env["NEXOCODE_CONFIG"],
  NEXOCODE_CONFIG_CONTENT: process.env["NEXOCODE_CONFIG_CONTENT"],
  NEXOCODE_DISABLE_AUTOUPDATE: truthy("NEXOCODE_DISABLE_AUTOUPDATE"),
  NEXOCODE_ALWAYS_NOTIFY_UPDATE: truthy("NEXOCODE_ALWAYS_NOTIFY_UPDATE"),
  NEXOCODE_DISABLE_PRUNE: truthy("NEXOCODE_DISABLE_PRUNE"),
  NEXOCODE_DISABLE_TERMINAL_TITLE: truthy("NEXOCODE_DISABLE_TERMINAL_TITLE"),
  NEXOCODE_SHOW_TTFD: truthy("NEXOCODE_SHOW_TTFD"),
  NEXOCODE_DISABLE_AUTOCOMPACT: truthy("NEXOCODE_DISABLE_AUTOCOMPACT"),
  NEXOCODE_DISABLE_MODELS_FETCH: truthy("NEXOCODE_DISABLE_MODELS_FETCH"),
  NEXOCODE_DISABLE_MOUSE: truthy("NEXOCODE_DISABLE_MOUSE"),
  NEXOCODE_FAKE_VCS: process.env["NEXOCODE_FAKE_VCS"],
  NEXOCODE_SERVER_PASSWORD: process.env["NEXOCODE_SERVER_PASSWORD"],
  NEXOCODE_SERVER_USERNAME: process.env["NEXOCODE_SERVER_USERNAME"],
  NEXOCODE_DISABLE_FFF: fff === undefined ? process.platform === "win32" : truthy("NEXOCODE_DISABLE_FFF"),

  // Experimental
  NEXOCODE_EXPERIMENTAL_FILEWATCHER: Config.boolean("NEXOCODE_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  NEXOCODE_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("NEXOCODE_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  NEXOCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("NEXOCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  NEXOCODE_MODELS_URL: process.env["NEXOCODE_MODELS_URL"],
  NEXOCODE_MODELS_PATH: process.env["NEXOCODE_MODELS_PATH"],
  NEXOCODE_DB: process.env["NEXOCODE_DB"],

  NEXOCODE_WORKSPACE_ID: process.env["NEXOCODE_WORKSPACE_ID"],
  NEXOCODE_EXPERIMENTAL_WORKSPACES: enabledByExperimental("NEXOCODE_EXPERIMENTAL_WORKSPACES"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get NEXOCODE_DISABLE_PROJECT_CONFIG() {
    return truthy("NEXOCODE_DISABLE_PROJECT_CONFIG")
  },
  get NEXOCODE_EXPERIMENTAL_REFERENCES() {
    return enabledByExperimental("NEXOCODE_EXPERIMENTAL_REFERENCES")
  },
  get NEXOCODE_TUI_CONFIG() {
    return process.env["NEXOCODE_TUI_CONFIG"]
  },
  get NEXOCODE_CONFIG_DIR() {
    return process.env["NEXOCODE_CONFIG_DIR"]
  },
  get NEXOCODE_PURE() {
    return truthy("NEXOCODE_PURE")
  },
  get NEXOCODE_PERMISSION() {
    return process.env["NEXOCODE_PERMISSION"]
  },
  get NEXOCODE_PLUGIN_META_FILE() {
    return process.env["NEXOCODE_PLUGIN_META_FILE"]
  },
  get NEXOCODE_CLIENT() {
    return process.env["NEXOCODE_CLIENT"] ?? "cli"
  },
}
