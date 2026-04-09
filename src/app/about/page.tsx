import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <Ticker />
      <main>
        <About />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
