import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  IconChevronRight,
  IconGenderMale,
  IconHeartbeat,
  IconShieldPlus,
  IconUser
} from '@tabler/icons-react'

const situations = [
  { icon: IconGenderMale, label: 'Menos vontade' },
  { icon: IconShieldPlus, label: 'Menos confiança' },
  { icon: IconHeartbeat, label: 'Menos conexão' },
  { icon: IconUser, label: 'Menos atenção a você' }
]

export default function Situations() {
  return (
    <section className="relative w-full overflow-hidden pb-16 px-3 md:px-10">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
        <p className="text-red-600 font-bold text-xs tracking-widest uppercase">
          Você não está sozinho nisso
        </p>
        <h2 className="text-[5.2vw] md:text-4xl whitespace-nowrap font-teko font-bold uppercase leading-[1.05] mt-1">
          Já passou por alguma dessas situações?
        </h2>

        <div className="grid grid-cols-4 gap-1 md:gap-4 w-full mt-8">
          {situations.map((situation) => (
            <div
              key={situation.label}
              className="flex flex-col items-center justify-center gap-2 md:gap-3 rounded-xl md:rounded-2xl border border-red-600/40 bg-gradient-to-b from-red-950/60 to-black px-1 py-3 md:px-4 md:py-6"
            >
              <situation.icon className="text-red-600 size-7 md:size-12" stroke={1.5} />
              <p className="font-bold text-[11px] md:text-base leading-tight">
                {situation.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-white/70 mt-6">
          Isso é mais comum do que parece. E tem solução.
        </p>

        <Link href="#kits" className="w-full max-w-[420px] mt-6">
          <Button
            className="w-full h-auto py-3 rounded-full normal-case tracking-normal text-base font-bold text-black bg-gradient-to-b from-yellow-300 to-yellow-400 hover:bg-yellow-300 shadow-[0_8px_30px_rgba(250,204,21,0.35)]"
            data-umami-event="button-situacoes"
          >
            Quero Libid 365
            <IconChevronRight className="size-5" stroke={3} />
          </Button>
        </Link>
      </div>
    </section>
  )
}
