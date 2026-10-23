import Image from 'next/image'
import {
  IconBrandWhatsapp,
  IconStarFilled,
  IconUser
} from '@tabler/icons-react'
import BenefitsCarousel from './benefits-carousel'

type Testimonial = {
  text: string
  name?: string
  photo?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Marta',
    photo: '/pessoa-1.jpg',
    text: 'Quando eu vi que tinha feno-grego na composição, fiquei curiosa porque eu já tinha usado outros produtos com feno-grego antes. Mas nunca tinha usado ele junto com outros importantes para libido. Acho que foi essa combinação que fez diferença pra mim, porque senti melhora não só na vontade, mas também na disposição.'
  },
  {
    name: 'Marcos',
    photo: '/pessoa-2.jpg',
    text: 'Eu estava numa fase sem vontade pra nada e percebi que estou bem mais disposta. E a libido melhorou muito também, coisa que eu já estava achando que não ia mudar.'
  },
  {
    name: 'Ana',
    photo: '/pessoa-3.jpg',
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

        <BenefitsCarousel
          items={testimonials.flatMap((testimonial, index) => [
            <div key={`text-${index}`} className="h-full flex items-center">
              <div className="rounded-2xl bg-white text-neutral-800 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
                <div className="flex items-start gap-3">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-neutral-200 flex items-center justify-center">
                    {testimonial.photo ? (
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.name ?? 'Cliente'}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <IconUser className="size-6 text-neutral-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">
                      {testimonial.name ?? 'Cliente Libid 365'}
                    </p>
                    <div className="flex text-yellow-400 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStarFilled key={i} className="size-4" />
                      ))}
                    </div>
                  </div>
                  <IconBrandWhatsapp className="size-7 text-green-500 shrink-0" />
                </div>
                <p className="text-sm leading-snug mt-3">{testimonial.text}</p>
              </div>
            </div>,
            <Image
              key={`image-${index}`}
              src={testimonialImages[index]}
              alt={`Depoimento de cliente ${index + 1}`}
              width={1320}
              height={2346}
              sizes="(min-width: 768px) 33vw, 88vw"
              className="w-full h-auto rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
            />
          ])}
          itemClassName="basis-[88%] md:basis-1/3"
          interval={6000}
        />
      </div>
    </section>
  )
}
