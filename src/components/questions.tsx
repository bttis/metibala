'use client'

import { useState } from 'react'
import { IconPlus, IconMinus, IconHeadset } from '@tabler/icons-react'

const faqs = [
  {
    question: 'O que é o Libid 365?',
    answer:
      'Libid 365 é um suplemento alimentar desenvolvido com ingredientes naturais para apoiar mais vitalidade, confiança, bem-estar e autocuidado diário.'
  },
  {
    question: 'O produto é indicado para homens e mulheres?',
    answer:
      'Sim, o Libid 365 foi formulado para atender tanto homens quanto mulheres que buscam mais vitalidade e equilíbrio no dia a dia.'
  },
  {
    question: 'Como devo tomar o Libid 365?',
    answer:
      'Recomenda-se tomar conforme as instruções que acompanham o produto, de preferência todos os dias, para obter os melhores resultados.'
  },
  {
    question: 'Tem alguma contraindicação?',
    answer:
      'O Libid 365 é formulado com ingredientes naturais. Caso você faça uso de outros medicamentos ou tenha alguma condição de saúde, consulte um profissional antes de iniciar o uso.'
  },
  {
    question: 'Em quanto tempo começo a sentir os efeitos?',
    answer:
      'Os primeiros efeitos podem ser notados já nas primeiras semanas de uso contínuo.'
  },
  {
    question: 'Como funciona a entrega?',
    answer:
      'A entrega é feita por transportadoras confiáveis, com rastreio e sigilo, para todo o Brasil. O prazo varia de 5 a 12 dias úteis.'
  }
]

export default function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="questions"
      className="relative w-full h-auto overflow-hidden py-16 px-6 md:px-10"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr_240px] gap-10 items-start">
        <h2 className="text-3xl font-teko font-bold uppercase leading-[1.05] max-md:text-center">
          Dúvidas
          <br /> frequentes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className={`cursor-pointer text-sm rounded-lg px-5 py-4 transition-all duration-300 ${
                  isOpen ? 'bg-white/10' : 'bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold">
                    {index + 1}. {faq.question}
                  </h3>
                  {isOpen ? (
                    <div className="bg-white rounded-full shrink-0">
                      <IconMinus className="size-4 text-black" />
                    </div>
                  ) : (
                    <IconPlus className="size-5 shrink-0 text-white/40" />
                  )}
                </div>
                {isOpen && (
                  <p className="mt-3 text-white/60 text-xs leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="max-w-[240px] flex items-start gap-3 max-md:mx-auto max-md:items-center">
          <IconHeadset className="text-red-600 size-8 shrink-0" />
          <div>
            <h3 className="font-bold text-sm">Ainda tem dúvidas?</h3>
            <p className="text-xs text-white/50 mt-1 leading-relaxed">
              Nossa equipe está pronta para te ajudar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
