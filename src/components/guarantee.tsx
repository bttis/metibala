import Image from 'next/image'
import Link from 'next/link'
import { getProductLink } from './product'
import { Button } from './ui/button'
import BenefitsCarousel from './benefits-carousel'

const guarantees = [
  {
    image: { src: '/metibala-caixa.png', alt: 'metibala-caixa', width: 280 },
    imageClassName: 'rounded-xl',
    title: 'Entrega sigilosa e garantida',
    description:
      'Seus potes de Libid 365 serão enviados com total sigilo e segurança, desde a embalagem do produto até a entrega.'
  },
  {
    image: { src: '/anvisa.png', alt: 'anvisa', width: 140 },
    title: 'Aprovado pela ANVISA',
    description:
      'Libid 365 segue os padrões de qualidade e segurança exigidos pela ANVISA em todas as etapas de produção.'
  }
]

const guaranteeCards = guarantees.map((guarantee) => (
  <div
    key={guarantee.title}
    className="w-full h-full md:w-[360px] text-center border border-white/20 p-6 rounded-xl flex flex-col items-center"
  >
    <div className="h-40 flex items-center justify-center">
      <Image
        src={guarantee.image.src}
        alt={guarantee.image.alt}
        width={guarantee.image.width}
        height={100}
        priority={false}
        className={`max-h-full w-auto object-contain ${guarantee.imageClassName ?? ''}`}
      />
    </div>
    <h3 className="font-teko text-2xl font-bold uppercase leading-none mt-4">
      {guarantee.title}
    </h3>
    <p className="text-base text-white/70 mt-3 leading-relaxed">
      {guarantee.description}
    </p>
  </div>
))

export default function Guarantee({
  affiliateRef
}: {
  affiliateRef?: string
}) {
  return (
    <div>
      <div className="relative w-full max-w-[1200px] md:min-h-[440px] mx-auto mt-8 md:mt-20 rounded-3xl overflow-hidden">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black/30 to-black z-[5] md:hidden" />
        <Image
          src="/refund.png"
          alt="reembolso-fundo"
          fill
          className="object-cover max-sm:object-[66%_100%]"
        />
        <div className="relative z-10 flex max-sm:flex-col justify-center gap-20 md:gap-52 items-center w-full md:min-h-[440px] pt-0 pb-10 md:py-10">
          <div className="text-white/90 p-4 max-sm:pt-0 max-w-[350px] md:max-w-[520px] rounded-xl">
            <h2 className="font-teko font-bold uppercase leading-[1.05] text-3xl md:text-5xl max-sm:text-center">
              Temos um desafio, caso você não tenha resultados em 30 dias,
              devolvemos{' '}
              <span className="text-red-600">100% do seu dinheiro!</span>
            </h2>
            <Image
              src="/stamp.png"
              alt="selo"
              width={160}
              height={160}
              className="sm:hidden mx-auto my-4"
            />
            <p className="font-teko font-bold uppercase leading-[1.05] text-3xl md:text-5xl sm:mt-4 max-sm:text-center">
              Este mês completamos 2 anos de lançamento do desafio com{' '}
              <span className="text-red-600">nenhum centavo devolvido.</span>
            </p>
            <Link
              href={getProductLink(affiliateRef)}
              target="_blank"
              rel="noreferrer"
              className="block w-full max-w-[320px] mt-6 max-sm:mx-auto"
            >
              <Button
                className="w-full h-auto py-3 rounded-full normal-case tracking-normal text-base font-bold text-black bg-gradient-to-b from-yellow-300 to-yellow-400 hover:bg-yellow-300 shadow-[0_8px_30px_rgba(250,204,21,0.35)]"
                data-umami-event="click-garantia-cta"
              >
                Compre agora
              </Button>
            </Link>
          </div>
          <Image
            src="/stamp.png"
            alt="selo"
            width={200}
            height={200}
            className="mb-4 max-sm:hidden"
          />
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto mt-10 mb-12 px-4">
        <div className="md:hidden">
          <BenefitsCarousel
            items={guaranteeCards}
            itemClassName="basis-full"
            interval={4000}
          />
        </div>

        <div className="hidden md:flex flex-row gap-12 items-stretch justify-center">
          {guaranteeCards}
        </div>
      </div>
    </div>
  )
}
