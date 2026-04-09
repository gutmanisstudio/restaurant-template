'use client'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function Footer() {
  const isMobile = useIsMobile()
  return (
    <footer style={{ background: '#0A0A0A', padding: isMobile ? '3rem 1.5rem 2rem' : '5rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1.5fr 1fr 1fr 1fr', gap: isMobile ? '2rem' : '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(245,240,235,0.06)' }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', letterSpacing: '0.25em', color: 'var(--white)', marginBottom: '1rem' }}>BOUQUETS BY LIZ</div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(245,240,235,0.35)', lineHeight: 1.7, maxWidth: '220px', marginBottom: '1.5rem' }}>Bold, handcrafted flowers and event decor delivered across all 5 boroughs of NYC.</p>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {['IG', 'TT'].map(s => (
              <a key={s} href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(245,240,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(245,240,235,0.35)', fontSize: '0.62rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,235,0.12)'; e.currentTarget.style.color = 'rgba(245,240,235,0.35)' }}>{s}</a>
            ))}
          </div>
        </div>
        {[
          { title: 'Navigation', items: ['About', 'Collection', 'Gallery', 'Events', 'Order'] },
          { title: 'Hours', items: [restaurant.hours.weekday, restaurant.hours.friday, restaurant.hours.sunday] },
          { title: 'Contact', items: [...restaurant.address.split(', '), restaurant.phone, restaurant.email] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,240,235,0.22)', marginBottom: '1.2rem' }}>{col.title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col.items.map((item, i) => <li key={`${col.title}-${i}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(245,240,235,0.45)' }}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem', flexDirection: isMobile ? 'column' as const : 'row' as const, gap: isMobile ? '0.5rem' : '0' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'rgba(245,240,235,0.15)' }}>© 2026 Bouquets by Liz, Queens NYC. All rights reserved.</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(245,240,235,0.1)' }}>Site by Gutmanis Studio</p>
      </div>
      </div>
    </footer>
  )
}
