'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

const images = [
  { src: '/images/products/bouquet-rose.jpg', alt: 'Rose bouquet' },
  { src: '/images/products/bouquet-letter.jpg', alt: 'Letter bouquet' },
  { src: '/images/products/event-arch.jpg', alt: 'Floral arch' },
  { src: '/images/products/event-birthday.jpg', alt: 'Birthday setup' },
  { src: '/images/products/gift-strawberry.jpg', alt: 'Strawberry bouquet' },
  { src: '/images/products/event-hotel.jpg', alt: 'Hotel decor' },
]


export default function Gallery() {
  const isMobile = useIsMobile()
  return (
    <section id="gallery" style={{ background: '#0A0A0A', padding: isMobile ? '3rem 1.5rem 0' : '7rem 2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexDirection: isMobile ? 'column' as const : 'row' as const, gap: isMobile ? '1rem' : '0' }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.6rem' }}>📷 Photo Gallery</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.1em', color: 'var(--black)' }}>OUR <span style={{ color: 'var(--red)' }}>WORK</span></h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: '#9A9090', marginTop: '0.4rem' }}>Every arrangement tells a story. Browse our gallery and see why clients keep coming back.</p>
            </div>
            <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--black)', border: '1.5px solid rgba(245,240,235,0.2)', padding: '0.75rem 1.5rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,235,0.2)'; e.currentTarget.style.color = 'var(--black)' }}>
              Follow on Instagram →
            </a>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)', gridTemplateRows: isMobile ? 'auto' : 'repeat(2, 280px)', gap: '1rem' }}>
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08} style={{ borderRadius: '16px', overflow: 'hidden', background: '#111111' }}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.06)'}
                onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
                onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
