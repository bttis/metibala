import {
  IconCheck,
  IconPackage,
  IconShieldCheck,
  IconTruckDelivery
} from '@tabler/icons-react'
import { Product } from './product'

const trustBullets = [
  { icon: IconPackage, label: 'Compra segura' },
  { icon: IconTruckDelivery, label: 'Entrega para todo o Brasil' },
  { icon: IconShieldCheck, label: 'Garantia de satisfação' }
]

const formulaChecklist = [
  'Fórmula premium',
  'Ingredientes selecionados',
  'Alta absorção',
  'Para homens e mulheres',
  'Mais energia para o seu dia'
]

export default function Kits({ affiliateRef }: { affiliateRef?: string }) {
  return (
    <section
      id="kits"
      className="relative w-full overflow-hidden bg-white/[0.03] py-16 px-6 md:px-10"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr_240px] gap-10 items-start">
        <div className="max-w-[220px]">
          <h2 className="text-3xl font-teko font-bold uppercase leading-[1.05]">
            Escolha o seu kit
            <br /> e transforme o seu dia.
          </h2>
          <div className="mt-6 space-y-5">
            {trustBullets.map((bullet) => (
              <div key={bullet.label} className="flex items-center gap-3">
                <bullet.icon className="text-red-600 size-7 shrink-0" />
                <p className="text-base text-white/70">{bullet.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 w-full">
          <Product
            title="1 FRASCO"
            subtitle="Ideal para começar"
            price={97.0}
            installmentPrice={9.7}
            cta="Comprar Agora"
            imageUrl="/uma-unidade.png"
            umamiEvent="click-kit-1"
            productLink="https://maisvit.com/products/libid-365"
            affiliateRef={affiliateRef}
          />

          <Product
            title="3 FRASCOS"
            subtitle="Resultados ainda melhores"
            price={247.0}
            installmentPrice={24.7}
            cta="Comprar Agora"
            imageUrl="/tres-unidades.png"
            umamiEvent="click-kit-3"
            productLink="https://maisvit.com/products/libid-365"
            mostPopular
            affiliateRef={affiliateRef}
          />

          <Product
            title="2 FRASCOS"
            subtitle="Mais resultados, mais vitalidade"
            price={177.0}
            installmentPrice={17.7}
            cta="Comprar Agora"
            imageUrl="/duas-unidades.png"
            umamiEvent="click-kit-2"
            productLink="https://maisvit.com/products/libid-365"
            affiliateRef={affiliateRef}
          />
        </div>

        <div className="max-w-[240px]">
          <h2 className="font-teko text-3xl font-bold leading-none">
            LIBID <span className="text-red-600">365</span>
          </h2>
          <p className="text-sm text-white/70 mt-2 leading-snug">
            Vitalidade hoje.
            <br /> Uma vida mais extraordinária amanhã.
          </p>
          <div className="mt-5 space-y-5">
            {formulaChecklist.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="size-6 shrink-0 rounded-full border-2 border-red-600 flex items-center justify-center">
                  <IconCheck className="text-red-600 size-4" />
                </div>
                <p className="text-base text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
