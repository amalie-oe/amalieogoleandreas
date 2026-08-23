import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const lighthouse = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'>
  <rect width='180' height='180' fill='#38414F'/>
  <polygon points='90,46 170,18 170,74' fill='#D8D8D6' opacity='0.13'/>
  <polygon points='90,46 10,18 10,74' fill='#D8D8D6' opacity='0.09'/>
  <ellipse cx='90' cy='150' rx='54' ry='11' fill='#45505F'/>
  <polygon points='79,60 101,60 108,146 72,146' fill='#D8D8D6'/>
  <polygon points='76.1,96 103.9,96 105.1,110 74.9,110' fill='#67717E'/>
  <polygon points='73.8,124 106.2,124 107.4,138 72.6,138' fill='#67717E'/>
  <rect x='73' y='54' width='34' height='7' rx='2' fill='#45505F'/>
  <rect x='80' y='38' width='20' height='17' fill='#45505F'/>
  <circle cx='90' cy='46' r='14' fill='#F2EFE8' opacity='0.35'/>
  <circle cx='90' cy='46' r='5.5' fill='#F7F3EA'/>
  <polygon points='77,38 90,24 103,38' fill='#67717E'/>
  <circle cx='90' cy='22' r='2.6' fill='#ADA69B'/>
</svg>`;

const dataUri = `data:image/svg+xml,${encodeURIComponent(lighthouse)}`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <img width="180" height="180" src={dataUri} />
      </div>
    ),
    { ...size }
  );
}
