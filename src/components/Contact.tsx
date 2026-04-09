'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function Contact() {
  const isMobile = useIsMobile()
  return (
    <>
      <section id="contact" style={{ background: '#0A0A0A', padding: isMobile ? '3rem 1.5rem' : '6rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'center' }}>
          <FadeIn direction="left">
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B47FD4', background: 'rgba(180,127,212,0.08)', padding: '0.4rem 1rem', borderRadius: '999px', border: '1px solid rgba(180,127,212,0.2)', marginBottom: '1.5rem' }}>
                {/* Chat bubble SVG */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B47FD4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                Get In Touch
              </span>

              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', letterSpacing: '0.08em', color: '#F5F0EB', lineHeight: 1, marginBottom: '1.2rem' }}>
                LET&apos;S <span style={{ color: '#B47FD4' }}>CONNECT</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: '#9A9090', lineHeight: 1.8, marginBottom: '2rem' }}>
                Questions, event enquiries, or custom orders? Drop us a line and we&apos;ll get back fast.
              </p>
              <a href={`mailto:${restaurant.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#B47FD4', color: '#F5F0EB', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#8B5FA8'; e.currentTarget.style.transform = 'scale(1.04)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#B47FD4'; e.currentTarget.style.transform = 'scale(1)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
                Send Us a Message
              </a>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
            {[
              {
                label: 'Call Us', value: restaurant.phone,
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B47FD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              },
              {
                label: 'Email Us', value: restaurant.email,
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B47FD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              },
              {
                label: 'Find Us', value: restaurant.address,
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B47FD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              },
              {
                label: 'Hours', value: `${restaurant.hours.weekday}\n${restaurant.hours.friday}`,
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B47FD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div style={{ background: '#111111', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(180,127,212,0.08)', display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(180,127,212,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(180,127,212,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(180,127,212,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.svg}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B47FD4', marginBottom: '0.3rem' }}>{item.label}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 400, color: '#F5F0EB', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#111111', borderTop: '1px solid rgba(180,127,212,0.12)', padding: '5rem 4rem', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '0.08em', color: '#F5F0EB' }}>
            READY TO <span style={{ color: '#B47FD4' }}>ORDER?</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#9A9090', marginBottom: '2.5rem' }}>
            Your next stunning arrangement is just a message away.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#reserve" style={{ background: '#B47FD4', color: '#F5F0EB', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#8B5FA8'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B47FD4'; e.currentTarget.style.transform = 'scale(1)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Order Now
            </a>
            <a href="#menu" style={{ background: 'transparent', color: '#F5F0EB', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', border: '1.5px solid rgba(245,240,235,0.2)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#B47FD4'; e.currentTarget.style.color = '#B47FD4' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,235,0.2)'; e.currentTarget.style.color = '#0E0A08' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              Browse Collection
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
