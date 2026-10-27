'use client'

import { IconMenu2, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function getRemaining() {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(24, 0, 0, 0)
  const total = Math.max(
    0,
    Math.floor((midnight.getTime() - now.getTime()) / 1000)
  )
  return [Math.floor(total / 3600), Math.floor((total % 3600) / 60), total % 60]
}

const units = ['Horas', 'Minutos', 'Segundos']

export default function MobileTopbar({
  links
}: {
  links: { href: string; label: string }[]
}) {
  const [time, setTime] = useState<number[] | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTime(getRemaining())
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="md:hidden relative">
      <div className="flex items-center gap-2 bg-gradient-to-r from-red-800 via-red-700 to-red-900 px-4 py-1.5">
        <p className="shrink-0 font-bold text-[3.6vw] leading-[1.1] uppercase">
          Desconto
          <br />
          surpresa! 🎁
          <br />
          <span className="normal-case font-normal italic">
            Liberado só hoje!
          </span>
        </p>
        <div className="flex flex-1 justify-center divide-x divide-white/30">
          {units.map((unit, i) => (
            <div key={unit} className="flex flex-col items-center px-[2.5vw]">
              <span className="font-bold text-[7vw] leading-none tabular-nums">
                {time ? String(time[i]).padStart(2, '0') : '--'}
              </span>
              <span className="mt-1 text-[2.4vw] uppercase">{unit}</span>
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
          className="shrink-0 flex items-center justify-center size-9 rounded-lg bg-white text-black shadow-lg"
        >
          {open ? (
            <IconX className="size-5" />
          ) : (
            <IconMenu2 className="size-5" />
          )}
        </button>
      </div>
      {open && (
        <nav className="absolute inset-x-0 top-full flex flex-col bg-black/95 border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-5 py-3.5 border-b border-white/10 text-white/90"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#kits"
            onClick={() => setOpen(false)}
            className="px-5 py-3.5 font-bold text-red-600"
          >
            Comprar Agora
          </Link>
        </nav>
      )}
    </div>
  )
}
