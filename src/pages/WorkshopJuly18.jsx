import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NeuraLogo from '../components/NeuraLogo';

// Ambient neuron canvas — creative backdrop, healthcare + AI themed
function AmbientCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId, t = 0;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width*dpr; canvas.height = rect.height*dpr;
      ctx.scale(dpr,dpr);
      return { W:rect.width, H:rect.height };
    };
    let { W, H } = resize();
    const nodes = Array.from({length:18}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx:(Math.random()-0.5)*0.05, vy:(Math.random()-0.5)*0.05,
      r: 1.4+Math.random()*1.6,
    }));
    function draw() {
      ctx.clearRect(0,0,W,H); t++;
      nodes.forEach(n => {
        n.x+=n.vx; n.y+=n.vy;
        if(n.x<0||n.x>W) n.vx*=-1;
        if(n.y<0||n.y>H) n.vy*=-1;
      });
      nodes.forEach((a,i) => {
        nodes.slice(i+1).forEach(b => {
          const d = Math.hypot(a.x-b.x,a.y-b.y);
          if(d<150){
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
            ctx.strokeStyle = `rgba(0,201,167,${0.09*(1-d/150)})`;
            ctx.lineWidth=0.6; ctx.stroke();
          }
        });
        ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
        ctx.fillStyle='rgba(0,201,167,0.35)'; ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => { const r=resize(); W=r.W; H=r.H; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={ref} style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.6}}/>;
}

// Animated agenda timeline
function AgendaTimeline() {
  const items = [
    { time:'9:00 AM',  title:'Check-in & Welcome',           desc:'Registration, kits distributed' },
    { time:'9:30 AM',  title:'AI in Healthcare — Foundations', desc:'Core concepts, real case studies' },
    { time:'11:00 AM', title:'Hands-on Lab',                   desc:'Build a working AI healthcare model' },
    { time:'1:00 PM',  title:'Lunch Break',                    desc:'Networking with peers & mentors' },
    { time:'2:00 PM',  title:'Project Challenge',               desc:'Teams solve a real clinical problem' },
    { time:'3:30 PM',  title:'Presentations & Awards',          desc:'Winners get internship offers' },
  ];
  return (
    <div style={{position:'relative', paddingLeft:28}}>
      <div style={{position:'absolute', left:5, top:8, bottom:8, width:1.5, background:'linear-gradient(to bottom, rgba(0,201,167,0.5), rgba(0,201,167,0.05))'}}/>
      {items.map((item, i) => (
        <motion.div key={item.time}
          initial={{opacity:0, x:-10}} whileInView={{opacity:1, x:0}}
          viewport={{once:true}} transition={{duration:0.5, delay:i*0.08}}
          style={{position:'relative', marginBottom:24, paddingLeft:8}}>
          <div style={{
            position:'absolute', left:-28, top:3, width:10, height:10, borderRadius:'50%',
            background:'#00c9a7', boxShadow:'0 0 0 3px rgba(0,201,167,0.15)',
          }}/>
          <p style={{color:'#00c9a7', fontSize:11, fontWeight:700, marginBottom:3, fontFamily:"Inter,-apple-system,sans-serif"}}>{item.time}</p>
          <p style={{color:'white', fontSize:14.5, fontWeight:600, marginBottom:2, fontFamily:"Inter,-apple-system,sans-serif"}}>{item.title}</p>
          <p style={{color:'rgba(255,255,255,0.4)', fontSize:12.5, fontFamily:"Inter,-apple-system,sans-serif", fontWeight:300}}>{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function WorkshopJuly18() {
  const scrollToForm = () => document.getElementById('workshop-register')?.scrollIntoView({behavior:'smooth'});

  return (
    <div style={{background:'#1d1d1f', minHeight:'100vh'}}>

      {/* Header */}
      <header style={{
        padding:'22px 40px', borderBottom:'1px solid rgba(255,255,255,0.05)',
        position:'sticky', top:0, zIndex:50,
        background:'rgba(29,29,31,0.85)', backdropFilter:'blur(20px)',
      }}>
        <div style={{maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <a href="/" style={{display:'inline-flex'}}>
            <NeuraLogo variant="white" height={56} />
          </a>
          <span style={{
            fontSize:10, color:'rgba(255,255,255,0.3)', fontFamily:"Inter,-apple-system,sans-serif",
            letterSpacing:'0.06em', textTransform:'uppercase',
          }}>NeuraEDU Workshop</span>
        </div>
      </header>

      {/* Hero */}
      <section style={{padding:'88px 40px 64px', position:'relative', overflow:'hidden'}}>
        <AmbientCanvas />
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse at 50% 0%, rgba(0,102,204,0.08) 0%, transparent 60%)'}}/>

        <div style={{maxWidth:760, margin:'0 auto', textAlign:'center', position:'relative', zIndex:1}}>
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <span style={{
              display:'inline-flex', alignItems:'center', gap:7,
              fontSize:10.5, fontWeight:600, letterSpacing:'0.08em',
              textTransform:'uppercase', color:'#00c9a7',
              background:'rgba(0,201,167,0.08)', border:'1px solid rgba(0,201,167,0.18)',
              padding:'7px 18px', borderRadius:24, marginBottom:28,
              fontFamily:"Inter,-apple-system,sans-serif",
            }}>
              <span style={{width:5,height:5,borderRadius:'50%',background:'#00c9a7'}}/>
              A NeuraEDU Programme
            </span>
          </motion.div>

          <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}}
            style={{
              fontFamily:"Inter,-apple-system,sans-serif", fontWeight:800,
              fontSize:'clamp(36px,5.2vw,68px)', color:'white',
              lineHeight:1.04, letterSpacing:'-0.035em', marginBottom:22,
            }}>
            AI in Healthcare<br/><span style={{color:'#00c9a7'}}>Workshop</span>
          </motion.h1>

          <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}}
            style={{color:'rgba(255,255,255,0.5)', fontSize:16.5, lineHeight:1.7, maxWidth:520, margin:'0 auto 40px',
            fontFamily:"Inter,-apple-system,sans-serif", fontWeight:300}}>
            A full-day, hands-on session on applying AI to real healthcare problems — with a live project-building challenge.
          </motion.p>

          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.3}}
            style={{display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', alignItems:'center'}}>
            <button onClick={scrollToForm} style={{
              background:'#0066cc', color:'white', border:'none', cursor:'pointer',
              padding:'15px 34px', borderRadius:26, fontSize:14.5, fontWeight:600,
              fontFamily:"Inter,-apple-system,sans-serif",
              boxShadow:'0 8px 30px rgba(0,102,204,0.35)', transition:'all 0.25s',
            }}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 12px 36px rgba(0,102,204,0.45)';}}
              onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 8px 30px rgba(0,102,204,0.35)';}}>
              Register — ₹1,000
            </button>
            <span style={{color:'rgba(255,255,255,0.3)', fontSize:12.5, fontFamily:"Inter,-apple-system,sans-serif"}}>Limited seats · Certificate provided</span>
          </motion.div>
        </div>
      </section>

      {/* Key details strip */}
      <section style={{padding:'0 40px 64px'}}>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
          id="workshop-details-strip"
          style={{
            maxWidth:920, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)',
            border:'1px solid rgba(255,255,255,0.07)', borderRadius:18, overflow:'hidden',
            background:'rgba(255,255,255,0.02)',
          }}>
          {[
            {icon:'📅', label:'Date', value:'17 July, Sat'},
            {icon:'⏰', label:'Time', value:'9 AM – 4 PM'},
            {icon:'📍', label:'Venue', value:'IITM Research Park'},
            {icon:'💻', label:'Format', value:'Hybrid'},
          ].map((d,i) => (
            <div key={d.label} className="workshop-detail-item" style={{
              padding:'28px 16px', textAlign:'center',
              borderRight: i<3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
              <div style={{fontSize:24, marginBottom:10, opacity:0.9}}>{d.icon}</div>
              <p style={{color:'rgba(255,255,255,0.32)', fontSize:10, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:5, fontFamily:"Inter,-apple-system,sans-serif"}}>{d.label}</p>
              <p style={{color:'white', fontSize:15, fontWeight:600, fontFamily:"Inter,-apple-system,sans-serif"}}>{d.value}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Agenda timeline + Venue map */}
      <section style={{padding:'0 40px 64px'}}>
        <div id="workshop-agenda-venue" style={{maxWidth:920, margin:'0 auto', display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48}}>

          {/* Agenda */}
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <p style={{fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#00c9a7', marginBottom:14, fontFamily:"Inter,-apple-system,sans-serif"}}>The Day</p>
            <h2 style={{fontFamily:"Inter,-apple-system,sans-serif", fontWeight:700, letterSpacing:'-0.02em', fontSize:23, color:'white', marginBottom:26}}>How the workshop runs</h2>
            <AgendaTimeline />
          </motion.div>

          {/* Venue with embedded map */}
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.1}}>
            <p style={{fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#00c9a7', marginBottom:14, fontFamily:"Inter,-apple-system,sans-serif"}}>Venue</p>
            <h2 style={{fontFamily:"Inter,-apple-system,sans-serif", fontWeight:700, letterSpacing:'-0.02em', fontSize:23, color:'white', marginBottom:18}}>IITM Research Park</h2>

            {/* Embedded Google Map */}
            <div style={{
              borderRadius:18, overflow:'hidden', border:'1px solid rgba(255,255,255,0.08)',
              marginBottom:18, height:220,
            }}>
              <iframe
                title="IITM Research Park Map"
                src="https://www.google.com/maps?q=IITM+Research+Park,+Taramani,+Chennai&output=embed"
                width="100%" height="100%" style={{border:0, filter:'invert(0.92) hue-rotate(180deg) contrast(0.9)'}}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p style={{color:'rgba(255,255,255,0.45)', fontSize:13.5, lineHeight:1.7, marginBottom:16, fontFamily:"Inter,-apple-system,sans-serif", fontWeight:300}}>
              Kanagam Road, Taramani, Chennai, Tamil Nadu. One of India's leading research park ecosystems for technology and innovation.
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=IITM+Research+Park+Taramani+Chennai" target="_blank" rel="noreferrer"
              style={{
                display:'inline-flex', alignItems:'center', gap:7,
                color:'#00c9a7', fontSize:13, fontWeight:600, textDecoration:'none',
                fontFamily:"Inter,-apple-system,sans-serif",
              }}>
              Open in Google Maps →
            </a>

            <div style={{marginTop:24, padding:'20px 22px', background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:16}}>
              <p style={{color:'rgba(255,255,255,0.35)', fontSize:10.5, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:8, fontFamily:"Inter,-apple-system,sans-serif"}}>Organised By</p>
              <p style={{color:'white', fontSize:15, fontWeight:600, marginBottom:3, fontFamily:"Inter,-apple-system,sans-serif"}}>NeuraEDU</p>
              <p style={{color:'rgba(255,255,255,0.4)', fontSize:13, lineHeight:1.6, fontFamily:"Inter,-apple-system,sans-serif"}}>Education division of Neura AI · StartupTN Recognised · MSME Registered</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's included / Who it's for */}
      <section style={{padding:'0 40px 64px'}}>
        <div id="workshop-included-forwhom" style={{maxWidth:920, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48}}>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <p style={{fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#00c9a7', marginBottom:14, fontFamily:"Inter,-apple-system,sans-serif"}}>What's Included</p>
            <h2 style={{fontFamily:"Inter,-apple-system,sans-serif", fontWeight:700, letterSpacing:'-0.02em', fontSize:23, color:'white', marginBottom:22}}>Everything you need for the day</h2>
            {[
              'Interactive, practical session led by an industry expert',
              'A real-world AI project-building challenge',
              'Certificate of participation',
              'Top performers receive an internship or research collaboration opportunity',
              'Workshop kit and resources',
            ].map(item => (
              <div key={item} style={{display:'flex', gap:11, marginBottom:15}}>
                <span style={{color:'#00c9a7', flexShrink:0, marginTop:1}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
                <p style={{color:'rgba(255,255,255,0.55)', fontSize:14, lineHeight:1.65, fontFamily:"Inter,-apple-system,sans-serif", fontWeight:300}}>{item}</p>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.1}}>
            <p style={{fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'#00c9a7', marginBottom:14, fontFamily:"Inter,-apple-system,sans-serif"}}>Who It's For</p>
            <h2 style={{fontFamily:"Inter,-apple-system,sans-serif", fontWeight:700, letterSpacing:'-0.02em', fontSize:23, color:'white', marginBottom:22}}>Open to all backgrounds</h2>
            {['Students', 'Faculty', 'Researchers', 'Working Professionals'].map(item => (
              <div key={item} style={{display:'flex', gap:11, marginBottom:15}}>
                <span style={{color:'#00c9a7', flexShrink:0, marginTop:1}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
                <p style={{color:'rgba(255,255,255,0.55)', fontSize:14, lineHeight:1.65, fontFamily:"Inter,-apple-system,sans-serif", fontWeight:300}}>{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration form — embedded Google Form */}
      <section id="workshop-register" style={{padding:'64px 40px 100px'}}>
        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
          style={{maxWidth:640, margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:26}}>
            <p style={{fontFamily:"Inter,-apple-system,sans-serif", fontWeight:700, letterSpacing:'-0.02em', fontSize:25, color:'white', marginBottom:8}}>Reserve your seat</p>
            <p style={{color:'rgba(255,255,255,0.45)', fontSize:13.5, fontFamily:"Inter,-apple-system,sans-serif"}}>17 July · IITM Research Park · ₹1,000</p>
          </div>

          <div style={{
            background:'#ffffff', borderRadius:24, overflow:'hidden',
            boxShadow:'0 30px 70px rgba(0,0,0,0.4)',
            border:'1px solid rgba(255,255,255,0.06)',
          }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScMXuGMSdrdzOhcmhpI2g2Sk-TfvJEpZEf9sL3Uj_-1Gh0l0g/viewform?embedded=true"
              width="100%"
              height="900"
              style={{display:'block', border:'none'}}
              title="AI in Healthcare Workshop Registration"
            >
              Loading registration form…
            </iframe>
          </div>

          <p style={{fontSize:12, color:'rgba(255,255,255,0.3)', textAlign:'center', marginTop:18, fontFamily:"Inter,-apple-system,sans-serif"}}>
            Payment details will be shared after you submit the form.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer style={{padding:'28px 40px', borderTop:'1px solid rgba(255,255,255,0.05)', textAlign:'center'}}>
        <p style={{color:'rgba(255,255,255,0.25)', fontSize:12, fontFamily:"Inter,-apple-system,sans-serif"}}>
          Organised by NeuraEDU — the education division of Neura AI.
        </p>
      </footer>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 900px) {
          #workshop-agenda-venue { grid-template-columns: 1fr !important; gap: 40px !important; }
          #workshop-included-forwhom { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 700px) {
          #workshop-details-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .workshop-detail-item:nth-child(2) { border-right: none !important; }
          .workshop-detail-item:nth-child(1),
          .workshop-detail-item:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
        }
        @media (max-width: 640px) {
          header { padding: 16px 20px !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
          footer { padding: 24px 20px !important; }
        }
      `}</style>
    </div>
  );
}
