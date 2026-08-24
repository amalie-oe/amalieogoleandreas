"use client";

import { useScrollY } from "./useScroll";

const LAMP = { x: 600, y: 210 };
const R = 1700; // strålens lengde (går utenfor viewBox)
const HALF = 18; // halv kjeglevinkel i grader

function edge(deg) {
  const r = (deg * Math.PI) / 180;
  return `${LAMP.x + R * Math.cos(r)},${LAMP.y + R * Math.sin(r)}`;
}

export default function Lighthouse() {
  const y = useScrollY();
  // cos gir start med strålen mot venstre (ingen flom) ved toppen,
  // deretter sveiper den mot deg (flom) og videre mot høyre når du skroller.
  const s = Math.cos(y / 260); // 1 = venstre, 0 = mot deg, -1 = høyre
  const phi = 90 + s * 70; // 20..160 grader (90 = rett mot betrakteren)
  const flood = Math.max(0, 1 - Math.abs(phi - 90) / 32) * 0.92;

  const beam = `${LAMP.x},${LAMP.y} ${edge(phi - HALF)} ${edge(phi + HALF)}`;

  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient
          id="beamGrad"
          cx="600"
          cy="210"
          r="1200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#EAF2F8" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#EAF2F8" stopOpacity="0.35" />
          <stop offset="1" stopColor="#EAF2F8" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="floodGrad"
          cx="600"
          cy="300"
          r="640"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#EAF2F8" stopOpacity="1" />
          <stop offset="1" stopColor="#EAF2F8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F2EFE8" stopOpacity="0.95" />
          <stop offset="1" stopColor="#F2EFE8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Lysstråle bak tårnet */}
      <polygon points={beam} fill="url(#beamGrad)" />

      {/* Grunn / skjær */}
      <ellipse cx="600" cy="450.8" rx="70" ry="21" fill="#FFFFFF" />
      <ellipse cx="552.2" cy="469.8" rx="52" ry="23.8" fill="#3D5A80" />
      <ellipse cx="663.4" cy="464.8" rx="29.2" ry="16.8" fill="#3D5A80" />

      {/* Tårn */}
      <polygon
        points="580.4,240.8 619.6,240.8 630.8,436.8 569.2,436.8"
        fill="#F2EFE7"
      />
      <polygon
        points="577.32,294 622.68,294 624.08,319.2 575.92,319.2"
        fill="#3D5A80"
      />
      <polygon
        points="573.26,364 626.74,364 628.14,389.2 571.86,389.2"
        fill="#3D5A80"
      />
      <rect x="591.6" y="403.2" width="16.8" height="33.6" rx="8" fill="#3D5A80" />

      {/* Galleri */}
      <rect x="563.6" y="229.6" width="72.8" height="12.6" rx="3" fill="#1B263B" />

      {/* Lanterne-rom */}
      <rect x="577.6" y="190.4" width="44.8" height="39.2" fill="#1B263B" />
      <circle cx="600" cy="210" r="10" fill="#F2EFE8" />
      <circle cx="600" cy="210" r="30" fill="url(#glow)" className="animate-glow" />

      {/* Tak */}
      <polygon points="572,190 600,154 628,190" fill="#3D5A80" />
      <circle cx="600" cy="151" r="6" fill="#F2EFE7" />

      {/* Flomlys som tar over og skjuler fyret når strålen peker mot deg */}
      <rect
        x="0"
        y="0"
        width="1200"
        height="800"
        fill="url(#floodGrad)"
        opacity={flood}
      />
    </svg>
  );
}
