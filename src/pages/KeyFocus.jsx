import React from 'react';
import { motion } from 'framer-motion';
import brain from '../assets/back.webp';
import cardio from '../assets/cardio.webp';
import kidney from '../assets/kidney.webp';
import heartIcon from '../assets/heart.webp';
import skinImg from '../assets/skin.webp';
import dermatology from '../assets/dermatology.webp';
import lungs from '../assets/lungs.webp';
import hair from '../assets/hair.webp';
import hair2 from '../assets/hair2.webp';
import hairFall from '../assets/hairFall.webp';
import hairGrowthIcon from '../assets/hairGrowthIcon.webp';

const areas = [
  { bg: brain,       frontIcon: '🧠',          title: 'Neurology',       desc: 'Predict and prevent strokes, epilepsy, and neurodegeneration using AI.' },
  { bg: cardio,      frontIcon: heartIcon,      isImg: true, title: 'Cardiology', desc: 'Detect cardiovascular disease before symptoms appear.' },
  { bg: kidney,      frontIcon: '🫘',           title: 'Nephrology',      desc: 'Predictive analytics for kidney health monitoring.' },
  { bg: dermatology, frontIcon: skinImg,         isImg: true, title: 'Dermatology', desc: 'AI-based skin anomaly classification and tracking.' },
  { bg: lungs,       frontIcon: '🫁',           title: 'Pulmonology',     desc: 'Early warning systems for chronic respiratory conditions.' },
  { bg: hair,        frontIcon: hairGrowthIcon,  isImg: true, title: 'Hair Growth', desc: 'Stimulating natural hair regeneration through AI-guided therapy.' },
  { bg: hair2,       frontIcon: hairFall,        isImg: true, title: 'Chemo Hair Loss', desc: 'Helping cancer patients retain their identity during treatment.' },
];

export default function KeyFocus() {
  return (
    <section id="focus" className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.6}} className="mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-4 py-1.5 rounded-full mb-4">Research Focus Areas</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-display text-3xl lg:text-5xl text-white max-w-xl leading-tight">What we're building solutions for.</h2>
            <p className="text-white/50 text-sm lg:text-base max-w-sm leading-relaxed">Medical areas we work in.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area,i) => (
            <motion.div key={area.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}} transition={{duration:0.5,delay:i*0.08}}
              className="flip-card h-52 cursor-pointer">
              <div className="flip-card-inner h-full">
                <div className="flip-card-front bg-primary-mid border border-white/10 flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    {area.isImg
                      ? <img src={area.frontIcon} alt={area.title} className="w-6 h-6 object-contain" />
                      : <span className="text-2xl">{area.frontIcon}</span>}
                  </div>
                  <p className="text-white text-sm font-semibold text-center leading-tight">{area.title}</p>
                </div>
                <div className="flip-card-back relative flex flex-col items-center justify-center gap-2 p-4">
                  <img src={area.bg} alt={area.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/70" />
                  <p className="relative z-10 text-teal text-sm font-bold text-center">{area.title}</p>
                  <p className="relative z-10 text-white/80 text-xs text-center leading-relaxed">{area.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-white/30 text-xs text-center mt-6">Hover over each card to learn more</p>
      </div>
    </section>
  );
}
