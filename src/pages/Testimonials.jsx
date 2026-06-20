import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import videoPlay from '../assets/videos/Video Play button orange.json';

const items = [
  { video: video1, name:'Student Testimonial 1', program:'R&D Training', college:'Chennai', quote:'This platform gave me real-world skills and confidence to grow. The journey has been incredible!' },
  { video: video2, name:'Student Testimonial 2', program:'NeuraEDU Workshop', college:'Tamil Nadu', quote:'I built amazing projects I never thought possible. The hands-on approach is unmatched.' },
  { video: video3, name:'Student Testimonial 3', program:'Project Support', college:'India', quote:'Through 1:1 mentorship, I gained insights that truly prepared me for the healthcare industry.' },
  { video: video4, name:'Student Testimonial 4', program:'R&D Training', college:'Online', quote:'A transformative journey — real R&D experience that elevated my skills and career prospects.' },
];

function NetflixCard({ item, idx, onPlay }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) { videoRef.current.play(); }
  };
  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <motion.div
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, amount:0.2 }}
      transition={{ duration:0.5, delay:idx*0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio:'16/9' }}
      onClick={() => onPlay(item.video)}
    >
      {/* Video thumbnail */}
      <video
        ref={videoRef}
        src={item.video}
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark gradient always */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Play button — visible when not hovered */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-14 h-14"><Lottie animationData={videoPlay} loop /></div>
      </div>

      {/* Hover overlay — Netflix-style info */}
      <div className={`absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-teal text-primary text-xs font-bold px-2 py-0.5 rounded-full">{item.program}</span>
            <span className="text-white/50 text-xs">{item.college}</span>
          </div>
          <p className="text-white text-xs leading-relaxed italic">"{item.quote}"</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center">
              <span className="text-teal text-xs font-bold">{item.name[0]}</span>
            </div>
            <span className="text-white/70 text-xs font-semibold">{item.name}</span>
          </div>
        </div>
      </div>

      {/* Top badge */}
      <div className="absolute top-3 left-3">
        <span className="bg-black/60 backdrop-blur-sm text-white/70 text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10">
          ▶ Student Story
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [open, setOpen] = useState(null);

  const openModal = (v) => { setOpen(v); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setOpen(null); document.body.style.overflow = 'auto'; };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Netflix-style header */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-4 py-1.5 rounded-full mb-4">From our students</div>
            <h2 className="font-display text-3xl lg:text-4xl text-white">What students say.</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/40 text-sm font-medium">
            <span>Hover to preview</span>
            <span>·</span>
            <span>Click to watch</span>
          </div>
        </motion.div>

        {/* Netflix grid — 2x2 on desktop, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          {items.map((item, i) => (
            <NetflixCard key={i} item={item} idx={i} onPlay={openModal} />
          ))}
        </div>

        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.5}}
          className="text-white/25 text-xs text-center mt-6">
          Hover to preview · Click to watch full story
        </motion.p>

        {/* Modal */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeModal}>
              <motion.div initial={{scale:0.85,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.85,opacity:0}} transition={{duration:0.3}}
                className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
                <button onClick={closeModal} className="absolute -top-12 right-0 text-white/70 hover:text-white text-4xl leading-none font-light">×</button>
                <video src={open} controls autoPlay className="w-full rounded-2xl shadow-2xl" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
