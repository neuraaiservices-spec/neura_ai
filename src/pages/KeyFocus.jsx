import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import brain from '../assets/back.webp';
import cardio from '../assets/cardio.webp';
import kidney from '../assets/kidney.webp';
import dermatology from '../assets/dermatology.webp';
import lungs from '../assets/lungs.webp';
import hair from '../assets/hair.webp';
import hair2 from '../assets/hair2.webp';

const areas = [
  { bg: brain,       title: 'Neurology',       focus: 'Predicting strokes & epilepsy' },
  { bg: cardio,      title: 'Cardiology',      focus: 'Catching heart disease early' },
  { bg: kidney,      title: 'Nephrology',      focus: 'Monitoring kidney health' },
  { bg: dermatology, title: 'Dermatology',     focus: 'Classifying skin anomalies' },
  { bg: lungs,       title: 'Pulmonology',     focus: 'Early respiratory warnings' },
  { bg: hair,        title: 'Hair Growth',     focus: 'AI-guided regrowth therapy' },
  { bg: hair2,       title: 'Chemo Hair Loss', focus: 'Support through treatment' },
];

export default function KeyFocus() {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 16 : 280;
    el.scrollBy({ left: dir * cardWidth * 2, behavior: 'smooth' });
  };

  return (
    <section id="focus" style={{ padding: '80px 0', background: '#1d1d1f', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 32 }}>
          <span style={{
            display: 'inline-block', fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#00c9a7', background: 'rgba(0,201,167,0.1)', padding: '5px 14px', borderRadius: 20,
            marginBottom: 16, fontFamily: "Inter,-apple-system,sans-serif",
          }}>Research Focus Areas</span>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{
              fontFamily: "Inter,-apple-system,sans-serif", fontWeight: 800, letterSpacing: '-0.03em',
              fontSize: 'clamp(28px,3.5vw,48px)', color: 'white', lineHeight: 1.08, margin: 0, maxWidth: 480,
            }}>What we're building solutions for.</h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, maxWidth: 280, margin: 0, fontFamily: "Inter,-apple-system,sans-serif", fontWeight: 300 }}>
              Medical areas we work in.
            </p>
          </div>
        </motion.div>

        {/* Netflix-style horizontal scroller */}
        <div style={{ position: 'relative', paddingTop: 24, paddingBottom: 24, marginLeft: -40, marginRight: -40, paddingLeft: 40, paddingRight: 40 }}>

          {canLeft && (
            <button onClick={() => scrollBy(-1)} aria-label="Scroll left" style={{
              position: 'absolute', left: 4, top: '50%', transform: 'translateY(-50%)', zIndex: 50,
              width: 38, height: 38, borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: 'rgba(29,29,31,0.92)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
            }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          )}
          {canRight && (
            <button onClick={() => scrollBy(1)} aria-label="Scroll right" style={{
              position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', zIndex: 50,
              width: 38, height: 38, borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: 'rgba(29,29,31,0.92)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
            }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          )}

          <div style={{ position: 'absolute', left: 0, top: 24, bottom: 24, width: 60, background: 'linear-gradient(to right, #1d1d1f, transparent)', zIndex: 30, pointerEvents: 'none', opacity: canLeft ? 1 : 0, transition: 'opacity 0.3s' }} />
          <div style={{ position: 'absolute', right: 0, top: 24, bottom: 24, width: 60, background: 'linear-gradient(to left, #1d1d1f, transparent)', zIndex: 30, pointerEvents: 'none', opacity: canRight ? 1 : 0, transition: 'opacity 0.3s' }} />

          {/* Scroll track — overflow visible vertically so hovered card can grow past row bounds */}
          <div
            ref={scrollerRef}
            onScroll={updateArrows}
            id="focus-scroller"
            style={{
              display: 'flex', gap: 28, overflowX: 'auto', overflowY: 'visible',
              scrollSnapType: 'x mandatory', scrollbarWidth: 'none',
            }}
          >
            {areas.map((area, i) => {
              const isHovered = hoveredIdx === i;
              return (
                <motion.div key={area.title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.06 }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    position: 'relative', flex: '0 0 auto',
                    width: 220, height: 310, scrollSnapAlign: 'start',
                    zIndex: isHovered ? 30 : 1,
                    borderRadius: 16,
                    boxShadow: isHovered
                      ? '0 20px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,201,167,0.3)'
                      : '0 4px 16px rgba(0,0,0,0.25)',
                    transition: 'box-shadow 0.3s ease',
                  }}
                >
                  {/* Outer box never scales and never clips — this is what guarantees
                      text can never be cut off, regardless of browser transform quirks. */}
                  <div style={{
                    position: 'relative', width: '100%', height: '100%',
                    borderRadius: 16, overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    {/* Only the image scales — text is never inside a scaled element */}
                    <img src={area.bg} alt={area.title} style={{
                      position: 'absolute', inset: 0, width: '100%', height: '100%',
                      objectFit: 'cover',
                      transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                      filter: isHovered ? 'brightness(0.6)' : 'brightness(0.85)',
                      transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), filter 0.35s ease',
                      transformOrigin: 'center',
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(29,29,31,0.97) 0%, rgba(29,29,31,0.4) 55%, rgba(29,29,31,0.08) 100%)',
                    }} />

                    {/* Text overlay — fixed position, never transformed, never clipped.
                        Lifts slightly on hover via translateY only (no scale). */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 16px',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'transform 0.3s ease',
                    }}>
                      <h3 style={{
                        fontFamily: "Inter,-apple-system,sans-serif", fontWeight: 700, letterSpacing: '-0.01em',
                        fontSize: 16, color: 'white', margin: '0 0 4px', lineHeight: 1.3,
                        wordBreak: 'normal',
                      }}>{area.title}</h3>
                      <p style={{
                        color: 'rgba(255,255,255,0.65)', fontSize: 12, lineHeight: 1.45,
                        fontFamily: "Inter,-apple-system,sans-serif", fontWeight: 300, margin: 0,
                      }}>{area.focus}</p>

                      {/* Extra detail — only revealed on hover, Netflix-style */}
                      <div style={{
                        maxHeight: isHovered ? 40 : 0,
                        opacity: isHovered ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease, opacity 0.25s ease',
                        marginTop: isHovered ? 8 : 0,
                      }}>
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', gap: 5,
                          background: 'rgba(0,201,167,0.18)', border: '1px solid rgba(0,201,167,0.35)',
                          borderRadius: 20, padding: '4px 9px', whiteSpace: 'nowrap',
                        }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00c9a7', flexShrink: 0 }} />
                          <span style={{ fontSize: 10, color: '#00c9a7', fontWeight: 600, fontFamily: "Inter,-apple-system,sans-serif" }}>
                            Active research area
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, textAlign: 'center', marginTop: 12, fontFamily: "Inter,-apple-system,sans-serif" }}>
          Scroll to see all areas
        </p>
      </div>

      <style>{`
        #focus-scroller::-webkit-scrollbar { display: none; }
        @media (max-width: 640px) {
          #focus-scroller > div { width: 180px !important; }
        }
        @media (hover: none) {
          /* Disable scale-up on touch devices — there's no real "hover" there */
          #focus-scroller > div > div { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
