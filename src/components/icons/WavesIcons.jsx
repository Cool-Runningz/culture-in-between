import { useId } from "react"

function randomBetween(min, max, seed = 1) {
  return () => {
    let rand = Math.sin(seed++) * 10000
    rand = rand - Math.floor(rand)
    return Math.floor(rand * (max - min + 1) + min)
  }
}

export function Waveform(props) {
  let id = useId()
  let bars = {
    total: 100,
    width: 2,
    gap: 2,
    minHeight: 40,
    maxHeight: 100,
  }

  let barHeights = Array.from(
    { length: bars.total },
    randomBetween(bars.minHeight, bars.maxHeight)
  )

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={`${id}-fade`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="40%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <linearGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="#4989E8" />
          <stop offset="50%" stopColor="#6159DA" />
          <stop offset="100%" stopColor="#FF54AD" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width="100%" height="100%" fill={`url(#${id}-pattern)`} />
        </mask>
        <pattern
          id={`${id}-pattern`}
          width={bars.total * bars.width + bars.total * bars.gap}
          height="100%"
          patternUnits="userSpaceOnUse"
        >
          {Array.from({ length: bars.total }, (_, index) => (
            <rect
              key={index}
              width={bars.width}
              height={`${barHeights[index]}%`}
              x={bars.gap * (index + 1) + bars.width * index}
              fill={`url(#${id}-fade)`}
            />
          ))}
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id}-gradient)`}
        mask={`url(#${id}-mask)`}
        opacity="0.25"
      />
    </svg>
  )
}

export function TinyWaveFormIcon({ colors = [], ...props }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path
        d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
        className={colors[0]}
      />
      <path
        d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
        className={colors[1]}
      />
    </svg>
  )
}