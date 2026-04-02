'use client'
import { useEffect, useRef, useState } from 'react'
import { restaurant } from '@/config/restaurant'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])
  useEffect(() => { if (videoRef.current) videoRef.current.currentTime = restaurant.heroVideoStart }, [])

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', minHeight: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <video ref={videoRef} autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        <source src={restaurant.heroVideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(10,5,5,0.45) 0%, rgba(10,5,5,0.2) 50%, rgba(200,16,46,0.8) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 1.2s ease, transform 1.2s ease' }}>

        {/* Custom FLO flame SVG mark */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 2C24 2 38 14 38 28C38 36.837 31.732 44 24 44C16.268 44 10 36.837 10 28C10 20 16 14 16 14C16 14 14 22 20 26C20 18 24 10 24 2Z" fill="#C8102E"/>
            <path d="M24 28C24 28 30 22 28 16C32 20 34 24 34 28C34 33.523 29.523 38 24 38C18.477 38 14 33.523 14 28C14 25 15 22 15 22C15 22 18 26 24 28Z" fill="#FDFCFA" fillOpacity="0.9"/>
            <line x1="24" y1="44" x2="24" y2="54" stroke="#C8102E" strokeWidth="1.5"/>
            <line x1="18" y1="54" x2="30" y2="54" stroke="#C8102E" strokeWidth="1.5"/>
          </svg>
        </div>

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(5rem, 14vw, 11rem)', lineHeight: 0.9, color: '#FDFCFA', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{restaurant.name}</h1>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '0.12em', color: '#C8102E', marginBottom: '1.2rem' }}>{restaurant.tagline}</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300, color: 'rgba(255,255,255,0.85)', marginBottom: '0.4rem' }}>{restaurant.description}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 400, color: '#C8102E', marginBottom: '0.3rem' }}>{restaurant.highlight1}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>{restaurant.highlight2}</p>

        {/* Pill buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#reserve" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FDFCFA', background: '#C8102E', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = '#8B0A1F' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#C8102E' }}>
            {/* Calendar SVG */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Reserve Online
          </a>
          <a href="#menu" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FDFCFA', background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.4)', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(4px)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}>
            {/* Menu SVG */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            View Menu
          </a>
          <a href={restaurant.mapsLink} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FDFCFA', background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.4)', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(4px)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}>
            {/* Pin SVG */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Get Directions
          </a>
        </div>

        {/* Social icons — custom SVGs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
          {/* Phone */}
          <a href={`tel:${restaurant.phone}`} style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8102E'; e.currentTarget.style.color = '#C8102E'; e.currentTarget.style.transform = 'scale(1.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'scale(1)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8102E'; e.currentTarget.style.color = '#C8102E'; e.currentTarget.style.transform = 'scale(1.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'scale(1)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8102E'; e.currentTarget.style.color = '#C8102E'; e.currentTarget.style.transform = 'scale(1.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'scale(1)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8102E'; e.currentTarget.style.color = '#C8102E'; e.currentTarget.style.transform = 'scale(1.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'scale(1)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
