import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import CinematicBreak from '@/components/CinematicBreak'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import Reservation from '@/components/Reservation'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <CinematicBreak />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
