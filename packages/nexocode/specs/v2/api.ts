// @ts-nocheck

import { NexoCode } from "@nexocode-ai/core"
import { ReadTool } from "@nexocode-ai/core/tools"

const nexocode = NexoCode.make({})

nexocode.tool.add(ReadTool)

nexocode.tool.add({
  name: "bash",
  schema: {
    type: "object",
    properties: {
      command: {
        type: "string",
        description: "The command to run.",
      },
    },
    required: ["command"],
  },
  execute(input, ctx) {},
})

nexocode.auth.add({
  provider: "openai",
  type: "api",
  value: process.env.OPENAI_API_KEY,
})

nexocode.agent.add({
  name: "build",
  permissions: [],
  model: {
    id: "gpt-5-5",
    provider: "openai",
    variant: "xhigh",
  },
})

const sessionID = await nexocode.session.create({
  agent: "build",
})

nexocode.subscribe((event) => {
  console.log(event)
})

await nexocode.session.prompt({
  sessionID,
  text: "hey what is up",
})

await nexocode.session.prompt({
  sessionID,
  text: "what is up with this",
  files: [
    {
      mime: "image/png",
      uri: "data:image/png;base64,xxxx",
    },
  ],
})

await nexocode.session.wait()

console.log(await nexocode.session.messages(sessionID))
