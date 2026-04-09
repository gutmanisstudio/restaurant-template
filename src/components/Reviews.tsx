'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

const reviews = restaurant.reviews

export default function Reviews() {
  const isMobile = useIsMobile()
  return (
    <section id="reviews" style={{ background: '#111111', padding: isMobile ? '3rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.1em', color: '#F5F0EB' }}>
              WHAT PEOPLE ARE <span style={{ color: '#B47FD4' }}>SAYING</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: '#9A9090', marginTop: '0.5rem' }}>
              Don&apos;t take our word for it. Here&apos;s what our clients think.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ background: '#0A0A0A', borderRadius: '16px', padding: '1.8rem', border: '1px solid rgba(180,127,212,0.08)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(180,127,212,0.08)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                  {Array.from({ length: r.stars }).map((_, j) => <span key={j} style={{ color: '#B47FD4', fontSize: '1rem' }}>★</span>)}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: '#F5F0EB', lineHeight: 1.75, marginBottom: '1.5rem' }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: '#F5F0EB' }}>{r.name}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 300, color: '#9A9090' }}>{r.time}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {r.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 600, color: '#B47FD4', background: 'rgba(180,127,212,0.08)', padding: '0.25rem 0.7rem', borderRadius: '999px', border: '1px solid rgba(180,127,212,0.2)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="https://google.com/maps" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#B47FD4', color: '#F5F0EB', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2.2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#8B5FA8'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B47FD4'; e.currentTarget.style.transform = 'scale(1)' }}>
              Read All Reviews →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
