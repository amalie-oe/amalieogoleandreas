import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple-ikon: monogram "A & O" i Playfair (samme & som på forsiden)
export default function AppleIcon() {
  const playfair = readFileSync(
    join(process.cwd(), "app/PlayfairDisplay.ttf")
  );

  const letter = {
    color: "#E7E3DC",
    fontSize: 75,
    fontFamily: "Playfair",
    lineHeight: 1,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#38414F",
        }}
      >
        <span style={letter}>A</span>
        <span
          style={{
            color: "#ADA69B",
            fontSize: 40,
            fontFamily: "Playfair",
            margin: "0 1px",
          }}
        >
          &
        </span>
        <span style={letter}>O</span>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair", data: playfair, weight: 400, style: "normal" },
      ],
    }
  );
}
