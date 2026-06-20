import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PROGRAMS = [
  { id:'workshop',   label:'Credit-Based Workshop',  sub:'On-campus · Custom quote',   icon:'🏫' },
  { id:'rnd',        label:'R&D Training',            sub:'Online · ₹3,000/month',      icon:'🔬' },
  { id:'project',    label:'POC / Project Support',   sub:'End-to-end R&D',             icon:'💡' },
  { id:'internship', label:'Research Internship',     sub:'Merit-based',                icon:'🎓' },
  { id:'seminar',    label:'Seminar / Guest Lecture', sub:'Online or In-person',        icon:'🎤' },
  { id:'paper',      label:'Research Article Help',   sub:'Publication guidance',       icon:'📄' },
];

const TRUST = [
  'StartupTN Recognised & MSME Registered',
  'NeuraEDU conducted at colleges across India',
  'Practical exposure to real medical R&D work',
  'Group & college registrations get special pricing',
  'Response within 24 hours — no spam, no pressure',
];

export default function Register() {
  const [selected, setSelected] = useState('rnd');
  const [countries, setCountries] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    firstName:'', lastName:'', email:'', phone:'',
    college:'', course:'', city:'', country:'', hodContact:'', goal:'',
  });

  // Listen for program selection from ANY button on the site
  useEffect(() => {
    const handler = (e) => {
      const id = e.detail;
      if (PROGRAMS.find(p => p.id === id)) setSelected(id);
    };
    window.addEventListener('selectProgram', handler);
    // Also check if already set before mount
    if (window._selectedProgram) {
      setSelected(window._selectedProgram);
      window._selectedProgram = null;
    }
    return () => window.removeEventListener('selectProgram', handler);
  }, []);

  useEffect(() => {
    fetch('/country.json').then(r=>r.json()).then(setCountries).catch(()=>{});
  }, []);

  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault(); setSubmitting(true);
    const fd = new FormData();
    fd.append('access_key', '2b6c2867-c8e5-4891-9d93-54d4d04b26b6');
    Object.entries({ ...form, program: PROGRAMS.find(p=>p.id===selected)?.label || selected })
      .forEach(([k,v]) => fd.append(k, v));
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method:'POST', body:fd });
      const data = await res.json();
      if (data.success) {
        setMessage('✅ Submitted! Our team will reach out within 24 hours.');
        setForm({ firstName:'',lastName:'',email:'',phone:'',college:'',course:'',city:'',country:'',hodContact:'',goal:'' });
        setSelected('rnd');
      } else { setMessage('❌ ' + (data.message || 'Something went wrong.')); }
    } catch { setMessage('❌ Network error. Please try again.'); }
    setSubmitting(false);
  };

  const inp = {
    width:'100%', background:'#f5f5f7', border:'1px solid rgba(0,0,0,0.1)',
    borderRadius:10, padding:'11px 14px', fontSize:13,
    fontFamily:"Inter,-apple-system,sans-serif", color:'#0a0f1e',
    outline:'none', transition:'border-color 0.2s',
  };
  const inpFocus = { borderColor:'#0071e3' };

  return (
    <section id="register" className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left info */}
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}
            className="lg:col-span-2 flex flex-col justify-center">
            <span className="section-tag" style={{width:'fit-content'}}>Register</span>
            <h2 className="font-display text-white mt-4 mb-4 leading-tight" style={{fontSize:'clamp(26px,3vw,38px)'}}>
              Start Your Journey with Neura AI
            </h2>
            <p style={{color:'rgba(255,255,255,0.45)',fontSize:14,lineHeight:1.75,marginBottom:28,fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300}}>
              Whether you're a student looking to join a programme, or a college looking to bring NeuraEDU on campus — fill the form and we'll get back to you within 24 hours.
            </p>
            <ul style={{display:'flex',flexDirection:'column',gap:12,marginBottom:32}}>
              {TRUST.map(t=>(
                <li key={t} style={{display:'flex',alignItems:'flex-start',gap:10}}>
                  <span style={{color:'#00c9a7',marginTop:2,flexShrink:0,fontSize:14}}>✓</span>
                  <span style={{color:'rgba(255,255,255,0.5)',fontSize:13,fontFamily:"Inter,-apple-system,sans-serif"}}>{t}</span>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/918778171529?text=Hi%20Neura%20AI%2C%20I%20want%20to%20know%20more%20about%20your%20programs"
              target="_blank" rel="noreferrer" className="wa-pulse"
              style={{
                display:'inline-flex',alignItems:'center',gap:10,
                background:'#25D366',color:'white',textDecoration:'none',
                padding:'12px 22px',borderRadius:24,fontSize:13,fontWeight:600,
                fontFamily:"Inter,-apple-system,sans-serif",width:'fit-content',
              }}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Quick Chat on WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}
            className="lg:col-span-3">
            <div style={{background:'white',borderRadius:24,padding:'32px',boxShadow:'0 20px 60px rgba(0,0,0,0.25)'}}>
              <h3 className="font-display text-primary mb-1" style={{fontSize:22}}>Registration Form</h3>
              <p style={{color:'#6e6e73',fontSize:13,marginBottom:24,fontFamily:"Inter,-apple-system,sans-serif"}}>
                Select your program — the right team will reach you
              </p>

              {/* Program selector — visual pills */}
              <div style={{marginBottom:24}}>
                <p style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#6e6e73',marginBottom:10,fontFamily:"Inter,-apple-system,sans-serif"}}>
                  Select Program *
                </p>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
                  {PROGRAMS.map(p=>(
                    <button key={p.id} type="button" onClick={()=>setSelected(p.id)} style={{
                      textAlign:'left',padding:'10px 12px',borderRadius:12,cursor:'pointer',
                      border: selected===p.id ? '2px solid #0071e3' : '1.5px solid rgba(0,0,0,0.1)',
                      background: selected===p.id ? 'rgba(0,113,227,0.05)' : 'white',
                      transition:'all 0.15s',
                    }}>
                      <div style={{fontSize:16,marginBottom:3}}>{p.icon}</div>
                      <div style={{fontSize:11,fontWeight:700,color:selected===p.id?'#0071e3':'#0a0f1e',fontFamily:"Inter,-apple-system,sans-serif",lineHeight:1.2,marginBottom:2}}>{p.label}</div>
                      <div style={{fontSize:10,color:'#6e6e73',fontFamily:"Inter,-apple-system,sans-serif"}}>{p.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:12}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                  <div>
                    <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>First Name *</label>
                    <input name="firstName" value={form.firstName} onChange={update} required placeholder="First name" style={inp}
                      onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>e.target.style.borderColor='rgba(0,0,0,0.1)'}/>
                  </div>
                  <div>
                    <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>Last Name *</label>
                    <input name="lastName" value={form.lastName} onChange={update} required placeholder="Last name" style={inp}
                      onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>e.target.style.borderColor='rgba(0,0,0,0.1)'}/>
                  </div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                  <div>
                    <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={update} required placeholder="you@email.com" style={inp}
                      onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>e.target.style.borderColor='rgba(0,0,0,0.1)'}/>
                  </div>
                  <div>
                    <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>Phone / WhatsApp *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={update} required placeholder="+91 XXXXX XXXXX" style={inp}
                      onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>e.target.style.borderColor='rgba(0,0,0,0.1)'}/>
                  </div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                  <div>
                    <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>College *</label>
                    <input name="college" value={form.college} onChange={update} required placeholder="College name" style={inp}
                      onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>e.target.style.borderColor='rgba(0,0,0,0.1)'}/>
                  </div>
                  <div>
                    <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>Course & Year *</label>
                    <input name="course" value={form.course} onChange={update} required placeholder="e.g. B.E. BME, 3rd Year" style={inp}
                      onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>e.target.style.borderColor='rgba(0,0,0,0.1)'}/>
                  </div>
                </div>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                  <div>
                    <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>City *</label>
                    <input name="city" value={form.city} onChange={update} required placeholder="Your city" style={inp}
                      onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>e.target.style.borderColor='rgba(0,0,0,0.1)'}/>
                  </div>
                  <div>
                    <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>Country</label>
                    <select name="country" value={form.country} onChange={update} style={inp}>
                      <option value="">Select country</option>
                      {countries.map((c,i)=><option key={i} value={`${c.name} (+${c.dialing_code})`}>{c.name} (+{c.dialing_code})</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>HOD / Faculty Contact (optional)</label>
                  <input name="hodContact" value={form.hodContact} onChange={update} placeholder="HOD name + email or phone" style={inp}
                    onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>e.target.style.borderColor='rgba(0,0,0,0.1)'}/>
                </div>
                <div>
                  <label style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.07em',color:'#6e6e73',display:'block',marginBottom:5,fontFamily:"Inter,-apple-system,sans-serif"}}>Your Goal (optional)</label>
                  <textarea name="goal" value={form.goal} onChange={update} rows={3}
                    placeholder="What are you hoping to achieve? Any specific topics?" style={{...inp,resize:'none'}}
                    onFocus={e=>Object.assign(e.target.style,inpFocus)} onBlur={e=>e.target.style.borderColor='rgba(0,0,0,0.1)'}/>
                </div>
                <button type="submit" disabled={submitting} style={{
                  width:'100%',background:'#0a0f1e',color:'white',border:'none',cursor:'pointer',
                  padding:'15px',borderRadius:12,fontSize:14,fontWeight:700,
                  fontFamily:"Inter,-apple-system,sans-serif",marginTop:4,
                  transition:'all 0.2s', opacity: submitting ? 0.6 : 1,
                }}
                  onMouseEnter={e=>{ if(!submitting) e.currentTarget.style.background='#0071e3'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.background='#0a0f1e'; }}>
                  {submitting ? 'Submitting...' : `Submit — ${PROGRAMS.find(p=>p.id===selected)?.label || 'Register'} →`}
                </button>
                {message && (
                  <p style={{fontSize:13,textAlign:'center',fontWeight:600,color:message.startsWith('✅')?'#00c9a7':'#e53e3e',fontFamily:"Inter,-apple-system,sans-serif"}}>
                    {message}
                  </p>
                )}
                <p style={{fontSize:11,color:'#6e6e73',textAlign:'center',fontFamily:"Inter,-apple-system,sans-serif"}}>
                  Your data is only used to contact you about Neura AI programs. No spam.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
