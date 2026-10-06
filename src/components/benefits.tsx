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
        className="relative w-full h-[800px] overflow-hidden flex items-center px-6 md:px-20 py-16"
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

        <div className="relative z-10 max-w-[760px]">
          <p className="text-red-600 font-bold tracking-widest text-xs uppercase leading-relaxed">
            Vitalidade hoje
            <br />
            Uma vida mais extraordinária amanhã
          </p>
          <h1 className="text-5xl md:text-6xl font-teko font-bold leading-[1.05] mt-3">
            Mais confiança.
            <br />
            Mais presença.
            <br />
            <span className="text-red-700">Mais você em todos</span>
            <br />
            <span className="text-red-700">os momentos.</span>
          </h1>
          <p className="text-base mt-5 text-white/80 max-w-[460px]">
            Libid 365 é para homens e mulheres que desejam mais vitalidade,
            confiança, bem-estar e autocuidado diário.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 max-md:flex-col max-md:gap-y-5">
            <Link href="#kits" className="max-md:w-full max-md:max-w-[360px]">
              <Button
                variant="default"
                className="px-8 py-6 max-md:w-full max-md:py-7 max-md:text-lg"
                data-umami-event="button-quero"
              >
                Comprar Agora
                <IconArrowRight className="size-4 max-md:size-5" />
              </Button>
            </Link>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60 max-md:flex-col max-md:mt-4 max-md:gap-y-3 max-md:text-base">
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

      <div className="bg-[#151515] z-10 w-full py-6 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
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
                  <benefit.icon className="text-red-600 size-10" />
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
                <benefit.icon className="text-red-600 size-10" />
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
