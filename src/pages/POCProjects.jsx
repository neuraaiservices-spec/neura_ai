import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import pocJaundice   from '../assets/poc_jaundice.jpg';
import pocSleep      from '../assets/poc_sleep.png';
import pocVein       from '../assets/poc_vein.jpg';
import pocHemiplegia from '../assets/poc_hemiplegia.png';
import pocCough      from '../assets/poc_cough.png';
import pocRehab      from '../assets/poc_rehab.png';
import evJaundice2   from '../assets/ev_jaundice2.jpg';

const projects = [
  {
    img: pocJaundice,
    title: 'Smart Jaundice Detection',
    category: 'Neonatal Diagnostics',
    badge: 'Best Project Award',
    description: 'Non-invasive bilirubin screening using optical sensors and embedded AI. Detects neonatal jaundice without a blood test — real-time vital tracking included.',
    tech: ['Optical Sensors', 'Embedded ML', 'Signal Processing'],
  },
  {
    img: pocSleep,
    title: 'AI Sleep Apnea Monitor',
    category: 'Respiratory Monitoring',
    badge: null,
    description: 'Detects apnea events in real-time using multi-parameter biosignal analysis. Breath rate, heart rate, SpO₂ and galvanic skin response monitored simultaneously.',
    tech: ['IoT Sensors', 'Python', 'Real-time Analytics'],
  },
  {
    img: pocVein,
    title: 'Vein Imaging System',
    category: 'Clinical Imaging',
    badge: null,
    description: 'Infrared-based subcutaneous vein visualisation for accurate IV cannulation. A low-cost portable alternative to clinical vein finders.',
    tech: ['Infrared Imaging', 'Image Processing', 'OpenCV'],
  },
  {
    img: pocHemiplegia,
    title: 'Smart Hemiplegia Assist',
    category: 'Neuro-Rehabilitation',
    badge: null,
    description: 'EMG-based wearable device that assists arm movement in hemiplegic patients. Arduino-powered with biofeedback loop for motor recovery.',
    tech: ['EMG Sensors', 'Arduino', 'Biofeedback'],
  },
  {
    img: pocCough,
    title: 'Smart Cough Detection',
    category: 'Pulmonology',
    badge: null,
    description: 'Audio signal classification system that detects and analyses cough patterns for early pulmonary disease screening.',
    tech: ['Audio DSP', 'TensorFlow Lite', 'Python'],
  },
  {
    img: pocRehab,
    title: 'Vision-Based Rehab Tracker',
    category: 'Physiotherapy',
    badge: null,
    description: 'Computer vision system using TensorFlow Lite to track neck and limb movement accuracy during physiotherapy sessions. Auto-generates session PDF reports.',
    tech: ['Computer Vision', 'TensorFlow Lite', 'MediaPipe'],
  },
];

function LightboxModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
      }}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 10 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
        id="poc-lightbox-modal"
        style={{
          width: '100%', maxWidth: 900,
          background: '#2c2c2e',
          borderRadius: 20,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          maxHeight: '88vh',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Left — image */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 400 }}>
          <img
            src={project.img}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {project.badge && (
            <div style={{
              position: 'absolute', top: 16, left: 16,
              background: 'rgba(240,165,0,0.92)', color: '#000',
              fontSize: 10, fontWeight: 700, padding: '4px 12px',
              borderRadius: 20, fontFamily: "Inter,-apple-system,sans-serif",
              letterSpacing: '0.05em',
            }}>🏆 {project.badge}</div>
          )}
        </div>

        {/* Right — details */}
        <div style={{
          padding: '36px 32px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          overflowY: 'auto',
        }}>
          <button onClick={onClose} style={{
            alignSelf: 'flex-end', background: 'none', border: 'none',
            color: 'rgba(255,255,255,0.4)', fontSize: 22, cursor: 'pointer',
            lineHeight: 1, marginBottom: 20, padding: 0,
          }}>✕</button>

          <span style={{
            display: 'inline-block', background: 'rgba(0,201,167,0.12)',
            color: '#00c9a7', fontSize: 10, fontWeight: 700,
            padding: '4px 12px', borderRadius: 20, marginBottom: 16,
            fontFamily: "Inter,-apple-system,sans-serif",
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>{project.category}</span>

          <h2 style={{
            fontFamily: "Inter,-apple-system,sans-serif",
            fontSize: 26, color: 'white', marginBottom: 14, lineHeight: 1.2,
          }}>{project.title}</h2>

          <p style={{
            color: 'rgba(255,255,255,0.55)', fontSize: 14,
            lineHeight: 1.75, marginBottom: 24,
            fontFamily: "Inter,-apple-system,sans-serif", fontWeight: 300,
          }}>{project.description}</p>

          <div style={{ marginBottom: 28 }}>
            <p style={{
              color: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10,
              fontFamily: "Inter,-apple-system,sans-serif",
            }}>Technologies Used</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.65)', fontSize: 12,
                  padding: '5px 12px', borderRadius: 20,
                  fontFamily: "Inter,-apple-system,sans-serif",
                }}>{t}</span>
              ))}
            </div>
          </div>

          <button onClick={() => { onClose(); window.registerFor('project'); }}
            style={{
              background: '#0066cc', color: 'white', border: 'none', cursor: 'pointer',
              padding: '12px 24px', borderRadius: 24, fontSize: 13, fontWeight: 600,
              fontFamily: "Inter,-apple-system,sans-serif", transition: 'all 0.2s',
              alignSelf: 'flex-start',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#147ce5'}
            onMouseLeave={e => e.currentTarget.style.background = '#0066cc'}>
            Discuss a Project →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function POCProjects() {
  const [hovered, setHovered] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="poc" style={{ padding: '96px 0', background: '#1d1d1f' }}>
      <div id="poc-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Header — factual, not salesy */}
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
          <span style={{
            display:'inline-block', fontSize:9, fontWeight:700, letterSpacing:'0.14em',
            textTransform:'uppercase', color:'#00c9a7',
            background:'rgba(0,201,167,0.1)', padding:'5px 14px', borderRadius:20,
            marginBottom:16, fontFamily:"Inter,-apple-system,sans-serif",
          }}>Medical Solutions We've Built</span>

          <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:12 }}>
            <h2 style={{
              fontFamily:"Inter,-apple-system,sans-serif",
              fontSize:'clamp(28px,3.5vw,48px)', color:'white', lineHeight:1.1, margin:0,
            }}>Developed by Neura AI</h2>
            <p style={{
              color:'rgba(255,255,255,0.4)', fontSize:14, maxWidth:480,
              lineHeight:1.7, fontFamily:"Inter,-apple-system,sans-serif", fontWeight:300,
            }}>
              Working prototypes developed by Neura AI. Each addresses a real clinical problem with hardware and software.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div id="poc-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16, marginTop: 40,
        }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, amount:0.15 }}
              transition={{ duration:0.5, delay:i*0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setLightbox(p)}
              style={{
                position:'relative', borderRadius:16, overflow:'hidden',
                aspectRatio:'4/3', cursor:'pointer',
                border: hovered===i ? '1px solid rgba(0,201,167,0.35)' : '1px solid rgba(255,255,255,0.06)',
                transform: hovered===i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered===i ? '0 20px 48px rgba(0,0,0,0.5)' : '0 4px 16px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
              }}>
              {/* Image */}
              <img src={p.img} alt={p.title} style={{
                width:'100%', height:'100%', objectFit:'cover',
                transform: hovered===i ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 0.5s ease',
                display:'block',
              }}/>

              {/* Gradient */}
              <div style={{
                position:'absolute', inset:0,
                background:'linear-gradient(to top,rgba(29,29,31,0.96) 0%,rgba(29,29,31,0.3) 55%,rgba(29,29,31,0.05) 100%)',
              }}/>

              {/* Category badge */}
              <div style={{ position:'absolute', top:14, left:14 }}>
                <span style={{
                  background:'rgba(29,29,31,0.7)', backdropFilter:'blur(8px)',
                  color:'#00c9a7', fontSize:9, fontWeight:700,
                  padding:'3px 10px', borderRadius:20,
                  fontFamily:"Inter,-apple-system,sans-serif",
                  letterSpacing:'0.07em', textTransform:'uppercase',
                }}>{p.category}</span>
              </div>
              {p.badge && (
                <div style={{ position:'absolute', top:14, right:14 }}>
                  <span style={{
                    background:'rgba(240,165,0,0.9)', color:'#000',
                    fontSize:9, fontWeight:700, padding:'3px 10px', borderRadius:20,
                    fontFamily:"Inter,-apple-system,sans-serif",
                  }}>🏆 {p.badge}</span>
                </div>
              )}

              {/* Bottom text */}
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'0 16px 18px' }}>
                <h3 style={{
                  fontFamily:"Inter,-apple-system,sans-serif",
                  fontSize:16, color:'white', margin:'0 0 6px', lineHeight:1.2,
                }}>{p.title}</h3>

                {/* Tech tags — visible on hover */}
                <div style={{
                  display:'flex', flexWrap:'wrap', gap:4,
                  maxHeight: hovered===i ? 40 : 0,
                  overflow:'hidden', transition:'max-height 0.35s ease',
                }}>
                  {p.tech.map(t=>(
                    <span key={t} style={{
                      background:'rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.7)',
                      fontSize:10, padding:'2px 8px', borderRadius:12,
                      fontFamily:"Inter,-apple-system,sans-serif",
                    }}>{t}</span>
                  ))}
                </div>

                <p style={{
                  color:'rgba(255,255,255,0.45)', fontSize:11,
                  fontFamily:"Inter,-apple-system,sans-serif",
                  marginTop:6, opacity: hovered===i ? 1 : 0,
                  transition:'opacity 0.3s ease',
                }}>Click to view details</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note — factual */}
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.3}}
          style={{
            marginTop:40, padding:'28px 32px',
            border:'1px solid rgba(255,255,255,0.06)', borderRadius:16,
            display:'flex', alignItems:'center', justifyContent:'space-between',
            flexWrap:'wrap', gap:16,
            background:'rgba(255,255,255,0.02)',
          }}>
          <div>
            <p style={{color:'white',fontSize:14,fontWeight:600,fontFamily:"Inter,-apple-system,sans-serif",marginBottom:4}}>
              Have a clinical problem to solve?
            </p>
            <p style={{color:'rgba(255,255,255,0.4)',fontSize:13,fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300}}>
              Tell us the problem. We'll assess whether we can build a solution.
            </p>
          </div>
          <button onClick={() => window.registerFor('project')} style={{
            background:'#00c9a7', color:'#1d1d1f', border:'none', cursor:'pointer',
            padding:'12px 28px', borderRadius:24, fontSize:13, fontWeight:700,
            fontFamily:"Inter,-apple-system,sans-serif", transition:'all 0.2s', whiteSpace:'nowrap',
          }}
            onMouseEnter={e=>{e.currentTarget.style.background='white';}}
            onMouseLeave={e=>{e.currentTarget.style.background='#00c9a7';}}>
            Start a Project
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <LightboxModal project={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 900px) {
          #poc-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #poc-lightbox-modal { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #poc-cards-grid { grid-template-columns: 1fr !important; }
          #poc-inner { padding: 0 20px !important; }
          #poc-lightbox-modal {
            max-height: 92vh !important;
            overflow-y: auto !important;
          }
          #poc-lightbox-modal > div:first-child {
            min-height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
