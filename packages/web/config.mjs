const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://nexocode.ai" : `https://${stage}.nexocode.ai`,
  console: stage === "production" ? "https://nexocode.ai/auth" : `https://${stage}.nexocode.ai/auth`,
  email: "help@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/ricodevvv/nexocode",
  discord: "https://nexocode.ai/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/v2/docs" },
  ],
}
