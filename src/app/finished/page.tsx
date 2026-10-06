'use client'

import ConfettiBurst from '@/components/confetti-burst'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Finished() {
  return (
    <div className="w-full min-h-[800px] overflow-hidden flex items-center justify-center gap-28 px-4">
      <Image
        src="/fundo-compra.jpg"
        alt="background"
        width={1920}
        height={1080}
        className="w-full h-full object-cover absolute inset-0 z-0"
        quality={100}
        priority
      />
      <div className="z-10 text-center">
        <h1 className="font-bold text-6xl">Obrigado pela sua compra!</h1>
        <p className="font-semibold text-2xl mt-4">
          Em breve você terá seu{' '}
          <span className="font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] text-red-600">
            LIBID 365
          </span>
          !
        </p>
        <Link href="/">
          <Button className="mt-8 text-2xl p-6">
            Retornar a página inicial
          </Button>
        </Link>
      </div>
      <div className="z-10">
        <Image
          src="/metibala.png"
          alt="libid 365"
          width={300}
          height={300}
          quality={100}
          priority
        />
      </div>
      <ConfettiBurst />
    </div>
  )
}
