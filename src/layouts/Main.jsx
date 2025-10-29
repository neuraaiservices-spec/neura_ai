import React, { useState, useEffect } from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Loader from '../components/Loader';

export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="animate-fade-in">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </main>
  );
}
