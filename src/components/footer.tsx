import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className="relative w-full h-auto overflow-hidden bg-white/10 pt-12 px-4">
      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-[1200px] mx-auto mb-4 max-md:grid max-md:grid-cols-2 max-md:gap-x-4 max-md:items-start max-md:text-center">
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
        <div className="flex flex-col">
          <h1 className="font-bold">Formas de pagamento</h1>
          <div className="mt-2">
            <Image
              width={200}
              height={50}
              src="/formas-pagamento.png"
              alt="formas-pagamento"
              className="max-md:w-full max-md:h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col max-md:col-span-2 max-md:grid max-md:grid-cols-2 max-md:gap-x-4 max-md:items-start">
          <div>
            <h1 className="font-bold">Site seguro</h1>
            <div className="mt-2">
              <Image
                width={200}
                height={50}
                src="/site-seguro.png"
                alt="site-seguro"
                className="max-md:w-full max-md:h-auto"
              />
            </div>
          </div>
          <div className="mt-2 max-md:mt-0">
            <h1 className="font-bold">Nosso Contato</h1>
            <p className="mt-2 max-md:text-sm max-md:break-all">
              contato@libid365.com.br
            </p>
          </div>
          <h2 className="mt-6 text-white/50 font-bold max-md:col-span-2">
            Todos direitos reservados ®Libid 365 • {new Date().getFullYear()}
          </h2>
        </div>
      </div>
    </section>
  )
}
