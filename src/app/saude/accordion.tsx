'use client'

import { ReactNode, useState } from 'react'
import { IconMinus, IconPlus } from '@tabler/icons-react'

export function Accordion({
  title,
  children,
  className = ''
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border-b border-black/10 ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-5 text-left text-sm font-bold text-[#222] cursor-pointer"
      >
        {title}
        {open ? (
          <IconMinus className="size-4 shrink-0 text-[#a8243a]" />
        ) : (
          <IconPlus className="size-4 shrink-0 text-[#a8243a]" />
        )}
      </button>
      {open && (
        <div className="pb-6 pr-10 text-sm leading-relaxed text-[#5f5a56] space-y-3">
          {children}
        </div>
      )}
    </div>
  )
}
