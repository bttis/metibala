import Image from 'next/image'
import { IconStarFilled } from '@tabler/icons-react'
import CoverflowCarousel from './coverflow-carousel'

type Testimonial = {
  text: string
  name?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Marta',
    text: 'Quando eu vi que tinha feno-grego na composição, fiquei curiosa porque eu já tinha usado outros produtos com feno-grego antes. Mas nunca tinha usado ele junto com outros importantes para libido. Acho que foi essa combinação que fez diferença pra mim, porque senti melhora não só na vontade, mas também na disposição.'
  },
  {
    name: 'Marcos',
    text: 'Eu estava numa fase sem vontade pra nada e percebi que estou bem mais disposta. E a libido melhorou muito também, coisa que eu já estava achando que não ia mudar.'
  },
  {
    name: 'Ana',
    text: 'Eu percebi diferença principalmente na libido. Antes eu estava sem vontade nenhuma e agora sinto que meu desejo voltou aos poucos. Também me senti mais disposta no dia a dia.'
  }
]

const testimonialImages = [
  '/libid-depoimento-1.png',
  '/libid-depoimento-2.jpg',
  '/libid-depoimento-3.jpg'
]

export default function Reviews() {
  return (
    <section
      id="depoimentos"
      className="relative w-full overflow-hidden pt-8 pb-12 px-6 md:px-10"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h2 className="text-[clamp(1.25rem,7vw,1.875rem)] md:text-3xl font-teko font-bold uppercase leading-[1.05] whitespace-nowrap">
            O que nossos clientes dizem
          </h2>
          <p className="text-[13px] md:text-sm text-white/50 mt-4 leading-relaxed uppercase tracking-wide">
            <span className="whitespace-nowrap">
              Histórias reais de mais equilíbrio,
            </span>
            <br className="md:hidden" /> confiança e bem-estar.
          </p>
        </div>

        <CoverflowCarousel
          items={testimonials.flatMap((testimonial, index) => [
            <div
              key={`text-${index}`}
              className="h-full rounded-3xl bg-gradient-to-br from-red-600 via-red-600 to-yellow-400 p-[2px] shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="h-full rounded-[calc(1.5rem-2px)] bg-white text-neutral-900 px-5 md:px-7 flex flex-col items-center justify-center text-center gap-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStarFilled key={i} className="size-4" />
                  ))}
                </div>
                <p className="text-[13px] md:text-base font-bold leading-snug">
                  &quot;{testimonial.text}&quot;
                </p>
                {testimonial.name && (
                  <p className="text-xs md:text-sm text-neutral-500">
                    {testimonial.name}
                  </p>
                )}
              </div>
            </div>,
            <div
              key={`image-${index}`}
              className="h-full rounded-3xl bg-gradient-to-br from-red-600 via-red-600 to-yellow-400 p-[2px] shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-2px)]">
                <Image
                  src={testimonialImages[index]}
                  alt={`Depoimento de cliente ${index + 1}`}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>
            </div>
          ])}
          interval={6000}
        />
      </div>
    </section>
  )
}
