import React from 'react';

// Uniform medical line-icon set — matches the reference style (organ illustration +
// small detail/indicator accent), consistent 1.8 stroke weight across every icon,
// round caps/joins, no fills except tiny accent dots. Built on a 32x32 canvas.

const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

export function NeurologyIcon({ size = 32, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ color }}>
      {/* Brain outline */}
      <path {...s} d="M12.5 5.2c-2.4.2-4.3 2.2-4.3 4.6 0 .6.1 1.1.3 1.6-1.7.8-2.9 2.5-2.9 4.5 0 1.8 1 3.4 2.5 4.2-.2.5-.3 1-.3 1.5 0 2.4 2 4.4 4.4 4.4.5 0 1-.1 1.5-.3" />
      <path {...s} d="M17 5.5v18.7" />
      <path {...s} d="M12 10.2c.9-.5 1.9-.5 2.8.1" />
      <path {...s} d="M11 14.8c1-.4 2.1-.3 2.9.4" />
      <path {...s} d="M12.2 19.6c.9.5 1.9.5 2.8-.1" />
      {/* Right hemisphere */}
      <path {...s} d="M17 5.5c2.3-.5 4.5 1 4.9 3.3.1.6.1 1.2 0 1.7 1.8.6 3.1 2.3 3.1 4.3 0 1.7-.9 3.2-2.3 4 .2.5.3 1 .3 1.5 0 2.2-1.8 4-4 4" />
      {/* Pulse alert accent */}
      <circle cx="24.5" cy="9" r="3.6" {...s} opacity="0.9" />
      <path d="M22.7 9h1l.5 1.4.7-2.5.6 1.1h1" {...s} strokeWidth="1.4" opacity="0.9" />
    </svg>
  );
}

export function CardiologyIcon({ size = 32, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ color }}>
      {/* Heart organ outline (anatomical, matches reference) */}
      <path {...s} d="M16.2 8.4c-.5-2-2.3-3.4-4.4-3.2-2.6.2-4.5 2.5-4.3 5.2.3 3.6 2.3 6.6 3.1 9.7.6 2.3.5 4.7-.4 6.9" />
      <path {...s} d="M16.2 8.4c.6-1.9 2.4-3.1 4.4-2.9 2.5.3 4.3 2.7 3.9 5.3-.5 3.5-2.7 6.3-3.7 9.3" />
      <path {...s} d="M11.8 6.4l.8 2.6-1.6.6 2.2 2.4" />
      <path {...s} d="M9.2 20.4l1.6-2.2 1.4 1.4" />
      {/* Pulse + alert accent (matches reference composition) */}
      <circle cx="22.5" cy="18" r="5" {...s} opacity="0.9" />
      <path d="M19 18.2h1.6l.8-2.2 1 4 .9-1.8h1.4" {...s} strokeWidth="1.5" opacity="0.9" />
      <path d="M21.5 11.3l.4 1.3" {...s} strokeWidth="1.4" opacity="0.75" />
    </svg>
  );
}

export function NephrologyIcon({ size = 32, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ color }}>
      {/* Kidney pair (matches reference) */}
      <path {...s} d="M11.3 7.2c-2.7.4-4.5 3.1-4 6.3.3 2.2 1.6 3.7 2.9 5.3 1.2 1.4 1.8 3 1.8 4.8 0 .5 0 1-.1 1.4" />
      <path {...s} d="M11.3 7.2c1.6-.2 3 .5 3.9 1.7" />
      <path {...s} d="M15.9 14.6c0-1.1-.4-2-1.1-2.8" />
      <path {...s} d="M20.7 7.2c2.7.4 4.5 3.1 4 6.3-.3 2.2-1.6 3.7-2.9 5.3-1.2 1.4-1.8 3-1.8 4.8 0 .5 0 1 .1 1.4" />
      <path {...s} d="M20.7 7.2c-1.6-.2-3 .5-3.9 1.7" />
      <path {...s} d="M16 8.9v5.7" />
      {/* Branch detail like reference's vessel branches */}
      <path {...s} strokeWidth="1.3" d="M11.6 11.5l1.6 1.4M20.4 11.5l-1.6 1.4" opacity="0.7" />
    </svg>
  );
}

export function DermatologyIcon({ size = 32, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ color }}>
      {/* Skin/magnifier composition matching the alert-bubble pattern */}
      <circle cx="13" cy="13" r="7.2" {...s} />
      <path {...s} d="M18.1 18.1l5.4 5.4" />
      <circle cx="10.5" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.8" cy="9.8" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="14.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="11.2" cy="15.2" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="13.6" cy="12" r="0.4" fill="currentColor" stroke="none" />
      <path d="M22 9.6l.5-1.4.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5z" {...s} strokeWidth="1.3" opacity="0.85" />
    </svg>
  );
}

export function PulmonologyIcon({ size = 32, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ color }}>
      {/* Lungs (matches reference organ-illustration style) */}
      <path {...s} d="M16 6.5v6.2" />
      <path {...s} d="M16 12.7c-1.2-2.2-3.4-3.4-5.6-3-3.4.6-5.1 4.4-4.4 8.6.5 3.4 2.3 6.4 4.6 6.4 2 0 2.8-1.3 2.8-3.5v-8.5z" />
      <path {...s} d="M16 12.7c1.2-2.2 3.4-3.4 5.6-3 3.4.6 5.1 4.4 4.4 8.6-.5 3.4-2.3 6.4-4.6 6.4-2 0-2.8-1.3-2.8-3.5v-8.5z" />
      <path {...s} d="M12.5 7.5c-1.3-.8-2.6-1-2.6-2.6" />
      <path {...s} d="M19.5 7.5c1.3-.8 2.6-1 2.6-2.6" />
      {/* Alert accent */}
      <circle cx="24.5" cy="11.5" r="3.4" {...s} opacity="0.9" />
      <path d="M24.5 9.8v1.6M24.5 12.8h.02" {...s} strokeWidth="1.6" opacity="0.9" />
    </svg>
  );
}

export function HairGrowthIcon({ size = 32, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ color }}>
      {/* Scalp + growth strands (matches illustration style) */}
      <path {...s} d="M8 24c-.7-4.3-.7-8.8 0-13.1C8.7 7 11.1 4 15.3 4h1.4c4.2 0 6.6 3 7.3 6.9.7 4.3.7 8.8 0 13.1" />
      <path {...s} d="M11.2 24.5c-.4-3.4-.4-7 0-10.5" />
      <path {...s} d="M16 25c-.4-3.8-.4-7.8 0-11.6" />
      <path {...s} d="M20.8 24.5c.4-3.4.4-7 0-10.5" />
      {/* Sparkle accent indicating growth/regeneration */}
      <path d="M24.5 7.5l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z" {...s} strokeWidth="1.3" opacity="0.85" />
    </svg>
  );
}

export function HairRecoveryIcon({ size = 32, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ color }}>
      {/* Scalp outline with dashed strands = recovery / regrowth-in-progress */}
      <path {...s} d="M8.5 24.2c-.8-4.4-.8-9 0-13.5C9.4 6.9 11.9 4 16.1 4s6.7 2.9 7.6 6.7c.8 4.5.8 9.1 0 13.5" />
      <path {...s} strokeDasharray="2.4 2.6" d="M11.6 24.6c-.4-3.6-.4-7.4 0-11" />
      <path {...s} strokeDasharray="2.4 2.6" d="M16.1 25.1c-.4-4-.4-8.3 0-12.4" />
      <path {...s} strokeDasharray="2.4 2.6" d="M20.6 24.6c.4-3.6.4-7.4 0-11" />
      {/* Care/plus accent */}
      <circle cx="24.5" cy="9.5" r="3.4" {...s} opacity="0.9" />
      <path d="M24.5 8v3M23 9.5h3" {...s} strokeWidth="1.5" opacity="0.9" />
    </svg>
  );
}

export const ICONS = {
  Neurology: NeurologyIcon,
  Cardiology: CardiologyIcon,
  Nephrology: NephrologyIcon,
  Dermatology: DermatologyIcon,
  Pulmonology: PulmonologyIcon,
  'Hair Growth': HairGrowthIcon,
  'Chemo Hair Loss': HairRecoveryIcon,
};
