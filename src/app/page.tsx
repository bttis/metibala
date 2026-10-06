import Benefits from '@/components/benefits'
import Energy from '@/components/energy'
import Enough from '@/components/enough'
import Footer from '@/components/footer'
import Guarantee from '@/components/guarantee'
import Kits from '@/components/kits'
import Navbar from '@/components/navbar'
import Questions from '@/components/questions'
import Reviews from '@/components/reviews'
import Specialist from '@/components/specialist'
import WhatsApp from '@/components/whatsapp'

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ ref?: string }>
}) {
  const { ref } = await searchParams

  return (
    <>
      <main>
        <WhatsApp />
        <Navbar />
        <Benefits />
        <Specialist />
        <div className="flex flex-col md:flex-row w-full">
          <Energy />
          <Enough />
        </div>
        <Kits affiliateRef={ref} />
        <Reviews />
        <Guarantee />
        <Questions />
      </main>
      <Footer />
    </>
  )
}
