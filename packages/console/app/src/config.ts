/**
 * Application-wide constants and configuration
 */
export const config = {
  // Base URL
  baseUrl: "https://nexocode.ai",

  // GitHub
  github: {
    repoUrl: "https://github.com/ricodevvv/nexocode",
    starsFormatted: {
      compact: "208K",
      full: "208,000",
    },
  },

  // Social links
  social: {
    twitter: "https://x.com/nexocode",
    discord: "https://discord.gg/nexocode",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "950",
    commits: "13,000",
    monthlyUsers: "16M",
  },
} as const
