import { type ComponentProps } from "solid-js"

const STROKE = { "stroke-width": 2.4, "stroke-linecap": "round", "stroke-linejoin": "round" } as const

export const Mark = (props: { class?: string }) => {
  return (
    <svg
      data-component="logo-mark"
      classList={{ [props.class ?? ""]: !!props.class }}
      viewBox="3 2.5 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path data-slot="logo-mark-n" d="M6 19V7.5M18 16.5V5M7.6 7.6l8.8 8.8" stroke="var(--icon-strong-base)" {...STROKE} />
      <circle data-slot="logo-node" cx="6" cy="6" r="2.2" fill="var(--nexo-blue, #4f6bff)" />
      <circle data-slot="logo-node" cx="18" cy="18" r="2.2" fill="var(--nexo-blue, #4f6bff)" />
    </svg>
  )
}

export const Splash = (props: Pick<ComponentProps<"svg">, "ref" | "class">) => {
  return (
    <svg
      ref={props.ref}
      data-component="logo-splash"
      classList={{ [props.class ?? ""]: !!props.class }}
      viewBox="2 1 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 19V7.5M18 16.5V5M7.6 7.6l8.8 8.8" stroke="var(--icon-strong-base)" {...STROKE} />
      <circle data-slot="logo-node" cx="6" cy="6" r="2.2" fill="var(--nexo-blue, #4f6bff)" />
      <circle data-slot="logo-node" cx="18" cy="18" r="2.2" fill="var(--nexo-blue, #4f6bff)" />
    </svg>
  )
}

export const Logo = (props: { class?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2 1 122 22"
      fill="none"
      classList={{ [props.class ?? ""]: !!props.class }}
    >
      <g stroke="var(--icon-strong-base)" {...STROKE}>
        <path d="M6 19V7.5M18 16.5V5M7.6 7.6l8.8 8.8" />
        <path d="M29 19v-6.5a3.5 3.5 0 0 1 7 0V19M29 9.5V12M40.3 13.5h7.4a3.7 3.7 0 1 0-1.1 2.8M51.5 9.5l7 9.5M58.5 9.5l-7 9.5" />
        <circle cx="66.6" cy="14.25" r="4.1" />
      </g>
      <g stroke="var(--nexo-blue, #4f6bff)" {...STROKE}>
        <path d="M84.44 11.11A4.1 4.1 0 1 0 84.44 17.39M109.1 5V19M113.3 13.5h7.4a3.7 3.7 0 1 0-1.1 2.8" />
        <circle cx="92.9" cy="14.25" r="4.1" />
        <circle cx="105" cy="14.25" r="4.1" />
      </g>
      <circle cx="6" cy="6" r="2.2" fill="var(--nexo-blue, #4f6bff)" />
      <circle cx="18" cy="18" r="2.2" fill="var(--nexo-blue, #4f6bff)" />
    </svg>
  )
}
