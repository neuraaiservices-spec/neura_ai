import React from 'react';
import { motion } from 'framer-motion';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const partners = [
  { abbr:'HCE', name:'Hindustan College of Engineering', location:'Chennai, Tamil Nadu', type:'MOU Signed', events:['AI/ML Workshop','Healthcare Seminar'] },
  { abbr:'SMIT', name:'Sikkim Manipal Institute of Technology', location:'Sikkim, India', type:'MOU Signed', events:['Healthcare AI Seminar','Student R&D Session'] },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.6}} className="mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-4 py-1.5 rounded-full mb-4">MOU Partners</div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className="font-display text-3xl lg:text-5xl text-primary max-w-lg leading-tight">Colleges That Trust Neura AI</h2>
            <p className="text-gray-500 text-sm lg:text-base max-w-sm">Memorandums of Understanding signed with leading institutions — building lasting academic-industry partnerships.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {partners.map((p,i) => (
            <motion.div key={p.abbr} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}} transition={{duration:0.6,delay:i*0.15}}
              className="bg-cream rounded-2xl p-6 lg:p-8 flex gap-5 items-start border border-transparent hover:border-teal/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                <span className="font-display text-teal text-sm font-bold">{p.abbr}</span>
              </div>
              <div className="flex-1">
                <div className="inline-block bg-teal/10 text-teal text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">{p.type}</div>
                <h3 className="font-display text-lg text-primary mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.location}</p>
                <div className="flex flex-wrap gap-2">
                  {p.events.map(e => <span key={e} className="bg-white text-gray-600 text-xs font-medium px-3 py-1 rounded-full border border-gray-200">{e}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
          className="bg-primary rounded-2xl p-8 text-center">
          <div className="text-teal text-xs font-bold uppercase tracking-widest mb-3">For Institutions</div>
          <h3 className="font-display text-white text-2xl lg:text-3xl mb-3">Want to Partner with Neura AI?</h3>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-6">We're actively looking for colleges that want to bring industry-level AI and healthcare R&D training to their students.</p>
          <button onClick={() => scrollTo('register')} className="bg-teal text-primary font-bold px-8 py-3 rounded-xl text-sm hover:bg-white transition-all">
            Contact Our Partnership Team →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
