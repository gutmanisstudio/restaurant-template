'use client'
import FadeIn from './FadeIn'

const images = [
  { src: '/images/interior.jpg', alt: 'FLŌ interior' },
  { src: '/images/artsy tartar.jpg', alt: 'Artsy tartare' },
  { src: '/images/white bowl.jpg', alt: 'White bowl' },
  { src: '/images/pretty-bowl.jpg', alt: 'Pretty bowl' },
]

const videos = [
  { src: '/videos/worran eating.mp4', alt: 'Dining experience' },
  { src: '/videos/closeup sauce pour.mp4', alt: 'Chef plating' },
]

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: '#FDFCFA', padding: '7rem 2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem' }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.6rem' }}>📷 Photo Gallery</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.1em', color: 'var(--black)' }}>FEAST FOR <span style={{ color: 'var(--red)' }}>THE EYES</span></h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: 'rgba(14,10,8,0.4)', marginTop: '0.4rem' }}>Every dish tells a story. Browse our gallery and see why people keep coming back.</p>
            </div>
            <a href="https://instagram.com/floresto.lv" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--black)', border: '1.5px solid rgba(14,10,8,0.2)', padding: '0.75rem 1.5rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(14,10,8,0.2)'; e.currentTarget.style.color = 'var(--black)' }}>
              Follow on Instagram →
            </a>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 280px)', gap: '1rem' }}>
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08} style={{ borderRadius: '16px', overflow: 'hidden', background: '#F8F4EF' }}>
              <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.06)'}
                onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
                onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
            </FadeIn>
          ))}
          {videos.map((vid, i) => (
            <FadeIn key={`vid-${i}`} delay={(images.length + i) * 0.08} style={{ borderRadius: '16px', overflow: 'hidden', background: '#F8F4EF' }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
                <source src={vid.src} type="video/mp4" />
              </video>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
