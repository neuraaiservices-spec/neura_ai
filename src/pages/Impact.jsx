import React from 'react';
import { motion } from 'framer-motion';
import evJaundice1 from '../assets/ev_jaundice1.jpg';

const fadeUp = { hidden:{opacity:0,y:30}, visible:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}} };
const stagger = { visible:{transition:{staggerChildren:0.12}} };

const news = [
  {
    type: '🏆 Award',
    badge: 'Best Project Award',
    badgeColor: '#f0a500',
    date: '2024',
    title: 'Oviya Ravi wins Best Project Award for Smart Jaundice Detection',
    desc: 'The Smart Jaundice Detection device — developed with Neura AI support — received the Best Project Award. It screens for neonatal jaundice non-invasively using optical sensors.',
    tags: ['#BestProjectAward','#BiomedicalEngineering','#HealthcareInnovation'],
    linkedin: 'https://www.linkedin.com/posts/oviya-ravi-941222291_bestprojectaward-biomedicalengineering-healthcareinnovation-activity-7460383962515890177-KSso',
    img: evJaundice1,
    highlight: true,
  },
  {
    type: '🚀 Event',
    badge: 'VentureConnect 2026',
    badgeColor: '#0066cc',
    date: '2026',
    title: 'Oviya Ravi leads team at VentureConnect 2026',
    desc: 'Representing the Smart Jaundice Detection project as Team Lead at VentureConnect 2026 — a premier innovation and entrepreneurship platform bringing together the next generation of healthcare innovators.',
    tags: ['#VentureConnect2026','#TeamLead','#InnovationJourney'],
    linkedin: 'https://www.linkedin.com/posts/oviya-ravi-941222291_ventureconnect2026-teamlead-innovationjourney-activity-7434208958980079617-H6nG',
    img: null,
    highlight: false,
  },
];



export default function Impact() {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-primary-mid relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)',backgroundSize:'60px 60px'}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.3}} variants={stagger} className="mb-14">
          <motion.div variants={fadeUp}><span className="section-tag">Impact &amp; Recognition</span></motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-2">
            <motion.h2 variants={fadeUp} className="font-display text-3xl lg:text-5xl text-white max-w-xl leading-tight">
              Our work is getting<br/>
              <span style={{background:'linear-gradient(135deg,#00c9a7,#0066cc)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
                noticed.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/45 text-sm lg:text-base max-w-sm leading-relaxed">
              Medical solutions developed through Neura AI have received recognition at college and industry events.
            </motion.p>
          </div>
        </motion.div>

        {/* News cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {news.map((item, i) => (
            <motion.div key={i}
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}}
              transition={{duration:0.6,delay:i*0.15}}
              className={`rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${item.highlight ? 'border-teal/30 hover:border-teal/60' : 'border-white/8 hover:border-blue/40'}`}
              style={{background:'rgba(255,255,255,0.04)'}}
            >
              {/* Photo (for award card) */}
              {item.img && (
                <div className="relative h-52 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  {/* Award badge overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-lg">🏆</span>
                    <span style={{color:'#f0a500',fontSize:12,fontWeight:700,fontFamily:"Inter, -apple-system, sans-serif"}}>Best Project Award</span>
                  </div>
                </div>
              )}

              {/* No photo — gradient bg */}
              {!item.img && (
                <div className="h-24 relative overflow-hidden" style={{background:'linear-gradient(135deg,rgba(0,102,204,0.15),rgba(0,201,167,0.08))'}}>
                  <div className="absolute top-4 left-6 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    <span style={{color:'#147ce5',fontSize:12,fontWeight:700,fontFamily:"Inter, -apple-system, sans-serif",letterSpacing:'0.05em'}}>VentureConnect 2026</span>
                  </div>
                </div>
              )}

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span style={{
                    background:`${item.badgeColor}20`, color:item.badgeColor,
                    fontSize:10, fontWeight:700, padding:'3px 10px', borderRadius:20,
                    letterSpacing:'0.07em', textTransform:'uppercase',
                    fontFamily:"Inter, -apple-system, sans-serif",
                  }}>{item.badge}</span>
                  <span className="text-white/30 text-xs">{item.date}</span>
                </div>

                <h3 className="font-display text-lg text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{item.desc}</p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.tags.map(t => (
                    <span key={t} style={{
                      background:'rgba(255,255,255,0.06)', color:'rgba(255,255,255,0.4)',
                      fontSize:11, fontWeight:500, padding:'3px 10px', borderRadius:20,
                      fontFamily:"Inter, -apple-system, sans-serif",
                    }}>{t}</span>
                  ))}
                </div>

                {/* LinkedIn link */}
                <a href={item.linkedin} target="_blank" rel="noreferrer"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:8,
                    background:'rgba(10,102,194,0.15)', border:'1px solid rgba(10,102,194,0.3)',
                    color:'#147ce5', padding:'8px 16px', borderRadius:20,
                    fontSize:12, fontWeight:600,
                    fontFamily:"Inter, -apple-system, sans-serif",
                    textDecoration:'none', transition:'all 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(10,102,194,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.background='rgba(10,102,194,0.15)'}
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* CTA */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}}
          className="mt-10 text-center">
          <p className="text-white/35 text-sm mb-4" style={{fontFamily:"Inter, -apple-system, sans-serif"}}>
            If you have a clinical problem and want to explore building a solution, get in touch.
          </p>
          <button onClick={() => { window.dispatchEvent(new CustomEvent('neura:selectProgram',{detail:'rnd'})); document.getElementById('register')?.scrollIntoView({behavior:'smooth'}); }}
            style={{
              background:'linear-gradient(135deg,#0066cc,#00c9a7)',
              color:'white', border:'none', cursor:'pointer',
              padding:'14px 36px', borderRadius:24,
              fontSize:14, fontWeight:700,
              fontFamily:"Inter, -apple-system, sans-serif",
              boxShadow:'0 8px 32px rgba(0,102,204,0.3)',
            }}>
            Work with Neura AI →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
