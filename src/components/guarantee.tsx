import Image from 'next/image'
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

export default function Guarantee() {
  return (
    <div>
      <div className="relative w-full max-w-[1200px] h-[600px] md:h-[380px] mx-auto mt-20 rounded-3xl overflow-hidden">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black/30 to-black z-[5] md:hidden" />
        <Image
          src="/refund.png"
          alt="reembolso-fundo"
          fill
          className="object-cover max-sm:object-[66%_100%]"
        />
        <div className="relative z-10 flex max-sm:flex-col justify-center gap-20 md:gap-52 items-center w-full h-full">
          <div className="text-white/90 p-4 max-w-[350px] md:max-w-[520px] rounded-xl">
            <h2 className="font-teko font-bold uppercase leading-[1.05] text-3xl md:text-5xl max-sm:text-center">
              Temos um desafio, caso você não tenha resultados em 30 dias,
              devolvemos{' '}
              <span className="text-red-600">100% do seu dinheiro!</span>
            </h2>
            <p className="font-teko font-bold uppercase leading-[1.05] text-3xl md:text-5xl mt-4 max-sm:text-center">
              Este mês completamos 1 ano de lançamento do desafio com{' '}
              <span className="text-red-600">nenhum centavo devolvido.</span>
            </p>
          </div>
          <Image
            src="/stamp.png"
            alt="selo"
            width={200}
            height={200}
            className="mb-4"
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
