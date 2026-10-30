import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Newsreader } from 'next/font/google'
import { getCartLink, getProductLink } from '@/components/product'
import { convertToBRL } from '@/utils/convert-to-brl'
import { Accordion } from './accordion'

const serif = Newsreader({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic']
})

const sans = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Saúde em pauta · O desejo mudou. Vamos falar sobre isso.',
  description:
    'Conteúdo educativo e publicitário da MaisVit sobre saúde sexual, desejo e autocuidado.'
}

const productImage = '/libid%20sem%20fundo.png'

const symptoms = [
  {
    title: 'Desejo',
    text: 'A vontade pode mudar ao longo da vida. Ela não mede amor, valor pessoal ou obrigação.'
  },
  {
    title: 'Energia',
    text: 'Cansaço, sono e sobrecarga fazem parte da conversa sobre disposição e intimidade.'
  },
  {
    title: 'Orgasmo',
    text: 'Dificuldade para chegar ao orgasmo e falta de desejo são questões diferentes.'
  }
]

const ingredients = [
  {
    symbol: 'Fg',
    tag: 'Extrato vegetal',
    name: 'Feno-grego',
    text: 'Extrato da semente, presente como fonte de saponinas de glicosídeos de furostanol.'
  },
  {
    symbol: 'Mg',
    tag: 'Mineral · Bisglicinato',
    name: 'Magnésio',
    text: 'O magnésio auxilia no metabolismo energético.'
  },
  {
    symbol: 'Zn',
    tag: 'Mineral · Bisglicinato',
    name: 'Zinco',
    text: 'O zinco é um antioxidante que auxilia na proteção dos danos causados pelos radicais livres.'
  },
  {
    symbol: 'Q',
    tag: 'Composto bioativo',
    name: 'Quercetina',
    text: 'Um flavonoide presente na formulação.'
  },
  {
    symbol: 'B6',
    tag: 'Vitamina · Piridoxina',
    name: 'Vitamina B6',
    text: 'A vitamina B6 auxilia na função normal do sistema nervoso.'
  }
]

const faqs = [
  {
    question: 'O que é o Libid 365?',
    answer:
      'Um suplemento alimentar da MaisVit em cápsulas, com feno-grego, magnésio, zinco, quercetina e vitamina B6. Cada frasco tem 60 cápsulas.'
  },
  {
    question: 'Como utilizar?',
    answer:
      'Siga a recomendação diária de consumo indicada na embalagem. Não exceda a quantidade recomendada.'
  },
  {
    question: 'Quais são os ingredientes?',
    answer:
      'Feno-grego, magnésio bisglicinato, zinco bisglicinato, quercetina e vitamina B6 (piridoxina). Confira a lista completa no rótulo.'
  },
  {
    question: 'Quem deve buscar orientação antes de utilizar?',
    answer:
      'Gestantes, lactantes, crianças, pessoas com doenças crônicas ou que usam medicamentos devem conversar com um profissional de saúde antes de usar qualquer suplemento.'
  },
  {
    question: 'Quando é importante investigar alterações na libido?',
    answer:
      'Quando a mudança persiste, preocupa ou vem acompanhada de outros sintomas. Uma avaliação médica ajuda a entender as causas e o melhor cuidado.'
  },
  {
    question: 'Como funcionam os kits da Black Novembro?',
    answer:
      'Durante novembro, no kit de 2 frascos você ganha mais 1, e no kit de 3 frascos você ganha mais 2. Os frascos de presente já estão incluídos no total recebido.'
  }
]

const kits = [
  {
    buy: 2,
    gift: 1,
    price: 179.9,
    variantId: 46632028405926,
    badge: '1 frasco grátis',
    note: 'Compra segura na loja oficial MaisVit.',
    umamiEvent: 'saude-click-kit-2'
  },
  {
    buy: 3,
    gift: 2,
    price: 269.9,
    variantId: 46632030666918,
    badge: 'Melhor valor por frasco',
    note: 'Por mais R$ 90, receba 2 frascos a mais que no outro kit.',
    umamiEvent: 'saude-click-kit-3',
    featured: true
  }
]

function Eyebrow({
  children,
  className = ''
}: {
  children: string
  className?: string
}) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.18em] text-[#a8243a] ${className}`}
    >
      {children}
    </p>
  )
}

function Heading({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={`font-[family-name:var(--font-serif)] text-4xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-[#222] ${className}`}
    >
      {children}
    </h2>
  )
}

function Accent({ children }: { children: string }) {
  return <em className="italic text-[#a8243a]">{children}</em>
}

function VitLogo({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full border-[3px] border-[#222] font-[family-name:var(--font-serif)] font-medium text-[#222] ${className}`}
    >
      +VIT
    </div>
  )
}

function ProductArch({ caption }: { caption?: string }) {
  return (
    <div>
      <div className="relative mx-auto aspect-[42/56] w-full max-w-[420px] overflow-hidden rounded-t-full rounded-b-lg bg-gradient-to-b from-[#9e3843] to-[#7f2732]">
        <Image
          src={productImage}
          alt="Frasco de Libid 365"
          width={1086}
          height={1448}
          className="absolute left-1/2 top-[16%] w-[68%] -translate-x-1/2 drop-shadow-[0_30px_30px_rgba(0,0,0,0.4)]"
        />
      </div>
      {caption && (
        <p className="mt-4 text-center text-[10px] uppercase tracking-[0.15em] text-[#8a847f]">
          {caption}
        </p>
      )}
    </div>
  )
}

function Bottles({ buy, gift }: { buy: number; gift: number }) {
  const bottle = (filled: boolean, key: string) => (
    <svg
      key={key}
      viewBox="0 0 14 28"
      className={`h-7 w-3.5 ${filled ? 'fill-current/20' : 'fill-none'}`}
      stroke="currentColor"
    >
      <rect x="3" y="0.5" width="8" height="4" rx="1" />
      <rect x="0.5" y="4.5" width="13" height="23" rx="2" />
      <line x1="3" y1="15" x2="11" y2="15" />
    </svg>
  )

  return (
    <div className="flex items-center gap-2.5">
      {Array.from({ length: buy }, (_, i) => bottle(false, `b${i}`))}
      <span className="mx-1 text-sm">+</span>
      {Array.from({ length: gift }, (_, i) => bottle(true, `g${i}`))}
    </div>
  )
}

export default async function Saude({
  searchParams
}: {
  searchParams: Promise<{ ref?: string }>
}) {
  const { ref } = await searchParams

  return (
    <div
      className={`${serif.variable} ${sans.variable} font-[family-name:var(--font-inter)] bg-[#f9f7f4] text-[#222] min-h-screen`}
    >
      <div className="bg-[#a8243a] py-2 px-4 text-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] text-white">
        Conteúdo educativo e publicitário produzido pela MaisVit
      </div>

      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-[1348px] items-center justify-between gap-6 px-6 md:px-10 py-6 md:py-8">
          <div className="flex items-center gap-5">
            <p className="font-[family-name:var(--font-serif)] text-2xl md:text-[27px] font-medium tracking-[-0.04em]">
              Saúde em pauta<span className="text-[#a8243a]">.</span>
            </p>
            <span className="hidden sm:block h-4 w-px bg-black/20" />
            <p className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-[#5f5a56]">
              Por MaisVit
            </p>
          </div>
          <nav className="flex items-center gap-7 text-xs">
            <a href="#entenda" className="hidden md:block hover:text-[#a8243a]">
              Entenda
            </a>
            <a href="#libid" className="hidden md:block hover:text-[#a8243a]">
              Libid 365
            </a>
            <a
              href="#composicao"
              className="hidden md:block hover:text-[#a8243a]"
            >
              Composição
            </a>
            <a href="#kits" className="font-bold text-[#a8243a]">
              Escolher meu kit <span className="ml-3">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1348px] px-6 md:px-[84px]">
        {/* 01 — Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-14 pt-12 md:pt-16 pb-16 md:pb-20 border-b border-black/10">
          <div className="pt-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#a8243a]" />
              <Eyebrow>Especial · Saúde sexual</Eyebrow>
            </div>
            <h1 className="mt-8 font-[family-name:var(--font-serif)] text-[52px] md:text-[72px] leading-[1] tracking-[-0.045em]">
              O desejo mudou.
              <br />
              Vamos falar
              <br />
              <Accent>sobre isso.</Accent>
            </h1>
            <p className="mt-10 max-w-[470px] text-base leading-[1.75] text-[#5f5a56]">
              Menos desejo, cansaço e mudanças na intimidade merecem atenção.
              Entender o que acontece com você é um primeiro passo de cuidado.
            </p>

            <div className="mt-8 flex max-w-[400px] items-center gap-5 rounded-sm border border-black/10 bg-[#f1ebe6] p-4">
              <div className="relative h-[84px] w-16 shrink-0 overflow-hidden bg-[#8a2b36]">
                <Image
                  src={productImage}
                  alt="Libid 365"
                  width={1086}
                  height={1448}
                  className="absolute inset-x-2 top-2 w-12"
                />
              </div>
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#a8243a]">
                  +VIT · MaisVit
                </p>
                <p className="mt-1.5 font-[family-name:var(--font-serif)] text-[28px] leading-none">
                  Libid 365
                </p>
                <p className="mt-2 text-[11px] text-[#5f5a56]">
                  Suplemento alimentar · 60 cápsulas
                </p>
              </div>
            </div>

            <a
              href="#libid"
              className="mt-6 inline-flex items-center gap-9 bg-[#a8243a] px-6 py-4 text-[13px] font-bold text-white hover:bg-[#8f1d31] transition-colors"
            >
              Conheça o Libid 365 <span>↗</span>
            </a>
            <a
              href="#entenda"
              className="mt-6 block w-fit border-b border-[#5f5a56] text-[11px] text-[#5f5a56]"
            >
              Entenda o que pode influenciar o desejo ↓
            </a>
            <p className="mt-8 text-[10px] text-[#5f5a56]">
              Matéria educativa. Não substitui consulta, diagnóstico ou
              acompanhamento médico.
            </p>
          </div>

          <div className="lg:pl-16">
            <div className="relative">
              <div className="absolute -left-4 -top-4 right-4 bottom-4 border border-[#d8c9bd] max-md:hidden" />
              <Image
                src="/saude/foto-doutora.webp"
                alt="Dra. Victória Barbalho"
                width={476}
                height={544}
                className="relative aspect-[462/528] w-full object-cover rounded-xl"
                priority
              />
            </div>
            <div className="mx-6 -mt-2 relative bg-[#f9f7f4] pt-4 pb-6 border-b border-black/10">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#a8243a]">
                Conheça a profissional
              </p>
              <a
                href="#profissional"
                className="mt-2.5 flex items-center justify-between"
              >
                <span className="font-[family-name:var(--font-serif)] text-[23px]">
                  Dra. Victória Barbalho
                </span>
                <span className="text-xl text-[#a8243a]">↗</span>
              </a>
              <p className="mt-2 text-[11px] text-[#5f5a56]">
                Médica com abordagem integrativa
              </p>
            </div>
          </div>
        </section>

        {/* 02 — Identificação */}
        <section id="entenda" className="pt-16 md:pt-[72px] pb-20 scroll-mt-6">
          <Eyebrow>02 / Identificação e cuidado</Eyebrow>
          <Heading className="mt-6 md:text-[40px]">
            O que acontece na intimidade
            <br className="max-md:hidden" /> também merece atenção.
          </Heading>
          <p className="mt-6 max-w-[600px] text-base leading-[1.8] text-[#5f5a56]">
            Às vezes muda a vontade. Em outras, a disposição ou a forma de
            sentir prazer. São experiências diferentes — e cada uma merece ser
            ouvida.
          </p>

          <div className="mt-9 grid grid-cols-1 lg:grid-cols-[584px_1fr] gap-10 lg:gap-16">
            <figure>
              <Image
                src="/saude/casal-sofa.jpg"
                alt="Casal sorrindo abraçado no sofá"
                width={580}
                height={386}
                className="w-full rounded-sm"
              />
              <figcaption className="mt-4 text-[10px] text-[#5f5a56]">
                Carinho e respeito ao seu tempo. Imagem ilustrativa gerada por
                IA.
              </figcaption>
            </figure>
            <ol className="border-t border-black/10 self-start">
              {symptoms.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-5 border-b border-black/10 py-6"
                >
                  <span className="font-[family-name:var(--font-serif)] text-base text-[#a8243a] pt-1">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-serif)] text-[26px] leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[380px] text-sm leading-[1.8] text-[#5f5a56]">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 border-l-2 border-[#a8243a] bg-[#f1ebe6] px-6 py-6 text-sm text-[#5f5a56]">
            <strong className="text-[#222]">A libido é multifatorial.</strong>{' '}
            Hormônios, tireoide, estresse, sono, medicamentos e fatores
            emocionais podem participar dessas mudanças.
          </div>
        </section>

        {/* 03 — Autoridade */}
        <section
          id="profissional"
          className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 md:gap-[75px] bg-[#f1ebe6] px-6 md:px-[50px] py-12 md:py-[68px] scroll-mt-6"
        >
          <Image
            src="/saude/doutora.jpg"
            alt="Dra. Victória Barbalho"
            width={336}
            height={383}
            className="w-full rounded-xl self-center"
          />
          <div>
            <Eyebrow>03 / Autoridade e cuidado</Eyebrow>
            <Heading className="mt-6 md:text-[40px]">
              Um olhar atento
              <br />
              para a <Accent>pessoa inteira.</Accent>
            </Heading>
            <p className="mt-8 text-2xl font-bold">Dra. Victória Barbalho</p>
            <p className="mt-2 text-sm font-bold text-[#a8243a]">
              Médica com abordagem integrativa
            </p>
            <p className="mt-6 text-sm leading-[1.9] text-[#5f5a56]">
              Formada em Medicina em 2021, a Dra. Victória dedica sua prática ao
              cuidado integrativo, com atenção à saúde feminina e à história de
              cada pessoa.
            </p>
            <p className="mt-5 text-sm leading-[1.9] text-[#5f5a56]">
              Sua atuação no desenvolvimento dos produtos MaisVit aproxima a
              marca dessa visão de cuidado. A escolha de um suplemento deve
              considerar as necessidades individuais.
            </p>
            <p className="mt-6 border-t border-black/10 pt-5 text-[10px] text-[#5f5a56]">
              A médica tem vínculo com a MaisVit. Sua presença não representa
              garantia de resultados do produto.
            </p>
          </div>
        </section>

        {/* 04 — Produto */}
        <section
          id="libid"
          className="mt-16 border-t border-black/10 grid grid-cols-1 md:grid-cols-[420px_1fr] gap-12 md:gap-[116px] items-center pt-16 md:pt-[78px] pb-16 scroll-mt-6"
        >
          <ProductArch caption="Embalagem real · 60 cápsulas" />
          <div>
            <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-[#5f5a56]">
              04 / Conheça o Libid 365
            </p>
            <div className="mt-5 flex items-center gap-4">
              <VitLogo className="size-[52px] text-sm" />
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  MaisVit
                </p>
                <p className="text-[11px] text-[#5f5a56]">
                  Informação para escolher.
                </p>
              </div>
            </div>
            <Heading className="mt-6 md:text-[50px] tracking-[-0.045em]">
              Libid 365.
              <br />
              Uma escolha para
              <br />
              <Accent>seu autocuidado.</Accent>
            </Heading>
            <p className="mt-8 text-[15px] leading-[1.85] text-[#5f5a56]">
              Um suplemento alimentar que reúne feno-grego, magnésio, zinco,
              quercetina e vitamina B6 em cápsulas.
            </p>
            <p className="mt-4 text-[15px] leading-[1.85] text-[#5f5a56]">
              A proposta é complementar a alimentação com nutrientes e
              substâncias da fórmula, dentro de uma rotina de cuidado que
              respeite suas necessidades.
            </p>
            <dl className="mt-6 grid grid-cols-3 border-y border-black/10 py-5">
              {[
                ['5', 'componentes em destaque'],
                ['60', 'cápsulas por frasco'],
                ['+VIT', 'marca MaisVit']
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-[family-name:var(--font-serif)] text-3xl">
                    {value}
                  </dt>
                  <dd className="mt-1 text-[10px] text-[#5f5a56]">{label}</dd>
                </div>
              ))}
            </dl>
            <Link
              href={getProductLink(ref)}
              target="_blank"
              rel="noreferrer"
              data-umami-event="saude-click-comprar"
              className="mt-6 inline-flex items-center gap-9 bg-[#a8243a] px-6 py-4 text-[13px] font-bold text-white hover:bg-[#8f1d31] transition-colors"
            >
              Comprar Libid 365 <span>↗</span>
            </Link>
            <a
              href="#composicao"
              className="mt-5 block w-fit border-b border-[#5f5a56] text-[11px] text-[#5f5a56]"
            >
              Ver composição e diferenciais ↓
            </a>
            <p className="mt-8 text-[11px] text-[#5f5a56]">
              Suplemento alimentar não é medicamento e não substitui avaliação
              médica.
            </p>
          </div>
        </section>
      </main>

      {/* 05 — Informação */}
      <section className="bg-[#f1ebe6]">
        <div className="mx-auto max-w-[1348px] px-6 md:px-[84px] pt-16 md:pt-[72px] pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[530px_1fr] gap-10 md:gap-16 items-center">
            <figure>
              <Image
                src="/saude/mulher-espelho.jpg"
                alt="Mulher sorrindo diante do espelho"
                width={526}
                height={349}
                className="w-full rounded-sm"
              />
              <figcaption className="mt-4 text-[10px] text-[#5f5a56]">
                O cuidado também começa em você. Imagem ilustrativa gerada por
                IA.
              </figcaption>
            </figure>
            <div>
              <Eyebrow>05 / Informação e escolha</Eyebrow>
              <Heading className="mt-5 md:text-[40px]">
                Um mesmo sintoma
                <br />
                pode ter <Accent>caminhos diferentes.</Accent>
              </Heading>
              <p className="mt-8 text-[15px] leading-[1.9] text-[#5f5a56]">
                Alterações da tireoide, hormônios, medicamentos, sono e contexto
                emocional podem influenciar o desejo. Entender o conjunto ajuda
                a orientar o cuidado.
              </p>
              <p className="mt-4 text-[15px] leading-[1.9] text-[#5f5a56]">
                Quando a mudança persiste, preocupa ou vem com outros sintomas,
                vale buscar avaliação. Exames são considerados conforme a
                história e a necessidade de cada pessoa.
              </p>
              <blockquote className="mt-8 border-l-2 border-[#a8243a] pl-5">
                <p className="text-[11px] font-bold">
                  Uma pergunta para começar:
                </p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-[22px] leading-snug text-[#4a4541]">
                  O que mudou na minha rotina, na minha saúde ou no modo como me
                  sinto?
                </p>
              </blockquote>
              <p className="mt-8 text-[11px] text-[#5f5a56]">
                A suplementação pode ser complementar quando indicada. Não
                substitui a investigação de uma queixa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1348px] px-6 md:px-[84px]">
        {/* 06 — Composição */}
        <section
          id="composicao"
          className="pt-16 md:pt-[72px] pb-12 scroll-mt-6"
        >
          <Eyebrow>06 / Composição e diferenciais</Eyebrow>
          <div className="mt-5 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Heading className="md:text-[40px]">
              A escolha começa
              <br />
              pela <Accent>fórmula.</Accent>
            </Heading>
            <p className="max-w-[320px] text-sm leading-[1.9] text-[#5f5a56]">
              Conheça os componentes e o papel nutricional dos ingredientes.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ingredients.map((item) => (
              <article
                key={item.name}
                className="border border-black/10 bg-[#fdfcfa] px-7 py-7"
              >
                <p className="font-[family-name:var(--font-serif)] text-4xl text-[#a8243a]">
                  {item.symbol}
                </p>
                <p className="mt-5 text-[8px] font-bold uppercase tracking-[0.15em] text-[#5f5a56]">
                  {item.tag}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-serif)] text-[26px]">
                  {item.name}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.8] text-[#5f5a56]">
                  {item.text}
                </p>
              </article>
            ))}
            <article className="border border-black/10 bg-[#f1e6dd] px-7 py-7">
              <VitLogo className="size-[52px] text-sm" />
              <p className="mt-6 font-[family-name:var(--font-serif)] text-[23px] leading-snug">
                Uma fórmula.
                <br />
                Cinco componentes.
              </p>
              <p className="mt-4 text-[13px] leading-[1.8] text-[#5f5a56]">
                Minerais na forma bisglicinato, vitamina e compostos de origem
                vegetal em um frasco com 60 cápsulas.
              </p>
            </article>
          </div>

          <p className="mt-8 text-[10px] text-[#5f5a56]">
            As funções descritas para os nutrientes não são promessa de efeito
            sobre libido, hormônios ou orgasmo. Alegações dependem dos
            requisitos de composição e uso previstos pela Anvisa. Consulte o
            rótulo.
          </p>

          <Accordion
            title="Ver lista de ingredientes e informações do rótulo"
            className="mt-6 border-t"
          >
            <p>
              Feno-grego (extrato da semente), magnésio bisglicinato, zinco
              bisglicinato, quercetina e vitamina B6 (cloridrato de piridoxina).
            </p>
            <p>
              Frasco com 60 cápsulas. Zero glúten, zero açúcar e zero lactose.
              Consulte o rótulo para a tabela nutricional completa e a
              recomendação de consumo.
            </p>
          </Accordion>

          <div className="mt-9 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#f1ebe6] px-8 py-8">
            <div>
              <p className="font-[family-name:var(--font-serif)] text-[26px] leading-snug">
                Conheça a fórmula.
                <br />
                Escolha seu kit.
              </p>
              <p className="mt-3 text-xs text-[#5f5a56]">
                As condições de novembro estão logo abaixo.
              </p>
            </div>
            <a
              href="#kits"
              className="inline-flex items-center justify-between gap-9 bg-[#a8243a] px-6 py-4 text-[13px] font-bold text-white hover:bg-[#8f1d31] transition-colors"
            >
              Escolher meu kit Libid 365 <span>↗</span>
            </a>
          </div>
        </section>

        {/* 07 — FAQ */}
        <section className="mt-12 border-t border-black/10 grid grid-cols-1 md:grid-cols-[330px_1fr] gap-12 md:gap-[105px] pt-16 pb-24">
          <div>
            <Eyebrow>07 / Dúvidas frequentes</Eyebrow>
            <Heading className="mt-6 md:text-[38px]">
              Antes de escolher,
              <br />
              <Accent>saiba mais.</Accent>
            </Heading>
            <figure className="mt-8">
              <Image
                src="/saude/mulher-parque.jpg"
                alt="Mulher caminhando sorridente no parque"
                width={326}
                height={260}
                className="w-full"
              />
              <figcaption className="mt-4 text-[10px] text-[#5f5a56]">
                Imagem ilustrativa gerada por IA.
              </figcaption>
            </figure>
          </div>
          <div className="border-t border-black/10 self-start">
            {faqs.map((faq) => (
              <Accordion
                key={faq.question}
                title={faq.question}
                className="py-2"
              >
                <p>{faq.answer}</p>
              </Accordion>
            ))}
          </div>
        </section>
      </div>

      {/* 08 — Black Novembro */}
      <section id="kits" className="bg-[#252120] text-white scroll-mt-0">
        <div className="mx-auto max-w-[1348px] px-6 md:px-[84px] pt-10 pb-12">
          <div className="flex justify-between gap-4 border-b border-white/15 pb-8 text-[10px] uppercase tracking-[0.12em] text-white/70">
            <p>08 / Black Novembro · +VIT</p>
            <p>01 a 30 de novembro de 2026</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-[370px_1fr] gap-12 md:gap-[100px] items-center">
            <ProductArch />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e9a3a3]">
                Libid 365 · Black Novembro
              </p>
              <h2 className="mt-6 font-[family-name:var(--font-serif)] text-5xl md:text-[60px] leading-[1.05] tracking-[-0.045em]">
                Mais frascos.
                <br />
                Uma condição
                <br />
                <em className="italic text-[#e9a3a3]">especial.</em>
              </h2>
              <p className="mt-8 max-w-[470px] text-[15px] leading-[1.8] text-white/80">
                Escolha seu kit Libid 365 e aproveite os frascos extras da
                campanha durante todo o mês de novembro.
              </p>
              <p className="mt-8 flex items-baseline gap-6 font-[family-name:var(--font-serif)] text-[42px]">
                2 + 1{' '}
                <span className="font-sans text-xs text-white/60">ou</span> 3 +
                2
              </p>
              <p className="mt-6 text-xs leading-[1.8] text-white/70">
                60 cápsulas em cada frasco.
                <br />
                Os presentes já estão incluídos no total de frascos recebidos.
              </p>
              <Link
                href={getProductLink(ref)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block border-b border-white/80 pb-1.5 text-[11px]"
              >
                Ver Libid 365 na loja oficial ↗
              </Link>
              <p className="mt-6 max-w-[510px] text-[11px] leading-[1.8] text-white/60">
                Os estudos deste especial não avaliaram o produto. Libid 365 não
                é medicamento e não é apresentado aqui como tratamento para as
                condições discutidas.
              </p>
            </div>
          </div>

          <p className="mt-12 border-t border-white/15 pt-5 text-[11px] text-white/70">
            Começa em 1º de novembro. As condições abaixo são da campanha
            anunciada para 01 a 30/11/2026.
          </p>

          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {kits.map((kit) => {
              const total = kit.buy + kit.gift
              const featured = kit.featured
              return (
                <article
                  key={kit.variantId}
                  className={`rounded-sm px-8 py-8 ${
                    featured
                      ? 'bg-[#f9f7f4] text-[#222]'
                      : 'border border-white/15 bg-[#332c2a]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em]">
                      Compre {kit.buy} · Ganhe {kit.gift}
                    </p>
                    <p
                      className={`border px-2 py-1 text-[7px] uppercase tracking-[0.1em] ${
                        featured
                          ? 'border-[#a8243a]/50 text-[#a8243a]'
                          : 'border-white/40 text-white/80'
                      }`}
                    >
                      {kit.badge}
                    </p>
                  </div>
                  <p className="mt-9 font-[family-name:var(--font-serif)] text-6xl leading-none">
                    {kit.buy}{' '}
                    <span
                      className={`mx-2 text-3xl align-middle ${featured ? 'text-[#a8243a]' : 'text-[#c79a86]'}`}
                    >
                      +
                    </span>{' '}
                    {kit.gift}
                  </p>
                  <p className="mt-5 text-xl">
                    Você recebe <strong>{total} frascos</strong>
                  </p>
                  <div
                    className={`mt-5 ${featured ? 'text-[#5f3a3a]' : 'text-white/80'}`}
                  >
                    <Bottles buy={kit.buy} gift={kit.gift} />
                  </div>
                  <p className="mt-8 flex items-baseline gap-2.5 font-bold">
                    <span className="text-base">R$</span>
                    <span className="text-4xl tracking-[-0.04em]">
                      {convertToBRL(kit.price).replace(/^R\$\s?/, '')}
                    </span>
                  </p>
                  <p
                    className={`mt-3 text-[11px] ${featured ? 'text-[#5f5a56]' : 'text-white/70'}`}
                  >
                    {convertToBRL(kit.price / total)} por frasco recebido
                  </p>
                  <Link
                    href={getCartLink(kit.variantId, ref)}
                    target="_blank"
                    rel="noreferrer"
                    data-umami-event={kit.umamiEvent}
                    className={`mt-7 flex items-center justify-between px-5 py-4 text-sm font-bold text-white transition-colors ${
                      featured
                        ? 'bg-[#a8243a] hover:bg-[#8f1d31]'
                        : 'border border-white/10 bg-[#7f2732] hover:bg-[#8f1d31]'
                    }`}
                  >
                    Comprar kit com {total} frascos <span>↗</span>
                  </Link>
                  <p
                    className={`mt-5 text-[10px] ${featured ? 'text-[#5f5a56]' : 'text-white/70'}`}
                  >
                    {kit.note}
                  </p>
                </article>
              )
            })}
          </div>

          <p className="mt-7 text-[10px] text-white/60">
            Frete e pagamento: as condições são exibidas no carrinho da loja
            oficial MaisVit antes da finalização do pedido.
          </p>
        </div>
      </section>

      {/* 09 — Fontes */}
      <section className="mx-auto max-w-[1348px] px-6 md:px-[84px] pt-14 pb-24 grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 md:gap-20">
        <div>
          <Eyebrow>09 / Fontes e transparência</Eyebrow>
          <Heading className="mt-6 md:text-[36px]">
            Informação que
            <br />
            você pode conferir.
          </Heading>
          <p className="mt-7 text-xs leading-[1.9] text-[#5f5a56]">
            Uma iniciativa educativa e comercial da MaisVit.
            <br />
            Conteúdo atualizado em 29/10/2026.
          </p>
          <figure className="mt-8">
            <Image
              src="/saude/casal-parque.jpg"
              alt="Casal caminhando de mãos dadas no parque"
              width={336}
              height={223}
              className="w-full"
            />
            <figcaption className="mt-4 text-[10px] leading-relaxed text-[#5f5a56]">
              Mulheres e casais em imagens ilustrativas geradas por IA. Não
              representam pacientes, clientes ou resultados.
            </figcaption>
          </figure>
        </div>
        <div>
          <h3 className="text-sm font-bold">Orientações de uso responsável</h3>
          <p className="mt-5 text-xs leading-[1.9] text-[#5f5a56]">
            Este produto não é um medicamento. Não exceder a recomendação diária
            de consumo indicada na embalagem. Mantenha fora do alcance de
            crianças.
          </p>
          <p className="mt-4 text-xs leading-[1.9] text-[#5f5a56]">
            Respeite a faixa etária, as restrições de uso e as advertências do
            rótulo. A matéria não substitui consulta, diagnóstico ou
            acompanhamento médico. As pesquisas citadas sobre saúde sexual não
            avaliaram a eficácia do Libid 365.
          </p>
          <Accordion
            title="Consultar informações institucionais"
            className="mt-6 border-t"
          >
            <p>
              Libid 365 é um suplemento alimentar comercializado pela MaisVit em
              sua loja oficial.
            </p>
            <p>
              A Dra. Victória Barbalho tem vínculo com a MaisVit. As imagens de
              pessoas nesta página são ilustrativas e geradas por IA.
            </p>
          </Accordion>
          <p className="mt-7 text-[11px] text-[#5f5a56]">
            Precisa de uma avaliação individual?
          </p>
          <a
            href="#profissional"
            className="mt-4 flex w-fit items-center gap-6 border-b border-[#222] pb-4 text-[11px] font-bold"
          >
            Conhecer o acompanhamento médico <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="bg-[#f1ebe6]">
        <div className="mx-auto max-w-[1348px] px-6 md:px-[84px] pt-11 pb-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-[family-name:var(--font-serif)] text-[27px] font-medium tracking-[-0.04em]">
                Saúde em pauta<span className="text-[#a8243a]">.</span>
              </p>
              <p className="mt-2 text-[11px] text-[#5f5a56]">
                Uma iniciativa de conteúdo da MaisVit.
              </p>
            </div>
            <nav className="flex gap-6 text-[11px]">
              <span>Privacidade</span>
              <span>Termos</span>
              <span>Contato</span>
            </nav>
          </div>
          <div className="mt-7 flex flex-col md:flex-row justify-between gap-2 border-t border-black/10 pt-5 text-[9px] text-[#5f5a56]">
            <p>© 2026 MaisVit. Conteúdo educativo e publicitário.</p>
            <p>
              Matéria educativa. Não substitui consulta, diagnóstico ou
              acompanhamento médico.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
