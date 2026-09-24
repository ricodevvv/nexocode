declare global {
  const NEXOCODE_VERSION: string
  const NEXOCODE_CHANNEL: string
}

export const InstallationVersion = typeof NEXOCODE_VERSION === "string" ? NEXOCODE_VERSION : "local"
export const InstallationChannel = typeof NEXOCODE_CHANNEL === "string" ? NEXOCODE_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
