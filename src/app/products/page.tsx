import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default function ProductsPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <Ticker />
      <main>
        <Menu />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
