'use client'
import FadeIn from './FadeIn'

const reviews = [
  { stars: 5, text: 'The tartare is absolutely unreal. Best starter in Riga, no contest. That sauce had me ordering a second plate.', name: 'Marta K.', time: '2 weeks ago', tags: ['Tartare', 'Starters'] },
  { stars: 5, text: 'FLŌ hosted our company dinner for 40 people on the riverside. Flawless from start to finish — food, service, atmosphere.', name: 'Andris B.', time: '1 week ago', tags: ['Events', 'Groups'] },
  { stars: 5, text: 'Finally a spot in Riga that takes its wine list seriously. The sea bass with brown butter is something else entirely.', name: 'Sofia L.', time: '3 days ago', tags: ['Wine', 'Mains'] },
  { stars: 5, text: 'Brought my family for a birthday. The ribeye alone is worth the visit — 28-day aged, perfectly cooked.', name: 'Jānis R.', time: '1 month ago', tags: ['Family', 'Mains'] },
  { stars: 5, text: 'The burrata with heirloom tomato is the best I have had outside of Italy. We come back every month.', name: 'Elīna P.', time: '2 weeks ago', tags: ['Starters', 'Regular'] },
  { stars: 5, text: 'Stumbled in at 11pm Saturday. Fresh food, fast service. The risotto at that hour was outstanding.', name: 'Dāvids K.', time: '5 days ago', tags: ['Late Night', 'Mains'] },
]

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: '#F8F4EF', padding: '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.1em', color: '#0E0A08' }}>
              WHAT PEOPLE ARE <span style={{ color: '#C8102E' }}>SAYING</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: '#6B6460', marginTop: '0.5rem' }}>
              Don&apos;t take our word for it. Here&apos;s what our guests think.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ background: '#FDFCFA', borderRadius: '16px', padding: '1.8rem', border: '1px solid rgba(200,16,46,0.08)', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 40px rgba(200,16,46,0.08)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                  {Array.from({ length: r.stars }).map((_, j) => <span key={j} style={{ color: '#C8102E', fontSize: '1rem' }}>★</span>)}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: '#0E0A08', lineHeight: 1.75, marginBottom: '1.5rem' }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: '#0E0A08' }}>{r.name}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 300, color: '#6B6460' }}>{r.time}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {r.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 600, color: '#C8102E', background: 'rgba(200,16,46,0.08)', padding: '0.25rem 0.7rem', borderRadius: '999px', border: '1px solid rgba(200,16,46,0.2)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="https://google.com/maps" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#C8102E', color: '#FDFCFA', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2.2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#8B0A1F'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#C8102E'; e.currentTarget.style.transform = 'scale(1)' }}>
              Read All Reviews →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
