import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const words = ['DISCIPLINA', 'CONFIANÇA', 'ENERGIA', 'RESULTADOS']

export default function Energy() {
  return (
    <section className="relative w-full md:w-1/2 min-h-[380px] overflow-hidden flex items-center px-12 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-14">
      <div className="absolute inset-0 bg-black z-0" />
      <Image
        src="/homem.jpg"
        alt="background"
        fill
        className="object-cover object-[50%_20%] opacity-50 grayscale z-[1]"
        quality={100}
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-[2]" />
      <div className="relative z-10 flex items-center justify-between w-full gap-6">
        <div className="max-w-[300px]">
          <p className="text-red-600 font-bold text-xs tracking-widest uppercase">
            Para Eles
          </p>
          <h2 className="text-4xl md:text-5xl font-teko font-bold uppercase leading-[1.05] mt-1">
            Potência é mais
            <br /> do que desempenho.
          </h2>
          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            Mais energia. Mais confiança. Mais presença. Libid 365 é para
            homens que querem estar bem, todos os dias.
          </p>
          <Link href="#kits">
            <Button
              variant="default"
              className="mt-6 px-6 py-5 text-xs"
              data-umami-event="button-quero"
            >
              Liberte sua melhor versão
            </Button>
          </Link>
        </div>
        <div className="hidden md:flex flex-col items-end gap-5 text-right shrink-0 md:-mr-6 lg:-mr-8 xl:-mr-14 2xl:-mr-20">
          {words.map((word) => (
            <span
              key={word}
              className="font-teko font-semibold text-lg lg:text-xl leading-none tracking-[0.08em] text-white/85"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
