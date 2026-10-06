'use client'

import { ReactNode, useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'

const DEFAULT_AUTOPLAY_INTERVAL = 3000

export default function BenefitsCarousel({
  items,
  itemClassName = 'basis-1/3',
  interval = DEFAULT_AUTOPLAY_INTERVAL
}: {
  items: ReactNode[]
  itemClassName?: string
  interval?: number
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!carouselApi) return

    const next = () =>
      carouselApi.canScrollNext()
        ? carouselApi.scrollNext()
        : carouselApi.scrollTo(0)

    let timer = setInterval(next, interval)
    const restart = () => {
      clearInterval(timer)
      timer = setInterval(next, interval)
    }

    carouselApi.on('pointerDown', restart)

    return () => {
      clearInterval(timer)
      carouselApi.off('pointerDown', restart)
    }
  }, [carouselApi, interval])

  return (
    <Carousel
      setApi={setCarouselApi}
      opts={{ align: 'start', loop: true }}
      className="w-full"
    >
      <CarouselContent className="-ml-2">
        {items.map((item, index) => (
          <CarouselItem key={index} className={`${itemClassName} pl-2`}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
