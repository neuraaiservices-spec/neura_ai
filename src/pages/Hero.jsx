import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
window.registerFor = (pid) => {
  window._selectedProgram = pid;
  document.getElementById('register')?.scrollIntoView({ behavior:'smooth' });
  window.dispatchEvent(new CustomEvent('selectProgram', { detail: pid }));
};

// Minimal ambient network — quiet, decorative, not data-dense.
// Far fewer nodes than before, no labels, no legend — pure atmosphere.
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
      canvas.width  = rect.width  * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      return { W: rect.width, H: rect.height };
    };
    let { W, H } = resize();

    const nodeCount = 9;
    const makeNodes = (W, H) => Array.from({ length: nodeCount }, (_, i) => {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 0.30 + (i % 3) * 0.06;
      return {
        x: W*0.5 + Math.cos(angle) * W * radius,
        y: H*0.5 + Math.sin(angle) * H * radius * 0.8,
        r: i === 0 ? 5 : 2.5,
        isCenter: false,
      };
    });
    let nodes = makeNodes(W, H);
    const center = { x: W*0.5, y: H*0.5, r: 6, isCenter: true };
    nodes.forEach(n => { n.pulse = Math.random()*Math.PI*2; n.ps = 0.01+Math.random()*0.006; });
    center.pulse = 0; center.ps = 0.015;

    function draw() {
      ctx.clearRect(0, 0, W, H); t++;
      nodes.forEach(n => { n.pulse += n.ps; });
      center.pulse += center.ps;

      // Faint spokes from center only — quiet, not a dense web
      nodes.forEach((n, i) => {
        const alpha = 0.045 + 0.02*Math.sin(t*0.008+i);
        ctx.beginPath(); ctx.moveTo(center.x, center.y); ctx.lineTo(n.x, n.y);
        ctx.strokeStyle = `rgba(0,102,204,${alpha})`; ctx.lineWidth = 0.6; ctx.stroke();
      });

      // Nodes — soft, no labels
      [center, ...nodes].forEach(n => {
        const pr = n.r + Math.sin(n.pulse) * (n.isCenter ? 1.5 : 0.8);
        const glowR = pr * (n.isCenter ? 6 : 4);
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowR);
        glow.addColorStop(0, n.isCenter ? 'rgba(0,201,167,0.18)' : 'rgba(0,102,204,0.08)');
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath(); ctx.arc(n.x, n.y, glowR, 0, Math.PI*2); ctx.fillStyle = glow; ctx.fill();

        ctx.beginPath(); ctx.arc(n.x, n.y, pr, 0, Math.PI*2);
        ctx.fillStyle = n.isCenter ? '#00c9a7' : 'rgba(0,102,204,0.5)';
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      const r = resize(); W = r.W; H = r.H;
      nodes = makeNodes(W, H);
      nodes.forEach(n => { n.pulse = Math.random()*Math.PI*2; n.ps = 0.01+Math.random()*0.006; });
      center.x = W*0.5; center.y = H*0.5;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={ref} style={{ width:'100%', height:'100%', display:'block' }}/>;
}

export default function Hero() {
  return (
    <section id="home" style={{
      background:'#ffffff', minHeight:'100vh',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      position:'relative', overflow:'hidden', paddingTop:64, textAlign:'center',
    }}>
      {/* Quiet ambient visual behind everything — not a competing element */}
      <div style={{ position:'absolute', inset:0, opacity:0.9 }}>
        <AmbientCanvas/>
      </div>

      <div style={{ position:'relative', zIndex:1, maxWidth:760, padding:'0 24px' }}>

        {/* Single tag — one line, quiet */}
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <span style={{
            display:'inline-block', fontSize:12, fontWeight:600, letterSpacing:'0.04em',
            color:'#6e6e73', marginBottom:28, fontFamily:"Inter,-apple-system,sans-serif",
          }}>
            Affordable Medical Solutions
          </span>
        </motion.div>

        {/* The one headline — large, confident, nothing competing with it */}
        <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.7,ease:[0.22,1,0.36,1]}}
          style={{
            fontFamily:"Inter,-apple-system,sans-serif", fontWeight:700,
            fontSize:'clamp(40px,6vw,76px)', color:'#1d1d1f',
            lineHeight:1.05, letterSpacing:'-0.03em', margin:'0 0 24px',
          }}>
          Healthcare,<br/>made affordable.
        </motion.h1>

        {/* One subhead — a single clear sentence */}
        <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}}
          style={{
            color:'#6e6e73', fontSize:19, lineHeight:1.55, margin:'0 auto 44px',
            maxWidth:540, fontFamily:"Inter,-apple-system,sans-serif", fontWeight:400,
          }}>
          We build medical devices and software that lower the cost of care — and train the next generation of healthcare engineers.
        </motion.p>

        {/* Two buttons — that's it */}
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.5}}
          style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
          <button onClick={()=>window.registerFor('rnd')} style={{
            background:'#0066cc', color:'white', border:'none', cursor:'pointer',
            padding:'14px 32px', borderRadius:980, fontSize:16, fontWeight:500,
            fontFamily:"Inter,-apple-system,sans-serif", transition:'all 0.2s',
          }}
            onMouseEnter={e=>{e.currentTarget.style.background='#147ce5';}}
            onMouseLeave={e=>{e.currentTarget.style.background='#0066cc';}}>
            Get Started
          </button>
          <button onClick={()=>scrollTo('about')} style={{
            background:'transparent', color:'#0066cc',
            border:'none', cursor:'pointer',
            padding:'14px 20px', borderRadius:980, fontSize:16, fontWeight:500,
            fontFamily:"Inter,-apple-system,sans-serif", transition:'all 0.2s',
          }}
            onMouseEnter={e=>{e.currentTarget.style.textDecoration='underline';}}
            onMouseLeave={e=>{e.currentTarget.style.textDecoration='none';}}>
            Learn more &rsaquo;
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #home { padding-top: 48px !important; min-height: 92vh !important; }
        }
      `}</style>
    </section>
  );
}
