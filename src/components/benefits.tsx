import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  IconArrowRight,
  IconChevronRight,
  IconGenderBigender,
  IconShieldCheckFilled,
  IconStarFilled,
  IconTruckDelivery,
  IconWallet
} from '@tabler/icons-react'
import Link from 'next/link'

const sideWords = ['DISCIPLINA', 'ENERGIA', 'CONEXÃO', 'BEM-ESTAR']

export default function Benefits() {
  return (
    <div id="inicio">
      <div
        id="beneficios"
        className="relative w-full h-[800px] overflow-hidden flex items-center px-6 md:px-20 py-16 max-md:h-auto max-md:flex-col max-md:items-stretch max-md:bg-black max-md:bg-[radial-gradient(ellipse_at_top,rgba(207,13,47,0.35),transparent_45%)] max-md:px-0 max-md:pt-[19vw] max-md:pb-8"
      >
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-black via-black/60 to-black/10 z-[5] max-md:hidden" />
        <Image
          src="/first-background.png"
          alt="background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover absolute inset-0 z-0 max-md:hidden"
          quality={100}
          priority
        />

        <p className="absolute z-10 top-32 right-16 md:right-20 max-md:hidden italic text-white/70 text-lg leading-tight text-right font-light">
          Juntos <br /> por uma vida <br /> mais intensa
        </p>

        <div className="md:hidden relative z-10 flex flex-col items-center text-center pt-6">
          <div className="relative z-10 flex flex-col items-center">
            <p className="flex items-center gap-1 font-extrabold text-[15vw] leading-none tracking-tighter">
              <span className="text-red-600">LIBID</span>
              <span>365</span>
              <IconGenderBigender
                className="size-[11vw] -mt-[4vw]"
                stroke={1.5}
              />
            </p>
            <div className="mt-2 flex items-center gap-3 text-[4.4vw] text-white/90">
              <span className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStarFilled key={i} className="size-[4.4vw]" />
                ))}
              </span>
              4,9 · +1 mil clientes
            </div>
            <h1 className="mt-3 font-extrabold text-[8.6vw] leading-[1.05] tracking-tight">
              Volte a ter a
              <br />
              intensidade na <span className="text-red-600">hora H.</span>
            </h1>
            <p className="mt-3 px-4 text-[4.1vw] leading-snug text-white/90">
              O <strong>desejo</strong> e <strong>confiança de</strong> dentro
              para <strong>fora.</strong>
              <br />A <strong>força e a vontade</strong> que sempre foram seus,
              <br />
              de volta nos <strong>primeiros 30 dias.</strong>
            </p>
          </div>

          <div className="relative w-full aspect-[941/1672] -mt-[50vw]">
            <Image
              src="/metibala-background.png"
              alt="Casal com Libid 365"
              width={941}
              height={1672}
              className="absolute inset-0 w-full h-full object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent via-35% to-black" />
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent to-black" />
            <div className="absolute left-4 top-[46%] text-left text-[2.6vw] tracking-[0.35em] leading-[1.8] text-white/60">
              CONFIANÇA
              <br />
              DE VOLTA
              <br />
              TODO DIA
              <span className="block mt-2 w-6 h-0.5 bg-red-600" />
            </div>
            <p className="absolute right-4 top-[36%] -rotate-12 font-playfair italic text-red-600 text-[6vw] leading-tight text-right">
              Mais
              <br />
              desejo
              <br />
              Mais
              <br />
              você
            </p>
          </div>

          <div className="relative z-10 -mt-[58vw] w-full px-4">
            <Link href="#kits" className="block">
              <Button
                className="w-full h-auto py-3 rounded-full normal-case tracking-normal text-[4.6vw] font-bold text-black bg-gradient-to-b from-yellow-300 to-yellow-400 hover:bg-yellow-300 shadow-[0_8px_30px_rgba(250,204,21,0.35)]"
                data-umami-event="button-quero"
              >
                Quero Recuperar Minha Autoestima
                <IconChevronRight className="size-6" stroke={3} />
              </Button>
            </Link>
            <p className="mt-4 text-[3.8vw] text-white/90">
              Resultados em até 90 dias ou seu dinheiro de volta.
            </p>
            <div className="mt-5 grid grid-cols-3 items-center divide-x divide-white/40 text-[3.6vw] leading-tight text-white/85">
              <span className="px-2">2 comprimidos por dia</span>
              <span className="px-2">Homens e mulheres</span>
              <span className="px-2">Para todo tipo de falha na hora H</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-[760px] lg:max-w-none lg:pl-16 max-md:hidden">
          <h1 className="text-6xl font-teko font-bold leading-[1.15]">
            Volte a ter a
            <br />
            intensidade na <span className="text-red-700">hora H.</span>
          </h1>
          <p className="text-base mt-3 text-white/80 max-w-[460px]">
            O <strong>desejo</strong> e <strong>confiança de</strong> dentro
            para <strong>fora.</strong> A <strong>força e a vontade</strong> que
            sempre foram seus, de volta nos <strong>primeiros 30 dias.</strong>
          </p>
          <div className="mt-5 flex items-center gap-x-6 gap-y-3">
            <Link href="#kits">
              <Button
                variant="default"
                className="px-8 py-6"
                data-umami-event="button-quero"
              >
                QUERO RECUPERAR MINHA AUTOESTIMA
                <IconArrowRight className="size-4" />
              </Button>
            </Link>
            <div className="flex flex-col md:items-start lg:flex-row lg:items-center lg:gap-x-6 whitespace-nowrap gap-y-1.5 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <IconWallet className="text-red-600 size-4" />
                Pagamento seguro
              </div>
              <div className="flex items-center gap-2">
                <IconTruckDelivery className="text-red-600 size-4" />
                Entrega para todo o Brasil
              </div>
              <div className="flex items-center gap-2">
                <IconShieldCheckFilled className="text-red-600 size-4" />
                Satisfação garantida
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col items-end gap-1.5 absolute z-10 right-16 md:right-20 bottom-14 text-xs tracking-[0.2em] text-white/50 font-semibold">
          {sideWords.map((word) => (
            <span key={word}>{word}</span>
          ))}
          <span className="text-red-600">LIBID 365</span>
        </div>
      </div>
    </div>
  )
}
