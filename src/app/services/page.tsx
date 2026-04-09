import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <Ticker />
      <main>
        <Reviews />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
