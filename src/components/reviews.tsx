'use client'

import { Star } from 'lucide-react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from './ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote:
      'Voltei a sentir aquela vontade que tinha sumido. Tenho mais disposição na hora H e muito mais confiança na cama.',
    name: 'Carlos M.',
    city: 'São Paulo - SP'
  },
  {
    quote:
      'Minha libido estava lá embaixo e eu me sentia desconectada. Hoje sinto mais desejo e prazer, e minha autoestima voltou!',
    name: 'Juliana R.',
    city: 'Curitiba - PR'
  },
  {
    quote:
      'A intimidade com minha esposa voltou a ter aquela chama do começo. Mais vontade, mais desempenho e um casal muito mais feliz.',
    name: 'Renato F.',
    city: 'Belo Horizonte - MG'
  },
  {
    quote:
      'Depois dos 40 achei que a falta de desejo era normal. Com Libid 365 voltei a ter iniciativa e o clima com meu marido mudou completamente.',
    name: 'Patrícia L.',
    city: 'Rio de Janeiro - RJ'
  },
  {
    quote:
      'A correria e o cansaço tinham apagado meu tesão. Hoje chego em casa com energia e vontade de aproveitar a noite a dois.',
    name: 'Marcelo S.',
    city: 'Porto Alegre - RS'
  },
  {
    quote:
      'Depois da gravidez meu desejo tinha sumido. Hoje me sinto mais disposta, mais bonita e voltei a ter vontade de namorar.',
    name: 'Fernanda A.',
    city: 'Salvador - BA'
  }
]

type Testimonial = (typeof testimonials)[number]

const AUTOPLAY_DELAY = 10000

function useAutoplay(api: CarouselApi) {
  useEffect(() => {
    if (!api) return

    let timer = setInterval(() => api.scrollNext(), AUTOPLAY_DELAY)
    const restart = () => {
      clearInterval(timer)
      timer = setInterval(() => api.scrollNext(), AUTOPLAY_DELAY)
    }

    api.on('select', restart)
    return () => {
      clearInterval(timer)
      api.off('select', restart)
    }
  }, [api])
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 md:p-6 h-full flex flex-col">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-8 md:size-9 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center font-bold text-sm text-red-500 shrink-0">
            {testimonial.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold truncate">{testimonial.name}</p>
            <p className="text-xs text-white/50 truncate">{testimonial.city}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {new Array(5).fill(null).map((_, index) => (
            <Star
              key={index}
              className="fill-yellow-400 text-yellow-400 size-3.5 md:size-4"
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-white/80 italic mt-2 md:mt-4 flex-1 max-md:text-center">
        &quot;{testimonial.quote}&quot;
      </p>
    </div>
  )
}

const mobileSlides = Array.from(
  { length: Math.ceil(testimonials.length / 3) },
  (_, index) => testimonials.slice(index * 3, index * 3 + 3)
)

export default function Reviews() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [mobileCarouselApi, setMobileCarouselApi] = useState<CarouselApi>()

  useAutoplay(carouselApi)
  useAutoplay(mobileCarouselApi)

  const handlePrev = () => carouselApi?.scrollPrev()
  const handleNext = () => carouselApi?.scrollNext()

  return (
    <section
      id="depoimentos"
      className="relative w-full overflow-hidden pt-8 pb-16 px-6 md:px-10"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
        <div className="text-center">
          <h2 className="text-3xl font-teko font-bold uppercase leading-[1.05]">
            O que nossos
            <br className="md:hidden" /> clientes dizem
          </h2>
          <p className="text-sm text-white/50 mt-4 leading-relaxed uppercase tracking-wide">
            Histórias reais de mais equilíbrio, confiança e bem-estar.
          </p>
        </div>

        <Carousel
          setApi={setMobileCarouselApi}
          opts={{ align: 'start', loop: true }}
          className="w-full md:hidden"
        >
          <CarouselContent>
            {mobileSlides.map((slide, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="flex flex-col gap-3">
                  {slide.map((testimonial) => (
                    <TestimonialCard
                      key={testimonial.name}
                      testimonial={testimonial}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="hidden md:flex items-center gap-4">
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
                  <TestimonialCard testimonial={testimonial} />
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
      </div>
    </section>
  )
}
