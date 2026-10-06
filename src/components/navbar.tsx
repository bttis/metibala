import { Button } from '@/components/ui/button'
import Link from 'next/link'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#dra-victoria', label: 'Dra. Victória' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#questions', label: 'Perguntas Frequentes' }
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="absolute inset-0 -z-10 h-28 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6 px-6 md:px-10 h-12">
        <Link
          href="#inicio"
          className="font-teko font-bold text-3xl tracking-wide shrink-0"
        >
          LIBID<span className="text-red-600">365</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-base text-white/90">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="#kits" className="shrink-0">
          <Button
            variant="default"
            className="px-6 py-3 text-sm"
            data-umami-event="button-quero"
          >
            Comprar Agora
          </Button>
        </Link>
      </div>
    </header>
  )
}
