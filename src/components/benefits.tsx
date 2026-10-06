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
        className="relative w-full h-[800px] overflow-hidden flex items-center px-6 md:px-20 py-16 max-md:h-auto max-md:pt-20 max-md:pb-6"
      >
        <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-black via-black/60 to-black/10 z-[5]" />
        <Image
          src="/first-background.png"
          alt="background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover absolute inset-0 z-0"
          quality={100}
          priority
        />

        <p className="absolute z-10 top-32 right-16 md:right-20 max-sm:hidden italic text-white/70 text-lg leading-tight text-right font-light">
          Juntos <br /> por uma vida <br /> mais intensa
        </p>

        <div className="relative z-10 max-w-[760px] lg:max-w-none lg:pl-16">
          <h1 className="text-[10.5vw] md:text-6xl font-teko font-bold leading-[1.15] max-md:leading-[1]">
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
          <div className="mt-5 flex items-center gap-x-6 gap-y-3 max-md:flex-col max-md:gap-y-3">
            <Link href="#kits" className="max-md:w-full max-md:max-w-[360px]">
              <Button
                variant="default"
                className="px-8 py-6 max-md:w-full max-md:py-7 max-md:text-lg"
                data-umami-event="button-quero"
              >
                QUERO MINHA VONTADE DE VOLTA
                <IconArrowRight className="size-4 max-md:size-5" />
              </Button>
            </Link>
            <div className="flex flex-col md:items-start lg:flex-row lg:items-center lg:gap-x-6 whitespace-nowrap gap-y-1.5 text-sm text-white/60 max-md:gap-y-2 max-md:text-base">
              <div className="flex items-center gap-2">
                <IconWallet className="text-red-600 size-4 max-md:size-5" />
                Pagamento seguro
              </div>
              <div className="flex items-center gap-2">
                <IconTruckDelivery className="text-red-600 size-4 max-md:size-5" />
                Entrega para todo o Brasil
              </div>
              <div className="flex items-center gap-2">
                <IconShieldCheckFilled className="text-red-600 size-4 max-md:size-5" />
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
