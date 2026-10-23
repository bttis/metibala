'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const DEFAULT_AUTOPLAY_INTERVAL = 5000
const SWIPE_THRESHOLD = 40

// posição de cada card de acordo com a distância do card central
const POSITIONS = [
  { x: 0, scale: 1, opacity: 1, z: 30 },
  { x: 72, scale: 0.8, opacity: 0.55, z: 20 },
  { x: 112, scale: 0.6, opacity: 0.25, z: 10 }
]

export default function CoverflowCarousel({
  items,
  interval = DEFAULT_AUTOPLAY_INTERVAL
}: {
  items: ReactNode[]
  interval?: number
}) {
  const [active, setActive] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const total = items.length

  const goTo = (index: number) => setActive((index + total) % total)

  useEffect(() => {
    const timer = setTimeout(() => goTo(active + 1), interval)
    return () => clearTimeout(timer)
  })

  const getOffset = (index: number) => {
    let offset = index - active
    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total
    return offset
  }

  return (
    <div
      className="relative w-full h-[440px] md:h-[540px] select-none"
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return
        const delta = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(delta) > SWIPE_THRESHOLD)
          goTo(active + (delta < 0 ? 1 : -1))
        touchStartX.current = null
      }}
    >
      {items.map((item, index) => {
        const offset = getOffset(index)
        const distance = Math.abs(offset)
        const position = POSITIONS[Math.min(distance, POSITIONS.length - 1)]
        const hidden = distance >= POSITIONS.length

        return (
          <div
            key={index}
            onClick={() => offset !== 0 && goTo(index)}
            aria-hidden={offset !== 0}
            className={cn(
              'absolute left-1/2 top-1/2 w-[240px] md:w-[300px] aspect-[3/5] transition-all duration-500 ease-out',
              offset !== 0 && 'cursor-pointer',
              hidden && 'pointer-events-none'
            )}
            style={{
              transform: `translate(-50%, -50%) translateX(${Math.sign(offset) * position.x}%) scale(${position.scale})`,
              opacity: hidden ? 0 : position.opacity,
              zIndex: position.z
            }}
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}
