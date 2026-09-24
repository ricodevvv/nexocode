import { RGBA } from "@opentui/core"
import { createSignal, For, onCleanup, onMount } from "solid-js"
import { useKV } from "../context/kv"

export const AXO_PINK = RGBA.fromHex("#F0719E")

const COLORS: Record<string, RGBA> = {
  B: AXO_PINK,
  A: AXO_PINK,
  S: RGBA.fromHex("#D4588A"),
  g: RGBA.fromHex("#B8336B"),
  p: RGBA.fromHex("#FFB3CD"),
  E: RGBA.fromHex("#1E0F16"),
  M: RGBA.fromHex("#1E0F16"),
  k: RGBA.fromHex("#A89AA2"),
  j: RGBA.fromHex("#6E5F68"),
}

const FRONT = [
  ".g............g.",
  "..gBBBBBBBBBBg..",
  "gggBBBBBBBBBBggg",
  "...BBEBBBBEBB...",
  "..gBpBBMMBBpBg..",
  "BBBBBBBBBBBBBBBB",
  "...BBBBBBBBBB...",
  "....BB....BB....",
]

const TURN = [
  "..g...........g.",
  "...SBBBBBBBBBg..",
  ".ggSBBBBBBBBBggg",
  "...SBBEBBBBEB...",
  "...SBBBBMMBpBg..",
  "...SBBBBBBBBBBBB",
  "...SBBBBBBBBB...",
  "....SB....BB....",
]

const PROFILE = [
  "..g.................",
  "...gSSSSBBBBB.......",
  ".gggSSSSBBBBB.......",
  "...gSSSSBBEBEB......",
  "....SSSSBBBBBM......",
  "SSSSSSSSBBBBBAAAA...",
  ".SS.SSSSBBBBB......k",
  ".....SS...BB..kkkkk.",
]

const BLINK = edit(FRONT, [
  [3, 5, "B"],
  [3, 10, "B"],
])
const F = pad(FRONT)
const Fb = pad(BLINK)
const T = pad(TURN)
const TH = edit(T, [
  [5, 16, "kkkk"],
  [6, 16, "jjjj"],
])
const TO = edit(T, [
  [6, 19, "k"],
  [7, 14, "kkkkk"],
])
const PA = PROFILE
const PB = edit(PA, [
  [5, 15, ".."],
  [6, 15, "AA"],
])
const PAb = edit(PA, [
  [3, 10, "B"],
  [3, 12, "B"],
])
const PC = edit(PA, [
  [5, 15, ".."],
  [6, 19, "."],
  [7, 14, "kkkkkk"],
])

const SEQUENCES = {
  idle: [...Array.from({ length: 30 }, () => FRONT), BLINK, ...Array.from({ length: 8 }, () => FRONT), BLINK],
  laptop: [F, F, F, F, F, Fb, F, F, T, T, TH, TH, TO, TO]
    .concat([PA, PB, PA, PB, PA, PB, PAb, PB, PA, PB, PA, PB, PA, PB, PA, PB])
    .concat([PC, PC, TH, T, F, F]),
}

/**
 * Axo, el ajolote de NexoCode, dibujado con medios bloques en 4 filas.
 * En `laptop` saca la laptop y teclea; en `idle` solo parpadea.
 */
export function Axo(props: { mode: keyof typeof SEQUENCES }) {
  const kv = useKV()
  const frames = SEQUENCES[props.mode]
  const [index, setIndex] = createSignal(0)

  onMount(() => {
    if (!kv.get("animations_enabled", true)) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % frames.length), 100)
    onCleanup(() => clearInterval(timer))
  })

  return (
    <box flexShrink={0}>
      <For each={[0, 2, 4, 6]}>
        {(y) => (
          <box flexDirection="row">
            {Array.from(frames[index()][y]).map((char, x) => {
              const top = COLORS[char]
              const bottom = COLORS[frames[index()][y + 1][x]]
              if (top && bottom)
                return (
                  <text fg={top} bg={bottom} selectable={false}>
                    ▀
                  </text>
                )
              if (top)
                return (
                  <text fg={top} selectable={false}>
                    ▀
                  </text>
                )
              if (bottom)
                return (
                  <text fg={bottom} selectable={false}>
                    ▄
                  </text>
                )
              return <text selectable={false}> </text>
            })}
          </box>
        )}
      </For>
    </box>
  )
}

function pad(frame: string[]) {
  return frame.map((row) => row.padEnd(20, "."))
}

function edit(frame: string[], changes: [number, number, string][]) {
  return frame.map((row, y) =>
    changes
      .filter((change) => change[0] === y)
      .reduce((line, change) => line.slice(0, change[1]) + change[2] + line.slice(change[1] + change[2].length), row),
  )
}
