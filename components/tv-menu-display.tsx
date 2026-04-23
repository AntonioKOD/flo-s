"use client"

import { useEffect, useState } from "react"

type Price = {
  label?: string
  amount: number
}

type MenuItem = {
  name: string
  description?: string
  prices: Price[]
  note?: string
  popular?: boolean
}

type Props = {
  title: string
  subtitle?: string
  items: MenuItem[]
  badge?: string
}

function useClock() {
  const [time, setTime] = useState("")
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 10_000)
    return () => clearInterval(id)
  }, [])
  return time
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price)

function formatPrices(prices: Price[]): string {
  return prices
    .map((p) => (p.label ? `${p.label} ${formatPrice(p.amount)}` : formatPrice(p.amount)))
    .join("   ·   ")
}

export default function TVMenuDisplay({ title, subtitle, items, badge = "Daily Menu" }: Props) {
  const half = Math.ceil(items.length / 2)
  const time = useClock()
  const col1 = items.slice(0, half)
  const col2 = items.slice(half)
  // Show descriptions only when columns are short enough to have breathing room
  const showDescriptions = half <= 7

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #111110;
        }

        .tv-wrap {
          width: 100vw;
          height: 100vh;
          background: #111110;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: var(--font-geist-sans), 'Geist', ui-sans-serif, system-ui, sans-serif;
        }

        /* ── HEADER ── */
        .tv-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.6vh 3.5vw;
          border-bottom: 1px solid #252523;
          flex-shrink: 0;
        }

        .tv-brand {
          display: flex;
          align-items: center;
          gap: 1.1em;
        }

        .tv-brand-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #C1272D;
          flex-shrink: 0;
        }

        .tv-brand-name {
          font-size: clamp(1.5rem, 2.5vw, 3.2rem);
          font-weight: 700;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          line-height: 1;
          font-family: var(--font-righteous), var(--font-geist-sans), sans-serif;
        }

        .tv-brand-name span { color: #C1272D; }

        .tv-brand-divider {
          width: 1px;
          height: clamp(1.4rem, 2.2vw, 2.8rem);
          background: #252523;
          flex-shrink: 0;
        }

        .tv-brand-tag {
          font-size: clamp(0.65rem, 0.9vw, 1.05rem);
          color: #555450;
          line-height: 1.6;
        }

        .tv-header-right {
          display: flex;
          align-items: center;
          gap: 2em;
        }

        .tv-clock {
          font-size: clamp(1.3rem, 2.2vw, 2.8rem);
          font-weight: 700;
          color: #F5F0E8;
          font-family: var(--font-geist-mono), monospace;
          letter-spacing: 0.06em;
        }

        .tv-header-meta { text-align: right; }

        .tv-header-badge {
          display: inline-block;
          background: #C1272D;
          color: #F5F0E8;
          font-size: clamp(0.5rem, 0.65vw, 0.8rem);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 0.3em 0.7em;
          border-radius: 3px;
          margin-bottom: 0.4em;
        }

        .tv-header-contact {
          font-size: clamp(0.6rem, 0.85vw, 0.95rem);
          color: #555450;
          line-height: 1.6;
        }

        /* ── SECTION TITLE ── */
        .tv-section-header {
          padding: 1.5vh 3.5vw 0;
          flex-shrink: 0;
        }

        .tv-section-title {
          font-size: clamp(2.6rem, 5vw, 6.5rem);
          font-weight: 700;
          color: #F5F0E8;
          letter-spacing: -0.03em;
          line-height: 1;
          font-family: var(--font-righteous), var(--font-geist-sans), sans-serif;
        }

        .tv-section-title-accent { color: #C1272D; }

        .tv-section-subtitle {
          font-size: clamp(0.85rem, 1.2vw, 1.45rem);
          color: #555450;
          margin-top: 0.4em;
          letter-spacing: 0.01em;
        }

        .tv-section-rule {
          margin-top: 1.2vh;
          height: 2px;
          background: linear-gradient(90deg, #C1272D 0%, #C1272D 10%, #252523 45%, transparent 100%);
        }

        /* ── MENU GRID ── */
        .tv-grid {
          flex: 1;
          min-height: 0;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          padding: 1.2vh 3.5vw 1.5vh;
          overflow: hidden;
        }

        .tv-col-sep {
          background: #222220;
          margin: 0 2.5vw;
        }

        .tv-col {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }

        /* ── MENU ITEM ──
           flex:1 distributes column height equally among all items.
           Name + price stack vertically — nothing overflows horizontally. */
        .tv-item {
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 0.2vw;
          border-bottom: 1px solid #1D1D1B;
          overflow: hidden;
          background: #111110;
          animation: fadeInUp 0.35s ease-out both;
        }

        .tv-item:last-child { border-bottom: none; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Name row: name + optional badge, full width */
        .tv-item-name-row {
          display: flex;
          align-items: center;
          gap: 0.6em;
          line-height: 1;
        }

        .tv-item-name {
          font-size: clamp(1.15rem, 1.95vw, 2.5rem);
          font-weight: 600;
          color: #F5F0E8;
          letter-spacing: -0.015em;
          line-height: 1.15;
          /* allow long names to wrap rather than truncate */
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .tv-popular-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25em;
          background: rgba(193,39,45,0.18);
          border: 1px solid rgba(193,39,45,0.4);
          color: #D96060;
          font-size: clamp(0.48rem, 0.58vw, 0.7rem);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.22em 0.55em;
          border-radius: 3px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* Price on its own line — always fully visible */
        .tv-item-price {
          font-size: clamp(1rem, 1.65vw, 2.1rem);
          font-weight: 700;
          color: #C1272D;
          letter-spacing: -0.01em;
          margin-top: 0.15em;
          line-height: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tv-item-desc {
          font-size: clamp(0.72rem, 1vw, 1.25rem);
          color: #444240;
          margin-top: 0.18em;
          line-height: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          flex-shrink: 0;
        }

        /* ── FOOTER ── */
        .tv-footer {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1vh 3.5vw;
          border-top: 1px solid #252523;
        }

        .tv-footer-left {
          display: flex;
          align-items: center;
          gap: 2.5em;
        }

        .tv-footer-item {
          display: flex;
          align-items: center;
          gap: 0.5em;
          font-size: clamp(0.65rem, 0.95vw, 1.15rem);
          color: #444240;
        }

        .tv-footer-icon {
          color: #C1272D;
          width: clamp(11px, 0.9vw, 16px);
          height: clamp(11px, 0.9vw, 16px);
          flex-shrink: 0;
        }

        .tv-footer-order {
          font-size: clamp(0.7rem, 1vw, 1.2rem);
          color: #C1272D;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
      `}</style>

      <div className="tv-wrap">
        {/* Header */}
        <header className="tv-header">
          <div className="tv-brand">
            <div className="tv-brand-dot" />
            <div className="tv-brand-name">Flo&apos;s <span>Pizza</span></div>
            <div className="tv-brand-divider" />
            <div className="tv-brand-tag">
              Brockton, MA &middot; Est. 2010<br />
              Handcrafted &middot; Fresh Daily
            </div>
          </div>
          <div className="tv-header-right">
            {time && <div className="tv-clock">{time}</div>}
            <div className="tv-header-meta">
              <div className="tv-header-badge">{badge}</div>
              <div className="tv-header-contact">
                (774) 480-5155 &nbsp;&middot;&nbsp; 750 Centre St, Brockton MA
              </div>
            </div>
          </div>
        </header>

        {/* Section Title */}
        <div className="tv-section-header">
          <h1 className="tv-section-title">
            {title.split(" ").map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i} className="tv-section-title-accent">{word}</span>
                : <span key={i}>{word} </span>
            )}
          </h1>
          {subtitle && <p className="tv-section-subtitle">{subtitle}</p>}
          <div className="tv-section-rule" />
        </div>

        {/* Menu Grid */}
        <div className="tv-grid">
          <div className="tv-col">
            {col1.map((item, i) => (
              <div className="tv-item" key={item.name} style={{ animationDelay: `${i * 0.04}s` }}>
                <div className="tv-item-name-row">
                  <span className="tv-item-name">{item.name}</span>
                  {item.popular && <span className="tv-popular-badge">★ Popular</span>}
                </div>
                <div className="tv-item-price">{formatPrices(item.prices)}</div>
                {showDescriptions && item.description && (
                  <div className="tv-item-desc">{item.description}</div>
                )}
              </div>
            ))}
          </div>

          <div className="tv-col-sep" />

          <div className="tv-col" style={{ paddingLeft: "2.5vw" }}>
            {col2.map((item, i) => (
              <div className="tv-item" key={item.name} style={{ animationDelay: `${(half + i) * 0.04}s` }}>
                <div className="tv-item-name-row">
                  <span className="tv-item-name">{item.name}</span>
                  {item.popular && <span className="tv-popular-badge">★ Popular</span>}
                </div>
                <div className="tv-item-price">{formatPrices(item.prices)}</div>
                {showDescriptions && item.description && (
                  <div className="tv-item-desc">{item.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="tv-footer">
          <div className="tv-footer-left">
            <div className="tv-footer-item">
              <svg className="tv-footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.27a16 16 0 006.29 6.29l1.63-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              (774) 480-5155
            </div>
            <div className="tv-footer-item">
              <svg className="tv-footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              750 Centre Street, Brockton, MA 02302
            </div>
          </div>
          <div>
            <span className="tv-footer-order">Order Online: flospizza.kwickmenu.com</span>
          </div>
        </footer>
      </div>
    </>
  )
}
