import Link from "next/link"

const pages = [
  { href: "/tv/pizza", label: "Pizza Menu", count: "20 items", icon: "🍕", color: "#C1272D" },
  { href: "/tv/wings", label: "Wings & Sides", count: "14 items", icon: "🍗", color: "#B05A00" },
  { href: "/tv/subs", label: "Subs & Sandwiches", count: "14 items", icon: "🥖", color: "#214A32" },
  { href: "/tv/appetizers", label: "Catering — Appetizers", count: "13 items", icon: "🥗", color: "#C1272D" },
  { href: "/tv/platters", label: "Catering — Platters", count: "14 items · Feeds 20–25", icon: "🍽️", color: "#B05A00" },
  { href: "/tv/brunch", label: "Catering — Brunch", count: "10 items", icon: "🥞", color: "#214A32" },
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

        .tv-index-header { text-align: center; }

        .tv-index-title {
          font-size: clamp(2.5rem, 5vw, 6rem);
          font-weight: 700; color: #1C1C1C; letter-spacing: -0.03em;
          font-family: var(--font-righteous), sans-serif;
        }
        .tv-index-title span { color: #C1272D; }

        .tv-index-sub {
          font-size: clamp(0.85rem, 1.3vw, 1.5rem);
          color: #6A5B4A; margin-top: 0.5em;
        }

        .tv-index-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5vw;
          width: 100%;
          max-width: 1400px;
        }

        .tv-index-card {
          display: flex; align-items: center; gap: 1.2em;
          background: #fff; border: 2px solid #E4E2DD; border-radius: 14px;
          padding: 2.5vh 2vw; text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .tv-index-card:hover {
          border-color: var(--card-accent, #C1272D);
          box-shadow: 0 6px 24px rgba(193,39,45,0.12);
          transform: translateY(-2px);
        }

        .tv-index-card-icon {
          font-size: clamp(1.8rem, 3vw, 3.5rem);
          flex-shrink: 0;
        }

        .tv-index-card-text { display: flex; flex-direction: column; gap: 0.25em; }

        .tv-index-card-label {
          font-size: clamp(0.9rem, 1.4vw, 1.6rem);
          font-weight: 700; color: #1C1C1C; letter-spacing: -0.01em;
        }

        .tv-index-card-count {
          font-size: clamp(0.65rem, 0.9vw, 1rem);
          color: #6A5B4A;
        }

        .tv-index-card-url {
          font-size: clamp(0.6rem, 0.75vw, 0.85rem);
          color: #C1272D; margin-top: 0.3em; font-weight: 500;
        }

        .tv-index-footer {
          font-size: clamp(0.7rem, 1vw, 1.1rem);
          color: #6A5B4A; text-align: center;
        }

        .tv-index-footer span { color: #C1272D; font-weight: 600; }
      `}</style>

      <div className="tv-index">
        <div className="tv-index-header">
          <div className="tv-index-title">Flo&apos;s <span>Pizza</span></div>
          <div className="tv-index-sub">TV Menu Display — Select a screen · Auto-rotates every 15 seconds</div>
        </div>

        <div className="tv-index-grid">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} className="tv-index-card">
              <div className="tv-index-card-icon">{p.icon}</div>
              <div className="tv-index-card-text">
                <div className="tv-index-card-label">{p.label}</div>
                <div className="tv-index-card-count">{p.count}</div>
                <div className="tv-index-card-url">flospizza.com{p.href}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="tv-index-footer">
          Order Online: <span>flospizza.kwickmenu.com</span> &nbsp;&middot;&nbsp; (774) 480-5155 &nbsp;&middot;&nbsp; 750 Centre St, Brockton MA
        </div>
      </div>
    </>
  )
}
