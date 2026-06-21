import React, { useEffect, useRef, useState } from 'react';
import NeuraLogo from './NeuraLogo';

export default function Loader() {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const phases = ['Initialising R&D Network', 'Connecting Nodes', 'Ready'];

  useEffect(() => {
    // Progress bar
    let p = 0;
    const timer = setInterval(() => {
      p += 1.2;
      setProgress(Math.min(p, 100));
      if (p > 40) setPhase(1);
      if (p > 80) setPhase(2);
      if (p >= 100) clearInterval(timer);
    }, 30);

    // Neuron canvas
    const canvas = canvasRef.current;
    if (!canvas) return () => clearInterval(timer);
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const S = 280; // logical size
    canvas.width = S * dpr;
    canvas.height = S * dpr;
    canvas.style.width = S + 'px';
    canvas.style.height = S + 'px';
    ctx.scale(dpr, dpr);

    const cx = S / 2, cy = S / 2;
    const R = 90;
    let t = 0, animId;

    // 6 satellite nodes evenly spaced
    const sats = Array.from({length:6}, (_,i) => {
      const a = (i * 60 - 90) * Math.PI / 180;
      return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), phase: i * (Math.PI/3) };
    });

    function draw() {
      ctx.clearRect(0, 0, S, S);
      t += 0.02;

      // Lines + travelling pulses
      sats.forEach((s, i) => {
        // Base line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = `rgba(0,201,167,${0.08 + 0.04 * Math.sin(t + i)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Travelling pulse
        const fwd = (t * 0.5 + i * 0.5) % 1;
        const px = cx + (s.x - cx) * fwd;
        const py = cy + (s.y - cy) * fwd;
        const g = ctx.createRadialGradient(px,py,0,px,py,6);
        g.addColorStop(0,'rgba(0,201,167,1)');
        g.addColorStop(1,'rgba(0,201,167,0)');
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI*2);
        ctx.fillStyle = g; ctx.fill();
      });

      // Cross connections (hexagon edges)
      sats.forEach((s, i) => {
        const next = sats[(i+1)%6];
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(next.x, next.y);
        ctx.strokeStyle = `rgba(0,201,167,0.06)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Center glow
      const cg = ctx.createRadialGradient(cx,cy,0,cx,cy,40);
      cg.addColorStop(0,'rgba(0,201,167,0.18)');
      cg.addColorStop(1,'rgba(0,201,167,0)');
      ctx.beginPath(); ctx.arc(cx,cy,40,0,Math.PI*2);
      ctx.fillStyle = cg; ctx.fill();

      // Center rings
      [18, 28, 38].forEach((r, i) => {
        const a = 0.08 + 0.06 * Math.sin(t * 0.8 - i * 0.5);
        ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
        ctx.strokeStyle = `rgba(0,201,167,${a})`;
        ctx.lineWidth = i===0 ? 1.5 : 0.8;
        ctx.stroke();
      });

      // Center dot
      ctx.beginPath(); ctx.arc(cx,cy,8,0,Math.PI*2);
      ctx.fillStyle = '#00c9a7'; ctx.fill();
      ctx.beginPath(); ctx.arc(cx,cy,4,0,Math.PI*2);
      ctx.fillStyle = '#ffffff'; ctx.fill();

      // Satellite dots
      sats.forEach((s,i) => {
        const pulse = 3 + 1.5 * Math.sin(t * 1.2 + s.phase);
        const isTeal = i % 2 === 0;
        // Glow
        const sg = ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,pulse*3);
        sg.addColorStop(0,isTeal?'rgba(0,201,167,0.3)':'rgba(0,102,204,0.18)');
        sg.addColorStop(1,'rgba(0,0,0,0)');
        ctx.beginPath(); ctx.arc(s.x,s.y,pulse*3,0,Math.PI*2);
        ctx.fillStyle=sg; ctx.fill();
        // Core
        ctx.beginPath(); ctx.arc(s.x,s.y,pulse,0,Math.PI*2);
        ctx.fillStyle = isTeal ? '#00c9a7' : 'rgba(0,102,204,0.55)';
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => { clearInterval(timer); cancelAnimationFrame(animId); };
  }, []);

  return (
    <div style={{
      position:'fixed', inset:0, background:'#ffffff',
      display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center', zIndex:9999,
    }}>
      {/* Canvas neuron */}
      <canvas ref={canvasRef} style={{display:'block', marginBottom:32}} />

      {/* Logo */}
      <NeuraLogo variant="dark" height={48} />

      {/* Phase text */}
      <p style={{
        fontFamily:"Inter,-apple-system,sans-serif",
        color:'#00a688', fontSize:10,
        letterSpacing:'0.18em', textTransform:'uppercase',
        marginTop:8, marginBottom:28, fontWeight:500,
        minHeight:14, transition:'opacity 0.5s',
      }}>{phases[phase]}</p>

      {/* Progress bar */}
      <div style={{width:160,height:1.5,background:'rgba(0,0,0,0.08)',borderRadius:2,overflow:'hidden'}}>
        <div style={{
          height:'100%', borderRadius:2,
          background:'linear-gradient(90deg,#0066cc,#00c9a7)',
          width:`${progress}%`, transition:'width 30ms linear',
          boxShadow:'0 0 10px rgba(0,201,167,0.4)',
        }}/>
      </div>
    </div>
  );
}
