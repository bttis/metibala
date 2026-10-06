import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className="relative w-full h-auto overflow-hidden bg-white/10 pt-12 px-4">
      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-[1200px] mx-auto mb-4">
        <div className="flex flex-col">
          <h1 className="font-bold">Links</h1>
          <div className="mt-2 text-white/50">
            <Link href="#questions" className="hover:underline">
              Perguntas Frequentes
            </Link>
            <p>Políticas de Privacidade</p>
            <p>Termos e condições</p>
          </div>
        </div>
        <div className="flex flex-col max-w-[300px]">
          <h1 className="font-bold">Aviso</h1>
          <div className="mt-2 text-white/50">
            <p>
              Não comercializamos o Libid 365 no Mercado Livre. A venda só
              pode ser realizada através deste Site Oficial e não nos
              responsabilizamos por compras realizadas em outros sites. Evite
              falsificações e riscos a sua saúde.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">Formas de pagamento</h1>
          <div className="mt-2">
            <Image
              width={200}
              height={50}
              src="/formas-pagamento.png"
              alt="formas-pagamento"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">Site seguro</h1>
          <div className="mt-2">
            <Image
              width={200}
              height={50}
              src="/site-seguro.png"
              alt="site-seguro"
            />
          </div>
          <div className="mt-2">
            <h1 className="font-bold">Nosso Contato</h1>
            <p className="mt-2">contato@libid365.com.br</p>
          </div>
          <h2 className="mt-6 text-white/50 font-bold">
            Todos direitos reservados ®Libid 365 • {new Date().getFullYear()}
          </h2>
        </div>
      </div>
    </section>
  )
}
