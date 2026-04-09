"use client"

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
    .join("  \u00B7  ")
}

export default function TVMenuDisplay({ title, subtitle, items }: Props) {
  const half = Math.ceil(items.length / 2)
  const col1 = items.slice(0, half)
  const col2 = items.slice(half)

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: #FFF5E1;
        }

        .tv-wrap {
          width: 100vw;
          height: 100vh;
          background: #FFF5E1;
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
          padding: 2vh 4vw;
          border-bottom: 2px solid #E4E2DD;
          background: #FFF5E1;
          flex-shrink: 0;
        }

        .tv-brand {
          display: flex;
          align-items: center;
          gap: 1em;
        }

        .tv-brand-name {
          font-size: clamp(2rem, 4vw, 4.5rem);
          font-weight: 700;
          color: #1C1C1C;
          letter-spacing: -0.02em;
          line-height: 1;
          font-family: var(--font-righteous), var(--font-geist-sans), sans-serif;
        }

        .tv-brand-name span {
          color: #C1272D;
        }

        .tv-brand-divider {
          width: 2px;
          height: clamp(2rem, 3.5vw, 4rem);
          background: #E4E2DD;
          flex-shrink: 0;
        }

        .tv-brand-tag {
          font-size: clamp(0.75rem, 1.1vw, 1.2rem);
          color: #6A5B4A;
          font-weight: 400;
          letter-spacing: 0.01em;
          line-height: 1.5;
        }

        .tv-header-right {
          text-align: right;
          display: flex;
          align-items: center;
          gap: 1.5em;
        }

        .tv-clock {
          font-size: clamp(1.2rem, 2vw, 2.5rem);
          font-weight: 700;
          color: #1C1C1C;
          font-family: var(--font-geist-mono), monospace;
          letter-spacing: 0.05em;
        }

        .tv-header-badge {
          display: inline-block;
          background: #C1272D;
          color: #FFF5E1;
          font-size: clamp(0.6rem, 0.8vw, 0.9rem);
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.35em 0.8em;
          border-radius: 4px;
          margin-bottom: 0.5em;
        }

        .tv-header-contact {
          font-size: clamp(0.7rem, 1vw, 1.1rem);
          color: #6A5B4A;
          line-height: 1.6;
        }

        /* ── SECTION TITLE ── */
        .tv-section-header {
          padding: 2.2vh 4vw 0;
          flex-shrink: 0;
        }

        .tv-section-title {
          font-size: clamp(2.5rem, 6vw, 7.5rem);
          font-weight: 700;
          color: #1C1C1C;
          letter-spacing: -0.03em;
          line-height: 1;
          font-family: var(--font-righteous), var(--font-geist-sans), sans-serif;
        }

        .tv-section-title span {
          color: #C1272D;
        }

        .tv-section-subtitle {
          font-size: clamp(0.85rem, 1.3vw, 1.45rem);
          color: #6A5B4A;
          margin-top: 0.4em;
          font-weight: 400;
        }

        .tv-section-rule {
          margin-top: 1.8vh;
          height: 3px;
          background: linear-gradient(90deg, #C1272D 0%, #C1272D 20%, #E4E2DD 60%, transparent 100%);
        }

        /* ── MENU GRID ── */
        .tv-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 0 0;
          padding: 2vh 4vw 0;
          overflow: hidden;
          min-height: 0;
        }

        .tv-col-sep {
          background: #E4E2DD;
          margin: 0 2.5vw;
        }

        .tv-col {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* ── MENU ITEM ── */
        .tv-item {
          display: flex;
          flex-direction: column;
          padding: 1.1vh 0;
          border-bottom: 1px solid #E4E2DD;
          animation: fadeInUp 0.5s ease-out both;
        }

        .tv-item:last-child {
          border-bottom: none;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tv-item-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1.5em;
        }

        .tv-item-name {
          font-size: clamp(1rem, 1.7vw, 2rem);
          font-weight: 500;
          color: #1C1C1C;
          letter-spacing: -0.01em;
          line-height: 1.25;
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.5em;
        }

        .tv-popular-badge {
          display: inline-block;
          background: #C1272D;
          color: #FFF5E1;
          font-size: clamp(0.5rem, 0.6vw, 0.7rem);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.2em 0.6em;
          border-radius: 50px;
          white-space: nowrap;
        }

        .tv-item-price {
          font-size: clamp(1rem, 1.6vw, 1.9rem);
          font-weight: 700;
          color: #C1272D;
          letter-spacing: -0.01em;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tv-item-desc {
          font-size: clamp(0.72rem, 1vw, 1.1rem);
          color: #6A5B4A;
          margin-top: 0.2em;
          line-height: 1.4;
          font-weight: 400;
        }

        /* ── FOOTER ── */
        .tv-footer {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5vh 4vw;
          border-top: 2px solid #E4E2DD;
          background: #FFF5E1;
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
          font-size: clamp(0.7rem, 1vw, 1.1rem);
          color: #6A5B4A;
          font-weight: 400;
        }

        .tv-footer-icon {
          color: #C1272D;
          width: clamp(12px, 1vw, 18px);
          height: clamp(12px, 1vw, 18px);
          flex-shrink: 0;
        }

        .tv-footer-right {
          display: flex;
          align-items: center;
          gap: 1em;
        }

        .tv-footer-order {
          font-size: clamp(0.7rem, 1vw, 1.1rem);
          color: #C1272D;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .tv-footer-qr {
          font-size: clamp(0.6rem, 0.8vw, 0.9rem);
          color: #6A5B4A;
          font-style: italic;
        }
      `}</style>

      <div className="tv-wrap">
        {/* Header */}
        <header className="tv-header">
          <div className="tv-brand">
            <div className="tv-brand-name">
              Flo&apos;s <span>Pizza</span>
            </div>
            <div className="tv-brand-divider" />
            <div className="tv-brand-tag">
              Handcrafted &middot; Fresh<br />Authentic Italian
            </div>
          </div>

          <div className="tv-header-right">
            <div>
              <div className="tv-header-badge">Catering Menu</div>
              <div className="tv-header-contact">
                (774) 480-5155<br />
                750 Centre St, Brockton MA
              </div>
            </div>
          </div>
        </header>

        {/* Section Title */}
        <div className="tv-section-header">
          <h1 className="tv-section-title">
            {title.split(" ").map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i}>{word}</span>
                : <span key={i} style={{ color: "#1C1C1C" }}>{word} </span>
            )}
          </h1>
          {subtitle && <p className="tv-section-subtitle">{subtitle}</p>}
          <div className="tv-section-rule" />
        </div>

        {/* Menu Grid */}
        <div className="tv-grid">
          <div className="tv-col">
            {col1.map((item, i) => (
              <div className="tv-item" key={item.name} style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="tv-item-row">
                  <span className="tv-item-name">
                    {item.name}
                    {item.popular && <span className="tv-popular-badge">Popular</span>}
                  </span>
                  <span className="tv-item-price">{formatPrices(item.prices)}</span>
                </div>
                {item.description && (
                  <span className="tv-item-desc">{item.description}</span>
                )}
              </div>
            ))}
          </div>

          <div className="tv-col-sep" />

          <div className="tv-col" style={{ paddingLeft: "2.5vw" }}>
            {col2.map((item, i) => (
              <div className="tv-item" key={item.name} style={{ animationDelay: `${(half + i) * 0.05}s` }}>
                <div className="tv-item-row">
                  <span className="tv-item-name">
                    {item.name}
                    {item.popular && <span className="tv-popular-badge">Popular</span>}
                  </span>
                  <span className="tv-item-price">{formatPrices(item.prices)}</span>
                </div>
                {item.description && (
                  <span className="tv-item-desc">{item.description}</span>
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
          <div className="tv-footer-right">
            <span className="tv-footer-order">Order Online: flospizza.kwickmenu.com</span>
          </div>
        </footer>
      </div>
    </>
  )
}
