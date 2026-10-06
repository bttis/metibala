import BenefitsCarousel from '@/components/benefits-carousel'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  IconArrowRight,
  IconBolt,
  IconBrain,
  IconHeart,
  IconInfinity,
  IconLeaf,
  IconRosetteDiscountCheck,
  IconShieldLock,
  IconShieldCheckFilled,
  IconTruckDelivery,
  IconUsers,
  IconWallet
} from '@tabler/icons-react'
import Link from 'next/link'

const lifestyleBenefits = [
  { icon: IconBolt, label: 'Mais energia\ne disposição' },
  { icon: IconBrain, label: 'Mais foco\ne clareza mental' },
  { icon: IconHeart, label: 'Mais confiança\nno dia a dia' },
  { icon: IconUsers, label: 'Mais bem-estar\nfísico e emocional' },
  { icon: IconLeaf, label: 'Mais vitalidade\npara o seu ritmo' },
  { icon: IconInfinity, label: 'Mais conexão\ncom o que importa' }
]

const sideWords = ['DISCIPLINA', 'ENERGIA', 'CONEXÃO', 'BEM-ESTAR']

export default function Benefits() {
  return (
    <div id="inicio">
      <div
        id="beneficios"
        className="relative w-full h-[800px] overflow-hidden flex items-center px-6 md:px-20 py-16 max-md:h-auto max-md:flex-col max-md:items-stretch max-md:bg-black max-md:px-4 max-md:pt-[48vw] max-md:pb-8"
      >
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-black via-black/60 to-black/10 z-[5] max-md:hidden" />
        <div className="md:hidden absolute inset-x-0 top-0 h-[125vw] bg-gradient-to-b from-black/60 via-black/35 via-50% to-black z-[5]" />
        <Image
          src="/first-background.png"
          alt="background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover absolute inset-0 z-0 max-md:h-[125vw]"
          quality={100}
          priority
        />

        <p className="absolute z-10 top-32 right-16 md:right-20 max-md:hidden italic text-white/70 text-lg leading-tight text-right font-light">
          Juntos <br /> por uma vida <br /> mais intensa
        </p>

        <div className="md:hidden relative z-10 flex flex-col">
          <div className="relative">
            <div className="absolute right-[10%] top-[12%] w-[13%] aspect-[320/945] overflow-hidden rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <Image
                src="/uma-unidade.png"
                alt="Libid 365"
                width={1086}
                height={1448}
                className="absolute max-w-none w-[339%] left-[-118.75%] top-[-26.5%] h-auto"
              />
            </div>
            <h1 className="relative font-playfair font-extrabold uppercase text-[9vw] leading-[1.05] tracking-wide max-w-[64%]">
              <span className="whitespace-nowrap">A vontade</span>
              <br />
              <span className="whitespace-nowrap">
                diminuiu<span className="text-red-600">?</span>
              </span>
              <br />
              <span className="whitespace-nowrap text-[7.5vw] font-semibold">Não deixe a</span>
              <br />
              <span className="text-red-600">
                hora H
              </span>
              <br />
              <span className="whitespace-nowrap text-[7.5vw] font-semibold">para depois.</span>
            </h1>
            <p className="relative mt-5 text-lg tracking-wide text-white/80 leading-snug">
              Mais desejo. Mais confiança.
              <br />
              Mais conexão.
            </p>
          </div>

          <div className="mt-7 flex items-center gap-2">
            <Link href="#kits" className="flex-1 min-w-0">
              <Button
                variant="default"
                className="w-full px-2 py-6 gap-1 text-[3.05vw] tracking-normal"
                data-umami-event="button-quero"
              >
                QUERO MINHA VONTADE DE VOLTA
                <IconArrowRight className="size-4" />
              </Button>
            </Link>
            <p className="shrink-0 -rotate-6 italic font-serif text-red-600 text-[10px] leading-tight">
              Mais você
              <br />
              em cada momento.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 divide-x divide-white/20 text-[11px] leading-tight text-white/80">
            <div className="flex items-center gap-1.5 pr-2">
              <IconShieldLock className="size-6 shrink-0" stroke={1.5} />
              Compra segura
            </div>
            <div className="flex items-center gap-1.5 px-2">
              <IconTruckDelivery className="size-6 shrink-0" stroke={1.5} />
              Entrega para todo o Brasil
            </div>
            <div className="flex items-center gap-1.5 pl-2">
              <IconRosetteDiscountCheck
                className="size-6 shrink-0"
                stroke={1.5}
              />
              Produto original
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-[760px] lg:max-w-none lg:pl-16 max-md:hidden">
          <h1 className="text-6xl font-teko font-bold leading-[1.15]">
            <span className="whitespace-nowrap">A vontade diminuiu?</span>
            <br />
            Não deixe a <span className="text-red-700">hora H</span>
            <br />
            para depois.
          </h1>
          <p className="text-base mt-3 text-white/80 max-w-[460px]">
            Mais desejo. Mais confiança. Mais conexão. Mais você nos momentos
            que importam.
          </p>
          <div className="mt-5 flex items-center gap-x-6 gap-y-3">
            <Link href="#kits">
              <Button
                variant="default"
                className="px-8 py-6"
                data-umami-event="button-quero"
              >
                QUERO MINHA VONTADE DE VOLTA
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

      <div className="bg-[#151515] z-10 w-full py-4 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="flex flex-col items-center lg:items-start shrink-0 lg:w-[180px]">
            <p className="text-sm font-medium text-white/60 uppercase tracking-wide leading-relaxed text-center lg:text-left">
              Mais do que um suplemento.
              <br />
              Um estilo de vida.
            </p>
            <span className="w-6 h-0.5 bg-red-600 mt-1.5" />
          </div>
          <div className="w-full md:hidden">
            <BenefitsCarousel
              items={lifestyleBenefits.map((benefit) => (
                <div
                  key={benefit.label}
                  className="flex flex-col items-center text-center gap-0.5"
                >
                  <benefit.icon className="text-red-600 size-8" />
                  <p className="text-sm font-semibold whitespace-pre-line leading-tight">
                    {benefit.label}
                  </p>
                </div>
              ))}
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-0 gap-y-6 flex-1 max-md:hidden">
            {lifestyleBenefits.map((benefit) => (
              <div
                key={benefit.label}
                className="flex flex-col items-center text-center gap-0.5 mx-[-8px] first:ml-0 last:mr-0"
              >
                <benefit.icon className="text-red-600 size-8" />
                <p className="text-sm font-semibold whitespace-pre-line leading-tight">
                  {benefit.label}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-col items-start shrink-0 w-[180px]">
            <p className="text-sm font-medium text-white/60 uppercase tracking-wide leading-relaxed">
              Pequenas escolhas
              <br />
              grandes diferenças
              <br />
              todo dia
            </p>
            <span className="w-6 h-0.5 bg-red-600 mt-1.5" />
          </div>
        </div>
      </div>
    </div>
  )
}
