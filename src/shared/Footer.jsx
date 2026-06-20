import React from 'react';
import NeuraLogo from '../components/NeuraLogo';

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-3">
              <NeuraLogo variant="white" height={68} />
            </div>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-5">Affordable Intelligence</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
              We develop affordable medical solutions — devices and software for diagnosis and treatment. NeuraEDU, our education division, trains engineering students in medical R&D.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-white/5 border border-white/10 text-white/40 px-3 py-1.5 rounded-full">StartupTN Recognised</span>
              <span className="text-xs bg-white/5 border border-white/10 text-white/40 px-3 py-1.5 rounded-full">MSME Registered</span>
            </div>
            <a href="https://wa.me/918778171529" target="_blank" rel="noreferrer"
              className="wa-pulse inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#1ebe5d] transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">NeuraEDU</h4>
            <ul className="flex flex-col gap-3">
              {['Credit-Based Workshop','R&D Training Program','POC & Project Support','Research Internship','Research Article Help','Webinars & Seminars'].map(item => (
                <li key={item}><button onClick={() => scrollTo('programs')} className="text-xs text-white/50 hover:text-teal transition-colors text-left">{item}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {[['about','About Neura AI'],['poc','R&D Projects'],['partners','Partners'],['events','Events'],['testimonials','Student Stories'],['register','Register']].map(([id,label]) => (
                <li key={id}><button onClick={() => scrollTo(id)} className="text-xs text-white/50 hover:text-teal transition-colors text-left">{label}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:neuraeduservices@gmail.com" className="text-xs text-white/50 hover:text-teal transition-colors break-all">neuraeduservices@gmail.com</a></li>
              <li><a href="mailto:neuraaiservices@gmail.com" className="text-xs text-white/50 hover:text-teal transition-colors break-all">neuraaiservices@gmail.com</a></li>
              <li><a href="tel:+918778171529" className="text-xs text-white/50 hover:text-teal transition-colors">+91 87781 71529</a></li>
              <li className="text-xs text-white/30">Bangalore, Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">© 2025 Neura AI — Affordable Intelligence. All rights reserved.</p>
          <p className="text-xs text-white/15">StartupTN · MSME Registered · Bangalore, Karnataka</p>
        </div>
      </div>
    </footer>
  );
}
