import React from 'react';
import { motion } from 'framer-motion';
import internship from '../assets/internship.webp';
import internship2 from '../assets/internship2.webp';

const iconBase = { fill:'none', stroke:'currentColor', strokeWidth:1.6, strokeLinecap:'round', strokeLinejoin:'round' };

function WorkshopIcon(p) { return (
  <svg width="26" height="26" viewBox="0 0 24 24" {...p}>
    <path {...iconBase} d="M3 9.5 12 4l9 5.5-9 5.5-9-5.5z" />
    <path {...iconBase} d="M7 11.8v4.6c0 1.2 2.2 2.1 5 2.1s5-.9 5-2.1v-4.6" />
    <path {...iconBase} d="M20 9.5v5.8" />
  </svg>
); }
function RnDIcon(p) { return (
  <svg width="26" height="26" viewBox="0 0 24 24" {...p}>
    <path {...iconBase} d="M9.5 3.5h5v5.2l3.8 6.6c.8 1.4-.2 3.2-1.8 3.2H7.5c-1.6 0-2.6-1.8-1.8-3.2l3.8-6.6V3.5z" />
    <path {...iconBase} d="M8.7 14.3h6.6" />
    <path {...iconBase} d="M9.5 3.5h5" />
  </svg>
); }
function TrainingIcon(p) { return (
  <svg width="26" height="26" viewBox="0 0 24 24" {...p}>
    <rect x="3" y="4.5" width="18" height="12" rx="1.6" {...iconBase} />
    <path {...iconBase} d="M9 20h6" />
    <path {...iconBase} d="M12 16.5V20" />
    <path {...iconBase} d="M8 12.5l2.4-2.6 2 1.6 3-3.2" />
  </svg>
); }
function WebinarIcon(p) { return (
  <svg width="26" height="26" viewBox="0 0 24 24" {...p}>
    <circle cx="12" cy="8" r="3.2" {...iconBase} />
    <path {...iconBase} d="M5.5 20c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6" />
    <path {...iconBase} d="M19 5.5c1.1.7 1.8 1.9 1.8 3.2 0 1.4-.8 2.6-2 3.3" />
  </svg>
); }
function CollabIcon(p) { return (
  <svg width="26" height="26" viewBox="0 0 24 24" {...p}>
    <circle cx="8" cy="8" r="2.6" {...iconBase} />
    <circle cx="16.5" cy="9" r="2.2" {...iconBase} />
    <path {...iconBase} d="M3.6 19c0-2.9 2-5 4.7-5 1.5 0 2.8.6 3.7 1.7" />
    <path {...iconBase} d="M13 19.2c.2-2.4 1.9-4.1 4.2-4.1 2.3 0 4.2 1.9 4.2 4.5" />
  </svg>
); }
function PaperIcon(p) { return (
  <svg width="26" height="26" viewBox="0 0 24 24" {...p}>
    <path {...iconBase} d="M7 3.5h7l4 4V19c0 .9-.7 1.5-1.5 1.5h-9.5C6.2 20.5 5.5 19.9 5.5 19V5C5.5 4.1 6.2 3.5 7 3.5z" />
    <path {...iconBase} d="M14 3.5v4h4" />
    <path {...iconBase} d="M8.5 12h7" />
    <path {...iconBase} d="M8.5 15.2h7" />
    <path {...iconBase} d="M8.5 9h3" />
  </svg>
); }

const services = [
  { Icon: WorkshopIcon, title:'Credit-Based Technical Workshop',        desc:'Conducted at your college campus. 2 to 7 days. Our team runs hands-on sessions on AI, biomedical engineering, and medical R&D — with certification and kits.',  tag:'On-Campus'    },
  { Icon: RnDIcon,      title:'End-to-End R&D Support',                 desc:'We support students in building medical device prototypes — from problem statement to working proof of concept to research paper.',               tag:'Project-Based' },
  { Icon: TrainingIcon, title:'R&D Training Program',                   desc:'Online programme covering real medical R&D problems. Min 1 month. ₹3,000/student per month. Group and college rates on request.',        tag:'Online'        },
  { Icon: WebinarIcon,  title:'Webinars / Seminars / Guest Lectures',   desc:'Delivered online or in-person. Topics range from Healthcare AI fundamentals to R&D career pathways for biomedical engineers.',        tag:'Flexible'      },
  { Icon: CollabIcon,   title:'Students & Faculty on Live R&D',         desc:'Students work directly with Neura AI on live medical R&D projects — contributing to real devices and solutions.',      tag:'Collaborative' },
  { Icon: PaperIcon,    title:'Research Article Support',               desc:'We help students and faculty write and submit research papers on their medical R&D work.',                              tag:'Publication'   },
];

const pricing = [
  { label:'Workshop',       price:'Custom Quote', sub:'2–7 days · On-campus',  cta:'Request Workshop', pid:'workshop', featured:false },
  { label:'R&D Training',   price:'₹3,000/month', sub:'Min 1 month · Online',  cta:'Enroll',             pid:'rnd',      featured:true  },
  { label:'Project Support',price:'By Scope',     sub:'PoC to publication',    cta:'Get in Touch',       pid:'project',  featured:false },
];

export default function Programs() {
  return (
    <section id="programs" style={{ padding:'96px 0', background:'#f5f5f7' }}>
      <div id="programs-inner" style={{ maxWidth:1280, margin:'0 auto', padding:'0 40px' }}>

        {/* Header */}
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} style={{textAlign:'center',marginBottom:56}}>
          <span style={{
            display:'inline-block',fontSize:9,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',
            color:'#00c9a7',background:'rgba(0,201,167,0.1)',padding:'5px 14px',borderRadius:20,
            marginBottom:16,fontFamily:"Inter,-apple-system,sans-serif",
          }}>NeuraEDU — Education Division</span>
          <h2 style={{fontFamily:"Inter,-apple-system,sans-serif",fontWeight:800,fontSize:'clamp(28px,3.5vw,48px)',color:'#1d1d1f',marginBottom:12,lineHeight:1.05,letterSpacing:'-0.03em'}}>
            NeuraEDU — education division of Neura AI.
          </h2>
          <p style={{color:'#6e6e73',fontSize:16,maxWidth:520,margin:'0 auto',lineHeight:1.7,fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300}}>
            NeuraEDU partners with colleges to run credit-based workshops, online R&D training, and end-to-end project support. All programmes are focused on practical medical R&D skills.
          </p>
        </motion.div>

        {/* Services grid */}
        <div id="services-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:40}}>
          {services.map((s,i) => (
            <motion.div key={s.title}
              initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
              viewport={{once:true,amount:0.2}} transition={{duration:0.5,delay:i*0.07}}
              style={{
                background:'white', borderRadius:18, padding:'28px 24px',
                border:'1px solid rgba(0,0,0,0.06)',
                transition:'all 0.25s ease', cursor:'default',
              }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 12px 40px rgba(0,0,0,0.1)';e.currentTarget.style.transform='translateY(-3px)';}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='none';}}>
              <div style={{
                width:44, height:44, borderRadius:12,
                background:'rgba(0,201,167,0.08)',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'#00a688', marginBottom:16,
              }}>
                <s.Icon />
              </div>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                <h3 style={{fontFamily:"Inter,-apple-system,sans-serif",fontSize:15,fontWeight:600,color:'#1d1d1f',margin:0,flex:1,lineHeight:1.3}}>{s.title}</h3>
              </div>
              <span style={{
                display:'inline-block',background:'#f5f5f7',color:'#6e6e73',
                fontSize:10,fontWeight:600,padding:'3px 10px',borderRadius:20,marginBottom:12,
                fontFamily:"Inter,-apple-system,sans-serif",letterSpacing:'0.04em',
              }}>{s.tag}</span>
              <p style={{color:'#6e6e73',fontSize:13,lineHeight:1.7,fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300,margin:0}}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing */}
        <div id="pricing-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:16}}>
          {pricing.map((p,i) => (
            <motion.div key={p.label}
              initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}
              viewport={{once:true}} transition={{delay:i*0.08,duration:0.5}}
              style={{
                borderRadius:18, padding:'28px 24px', textAlign:'center',
                background: p.featured ? '#1d1d1f' : 'white',
                border: p.featured ? '1.5px solid rgba(0,201,167,0.3)' : '1px solid rgba(0,0,0,0.07)',
              }}>
              <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:p.featured?'#00c9a7':'#6e6e73',marginBottom:8,fontFamily:"Inter,-apple-system,sans-serif"}}>{p.label}</p>
              <p style={{fontFamily:"Inter,-apple-system,sans-serif",fontSize:28,color:p.featured?'white':'#1d1d1f',marginBottom:4}}>{p.price}</p>
              <p style={{fontSize:12,color:p.featured?'rgba(255,255,255,0.4)':'#6e6e73',marginBottom:24,fontFamily:"Inter,-apple-system,sans-serif"}}>{p.sub}</p>
              <button onClick={() => window.registerFor(p.pid)} style={{
                width:'100%',padding:'12px',borderRadius:24,fontSize:13,fontWeight:600,
                fontFamily:"Inter,-apple-system,sans-serif",cursor:'pointer',border:'none',
                background: p.featured ? '#00c9a7' : '#f5f5f7',
                color: p.featured ? '#1d1d1f' : '#1d1d1f',
                transition:'all 0.2s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.background=p.featured?'white':'#1d1d1f';e.currentTarget.style.color=p.featured?'#1d1d1f':'white';}}
                onMouseLeave={e=>{e.currentTarget.style.background=p.featured?'#00c9a7':'#f5f5f7';e.currentTarget.style.color='#1d1d1f';}}>
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Research internship note */}
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}}
          style={{
            background:'white',borderRadius:18,padding:'24px 28px',
            border:'1px solid rgba(0,0,0,0.06)',
            display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16,
          }}>
          <div>
            <p style={{fontSize:14,fontWeight:600,color:'#1d1d1f',fontFamily:"Inter,-apple-system,sans-serif",marginBottom:4}}>Research Internship</p>
            <p style={{fontSize:13,color:'#6e6e73',fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300}}>Merit-based. Work directly with our R&D team on active healthcare projects.</p>
          </div>
          <button onClick={() => window.registerFor('internship')} style={{
            background:'#1d1d1f',color:'white',border:'none',cursor:'pointer',
            padding:'11px 24px',borderRadius:24,fontSize:13,fontWeight:600,
            fontFamily:"Inter,-apple-system,sans-serif",whiteSpace:'nowrap',transition:'all 0.2s',
          }}
            onMouseEnter={e=>e.currentTarget.style.background='#0066cc'}
            onMouseLeave={e=>e.currentTarget.style.background='#1d1d1f'}>
            Apply
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services-grid { grid-template-columns: 1fr 1fr !important; }
          #pricing-grid  { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          #services-grid { grid-template-columns: 1fr !important; }
          #pricing-grid  { grid-template-columns: 1fr !important; }
          #programs-inner { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
