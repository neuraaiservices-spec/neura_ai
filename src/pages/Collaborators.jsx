import React from 'react';
import { motion } from 'framer-motion';

import collegeHindusthan  from '../assets/college_hindustan.jpg';
import collegeSMIT        from '../assets/college_smit.webp';
import collegeKarpaga     from '../assets/college_karpaga.png';
import collegeSaveetha    from '../assets/college_saveetha.jpg';
import collegeSreeSastha  from '../assets/college_sreesastha.png';
import collegeKarpagam    from '../assets/college_karpagam.jpg';

const mouPartners = [
  { img:collegeHindusthan, name:'Hindustan College of Engineering and Technology', location:'Coimbatore, Tamil Nadu', activities:['Guest Lecture','Seminar'], status:'MOU Signed' },
  { img:collegeSMIT,       name:'Sri Muthukumaran Institute of Technology',        location:'Chennai, Tamil Nadu',    activities:['Credit-Based Workshop'],   status:'MOU Signed' },
];

const eventColleges = [
  { img:collegeKarpaga,    name:'Karpaga Vinayaga Educational Group',    location:'Tamil Nadu',      note:'POC Collaboration' },
  { img:collegeSaveetha,   name:'Saveetha Engineering College',          location:'Chennai, TN',     note:'Seminar Conducted' },
  { img:collegeSreeSastha, name:'Sree Sastha Institute of Engineering',  location:'Chennai, TN',     note:'Seminar Conducted' },
  { img:collegeKarpagam,   name:'Karpagam Academy of Higher Education',  location:'Coimbatore, TN',  note:'Seminar Conducted' },
];

export default function Collaborators() {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-14">
          <span className="section-tag">Our Collaborators</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-2">
            <h2 className="font-display text-3xl lg:text-5xl text-primary max-w-lg leading-tight">
              Colleges That Work With Neura AI
            </h2>
            <p style={{color:'#6e6e73',fontSize:14,maxWidth:300,lineHeight:1.7,fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300}}>
              Colleges we have worked with through NeuraEDU.
            </p>
          </div>
        </motion.div>

        {/* MOU Partners — with real campus photos */}
        <p style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#6e6e73',marginBottom:16,fontFamily:"Inter,-apple-system,sans-serif"}}>Partner Colleges</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {mouPartners.map((p,i) => (
            <motion.div key={p.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.1}}
              style={{borderRadius:18,overflow:'hidden',border:'2px solid rgba(0,201,167,0.2)',position:'relative'}}>
              {/* Campus photo */}
              <div style={{height:180,overflow:'hidden',position:'relative'}}>
                <img src={p.img} alt={p.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(10,15,30,0.85) 0%,rgba(10,15,30,0.2) 60%)'}}/>
                <div style={{position:'absolute',bottom:14,left:16}}>
                  <span style={{
                    background:'rgba(0,201,167,0.15)',backdropFilter:'blur(8px)',
                    border:'1px solid rgba(0,201,167,0.3)',
                    color:'#00c9a7',fontSize:10,fontWeight:700,
                    padding:'4px 12px',borderRadius:20,
                    fontFamily:"Inter,-apple-system,sans-serif",letterSpacing:'0.06em',textTransform:'uppercase',
                  }}>✓ {p.status}</span>
                </div>
              </div>
              <div style={{padding:'16px 20px 20px',background:'white'}}>
                <h3 style={{fontFamily:"'DM Serif Display',Georgia,serif",fontSize:17,color:'#0a0f1e',marginBottom:4,lineHeight:1.3}}>{p.name}</h3>
                <p style={{color:'#6e6e73',fontSize:12,marginBottom:10,fontFamily:"Inter,-apple-system,sans-serif"}}>📍 {p.location}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                  {p.activities.map(a=>(
                    <span key={a} style={{background:'#f5f5f7',color:'#6e6e73',fontSize:11,fontWeight:500,padding:'4px 10px',borderRadius:20,fontFamily:"Inter,-apple-system,sans-serif"}}>{a}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event colleges — logos */}
        <p style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#6e6e73',marginBottom:16,fontFamily:"Inter,-apple-system,sans-serif"}}>Colleges Where We've Conducted Events</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {eventColleges.map((c,i) => (
            <motion.div key={c.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.07}}
              style={{background:'#f5f5f7',borderRadius:16,padding:16,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',border:'1px solid transparent',transition:'border-color 0.2s',cursor:'default'}}
              onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(0,201,167,0.25)'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='transparent'}>
              <div style={{width:64,height:64,borderRadius:12,overflow:'hidden',marginBottom:10,background:'white',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 12px rgba(0,0,0,0.08)'}}>
                <img src={c.img} alt={c.name} style={{width:'100%',height:'100%',objectFit:'contain',padding:4}}/>
              </div>
              <span style={{background:'rgba(0,201,167,0.1)',color:'#00a688',fontSize:9,fontWeight:700,padding:'2px 8px',borderRadius:20,marginBottom:6,fontFamily:"Inter,-apple-system,sans-serif",textTransform:'uppercase',letterSpacing:'0.05em'}}>{c.note}</span>
              <p style={{color:'#0a0f1e',fontSize:11,fontWeight:600,lineHeight:1.35,marginBottom:2,fontFamily:"Inter,-apple-system,sans-serif"}}>{c.name}</p>
              <p style={{color:'#6e6e73',fontSize:10,fontFamily:"Inter,-apple-system,sans-serif"}}>📍 {c.location}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
          style={{background:'#0a0f1e',borderRadius:24,padding:'40px 48px',textAlign:'center'}}>
          <div style={{color:'#00c9a7',fontSize:10,fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',fontFamily:"Inter,-apple-system,sans-serif",marginBottom:12}}>For Institutions</div>
          <h3 style={{fontFamily:"'DM Serif Display',Georgia,serif",color:'white',fontSize:'clamp(22px,2.5vw,32px)',marginBottom:12}}>Partner with NeuraEDU.</h3>
          <p style={{color:'rgba(255,255,255,0.45)',fontSize:14,maxWidth:400,margin:'0 auto 24px',lineHeight:1.7,fontFamily:"Inter,-apple-system,sans-serif",fontWeight:300}}>
            If you'd like to bring NeuraEDU to your college, get in touch.
          </p>
          <button onClick={() => window.registerFor('workshop')} style={{
            background:'#00c9a7',color:'#0a0f1e',border:'none',cursor:'pointer',
            padding:'13px 32px',borderRadius:24,fontSize:13,fontWeight:700,
            fontFamily:"Inter,-apple-system,sans-serif",transition:'all 0.2s',
          }}
            onMouseEnter={e=>e.currentTarget.style.background='white'}
            onMouseLeave={e=>e.currentTarget.style.background='#00c9a7'}>
            Get in touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
