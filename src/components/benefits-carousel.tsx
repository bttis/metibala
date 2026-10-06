'use client'

import { ReactNode, useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'

const AUTOPLAY_INTERVAL = 3000

export default function BenefitsCarousel({ items }: { items: ReactNode[] }) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!carouselApi) return

    let timer = setInterval(() => carouselApi.scrollNext(), AUTOPLAY_INTERVAL)
    const restart = () => {
      clearInterval(timer)
      timer = setInterval(() => carouselApi.scrollNext(), AUTOPLAY_INTERVAL)
    }

    carouselApi.on('pointerDown', restart)

    return () => {
      clearInterval(timer)
      carouselApi.off('pointerDown', restart)
    }
  }, [carouselApi])

  return (
    <Carousel
      setApi={setCarouselApi}
      opts={{ align: 'start', loop: true }}
      className="w-full"
    >
      <CarouselContent className="-ml-2">
        {items.map((item, index) => (
          <CarouselItem key={index} className="basis-1/3 pl-2">
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
