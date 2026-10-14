'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from './ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

type Story =
  | { type: 'image'; src: string; alt: string }
  | { type: 'text'; text: string; background: string }

const stories: Story[] = [
  {
    type: 'image',
    src: '/libid-depoimento-1.png',
    alt: 'Cliente segurando o Libid 365'
  },
  {
    type: 'text',
    text: 'Quando eu vi que tinha feno-grego na composição, fiquei curiosa porque eu já tinha usado outros produtos com feno-grego antes. Mas nunca tinha usado ele junto com outros importantes para libido. Acho que foi essa combinação que fez diferença pra mim, porque senti melhora não só na vontade, mas também na disposição.',
    background: 'bg-gradient-to-br from-red-700 via-red-900 to-black'
  },
  {
    type: 'image',
    src: '/libid-depoimento-2.jpg',
    alt: 'Caixa com dois potes de Libid 365'
  },
  {
    type: 'text',
    text: 'Eu estava numa fase sem vontade pra nada e percebi que estou bem mais disposta. E a libido melhorou muito também, coisa que eu já estava achando que não ia mudar.',
    background: 'bg-gradient-to-br from-rose-500 via-pink-700 to-purple-900'
  },
  {
    type: 'image',
    src: '/libid-depoimento-3.jpg',
    alt: 'Cliente segurando um pote de Libid 365'
  },
  {
    type: 'text',
    text: 'Eu percebi diferença principalmente na libido. Antes eu estava sem vontade nenhuma e agora sinto que meu desejo voltou aos poucos. Também me senti mais disposta no dia a dia.',
    background: 'bg-gradient-to-br from-neutral-800 via-neutral-900 to-red-950'
  }
]

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

function StoryCard({ story }: { story: Story }) {
  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
      {story.type === 'image' ? (
        <Image
          src={story.src}
          alt={story.alt}
          fill
          sizes="(max-width: 768px) 75vw, 25vw"
          className="object-cover"
        />
      ) : (
        <div
          className={`absolute inset-0 flex items-center justify-center p-6 ${story.background}`}
        >
          <p className="text-center text-base font-semibold leading-snug text-white">
            {story.text}
          </p>
        </div>
      )}
    </div>
  )
}

export default function Reviews() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()

  useAutoplay(carouselApi)

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
              {stories.map((story, index) => (
                <CarouselItem
                  key={index}
                  className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <StoryCard story={story} />
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
