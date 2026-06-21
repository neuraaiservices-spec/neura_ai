import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Real event photos
import evJaundice1   from '../assets/ev_jaundice1.jpg';
import evJaundice2   from '../assets/ev_jaundice2.jpg';
import evHindusthan  from '../assets/ev_hindusthan.jpg';
import evSmit        from '../assets/ev_smit.jpg';
import RnDinternship  from '../assets/ev_sreesastha.jpg';
import evRndTraining from '../assets/ev_rndtraining.jpg';
import evKarpagam    from '../assets/ev_karpagam.jpg';


const categories = ['All', 'Workshop', 'Seminar', 'R&D Training', 'Live Projects'];

const events = [
  {
    tag: 'Live Projects',
    title: 'Smart Jaundice Detection',
    college: 'Karpaga Vinayaga Educational Group',
    location: 'Tamil Nadu',
    desc: 'AI-based screening with vital tracking. Non-invasive detection using optical sensors and ML.',
    img: evJaundice1,
  },
  {
    tag: 'Live Projects',
    title: 'Smart Jaundice Detection — Live Demo',
    college: 'Karpaga Vinayaga Educational Group',
    location: 'Tamil Nadu',
    desc: 'Students & faculty collaborated on AI-based jaundice screening device with vital sign monitoring.',
    img: evJaundice2,
  },
  {
    tag: 'Seminar',
    title: 'Healthcare R&D & AI Seminar',
    college: 'Hindusthan College of Engineering & Technology',
    location: 'Coimbatore, TN',
    desc: 'Packed auditorium session introducing AI careers in healthcare across departments.',
    img: evHindusthan,
  },
  {
    tag: 'Workshop',
    title: 'Credit-Based AI/ML Workshop',
    college: 'Sri Muthukumaran Institute of Technology (SMIT)',
    location: 'Chennai, TN',
    desc: 'Full-day practical sessions with certificate and hands-on kits. Students coded live on laptops.',
    img: evSmit,
  },
  {
    tag: 'Merit based R&D Internship',
    title: 'Merit based R&D Internship',
    college: 'IIT,CIT,SSN,Sathyabama,SRMIT,SRM eswari and others',
    location: 'India',
    desc: 'Merit based R&D Internship',
    img: RnDinternship,
  },
  {
    tag: 'Technical online workshop',
    title: 'Python & Image Processing in Healthcare',
    college: 'Multiple Colleges (Online)',
    location: 'Pan India · Online',
    desc: 'Live cloud R&D training — X-ray image processing with OpenCV. Students from SRM, VCET & Valliammai.',
    img: evRndTraining,
  },
  {
    tag: 'Seminar',
    title: 'Artificial Intelligence in Healthcare',
    college: 'sree sastha institute of engineering and technology',
    location: 'Coimbatore, TN',
    desc: 'Faculty of Engineering, Dept. of Biomedical Engineering seminar on AI opportunities.',
    img: evKarpagam,
  },
];

export default function Events() {
  const [filter, setFilter]   = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? events : events.filter(e => e.tag === filter);

  return (
    <section id="events" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="mb-10">
          <span className="section-tag">Events &amp; Gallery</span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-2">
            <h2 className="font-display text-3xl lg:text-5xl text-primary max-w-lg leading-tight">
              Events we've conducted.
            </h2>
            <p className="text-text-mid text-sm lg:text-base max-w-sm">
              NeuraEDU has conducted workshops, seminars, and training sessions at colleges across India.
            </p>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              style={{
                padding:'7px 18px', borderRadius:20, fontSize:12, fontWeight:600,
                fontFamily:"Inter, -apple-system, sans-serif",
                cursor:'pointer', transition:'all 0.2s',
                background: filter === c ? '#1d1d1f' : '#ffffff',
                color:       filter === c ? '#ffffff' : '#6e6e73',
                border:      filter === c ? '1px solid #1d1d1f' : '1px solid #e5e5e7',
              }}>
              {c}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map((e, i) => (
              <motion.div
                key={e.title + i}
                layout
                initial={{opacity:0, scale:0.95}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:0, scale:0.95}}
                transition={{duration:0.35, delay:i*0.05}}
                onClick={() => setLightbox(e)}
                className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                {/* Real photo */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Tag badge */}
                  <div className="absolute top-3 left-3">
                    <span style={{
                      background:'rgba(29,29,31,0.75)', backdropFilter:'blur(8px)',
                      color:'#00c9a7', fontSize:10, fontWeight:700,
                      padding:'3px 10px', borderRadius:20,
                      fontFamily:"Inter, -apple-system, sans-serif",
                      letterSpacing:'0.06em', textTransform:'uppercase',
                    }}>
                      {e.tag}
                    </span>
                  </div>
                  {/* Expand icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h3 className="font-display text-sm text-primary mb-1 leading-snug">{e.title}</h3>
                  <p className="text-xs font-semibold text-text-mid mb-0.5">{e.college}</p>
                  <p className="text-xs text-text-mid/60 mb-2">📍 {e.location}</p>
                  <p className="text-xs text-text-mid leading-relaxed line-clamp-2">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[['2','MOU Colleges'],['5+','Events Conducted'],['300+','Students Reached'],['7+','POCs Delivered']].map(([num,label]) => (
            <div key={label} className="bg-primary rounded-2xl p-5 text-center">
              <div className="font-display text-3xl text-teal mb-1">{num}</div>
              <div className="text-white/50 text-xs uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{background:'rgba(0,0,0,0.92)', backdropFilter:'blur(12px)'}}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{scale:0.88, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.88, opacity:0}}
              transition={{duration:0.3, ease:[0.22,1,0.36,1]}}
              className="relative max-w-3xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                style={{position:'absolute', top:-44, right:0, background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.6)', fontSize:32, lineHeight:1}}
              >×</button>
              <img src={lightbox.img} alt={lightbox.title} className="w-full rounded-2xl shadow-2xl" />
              <div className="mt-4 px-1">
                <div className="flex items-center gap-2 mb-1">
                  <span style={{
                    background:'rgba(0,201,167,0.15)', color:'#00c9a7',
                    fontSize:10, fontWeight:700, padding:'3px 10px',
                    borderRadius:20, letterSpacing:'0.08em', textTransform:'uppercase',
                    fontFamily:"Inter, -apple-system, sans-serif",
                  }}>{lightbox.tag}</span>
                </div>
                <h3 className="font-display text-white text-xl mb-1">{lightbox.title}</h3>
                <p className="text-white/60 text-sm font-medium">{lightbox.college}</p>
                <p className="text-white/40 text-xs mt-0.5 mb-3">📍 {lightbox.location}</p>
                <p className="text-white/60 text-sm leading-relaxed">{lightbox.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
