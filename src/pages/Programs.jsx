import React from 'react';
import { motion } from 'framer-motion';
import internship from '../assets/internship.webp';
import internship2 from '../assets/internship2.webp';

const services = [
  { icon:'🏫', title:'Credit-Based Technical Workshop',        desc:'Conducted at your college campus. 2 to 7 days. Our team runs hands-on sessions on AI, biomedical engineering, and medical R&D — with certification and kits.',  tag:'On-Campus'    },
  { icon:'🔬', title:'End-to-End R&D Support',                 desc:'We support students in building medical device prototypes — from problem statement to working proof of concept to research paper.',               tag:'Project-Based' },
  { icon:'💻', title:'R&D Training Program',                   desc:'Online programme covering real medical R&D problems. Min 1 month. ₹3,000/student per month. Group and college rates on request.',        tag:'Online'        },
  { icon:'🎓', title:'Webinars / Seminars / Guest Lectures',   desc:'Delivered online or in-person. Topics range from Healthcare AI fundamentals to R&D career pathways for biomedical engineers.',        tag:'Flexible'      },
  { icon:'🤝', title:'Students & Faculty on Live R&D',         desc:'Students work directly with Neura AI on live medical R&D projects — contributing to real devices and solutions.',      tag:'Collaborative' },
  { icon:'📄', title:'Research Article Support',               desc:'We help students and faculty write and submit research papers on their medical R&D work.',                              tag:'Publication'   },
];

const pricing = [
  { label:'Workshop',       price:'Custom Quote', sub:'2–7 days · On-campus',  cta:'Request Workshop', pid:'workshop', featured:false },
  { label:'R&D Training',   price:'₹3,000/month', sub:'Min 1 month · Online',  cta:'Enroll',             pid:'rnd',      featured:true  },
  { label:'Project Support',price:'By Scope',     sub:'PoC to publication',    cta:'Get in Touch',       pid:'project',  featured:false },
];

export default function Programs() {
  return (
    <section id="programs" style={{ padding:'96px 0', background:'#f5f5f7' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 40px' }}>

        {/* Header */}
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} style={{textAlign:'center',marginBottom:56}}>
          <span style={{
            display:'inline-block',fontSize:9,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',
            color:'#00c9a7',background:'rgba(0,201,167,0.1)',padding:'5px 14px',borderRadius:20,
            marginBottom:16,fontFamily:"Inter,-apple-system,sans-serif",
          }}>NeuraEDU — Education Division</span>
          <h2 style={{fontFamily:"'DM Serif Display',Georgia,serif",fontSize:'clamp(28px,3.5vw,48px)',color:'#0a0f1e',marginBottom:12,lineHeight:1.1}}>
            NeuraEDU — education division of Neura AI.
          </h2>
          <p style={{color:'#6e6e73',fontSize:16,maxWidth:520,margin:'0 auto',lineHeight:1.7,fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300}}>
            NeuraEDU partners with colleges to run credit-based workshops, online R&D training, and end-to-end project support. All programmes are focused on practical medical R&D skills.
          </p>
        </motion.div>

        {/* Services grid */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:40}}>
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
              <div style={{fontSize:28,marginBottom:16}}>{s.icon}</div>
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                <h3 style={{fontFamily:"Inter,-apple-system,sans-serif",fontSize:15,fontWeight:600,color:'#0a0f1e',margin:0,flex:1,lineHeight:1.3}}>{s.title}</h3>
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
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginBottom:16}}>
          {pricing.map((p,i) => (
            <motion.div key={p.label}
              initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}
              viewport={{once:true}} transition={{delay:i*0.08,duration:0.5}}
              style={{
                borderRadius:18, padding:'28px 24px', textAlign:'center',
                background: p.featured ? '#0a0f1e' : 'white',
                border: p.featured ? '1.5px solid rgba(0,201,167,0.3)' : '1px solid rgba(0,0,0,0.07)',
              }}>
              <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:p.featured?'#00c9a7':'#6e6e73',marginBottom:8,fontFamily:"Inter,-apple-system,sans-serif"}}>{p.label}</p>
              <p style={{fontFamily:"'DM Serif Display',Georgia,serif",fontSize:28,color:p.featured?'white':'#0a0f1e',marginBottom:4}}>{p.price}</p>
              <p style={{fontSize:12,color:p.featured?'rgba(255,255,255,0.4)':'#6e6e73',marginBottom:24,fontFamily:"Inter,-apple-system,sans-serif"}}>{p.sub}</p>
              <button onClick={() => window.registerFor(p.pid)} style={{
                width:'100%',padding:'12px',borderRadius:24,fontSize:13,fontWeight:600,
                fontFamily:"Inter,-apple-system,sans-serif",cursor:'pointer',border:'none',
                background: p.featured ? '#00c9a7' : '#f5f5f7',
                color: p.featured ? '#0a0f1e' : '#0a0f1e',
                transition:'all 0.2s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.background=p.featured?'white':'#0a0f1e';e.currentTarget.style.color=p.featured?'#0a0f1e':'white';}}
                onMouseLeave={e=>{e.currentTarget.style.background=p.featured?'#00c9a7':'#f5f5f7';e.currentTarget.style.color='#0a0f1e';}}>
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
            <p style={{fontSize:14,fontWeight:600,color:'#0a0f1e',fontFamily:"Inter,-apple-system,sans-serif",marginBottom:4}}>Research Internship</p>
            <p style={{fontSize:13,color:'#6e6e73',fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300}}>Merit-based. Work directly with our R&D team on active healthcare projects.</p>
          </div>
          <button onClick={() => window.registerFor('internship')} style={{
            background:'#0a0f1e',color:'white',border:'none',cursor:'pointer',
            padding:'11px 24px',borderRadius:24,fontSize:13,fontWeight:600,
            fontFamily:"Inter,-apple-system,sans-serif",whiteSpace:'nowrap',transition:'all 0.2s',
          }}
            onMouseEnter={e=>e.currentTarget.style.background='#0071e3'}
            onMouseLeave={e=>e.currentTarget.style.background='#0a0f1e'}>
            Apply
          </button>
        </motion.div>
      </div>

      <style>{`@media(max-width:900px){#programs > div > div{grid-template-columns:1fr 1fr !important;}}@media(max-width:600px){#programs > div > div{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
