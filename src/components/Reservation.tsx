'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { restaurant } from '@/config/restaurant'

export default function Reservation() {
  const isMobile = useIsMobile()
  const [form, setForm] = useState({ firstName: '', lastName: '', date: '', time: '19:00', guests: '2', phone: '', email: '', notes: '' })
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value })

  const inp: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'var(--white)', background: 'rgba(14,10,8,0.06)', border: '1px solid rgba(14,10,8,0.12)', padding: '0.85rem 1rem', outline: 'none', width: '100%', borderRadius: '8px', transition: 'border-color 0.2s' }
  const lbl: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'rgba(14,10,8,0.4)', display: 'block', marginBottom: '0.4rem' }

  return (
    <section id="reserve" style={{ background: 'var(--red)', padding: isMobile ? '3rem 1.5rem' : '7rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? '2rem' : '6rem', alignItems: 'center' }}>
      <FadeIn direction="left">
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(14,10,8,0.55)', marginBottom: '1rem' }}>Make a Reservation</p>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '0.06em', color: 'var(--white)', lineHeight: 1, marginBottom: '1.5rem' }}>JOIN US FOR<br />AN UNFORGETTABLE<br />EVENING</h2>
        <div style={{ width: '40px', height: '2px', background: 'rgba(14,10,8,0.4)', marginBottom: '2.5rem' }} />
        {[
          { label: 'Address', value: restaurant.address.replace(', ', '\n') },
          { label: 'Hours', value: `${restaurant.hours.weekday}\n${restaurant.hours.friday}\n${restaurant.hours.sunday}` },
          { label: 'Phone', value: restaurant.phone },
          { label: 'Email', value: restaurant.email },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', gap: '1.2rem', marginBottom: '1.2rem' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(14,10,8,0.4)', minWidth: '70px', paddingTop: '0.15rem' }}>{item.label}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</span>
          </div>
        ))}
      </FadeIn>

      <FadeIn direction="right" delay={0.1}>
        <div style={{ background: '#FDFCFA', padding: '3rem', borderRadius: '16px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '0.4rem' }}>Book a Table</p>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', letterSpacing: '0.08em', color: 'var(--white)', marginBottom: '2rem' }}>Reserve Your Evening</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div><label style={lbl}>First Name</label><input name="firstName" value={form.firstName} onChange={onChange} placeholder="Jānis" style={inp} onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(14,10,8,0.12)'} /></div>
            <div><label style={lbl}>Last Name</label><input name="lastName" value={form.lastName} onChange={onChange} placeholder="Bērziņš" style={inp} onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(14,10,8,0.12)'} /></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div><label style={lbl}>Date</label><input type="date" name="date" value={form.date} onChange={onChange} style={{ ...inp, colorScheme: 'dark' }} onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(14,10,8,0.12)'} /></div>
            <div><label style={lbl}>Time</label><select name="time" value={form.time} onChange={onChange} style={{ ...inp, colorScheme: 'dark' }}>{['12:00','13:00','14:00','18:00','19:00','20:00','21:00'].map(t => <option key={t} style={{ background: '#FDFCFA' }}>{t}</option>)}</select></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div><label style={lbl}>Guests</label><select name="guests" value={form.guests} onChange={onChange} style={{ ...inp, colorScheme: 'dark' }}>{['1','2','3','4','5','6','7','8','Group (10+)'].map(g => <option key={g} style={{ background: '#FDFCFA' }}>{g}</option>)}</select></div>
            <div><label style={lbl}>Phone</label><input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+371 ..." style={inp} onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(14,10,8,0.12)'} /></div>
          </div>
          <div style={{ marginBottom: '1rem' }}><label style={lbl}>Email</label><input type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" style={inp} onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(14,10,8,0.12)'} /></div>
          <div style={{ marginBottom: '1.5rem' }}><label style={lbl}>Special Requests</label><textarea name="notes" value={form.notes} onChange={onChange} placeholder="Dietary requirements, occasion, allergies..." rows={3} style={{ ...inp, resize: 'vertical' }} onFocus={e => e.target.style.borderColor = 'var(--red)'} onBlur={e => e.target.style.borderColor = 'rgba(14,10,8,0.12)'} /></div>
          <button style={{ width: '100%', background: 'var(--red)', color: 'var(--white)', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1.1rem', border: 'none', borderRadius: '999px', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--red-dark)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--red)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}>
            Confirm Reservation →
          </button>
        </div>
      </FadeIn>
      </div>
    </section>
  )
}
