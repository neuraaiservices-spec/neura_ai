import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import videoPlay from '../assets/videos/Video Play button orange.json';

const items = [
  { video: video1, name:'Student Testimonial 1', program:'R&D Training', college:'Chennai', quote:'This platform gave me real-world skills and confidence to grow. The journey has been incredible!' },
  { video: video2, name:'Student Testimonial 2', program:'NeuraEDU Workshop', college:'Tamil Nadu', quote:'I built amazing projects I never thought possible. The hands-on approach is unmatched.' },
  { video: video3, name:'Student Testimonial 3', program:'Project Support', college:'India', quote:'Through 1:1 mentorship, I gained insights that truly prepared me for the healthcare industry.' },
  { video: video4, name:'Student Testimonial 4', program:'R&D Training', college:'Online', quote:'A transformative journey — real R&D experience that elevated my skills and career prospects.' },
];

function NetflixCard({ item, idx, onPlay, isHovered, onHoverStart, onHoverEnd }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    onHoverStart();
    if (videoRef.current) { videoRef.current.play(); }
  };
  const handleMouseLeave = () => {
    onHoverEnd();
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <motion.div
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, amount:0.2 }}
      transition={{ duration:0.5, delay:idx*0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onPlay(item.video)}
      style={{
        position: 'relative',
        height: '100%',
        cursor: 'pointer',
        borderRadius: 14,
        boxShadow: isHovered
          ? '0 20px 50px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,201,167,0.3)'
          : '0 4px 16px rgba(0,0,0,0.3)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Outer box never scales and never clips — guarantees name/text can never
          be cut off regardless of browser transform+overflow edge cases. */}
      <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 14, overflow: 'hidden' }}>

        {/* Only the video scales — text overlay below is never inside a scaled element */}
        <video
          ref={videoRef}
          src={item.video}
          muted
          loop
          preload="metadata"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
          }}
        />

        {/* Dark gradient always */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.1) 45%, transparent 75%)',
        }} />

        {/* Play button — visible when not hovered */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: isHovered ? 0 : 1, transition: 'opacity 0.3s ease',
        }}>
          <div style={{ width: 48, height: 48 }}><Lottie animationData={videoPlay} loop /></div>
        </div>

        {/* Info block — fixed position, only translateY (no scale), generous space */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 12px',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 7, flexWrap: 'wrap' }}>
            <span style={{
              background: '#00c9a7', color: '#1d1d1f', fontSize: 9.5, fontWeight: 700,
              padding: '2px 8px', borderRadius: 10, fontFamily: "Inter,-apple-system,sans-serif",
              whiteSpace: 'nowrap',
            }}>{item.program}</span>
            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10.5, fontFamily: "Inter,-apple-system,sans-serif" }}>{item.college}</span>
          </div>
          <p style={{
            color: 'white', fontSize: 11, lineHeight: 1.45, fontStyle: 'italic', margin: '0 0 8px',
            fontFamily: "Inter,-apple-system,sans-serif", fontWeight: 300,
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>"{item.quote}"</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{
              width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,201,167,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ color: '#00c9a7', fontSize: 10, fontWeight: 700 }}>{item.name[0]}</span>
            </div>
            {/* Full name — no truncation. Card width (240px) comfortably fits names like
                "Student Testimonial 1" at this font size; ellipsis removed entirely. */}
            <span style={{
              color: 'rgba(255,255,255,0.75)', fontSize: 11, fontWeight: 600,
              fontFamily: "Inter,-apple-system,sans-serif", lineHeight: 1.3,
            }}>{item.name}</span>
          </div>
        </div>

        {/* Top badge — always visible, never collides with bottom info since they're far apart on a tall card */}
        <div style={{ position: 'absolute', top: 10, left: 10 }}>
          <span style={{
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)',
            color: 'rgba(255,255,255,0.75)', fontSize: 10, fontWeight: 600,
            padding: '4px 9px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)',
            fontFamily: "Inter,-apple-system,sans-serif", whiteSpace: 'nowrap',
          }}>▶ Student Story</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [open, setOpen] = useState(null);
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const openModal = (v) => { setOpen(v); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setOpen(null); document.body.style.overflow = 'auto'; };

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

  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="testimonials" style={{ padding: '80px 0', background: '#1d1d1f', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} style={{ marginBottom: 32 }}>
          <span style={{
            display: 'inline-block', fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#00c9a7', background: 'rgba(0,201,167,0.1)', padding: '5px 14px', borderRadius: 20,
            marginBottom: 16, fontFamily: "Inter,-apple-system,sans-serif",
          }}>From our students</span>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{
              fontFamily: "Inter,-apple-system,sans-serif", fontWeight: 800, letterSpacing: '-0.03em',
              fontSize: 'clamp(28px,3.5vw,48px)', color: 'white', margin: 0,
            }}>What students say.</h2>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 13, fontFamily: "Inter,-apple-system,sans-serif" }}>
              Hover to preview · Click to watch
            </span>
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

          <div
            ref={scrollerRef}
            onScroll={updateArrows}
            id="testimonial-scroller"
            style={{ display: 'flex', gap: 24, overflowX: 'auto', overflowY: 'visible', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
          >
            {items.map((item, i) => (
              <div key={i} style={{
                flex: '0 0 auto', width: 240, height: 410, scrollSnapAlign: 'start',
                position: 'relative', zIndex: hoveredIdx === i ? 30 : 1,
              }}>
                <NetflixCard
                  item={item} idx={i} onPlay={openModal}
                  isHovered={hoveredIdx === i}
                  onHoverStart={() => setHoveredIdx(i)}
                  onHoverEnd={() => setHoveredIdx(null)}
                />
              </div>
            ))}
          </div>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, textAlign: 'center', marginTop: 12, fontFamily: "Inter,-apple-system,sans-serif" }}>
          Scroll to see all stories
        </p>

        {/* Modal — sizes to the video's natural orientation, not forced wide.
            Portrait recordings get a tall player; landscape get a wide one. */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              style={{
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.96)', zIndex: 60,
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
              }} onClick={closeModal}>
              <motion.div initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.92,opacity:0}} transition={{duration:0.25}}
                style={{ position: 'relative', maxHeight: '90vh', maxWidth: '90vw' }}
                onClick={e => e.stopPropagation()}>
                <button onClick={closeModal} aria-label="Close video" style={{
                  position: 'absolute', top: -42, right: 0, background: 'none', border: 'none',
                  color: 'rgba(255,255,255,0.7)', fontSize: 32, lineHeight: 1, cursor: 'pointer', fontWeight: 300,
                }}>×</button>
                <video
                  src={open} controls autoPlay
                  style={{
                    display: 'block', maxHeight: '90vh', maxWidth: '90vw',
                    width: 'auto', height: 'auto', borderRadius: 16,
                    boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        #testimonial-scroller::-webkit-scrollbar { display: none; }
        @media (max-width: 640px) {
          #testimonial-scroller > div { width: 185px !important; height: 315px !important; }
        }
        @media (hover: none) {
          #testimonial-scroller > div > div { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
