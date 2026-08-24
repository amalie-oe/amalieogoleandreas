import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
            width: 380,
            height: 380,
            borderRadius: "50%",
            border: "8px solid rgba(234,242,248,0.5)",
            color: "#EAF2F8",
            fontSize: 190,
          }}
        >
          <span>A</span>
          <span style={{ color: "#98B4C7", margin: "0 12px", fontSize: 130 }}>
            &
          </span>
          <span>O</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
