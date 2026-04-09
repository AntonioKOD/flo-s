import Link from "next/link"

const pages = [
  { href: "/tv/appetizers", label: "Appetizers", count: "13 items" },
  { href: "/tv/platters", label: "Platters & Trays", count: "14 items · Feeds 20–25" },
  { href: "/tv/brunch", label: "Brunch Catering", count: "10 items" },
]

export default function TVIndex() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100vw; height: 100vh; overflow: hidden; background: #FFF5E1; }

        .tv-index {
          width: 100vw; height: 100vh;
          background: #FFF5E1;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 3vh;
          font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
          padding: 4vw;
        }

        .tv-index-title {
          font-size: clamp(2.5rem, 5vw, 6rem);
          font-weight: 700; color: #1C1C1C; letter-spacing: -0.03em; text-align: center;
        }
        .tv-index-title span { color: #C1272D; }

        .tv-index-sub {
          font-size: clamp(1rem, 1.5vw, 1.6rem);
          color: #6A5B4A; text-align: center;
        }

        .tv-index-grid {
          display: flex; gap: 2vw; flex-wrap: wrap; justify-content: center;
          margin-top: 2vh;
        }

        .tv-index-card {
          display: flex; flex-direction: column; gap: 0.5em;
          background: #fff; border: 2px solid #E4E2DD; border-radius: 12px;
          padding: 3vh 3.5vw; text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          min-width: 280px;
        }
        .tv-index-card:hover { border-color: #C1272D; box-shadow: 0 4px 20px rgba(193,39,45,0.12); }

        .tv-index-card-label {
          font-size: clamp(1.2rem, 2vw, 2.2rem);
          font-weight: 700; color: #1C1C1C; letter-spacing: -0.02em;
        }

        .tv-index-card-count {
          font-size: clamp(0.75rem, 1.1vw, 1.2rem);
          color: #6A5B4A;
        }

        .tv-index-card-url {
          font-size: clamp(0.7rem, 0.9vw, 1rem);
          color: #C1272D; margin-top: 0.5em; font-weight: 500;
        }
      `}</style>

      <div className="tv-index">
        <div className="tv-index-title">Flo&apos;s <span>Pizza</span></div>
        <div className="tv-index-sub">TV Menu Display — Select a screen to open</div>

        <div className="tv-index-grid">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} className="tv-index-card">
              <div className="tv-index-card-label">{p.label}</div>
              <div className="tv-index-card-count">{p.count}</div>
              <div className="tv-index-card-url">flospizza.com{p.href}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
