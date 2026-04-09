import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Reservation from '@/components/Reservation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <Ticker />
      <main>
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
