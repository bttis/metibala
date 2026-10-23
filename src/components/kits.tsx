import {
  IconBolt,
  IconFlame,
  IconHeart,
  IconPackage,
  IconShieldCheck,
  IconShieldHeart,
  IconTruckDelivery,
  IconUsersGroup
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { Product, getProductLink } from './product'
import { Button } from './ui/button'

const trustBullets = [
  { icon: IconPackage, label: 'Compra segura' },
  { icon: IconTruckDelivery, label: 'Entrega para todo o Brasil' },
  { icon: IconShieldCheck, label: 'Garantia de satisfação' }
]

const reasons = [
  { icon: IconFlame, label: 'Mais desejo' },
  { icon: IconBolt, label: 'Mais disposição' },
  { icon: IconShieldHeart, label: 'Mais confiança' },
  { icon: IconHeart, label: 'Mais conexão' },
  { icon: IconUsersGroup, label: 'Mais presença na hora H' }
]

export default function Kits({ affiliateRef }: { affiliateRef?: string }) {
  return (
    <section
      id="kits"
      className="relative w-full overflow-hidden bg-white/[0.03] py-16 px-6 md:px-10"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr_240px] gap-10 max-md:gap-6 items-start">
        <div className="max-w-[220px] max-md:max-w-none max-md:mx-auto max-md:text-center">
          <h2 className="text-3xl font-teko font-bold uppercase leading-[1.05]">
            Escolha o seu kit
            <br /> e transforme o seu dia.
          </h2>
          <div className="mt-6 max-md:mt-4 md:space-y-5 max-md:flex max-md:justify-center max-md:gap-4">
            {trustBullets.map((bullet) => (
              <div
                key={bullet.label}
                className="flex items-center gap-3 max-md:flex-1 max-md:flex-col max-md:gap-1.5"
              >
                <bullet.icon className="text-red-600 size-7 max-md:size-6 shrink-0" />
                <p className="text-base max-md:text-xs max-md:leading-tight text-white/70">
                  {bullet.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
          <Product
            title="2 FRASCOS"
            subtitle="Mais resultados, mais vitalidade"
            price={159.9}
            installmentPrice={15.99}
            cta="Comprar Agora"
            imageUrl="/duas-unidades.png"
            umamiEvent="click-kit-2"
            productLink="https://maisvit.com/products/libid-365"
            affiliateRef={affiliateRef}
          />

          <Product
            title="3 FRASCOS"
            subtitle="Resultados ainda melhores"
            price={199.9}
            installmentPrice={19.99}
            cta="Comprar Agora"
            imageUrl="/tres-unidades.png"
            umamiEvent="click-kit-3"
            productLink="https://maisvit.com/products/libid-365"
            mostPopular
            affiliateRef={affiliateRef}
            className="max-md:order-first"
          />

          <Product
            title="1 FRASCO"
            subtitle="Ideal para começar"
            price={89.9}
            installmentPrice={8.99}
            cta="Comprar Agora"
            imageUrl="/uma-unidade.png"
            umamiEvent="click-kit-1"
            productLink="https://maisvit.com/products/libid-365"
            affiliateRef={affiliateRef}
          />
        </div>

        <div className="md:max-w-[240px]">
          <h2 className="relative z-10 font-teko text-3xl max-md:text-[7vw] font-bold leading-none whitespace-nowrap max-md:text-center">
            Por dentro é onde a
            <br />
            <span className="text-red-600">insegurança começa.</span>
          </h2>
          <p className="relative z-10 text-sm text-white/70 mt-2 leading-snug max-md:text-center">
            Por que você deve usar o{' '}
            <span className="font-bold text-white">Libid 365</span>?
          </p>
          <div className="max-md:flex max-md:items-center max-md:gap-4">
            <div className="md:hidden relative w-[50%] shrink-0">
              <div className="absolute inset-y-[2%] -inset-x-[5%] rounded-full bg-red-900/80 blur-2xl" />
              <Image
                src="/libid%20sem%20fundo.png"
                alt="Frasco de Libid 365"
                width={1086}
                height={1448}
                className="relative w-full h-auto"
              />
            </div>
            <div className="relative z-10 max-md:-ml-14">
              <div className="mt-2 space-y-2">
                {reasons.map((reason) => (
                  <div key={reason.label} className="flex items-center gap-1">
                    <div className="size-8 shrink-0 rounded-full bg-red-600 flex items-center justify-center">
                      <reason.icon className="text-white size-5" />
                    </div>
                    <p className="text-base text-white/80 leading-tight">
                      {reason.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href={getProductLink(affiliateRef)}
            target="_blank"
            rel="noreferrer"
            className="block w-full mt-6"
          >
            <Button
              className="w-full h-auto py-3 rounded-full normal-case tracking-normal text-base font-bold text-black bg-gradient-to-b from-yellow-300 to-yellow-400 hover:bg-yellow-300 shadow-[0_8px_30px_rgba(250,204,21,0.35)]"
              data-umami-event="click-por-dentro-cta"
            >
              Quero minha segurança
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
