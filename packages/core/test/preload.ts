import path from "path"

process.env.NEXOCODE_DB = ":memory:"
process.env.NPM_CONFIG_AUDIT = "false"
process.env.NEXOCODE_MODELS_PATH = path.join(import.meta.dir, "plugin", "fixtures", "models-dev.json")
process.env.NEXOCODE_DISABLE_MODELS_FETCH = "true"
