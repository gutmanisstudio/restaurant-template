'use client'

export default function Footer() {
  return (
    <footer style={{ background: '#0E0A08', padding: '5rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(14,10,8,0.06)' }}>
        <div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', letterSpacing: '0.25em', color: 'var(--white)', marginBottom: '1rem' }}>FLŌ</div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(14,10,8,0.35)', lineHeight: 1.7, maxWidth: '220px', marginBottom: '1.5rem' }}>A modern bistro celebrating honest food and good company on the Riga waterfront.</p>
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {['IG', 'TT', 'FB'].map(s => (
              <a key={s} href="#" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(14,10,8,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(14,10,8,0.35)', fontSize: '0.62rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--red)'; e.currentTarget.style.color = 'var(--red)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(14,10,8,0.12)'; e.currentTarget.style.color = 'rgba(14,10,8,0.35)' }}>{s}</a>
            ))}
          </div>
        </div>
        {[
          { title: 'Navigation', items: ['About', 'Menu', 'Gallery', 'Private Events', 'Reservations'] },
          { title: 'Hours', items: ['Mon–Thu 12:00–22:00', 'Fri–Sat 12:00–23:30', 'Sun 12:00–21:00'] },
          { title: 'Contact', items: ['11.novembra krastmala 13', 'Rīga, LV-1050', '+371 27012661', 'reservations@floresto.lv'] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(14,10,8,0.22)', marginBottom: '1.2rem' }}>{col.title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col.items.map(item => <li key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'rgba(14,10,8,0.45)' }}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'rgba(14,10,8,0.15)' }}>© 2026 FLŌ Restaurant, Rīga. All rights reserved.</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(14,10,8,0.1)' }}>Site by Gutmanis Studio</p>
      </div>
      </div>
    </footer>
  )
}
