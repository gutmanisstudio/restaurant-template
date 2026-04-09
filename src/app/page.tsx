import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import CinematicBreak from '@/components/CinematicBreak'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <Ticker />
      <main>
        <Hero />
        <CinematicBreak />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
