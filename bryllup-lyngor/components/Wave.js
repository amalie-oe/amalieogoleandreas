"use client";

import { useScrollY } from "./useScroll";
import { palette } from "./palette";

const WAVELENGTH = 340;

function waveTile(color, height, amp) {
  const half = WAVELENGTH / 2;
  const q = half / 2;
  const d = `M0 ${amp} q ${q} ${-amp} ${half} 0 q ${q} ${amp} ${half} 0 L ${WAVELENGTH} ${height} L 0 ${height} Z`;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${WAVELENGTH}' height='${height}' viewBox='0 0 ${WAVELENGTH} ${height}' preserveAspectRatio='none'><path d='${d}' fill='${color}'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

export default function Wave({
  from,
  to,
  accent = palette.slate,
  height = 110,
}) {
  const y = useScrollY();
  const back = -((y * 0.28) % WAVELENGTH);
  const front = -((y * 0.13) % WAVELENGTH);

  const layer = (image, offset, opacity, amp) => ({
    backgroundImage: image,
    backgroundRepeat: "repeat-x",
    backgroundSize: `${WAVELENGTH}px 100%`,
    backgroundPositionX: `${offset}px`,
    backgroundPositionY: "bottom",
    opacity,
  });

  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden"
      style={{ height, backgroundColor: from }}
    >
      <div
        className="absolute inset-0"
        style={layer(waveTile(accent, height, 30), back, 0.4, 30)}
      />
      <div
        className="absolute inset-0"
        style={layer(waveTile(to, height, 22), front, 1, 22)}
      />
    </div>
  );
}
