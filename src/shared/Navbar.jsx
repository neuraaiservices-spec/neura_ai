import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuraLogo from '../components/NeuraLogo';

const navLinks = [
  {id:'home',label:'Home'},{id:'about',label:'About'},
  {id:'programs',label:'Programs'},{id:'poc',label:'R&D Projects'},
  {id:'partners',label:'Partners'},{id:'events',label:'Events'},
  {id:'impact',label:'Recognition'},{id:'testimonials',label:'Students'},
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const cur = sections.find(s => {
        const r = s.getBoundingClientRect();
        return r.top <= 80 && r.bottom >= 80;
      });
      if (cur) setActive(cur.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(10,15,30,0.97)' : 'rgba(10,15,30,1)',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(255,255,255,0.04)',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 40px', height: 52,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          style={{ background:'none', border:'none', cursor:'pointer', padding:'4px 0', display:'flex', alignItems:'center' }}
          aria-label="Neura AI Home"
        >
          <NeuraLogo variant="white" height={32} />
        </button>

        {/* Desktop nav — Apple style: small, centered, light */}
        <nav style={{ display:'flex', alignItems:'center', gap: 4 }} className="hidden lg:flex">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '6px 14px', borderRadius: 8,
                fontSize: 13, fontWeight: 500,
                fontFamily: "Inter, -apple-system, sans-serif",
                letterSpacing: '0.01em',
                color: active === link.id ? '#00c9a7' : 'rgba(255,255,255,0.65)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { if(active !== link.id) e.target.style.color = 'rgba(255,255,255,0.95)'; }}
              onMouseLeave={e => { if(active !== link.id) e.target.style.color = 'rgba(255,255,255,0.65)'; }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => scrollTo('register')}
          className="hidden lg:flex"
          style={{
            background: '#0071e3', color: '#fff',
            border: 'none', cursor: 'pointer',
            padding: '8px 20px', borderRadius: 20,
            fontSize: 13, fontWeight: 600,
            fontFamily: "Inter, -apple-system, sans-serif",
            letterSpacing: '0.01em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.target.style.background = '#2997ff'}
          onMouseLeave={e => e.target.style.background = '#0071e3'}
        >
          Register Now
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
          style={{ background:'none', border:'none', cursor:'pointer', color:'white', padding:8 }}
          aria-label="Menu"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }}
            style={{
              background: 'rgba(10,15,30,0.99)',
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div style={{ padding: '16px 24px', display:'flex', flexDirection:'column', gap:4 }}>
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    background:'none', border:'none', cursor:'pointer', textAlign:'left',
                    padding:'12px 16px', borderRadius:12,
                    fontSize:15, fontWeight:500,
                    fontFamily:"Inter, -apple-system, sans-serif",
                    color: active === link.id ? '#00c9a7' : 'rgba(255,255,255,0.7)',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('register')}
                style={{
                  marginTop:12, background:'#0071e3', color:'white',
                  border:'none', cursor:'pointer',
                  padding:'14px 20px', borderRadius:20,
                  fontSize:15, fontWeight:600,
                  fontFamily:"Inter, -apple-system, sans-serif",
                }}
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
