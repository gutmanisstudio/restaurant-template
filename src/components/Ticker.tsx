'use client'
export default function Ticker() {
  const items = ['🌹 Same-Day Delivery', '💐 Custom Bouquets', '🎉 Hotel & Party Decor', '📍 All 5 Boroughs NYC', '🌹 Wedding Florals', '💐 Letter Bouquets', '🎉 Strawberry Bouquets', '📍 Queens, New York']
  const repeated = [...items, ...items]
  return (
    <div style={{ background: '#B47FD4', overflow: 'hidden', padding: '0.6rem 0', whiteSpace: 'nowrap' }}>
      <div style={{ display: 'inline-flex', animation: 'ticker 25s linear infinite', gap: '3rem' }}>
        {repeated.map((item, i) => (
          <span key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F5F0EB' }}>{item}</span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  )
}
