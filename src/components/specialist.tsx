'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRef, useState } from 'react'
import {
  IconActivity,
  IconBox,
  IconHeartbeat,
  IconPlayerPlayFilled,
  IconTarget
} from '@tabler/icons-react'

const pillars = [
  { icon: IconBox, label: 'Formação sólida' },
  { icon: IconHeartbeat, label: 'Abordagem integrativa' },
  { icon: IconActivity, label: 'Foco em qualidade de vida' },
  { icon: IconTarget, label: 'Saúde com propósito' }
]

export default function Specialist() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      setShowControls(true)
    }
  }

  return (
    <div id="dra-victoria" className="bg-white/[0.03] w-full py-14 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_280px_1fr] gap-10 items-center">
        <div>
          <h2 className="text-4xl font-teko font-bold uppercase leading-none">
            Conheça o <span className="text-red-600">Libid 365</span>
          </h2>
          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            Veja o que a Dra. Victória explica sobre o produto, sua proposta e
            como ele pode fazer parte de uma rotina de mais vitalidade e
            bem-estar.
          </p>
          <Button
            variant="outline"
            onClick={handlePlay}
            className="mt-5 border-red-600 bg-transparent text-white text-xs px-6 py-5 hover:bg-red-600/10 hover:text-white dark:hover:bg-red-600/10 dark:hover:text-white"
          >
            <IconPlayerPlayFilled className="size-3" />
            Assistir ao Vídeo
          </Button>
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
            src="/metibala-video.mp4"
            controls={showControls}
            className="w-[280px] h-[500px] rounded-2xl object-cover"
            onPlay={() => {
              setIsPlaying(true)
              setShowControls(true)
            }}
          />
          {!isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl p-4">
              <p className="font-bold text-sm">Dra. Victória</p>
              <p className="text-xs text-white/60">
                Especialista em Saúde Integrativa
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-center">
          <blockquote className="text-white/80 text-lg leading-relaxed">
            &quot;Cuidar da sua energia, da sua mente e do seu bem-estar
            também é uma forma de amor próprio. Libid 365 é um aliado de quem
            busca mais equilíbrio e vitalidade todos os dias.&quot;
            <footer className="mt-3 font-teko text-2xl italic text-white/90">
              Dra. Victória
            </footer>
          </blockquote>
          <div className="space-y-5">
            {pillars.map((pillar) => (
              <div key={pillar.label} className="flex items-center gap-3">
                <div className="bg-white/10 rounded-md p-2 shrink-0">
                  <pillar.icon className="text-red-600 size-4" />
                </div>
                <p className="text-xs font-normal uppercase tracking-wide text-white/70">
                  {pillar.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
