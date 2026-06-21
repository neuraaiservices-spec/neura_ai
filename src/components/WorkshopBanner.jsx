import React, { useState } from 'react';

export default function WorkshopBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #0066cc, #00c9a7)',
      padding: '10px 16px',
      position: 'relative',
      zIndex: 60,
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 12, flexWrap: 'wrap', textAlign: 'center',
      }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'white', fontFamily: "Inter,-apple-system,sans-serif" }}>
          🤖 AI in Healthcare Workshop — 18 July, IITM Research Park
        </span>
        <a href="/workshop-july18" style={{
          background: 'white', color: '#0066cc',
          fontSize: 12, fontWeight: 700,
          padding: '5px 16px', borderRadius: 20,
          textDecoration: 'none',
          fontFamily: "Inter,-apple-system,sans-serif",
        }}>Register →</a>
      </div>
      <button onClick={() => setShow(false)} style={{
        position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
        background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
        fontSize: 16, cursor: 'pointer', lineHeight: 1,
      }}>✕</button>
    </div>
  );
}
