import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const words = ['ENERGIA', 'EQUILÍBRIO', 'AUTOCUIDADO', 'LIBERDADE']

export default function Enough() {
  return (
    <section className="relative w-full md:w-1/2 min-h-[380px] overflow-hidden flex items-center px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-14">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-black z-0" />
      <div className="absolute inset-y-0 -left-[20%] right-0 z-[1]">
        <Image
          src="/mulher.jpg"
          alt="background"
          fill
          className="object-cover object-[25%_15%] opacity-40"
          quality={100}
          priority={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-[2]" />
      <div className="relative z-10 flex items-center justify-between w-full gap-6">
        <div className="hidden md:flex flex-col gap-5 shrink-0 md:-ml-6 lg:-ml-8 xl:-ml-14 2xl:-ml-20">
          {words.map((word) => (
            <span
              key={word}
              className="font-teko font-semibold text-lg lg:text-xl leading-none tracking-[0.08em] text-white/85"
            >
              {word}
            </span>
          ))}
        </div>
        <div className="max-w-[300px] ml-auto text-right md:text-left">
          <p className="text-red-600 font-bold text-xs tracking-widest uppercase">
            Para Elas
          </p>
          <h2 className="text-4xl md:text-5xl font-teko font-bold uppercase leading-[1.05] mt-1">
            Bem-estar também
            <br /> é poder.
          </h2>
          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            Mais vitalidade. Mais equilíbrio. Mais você. Libid 365 é para
            mulheres que valorizam energia, autoestima e qualidade de vida.
          </p>
          <Link href="#kits">
            <Button
              variant="default"
              className="mt-6 px-6 py-5 text-xs"
              data-umami-event="button-quero"
            >
              Descubra seu equilíbrio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
