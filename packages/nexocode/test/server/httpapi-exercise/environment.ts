import { Flag } from "@nexocode-ai/core/flag/flag"
import { Effect } from "effect"
import path from "path"

const preserveExerciseGlobalRoot = !!process.env.NEXOCODE_HTTPAPI_EXERCISE_GLOBAL
export const exerciseGlobalRoot =
  process.env.NEXOCODE_HTTPAPI_EXERCISE_GLOBAL ??
  path.join(process.env.TMPDIR ?? "/tmp", `nexocode-httpapi-global-${process.pid}`)
process.env.XDG_DATA_HOME = path.join(exerciseGlobalRoot, "data")
process.env.XDG_CONFIG_HOME = path.join(exerciseGlobalRoot, "config")
process.env.XDG_STATE_HOME = path.join(exerciseGlobalRoot, "state")
process.env.XDG_CACHE_HOME = path.join(exerciseGlobalRoot, "cache")
process.env.NEXOCODE_DISABLE_SHARE = "true"
export const exerciseConfigDirectory = path.join(exerciseGlobalRoot, "config", "nexocode")
export const exerciseDataDirectory = path.join(exerciseGlobalRoot, "data", "nexocode")

const preserveExerciseDatabase = !!process.env.NEXOCODE_HTTPAPI_EXERCISE_DB
export const exerciseDatabasePath =
  process.env.NEXOCODE_HTTPAPI_EXERCISE_DB ??
  path.join(process.env.TMPDIR ?? "/tmp", `nexocode-httpapi-exercise-${process.pid}.db`)
process.env.NEXOCODE_DB = exerciseDatabasePath
Flag.NEXOCODE_DB = exerciseDatabasePath

export const original = {
  NEXOCODE_SERVER_PASSWORD: Flag.NEXOCODE_SERVER_PASSWORD,
  NEXOCODE_SERVER_USERNAME: Flag.NEXOCODE_SERVER_USERNAME,
}

export const cleanupExercisePaths = Effect.promise(async () => {
  const fs = await import("fs/promises")
  if (!preserveExerciseDatabase) {
    await Promise.all(
      [exerciseDatabasePath, `${exerciseDatabasePath}-wal`, `${exerciseDatabasePath}-shm`].map((file) =>
        fs.rm(file, { force: true }).catch(() => undefined),
      ),
    )
  }
  if (!preserveExerciseGlobalRoot)
    await fs.rm(exerciseGlobalRoot, { recursive: true, force: true }).catch(() => undefined)
})
