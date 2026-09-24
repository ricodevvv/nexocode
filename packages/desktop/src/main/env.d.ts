interface ImportMetaEnv {
  readonly NEXOCODE_CHANNEL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "virtual:nexocode-server" {
  export namespace Server {
    export const listen: typeof import("../../../nexocode/dist/types/src/node").Server.listen
    export type Listener = import("../../../nexocode/dist/types/src/node").Server.Listener
  }
  export namespace Config {
    export const get: typeof import("../../../nexocode/dist/types/src/node").Config.get
    export type Info = import("../../../nexocode/dist/types/src/node").Config.Info
  }
  export const bootstrap: typeof import("../../../nexocode/dist/types/src/node").bootstrap
}
