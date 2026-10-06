import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Guarantee() {
  return (
    <div>
      <div className="relative w-full min-h-[600px] overflow-hidden bg-white/10 flex items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center max-w-[1200px] w-full">
          <h1 className="text-4xl md:text-5xl font-teko font-semibold mt-16 text-center">
            Seu risco é ZERO! Garantia <br /> incondicional{' '}
            <span className="text-red-700 font-bold">Libid 365!</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-20 w-full items-center md:items-stretch justify-center">
            <div className="w-full md:w-[360px] text-center border border-white/20 p-6 rounded-xl flex flex-col items-center">
              <div className="h-40 flex items-center justify-center">
                <Image
                  src="/metibala-caixa.png"
                  alt="metibala-caixa"
                  width={280}
                  height={100}
                  priority={false}
                  className="max-h-full w-auto object-contain rounded-xl"
                />
              </div>
              <h1 className="text-red-600 font-semibold mt-4">
                Entrega sigilosa e garantida
              </h1>
              <p className="text-white/50 mt-4">
                Seus potes de Libid 365 serão enviados com total sigilo e
                segurança, desde a embalagem do produto até a entrega.
              </p>
            </div>
            <div className="w-full md:w-[360px] text-center border border-white/20 p-6 rounded-xl flex flex-col items-center">
              <div className="h-40 flex items-center justify-center">
                <Image
                  src="/guarantee.png"
                  alt="garantia"
                  width={160}
                  height={100}
                  priority={false}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <h1 className="text-red-600 font-semibold mt-4">
                30 dias de garantia
              </h1>
              <p className="text-white/50 mt-4">
                Se você não sentir os resultados em 30 dias, devolvemos 100% do
                seu dinheiro, sem perguntas.
              </p>
            </div>
            <div className="w-full md:w-[360px] text-center border border-white/20 p-6 rounded-xl flex flex-col items-center">
              <div className="h-40 flex items-center justify-center">
                <Image
                  src="/anvisa.png"
                  alt="anvisa"
                  width={140}
                  height={100}
                  priority={false}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <h1 className="text-red-600 font-semibold mt-4">
                Aprovado pela ANVISA
              </h1>
              <p className="text-white/50 mt-4">
                Libid 365 segue os padrões de qualidade e segurança exigidos
                pela ANVISA em todas as etapas de produção.
              </p>
            </div>
          </div>

          <Link href="#kits">
            <Button
              variant="default"
              className="mt-8 mb-10 p-6"
              data-umami-event="button-quero"
            >
              Quero minha transformação agora
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative w-full max-w-[1200px] h-[600px] md:h-[380px] mx-auto mt-20 rounded-3xl overflow-hidden mb-12">
        <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black/30 to-black z-[5] md:hidden" />
        <Image
          src="/refund.png"
          alt="reembolso-fundo"
          fill
          className="object-cover max-sm:object-[66%_100%]"
        />
        <div className="relative z-10 flex max-sm:flex-col justify-center gap-20 md:gap-52 items-center w-full h-full">
          <div className="text-white/90 p-4 max-w-[350px] md:max-w-[520px] rounded-xl">
            <h1 className="font-semibold font-teko text-3xl max-sm:text-center md:text-5xl">
              Temos um desafio, caso você não tenha resultados em 30 dias,
              devolvemos{' '}
              <span className="text-red-600">100% do seu dinheiro!</span>
            </h1>
            <p className="text-xl mt-2 max-sm:text-center">
              Este mês completamos 1 ano de lançamento do desafio com{' '}
              <span className="text-red-600">NENHUM CENTAVO DEVOLVIDO.</span>
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
    </div>
  )
}
