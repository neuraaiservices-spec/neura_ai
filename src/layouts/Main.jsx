import React, { useState, useEffect } from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Loader from '../components/Loader';
import WorkshopBanner from '../components/WorkshopBanner';

export default function Main() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Reduce loader time — 2s is enough
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main style={{minHeight:'100vh'}}>
      {loading
        ? <Loader />
        : (
          // No animate-fade-in — it starts at opacity:0 causing the gap
          <div style={{opacity:1}}>
            <WorkshopBanner />
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        )
      }
    </main>
  );
}
