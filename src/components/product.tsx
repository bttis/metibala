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
  variantId: number
  umamiEvent: string
  mostPopular?: boolean
  badge?: string
  affiliateRef?: string
  className?: string
}

export function getProductLink(
  affiliateRef?: string,
  productLink = 'https://maisvit.com/products/libid-365'
) {
  return affiliateRef
    ? `${productLink}?metadata[affiliate]=${affiliateRef}`
    : productLink
}

export function getCartLink(variantId: number, affiliateRef?: string) {
  const cartLink = `https://maisvit.com/cart/add?id=${variantId}&quantity=1`
  return affiliateRef
    ? `${cartLink}&metadata[affiliate]=${affiliateRef}`
    : cartLink
}

export function Product({
  cta,
  imageUrl,
  price,
  title,
  subtitle,
  variantId,
  installmentPrice,
  umamiEvent,
  mostPopular,
  badge,
  affiliateRef,
  className = ''
}: ProductProps) {
  const finalLink = getCartLink(variantId, affiliateRef)
  const badgeLabel = badge ?? (mostPopular ? 'Mais Escolhido' : undefined)

  return (
    <div
      className={`relative rounded-2xl w-full md:w-[270px] flex flex-col bg-white/[0.04] ${
        mostPopular
          ? 'border-4 border-yellow-400 shadow-[0_0_30px_-10px_rgba(250,204,21,0.6)]'
          : 'border border-red-600'
      } ${className}`}
    >
      {badgeLabel && (
        <div
          className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-bold text-[11px] uppercase tracking-wide whitespace-nowrap ${
            mostPopular ? 'bg-yellow-400 text-black' : 'bg-red-600 text-white'
          }`}
        >
          {badgeLabel}
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
        <p className="text-xs text-white/50 mt-2">
          Frete Grátis acima de R$199,90
        </p>
        <Link href={finalLink} target="_blank" className="w-full mt-6" rel="noreferrer">
          <Button
            className="w-full h-auto py-3 rounded-full normal-case tracking-normal text-base font-bold text-black bg-gradient-to-b from-yellow-300 to-yellow-400 hover:bg-yellow-300 shadow-[0_8px_30px_rgba(250,204,21,0.35)]"
            data-umami-event={umamiEvent}
          >
            {cta}
          </Button>
        </Link>
      </div>
    </div>
  )
}
