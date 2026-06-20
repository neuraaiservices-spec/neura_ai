import React from 'react';
import logoWhite from '../assets/Neura Logo-3.svg';
import logoDark from '../assets/Neura Logo-4.svg';

// variant: 'white' for dark backgrounds, 'dark' for light backgrounds
export default function NeuraLogo({ variant = 'white', height = 36 }) {
  const src = variant === 'white' ? logoWhite : logoDark;
  // Logo is 643x297, so width = height * (643/297)
  const width = Math.round(height * (643 / 297));
  return (
    <img
      src={src}
      alt="Neura AI — Affordable Intelligence"
      style={{
        height: height,
        width: 'auto',
        display: 'block',
        objectFit: 'contain',
        maxWidth: width,
      }}
      draggable={false}
    />
  );
}