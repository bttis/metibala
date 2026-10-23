import Image from 'next/image'
import Link from 'next/link'

const message = encodeURIComponent(
  'Olá, gostaria de saber mais sobre o Libid 365'
)
const phone = '5533999650074'
export const whatsappLink = `https://wa.me/${phone}?text=${message}`

export default function WhatsApp() {
  return (
    <Link
      href={whatsappLink}
      className="fixed bottom-2 right-2 md:bottom-8 md:right-8 z-50"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/whatsapp.svg"
        alt="whatsapp"
        width={100}
        height={100}
        className="size-14 hover:opacity-70 transition-opacity duration-300 ease-in-out"
      />
    </Link>
  )
}
