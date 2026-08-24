import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B263B",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 132,
            height: 132,
            borderRadius: "50%",
            border: "3px solid rgba(234,242,248,0.5)",
            color: "#EAF2F8",
            fontSize: 66,
          }}
        >
          <span>A</span>
          <span style={{ color: "#98B4C7", margin: "0 4px", fontSize: 46 }}>
            &
          </span>
          <span>O</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
