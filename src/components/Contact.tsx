'use client'
import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ background: '#FDFCFA', padding: '6rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'center' }}>
          <FadeIn direction="left">
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8102E', background: 'rgba(200,16,46,0.08)', padding: '0.4rem 1rem', borderRadius: '999px', border: '1px solid rgba(200,16,46,0.2)', marginBottom: '1.5rem' }}>
                {/* Chat bubble SVG */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                Get In Touch
              </span>

              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', letterSpacing: '0.08em', color: '#0E0A08', lineHeight: 1, marginBottom: '1.2rem' }}>
                LET&apos;S <span style={{ color: '#C8102E' }}>CONNECT</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: '#6B6460', lineHeight: 1.8, marginBottom: '2rem' }}>
                Questions, catering enquiries, or just want to say hi? Drop us a line and we&apos;ll get back fast.
              </p>
              <a href="mailto:reservations@floresto.lv" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#C8102E', color: '#FDFCFA', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#8B0A1F'; e.currentTarget.style.transform = 'scale(1.04)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#C8102E'; e.currentTarget.style.transform = 'scale(1)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
                Send Us a Message
              </a>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              {
                label: 'Call Us', value: '+371 27012661',
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              },
              {
                label: 'Email Us', value: 'reservations@floresto.lv',
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              },
              {
                label: 'Find Us', value: '11.novembra krastmala 13, Rīga',
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              },
              {
                label: 'Hours', value: 'Daily 12:00–22:00\nFri–Sat until 23:30',
                svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div style={{ background: '#F8F4EF', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(200,16,46,0.08)', display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,16,46,0.3)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,16,46,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(200,16,46,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.svg}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '0.3rem' }}>{item.label}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 400, color: '#0E0A08', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#F8F4EF', borderTop: '1px solid rgba(200,16,46,0.12)', padding: '5rem 4rem', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '0.08em', color: '#0E0A08' }}>
            READY TO <span style={{ color: '#C8102E' }}>DINE?</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#6B6460', marginBottom: '2.5rem' }}>
            Your next unforgettable evening is just a reservation away.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#reserve" style={{ background: '#C8102E', color: '#FDFCFA', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#8B0A1F'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#C8102E'; e.currentTarget.style.transform = 'scale(1)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Reserve a Table
            </a>
            <a href="#menu" style={{ background: 'transparent', color: '#0E0A08', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', border: '1.5px solid rgba(14,10,8,0.2)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8102E'; e.currentTarget.style.color = '#C8102E' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(14,10,8,0.2)'; e.currentTarget.style.color = '#0E0A08' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              View Menu
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
