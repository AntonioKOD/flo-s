import { ImageResponse } from "next/og"

export const alt = "Flo's Pizza - Fresh Pizza in Brockton, MA"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #C1272D 0%, #8B1A22 50%, #C1272D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Decorative pizzas */}
        <div style={{ position: "absolute", top: 40, left: 60, fontSize: 80, opacity: 0.15, display: "flex" }}>
          🍕
        </div>
        <div style={{ position: "absolute", bottom: 50, right: 70, fontSize: 80, opacity: 0.15, display: "flex" }}>
          🍕
        </div>
        <div style={{ position: "absolute", top: 80, right: 120, fontSize: 50, opacity: 0.1, display: "flex" }}>
          🍕
        </div>

        {/* Main text */}
        <div
          style={{
            color: "white",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          Flo&apos;s Pizza
        </div>
        <div
          style={{
            color: "#FFF5E1",
            fontSize: 32,
            marginTop: 16,
            opacity: 0.9,
            display: "flex",
          }}
        >
          Brockton, MA
        </div>
        <div
          style={{
            color: "#FFF5E1",
            fontSize: 22,
            marginTop: 12,
            opacity: 0.7,
            display: "flex",
          }}
        >
          Fresh Pizza &bull; Catering &bull; Breakfast &bull; Order Online
        </div>
      </div>
    ),
    { ...size }
  )
}
