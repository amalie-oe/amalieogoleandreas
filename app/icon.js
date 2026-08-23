import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

function LighthouseIcon({ px }) {
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="180" height="180" fill="#38414F" />

      {/* Holme */}
      <ellipse cx="90" cy="150" rx="30" ry="8" fill="#CBC4B9" />

      {/* Tårn */}
      <polygon
        points="81.08,60.86 98.92,60.86 104.01,150.04 75.99,150.04"
        fill="#CBC4B9"
      />
      {/* Striper */}
      <polygon
        points="79.68,85.07 100.32,85.07 100.96,96.53 79.04,96.53"
        fill="#67717E"
      />
      <polygon
        points="77.83,116.92 102.17,116.92 102.80,128.38 77.20,128.38"
        fill="#67717E"
      />
      {/* Dør */}
      <rect x="86.18" y="134.75" width="7.64" height="15.29" rx="3.64" fill="#45505F" />

      {/* Galleri */}
      <rect x="73.44" y="55.76" width="33.12" height="5.73" rx="1.37" fill="#45505F" />

      {/* Lanterne-rom */}
      <rect x="79.81" y="37.93" width="20.38" height="17.84" fill="#45505F" />

      {/* Glød i lykta (ingen stråle ut) */}
      <circle cx="90" cy="46.85" r="11" fill="#F2EFE8" opacity="0.18" />
      <circle cx="90" cy="46.85" r="7.5" fill="#F2EFE8" opacity="0.32" />
      <circle cx="90" cy="46.85" r="4.6" fill="#F7F3EA" />

      {/* Tak */}
      <polygon points="77.27,37.75 90,21.37 102.73,37.75" fill="#67717E" />
      <circle cx="90" cy="20" r="2.73" fill="#ADA69B" />

      {/* Skjær foran */}
      <ellipse cx="62" cy="158" rx="24" ry="7.5" fill="#67717E" />
      <ellipse cx="124" cy="156" rx="19" ry="6" fill="#67717E" />
    </svg>
  );
}

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <LighthouseIcon px={512} />
      </div>
    ),
    { ...size }
  );
}
