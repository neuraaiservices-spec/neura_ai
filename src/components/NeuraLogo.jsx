import React from 'react';
import logoIcon from '../assets/NeuraLogo.svg';

// Real Neura AI icon mark (SVG) + styled wordmark text
// variant: 'white' for dark backgrounds, 'dark' for light backgrounds
export default function NeuraLogo({ variant = 'white', height = 36, showWordmark = true }) {
  const isWhite = variant === 'white';
  const iconSize = height;

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.28 }}>
      <img
        src={logoIcon}
        alt="Neura AI"
        style={{
          height: iconSize,
          width: iconSize,
          display: 'block',
          objectFit: 'contain',
          // SVG is solid black — invert to white when on dark backgrounds
          filter: isWhite ? 'invert(1) brightness(1.4)' : 'none',
        }}
        draggable={false}
      />
      {showWordmark && (
        <span
          style={{
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 700,
            fontSize: Math.round(height * 0.58),
            letterSpacing: '-0.02em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: isWhite ? '#ffffff' : '#1d1d1f' }}>Neura</span>
          <span style={{ color: '#00c9a7' }}>AI</span>
        </span>
      )}
    </span>
  );
}
