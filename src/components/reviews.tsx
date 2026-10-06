'use client'

import { Star } from 'lucide-react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from './ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Recuperei minha energia e me sinto mais confiante no dia a dia. Libid 365 realmente fez diferença na minha rotina.',
    name: 'Carlos M.',
    city: 'São Paulo - SP'
  },
  {
    quote:
      'Me sinto mais disposta, com mais foco e autoestima. É um cuidado que eu indico de olhos fechados!',
    name: 'Juliana R.',
    city: 'Curitiba - PR'
  },
  {
    quote:
      'Além da energia, notei mais equilíbrio e bem-estar. Libid 365 melhorou comigo e na minha relação.',
    name: 'Renato F.',
    city: 'Belo Horizonte - MG'
  }
]

export default function Reviews() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  const handlePrev = () => carouselApi?.scrollPrev()
  const handleNext = () => carouselApi?.scrollNext()

  return (
    <section
      id="depoimentos"
      className="relative w-full overflow-hidden py-16 px-6 md:px-10"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-10 items-center">
        <div className="max-w-[220px] max-md:mx-auto max-md:text-center">
          <h2 className="text-3xl font-teko font-bold uppercase leading-[1.05]">
            O que
            <br /> nossos clientes
            <br /> dizem
          </h2>
          <p className="text-sm text-white/50 mt-4 leading-relaxed uppercase tracking-wide">
            Histórias reais de mais equilíbrio, confiança e bem-estar.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="hidden md:flex items-center justify-center size-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors shrink-0"
          >
            <ChevronLeft className="size-5" />
          </button>

          <Carousel
            setApi={setCarouselApi}
            opts={{ align: 'start', loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 h-full flex flex-col">
                    <div className="flex items-center gap-1 max-md:justify-center">
                      {new Array(5).fill(null).map((_, index) => (
                        <Star
                          key={index}
                          className="fill-yellow-400 text-yellow-400 size-4"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-white/80 italic mt-4 flex-1 max-md:text-center">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-3 mt-6 max-md:justify-center">
                      <div className="size-9 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center font-bold text-sm text-red-500">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{testimonial.name}</p>
                        <p className="text-xs text-white/50">
                          {testimonial.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button
            onClick={handleNext}
            className="hidden md:flex items-center justify-center size-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors shrink-0"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="max-w-[220px] lg:text-right max-md:mx-auto max-md:text-center">
          <h2 className="text-2xl font-teko font-bold uppercase leading-tight">
            &quot;Mais que resultados, pessoas mais felizes.&quot;
          </h2>
        </div>
      </div>
    </section>
  )
}
