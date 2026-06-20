import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });
window.registerFor = (pid) => {
  window._selectedProgram = pid;
  document.getElementById('register')?.scrollIntoView({ behavior:'smooth' });
  window.dispatchEvent(new CustomEvent('selectProgram', { detail: pid }));
};

// Brain-shaped neural network canvas
function BrainCanvas() {
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

    // Brain-shaped node layout — two hemispheres
    const cx = W * 0.5, cy = H * 0.46;
    const makeNodes = (W, H) => {
      const cx = W*0.5, cy = H*0.46;
      return [
        // Left hemisphere
        { x:cx-0.28*W, y:cy-0.22*H, r:5,  teal:false, label:'Neurology',      side:'L' },
        { x:cx-0.20*W, y:cy-0.32*H, r:4,  teal:false, label:'Cardiology',     side:'L' },
        { x:cx-0.32*W, y:cy-0.05*H, r:4,  teal:true,  label:'Diagnostics',    side:'L' },
        { x:cx-0.18*W, y:cy+0.10*H, r:4,  teal:false, label:'Wearables',      side:'L' },
        { x:cx-0.30*W, y:cy+0.20*H, r:3.5,teal:false, label:'Nephrology',     side:'L' },
        { x:cx-0.10*W, y:cy-0.18*H, r:4,  teal:true,  label:'AI Models',      side:'L' },
        // Right hemisphere
        { x:cx+0.28*W, y:cy-0.22*H, r:5,  teal:true,  label:'NeuraEDU',       side:'R' },
        { x:cx+0.20*W, y:cy-0.32*H, r:4,  teal:false, label:'Workshops',      side:'R' },
        { x:cx+0.32*W, y:cy-0.05*H, r:4,  teal:true,  label:'R&D Training',   side:'R' },
        { x:cx+0.18*W, y:cy+0.10*H, r:4,  teal:false, label:'Projects',       side:'R' },
        { x:cx+0.30*W, y:cy+0.20*H, r:3.5,teal:false, label:'Publications',   side:'R' },
        { x:cx+0.10*W, y:cy-0.18*H, r:4,  teal:true,  label:'Student R&D',    side:'R' },
        // Corpus callosum — center bridge nodes
        { x:cx,        y:cy-0.10*H, r:6,  teal:true,  label:'Neura AI',       side:'C' },
        { x:cx-0.06*W, y:cy+0.04*H, r:3,  teal:false, label:'',               side:'C' },
        { x:cx+0.06*W, y:cy+0.04*H, r:3,  teal:false, label:'',               side:'C' },
        // Bottom spine
        { x:cx-0.12*W, y:cy+0.32*H, r:3,  teal:false, label:'Pulmonology',    side:'L' },
        { x:cx+0.12*W, y:cy+0.32*H, r:3,  teal:true,  label:'Internships',    side:'R' },
        { x:cx,        y:cy+0.36*H, r:3.5,teal:false, label:'Impact',         side:'C' },
      ];
    };
    let nodes = makeNodes(W, H);
    nodes.forEach(n => { n.pulse = Math.random()*Math.PI*2; n.ps = 0.012+Math.random()*0.01; });

    // Connections — intra-hemisphere + corpus callosum bridge
    const conns = [
      // Left hemisphere
      [0,1],[0,2],[0,5],[1,5],[2,3],[3,4],[4,15],[5,12],
      // Right hemisphere
      [6,7],[6,8],[6,11],[7,11],[8,9],[9,10],[10,16],[11,12],
      // Corpus callosum bridge
      [12,13],[12,14],[13,14],[0,12],[6,12],[5,14],[11,13],
      // Bottom
      [3,15],[9,16],[15,17],[16,17],[12,17],
    ];

    function draw() {
      ctx.clearRect(0, 0, W, H); t++;
      nodes.forEach(n => { n.pulse += n.ps; });

      // Draw connections
      conns.forEach(([ai,bi], ci) => {
        if (ai >= nodes.length || bi >= nodes.length) return;
        const a = nodes[ai], b = nodes[bi];
        const alpha = 0.06 + 0.04*Math.sin(t*0.01+ci);
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        ctx.strokeStyle=`rgba(0,201,167,${alpha})`; ctx.lineWidth=0.7; ctx.stroke();

        // Pulse travelling along connection
        const prog = ((t*0.3)+ci*18)%100/100;
        const px=a.x+(b.x-a.x)*prog, py=a.y+(b.y-a.y)*prog;
        const g=ctx.createRadialGradient(px,py,0,px,py,5);
        g.addColorStop(0,'rgba(0,201,167,0.9)'); g.addColorStop(1,'rgba(0,201,167,0)');
        ctx.beginPath(); ctx.arc(px,py,5,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
      });

      // Draw nodes
      nodes.forEach((n,i) => {
        const isCenter = n.side==='C' && i===12;
        const pr = n.r + Math.sin(n.pulse)*(isCenter?3:1.5);
        const col = n.teal ? '#00c9a7' : 'rgba(255,255,255,0.75)';

        // Glow
        const glowR = pr*(isCenter?7:4);
        const glow = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,glowR);
        glow.addColorStop(0, n.teal?`rgba(0,201,167,${isCenter?0.25:0.12})`:'rgba(255,255,255,0.06)');
        glow.addColorStop(1,'rgba(0,0,0,0)');
        ctx.beginPath(); ctx.arc(n.x,n.y,glowR,0,Math.PI*2); ctx.fillStyle=glow; ctx.fill();

        // Core dot
        ctx.beginPath(); ctx.arc(n.x,n.y,pr,0,Math.PI*2);
        ctx.fillStyle=col; ctx.fill();

        // Ring for center
        if(isCenter){
          ctx.beginPath(); ctx.arc(n.x,n.y,pr+7,0,Math.PI*2);
          ctx.strokeStyle='rgba(0,201,167,0.2)'; ctx.lineWidth=1; ctx.stroke();
        }

        // Labels (only for named nodes)
        if(n.label){
          ctx.textAlign='center';
          ctx.fillStyle = isCenter ? '#00c9a7' : (n.teal?'rgba(0,201,167,0.85)':'rgba(255,255,255,0.65)');
          ctx.font=`${isCenter?600:500} ${isCenter?11:9}px Inter,-apple-system,sans-serif`;
          ctx.fillText(n.label, n.x, n.y-pr-7);
        }
      });

      // Brain outline — subtle left/right lobe curves
      ctx.beginPath();
      ctx.ellipse(cx-W*0.14, cy-H*0.08, W*0.20, H*0.30, -0.1, 0, Math.PI*2);
      ctx.strokeStyle='rgba(0,201,167,0.04)'; ctx.lineWidth=1; ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx+W*0.14, cy-H*0.08, W*0.20, H*0.30, 0.1, 0, Math.PI*2);
      ctx.stroke();

      animId = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      const r = resize(); W=r.W; H=r.H;
      nodes = makeNodes(W, H);
      nodes.forEach(n => { n.pulse=Math.random()*Math.PI*2; n.ps=0.012+Math.random()*0.01; });
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={ref} style={{width:'100%',height:'100%',display:'block'}}/>;
}

const STATS = [
  { num:'2',    label:'MOU\nPartners',     color:'#00c9a7' },
  { num:'300+', label:'Students\nReached', color:'#ffffff' },
  { num:'7+',   label:'POCs\nBuilt',       color:'#ffffff' },
  { num:'5+',   label:'College\nEvents',   color:'#ffffff' },
];

export default function Hero() {
  return (
    <section id="home" style={{background:'#0a0f1e',minHeight:'100vh',display:'flex',alignItems:'center',position:'relative',overflow:'hidden',paddingTop:92}}>
      <div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
        <div style={{position:'absolute',top:'20%',left:'15%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(0,113,227,0.09) 0%,transparent 70%)'}}/>
      </div>

      <div style={{maxWidth:1280,margin:'0 auto',padding:'40px 40px',width:'100%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:60,alignItems:'center',position:'relative',zIndex:1}}>

        {/* ── LEFT ── */}
        <div>
          {/* Stats — first, always */}
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.05,duration:0.7}}
            style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',border:'1px solid rgba(255,255,255,0.07)',borderRadius:14,overflow:'hidden',marginBottom:32,background:'rgba(255,255,255,0.025)'}}>
            {STATS.map((s,i)=>(
              <motion.div key={s.label}
                initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}}
                transition={{delay:0.1+i*0.08,duration:0.6,ease:[0.22,1,0.36,1]}}
                style={{padding:'18px 10px',textAlign:'center',borderRight:i<3?'1px solid rgba(255,255,255,0.06)':'none',position:'relative',overflow:'hidden'}}>
                {i===0&&<div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 100%,rgba(0,201,167,0.14) 0%,transparent 70%)'}}/>}
                <div style={{fontFamily:"'DM Serif Display',Georgia,serif",fontSize:'clamp(26px,3vw,44px)',color:s.color,lineHeight:1,marginBottom:5,position:'relative',textShadow:i===0?'0 0 24px rgba(0,201,167,0.5)':'none'}}>{s.num}</div>
                <div style={{color:'rgba(255,255,255,0.32)',fontSize:9,fontFamily:"Inter,-apple-system,sans-serif",fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',lineHeight:1.5,whiteSpace:'pre-line',position:'relative'}}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gov badges */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:0.5}}
            style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:14}}>
            {['🏛 StartupTN','🏛 MSME Govt. of India'].map(b=>(
              <span key={b} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.09)',color:'rgba(255,255,255,0.4)',fontSize:10,fontWeight:500,padding:'4px 12px',borderRadius:20,fontFamily:"Inter,-apple-system,sans-serif"}}>{b}</span>
            ))}
          </motion.div>

          {/* Tag */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.22,duration:0.5}}>
            <span style={{display:'inline-block',fontSize:9,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'#00c9a7',background:'rgba(0,201,167,0.1)',padding:'5px 14px',borderRadius:20,marginBottom:20,fontFamily:"Inter,-apple-system,sans-serif"}}>
              Affordable Medical Solutions
            </span>
          </motion.div>

          {/* Headline — confident, product-company, no motivational fluff */}
          <motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.28,duration:0.7,ease:[0.22,1,0.36,1]}}
            style={{fontFamily:"'DM Serif Display',Georgia,serif",fontSize:'clamp(32px,4vw,54px)',color:'white',lineHeight:1.1,letterSpacing:'-0.02em',margin:'0 0 16px'}}>
            Affordable medical solutions.<br/>
            <span style={{color:'#00c9a7'}}>Built for everyone.</span>
          </motion.h1>

          {/* One clear sentence — what the company does */}
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.36,duration:0.6}}
            style={{color:'rgba(255,255,255,0.5)',fontSize:15,lineHeight:1.75,marginBottom:32,maxWidth:400,fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300}}>
            We develop affordable medical solutions — devices and software that make quality healthcare accessible. Through NeuraEDU, we also train engineering students in healthcare R&D.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.42,duration:0.5}}
            style={{display:'flex',flexWrap:'wrap',gap:10}}>
            <button onClick={()=>window.registerFor('rnd')} style={{
              background:'#0071e3',color:'white',border:'none',cursor:'pointer',
              padding:'13px 26px',borderRadius:24,fontSize:13,fontWeight:600,
              fontFamily:"Inter,-apple-system,sans-serif",
              boxShadow:'0 4px 20px rgba(0,113,227,0.4)',transition:'all 0.2s',
            }}
              onMouseEnter={e=>{e.currentTarget.style.background='#2997ff';e.currentTarget.style.transform='translateY(-2px)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='#0071e3';e.currentTarget.style.transform='none';}}>
              Get Started
            </button>
            <button onClick={()=>scrollTo('about')} style={{
              background:'transparent',color:'rgba(255,255,255,0.6)',
              border:'1px solid rgba(255,255,255,0.14)',cursor:'pointer',
              padding:'13px 26px',borderRadius:24,fontSize:13,fontWeight:500,
              fontFamily:"Inter,-apple-system,sans-serif",transition:'all 0.2s',
            }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(0,201,167,0.4)';e.currentTarget.style.color='#00c9a7';}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.14)';e.currentTarget.style.color='rgba(255,255,255,0.6)';}}>
              Learn More
            </button>
          </motion.div>
        </div>

        {/* ── RIGHT: Brain neural canvas ── */}
        <motion.div initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:1,delay:0.3}}
          style={{position:'relative',height:520,borderRadius:20,overflow:'hidden',
            border:'1px solid rgba(0,201,167,0.08)',
            background:'radial-gradient(ellipse at 50% 35%,rgba(0,113,227,0.05) 0%,rgba(10,15,30,0.98) 70%)'}}>
          <div style={{position:'absolute',inset:0}}><BrainCanvas/></div>
          {/* Legend */}
          <div style={{position:'absolute',bottom:14,left:16,right:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{display:'flex',gap:14}}>
              <div style={{display:'flex',alignItems:'center',gap:5}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:'#00c9a7'}}/>
                <span style={{fontSize:8,color:'rgba(255,255,255,0.3)',fontFamily:"Inter,-apple-system,sans-serif"}}>R&D / Education</span>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:5}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:'rgba(255,255,255,0.6)'}}/>
                <span style={{fontSize:8,color:'rgba(255,255,255,0.3)',fontFamily:"Inter,-apple-system,sans-serif"}}>Healthcare domains</span>
              </div>
            </div>
            <span style={{fontSize:8,color:'rgba(0,201,167,0.3)',fontFamily:"Inter,-apple-system,sans-serif",fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase'}}>Neura AI Network</span>
          </div>
        </motion.div>
      </div>

      <style>{`@media(max-width:900px){#home>div{grid-template-columns:1fr!important;}#home>div>div:last-child{height:340px!important;}}`}</style>
    </section>
  );
}
