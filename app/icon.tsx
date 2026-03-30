import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

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
          background: "#0b0b0b",
          color: "#f7f4ef",
          borderRadius: "16px",
          fontSize: 29,
          fontWeight: 600,
          letterSpacing: "0.08em",
          fontFamily: "serif"
        }}
      >
        NC
      </div>
    ),
    {
      ...size
    }
  );
}
