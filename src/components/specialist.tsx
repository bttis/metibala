'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'
import { useRef, useState } from 'react'

export default function Specialist() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    videoRef.current?.pause()
  }

  return (
    <div id="dra-victoria" className="bg-white/[0.03] w-full pt-14 max-md:pt-4 pb-8 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px_1fr] gap-10 items-center">
        <div className="max-md:text-center lg:max-w-[340px] lg:justify-self-end">
          <h2 className="text-4xl font-teko font-bold uppercase leading-none lg:whitespace-nowrap">
            Conheça o <span className="text-red-600">Libid 365</span>
          </h2>
          <p className="text-white/90 font-semibold text-base mt-4 leading-relaxed">
            Veja o que a médica Dra. Victória explica sobre o produto, sua proposta e
            como ele pode fazer parte de uma rotina de mais vitalidade e
            bem-estar.
          </p>
        </div>

        <div className="relative w-full max-w-[280px] mx-auto">
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <Image
                src="/play-1.png"
                alt="Play"
                width={70}
                height={70}
                className="animate-pulse"
              />
            </button>
          )}
          <video
            ref={videoRef}
            src="/metibala-video-2.mp4"
            playsInline
            onClick={handlePause}
            className="w-[280px] h-[500px] rounded-2xl object-cover cursor-pointer"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl p-4">
              <p className="font-bold text-sm">Médica Dra. Victória</p>
              <p className="text-xs text-white/60">
                Especialista em Saúde Integrativa
              </p>
            </div>
          )}
        </div>

        <div className="lg:max-w-[280px] lg:justify-self-start text-center">
          <p className="text-white/80 text-lg leading-relaxed lg:leading-snug">
            A médica Dra. Victória, como especialista em Saúde Integrativa, recomenda o
            Libid 365 para quem busca mais disposição, confiança e uma vida
            íntima mais saudável.
          </p>
          <Link href="#kits" className="block mt-5">
            <Button
              className="w-full h-auto py-3 rounded-full normal-case tracking-normal text-base font-bold text-black bg-gradient-to-b from-yellow-300 to-yellow-400 hover:bg-yellow-300 shadow-[0_8px_30px_rgba(250,204,21,0.35)]"
              data-umami-event="button-comecar"
            >
              Quero Começar Minha Mudança
              <IconChevronRight className="size-5" stroke={3} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
