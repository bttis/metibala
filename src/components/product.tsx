import { Button } from './ui/button'
import Image from 'next/image'
import { convertToBRL } from '@/utils/convert-to-brl'
import Link from 'next/link'

interface ProductProps {
  imageUrl: string
  title: string
  subtitle: string
  price: number
  installmentPrice?: number
  cta: string
  productLink: string
  umamiEvent: string
  mostPopular?: boolean
  affiliateRef?: string
  className?: string
}

export function Product({
  cta,
  imageUrl,
  price,
  title,
  subtitle,
  productLink,
  installmentPrice,
  umamiEvent,
  mostPopular,
  affiliateRef,
  className = ''
}: ProductProps) {
  const finalLink = affiliateRef
    ? `${productLink}?metadata[affiliate]=${affiliateRef}`
    : productLink

  return (
    <div
      className={`relative rounded-2xl w-full md:w-[270px] flex flex-col bg-white/[0.04] ${
        mostPopular
          ? 'border-4 border-red-600 shadow-[0_0_30px_-10px_rgba(207,13,47,0.6)]'
          : 'border border-white/10'
      } ${className}`}
    >
      {mostPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wide whitespace-nowrap">
          Mais Escolhido
        </div>
      )}
      <div className="flex flex-col items-center text-center px-6 pt-8 pb-6">
        <h3 className="font-teko text-2xl font-bold uppercase leading-none">
          {title}
        </h3>
        <p className="text-xs text-white/50 mt-1">{subtitle}</p>
        <Image
          src={imageUrl}
          alt={title}
          width={160}
          height={160}
          className="h-36 w-auto mt-6 rounded-xl"
          priority={false}
        />
        <p className="text-2xl font-bold mt-6">{convertToBRL(price)}</p>
        {installmentPrice && (
          <p className="text-xs text-white/50 mt-1">
            12x de {convertToBRL(installmentPrice)}
          </p>
        )}
        <Link href={finalLink} target="_blank" className="w-full mt-6" rel="noreferrer">
          <Button className="w-full py-5" data-umami-event={umamiEvent}>
            {cta}
          </Button>
        </Link>
      </div>
    </div>
  )
}
