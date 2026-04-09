'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function CinematicBreak() {
  const isMobile = useIsMobile()
  return (
    <section style={{ background: '#111111', padding: isMobile ? '3rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2.5rem' : '5rem', alignItems: 'center' }}>

        <FadeIn direction="left">
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#B47FD4', marginBottom: '1rem' }}>Crafted With Love</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.08em', color: '#F5F0EB', lineHeight: 1, marginBottom: '0.5rem' }}>
              EVERY BOUQUET
            </h2>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.08em', color: '#B47FD4', lineHeight: 1, marginBottom: '1.5rem' }}>
              TELLS A STORY
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: '#9A9090', lineHeight: 1.8, marginBottom: '2rem' }}>
              From bold letter bouquets to full hotel room transformations — every arrangement is handcrafted with care and delivered across all 5 boroughs.
            </p>
            <a href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#B47FD4', color: '#F5F0EB', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#8B5FA8'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B47FD4'; e.currentTarget.style.transform = 'scale(1)' }}
            >Browse Our Work →</a>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.15}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '320px', aspectRatio: '9/16', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(180,127,212,0.12)' }}>
              <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src={restaurant.cinematicVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
