'use client'
import FadeIn from './FadeIn'

const features = [
  { title: 'Reserve at the Table or Online', desc: 'Skip the wait and book ahead, or walk in and let us take care of everything.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { title: 'We Cook It Fresh', desc: 'Every dish plated to order. No shortcuts, no heat lamps. Ever.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 6v6l4 2"/></svg> },
  { title: 'Private Events Welcome', desc: 'Hosting something special? We handle groups from 10 to 120 guests.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
  { title: 'Late Night Fri & Sat', desc: 'Open til 23:30 on weekends. Perfect for a late celebration.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg> },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#FDFCFA', padding: '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

        <FadeIn direction="left">
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5', background: '#0a0505', boxShadow: '0 30px 80px rgba(200,16,46,0.12)' }}>
            <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="/videos/worran eating.mp4" type="video/mp4" />
            </video>
            <img src="/images/interior.jpg" alt="FLŌ" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#C8102E' }} />
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(200,16,46,0.9)', backdropFilter: 'blur(8px)', padding: '0.5rem 1rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {/* Location pin SVG */}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FDFCFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FDFCFA' }}>Est. 2019 · Riga</p>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8102E', marginBottom: '1rem' }}>The FLŌ Experience</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: '#0E0A08', lineHeight: 1 }}>THE FLŌ</h2>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: '#C8102E', lineHeight: 1, marginBottom: '1.5rem' }}>EXPERIENCE</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: '#6B6460', lineHeight: 1.8, marginBottom: '2rem' }}>Modern dining done right. No frills, no fuss — just incredible seasonal food in a space designed for great evenings on the Riga waterfront.</p>
          </FadeIn>

          {features.map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.08}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.3rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(200,16,46,0.3)', background: 'rgba(200,16,46,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  {item.svg}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0E0A08', marginBottom: '0.2rem' }}>{item.title}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#6B6460', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.65}>
            <a href="#menu" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', background: '#C8102E', color: '#FDFCFA', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#8B0A1F'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#C8102E'; e.currentTarget.style.transform = 'scale(1)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
              Read More About Us
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
