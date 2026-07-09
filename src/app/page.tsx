'use client';

import Link from 'next/link';
import { useMemo } from 'react';

const contactLinks = [
  {
    label: 'https://line.me/ti/p/MWRVrZwhH7',
    href: 'https://line.me/ti/p/MWRVrZwhH7',
    icon: 'chat',
  },
  {
    label: 'e.meephu@gmail.com',
    href: 'mailto:e.meephu@gmail.com',
    icon: 'mail',
  },
];

function HeroPortrait() {
  return (
    <svg viewBox="0 0 420 560" className="hero-portrait" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bgGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#d7e0d3" />
          <stop offset="22%" stopColor="#8d9d91" />
          <stop offset="54%" stopColor="#20303a" />
          <stop offset="100%" stopColor="#091017" />
        </linearGradient>
        <linearGradient id="hairGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffcc89" />
          <stop offset="48%" stopColor="#b9652f" />
          <stop offset="100%" stopColor="#25140c" />
        </linearGradient>
        <radialGradient id="faceGlow" cx="65%" cy="40%" r="40%">
          <stop offset="0%" stopColor="#f7d0b6" />
          <stop offset="60%" stopColor="#d48e68" />
          <stop offset="100%" stopColor="#6c3f2d" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="420" height="560" rx="28" fill="url(#bgGlow)" />
      <g opacity="0.65">
        <path d="M288 18c-48 44-78 118-62 176 12 45 18 95 0 164-10 38-18 96 22 144 37 46 92 40 123 16 30-23 35-66 18-104-16-36-18-80-9-144 13-95-1-186-57-230-14-11-26-15-35-22z" fill="url(#hairGlow)" />
        <path d="M130 16c-20 20-33 50-36 80-3 29 12 66 28 88 25 36 28 83 16 122-13 43-2 96 36 133 28 27 72 41 113 25 49-18 66-66 73-109 7-43 24-79 44-110 20-31 31-57 23-86-8-29-31-55-57-67-26-13-67-13-103-5-40 8-85 12-137-71z" fill="rgba(12,18,22,0.66)" />
      </g>
      <ellipse cx="286" cy="248" rx="58" ry="82" fill="url(#faceGlow)" opacity="0.9" />
      <ellipse cx="294" cy="258" rx="18" ry="12" fill="#1a1818" opacity="0.92" />
      <ellipse cx="298" cy="254" rx="6" ry="6" fill="#eef3f6" />
      <path d="M245 170c36-46 96-74 141-52 24 12 39 35 42 59 4 31-12 55-34 79-22 24-42 50-58 98-11 34-27 53-59 58-32 4-65-11-89-37-27-29-36-67-25-104 11-37 47-77 82-101z" fill="none" stroke="rgba(255,160,92,0.68)" strokeWidth="6" strokeLinecap="round" />
      <path d="M53 42c52 8 101 51 123 112 8 24 20 43 38 56" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="3" strokeLinecap="round" />
      <path d="M99 458c26-10 49-26 72-52" fill="none" stroke="rgba(158,210,105,0.45)" strokeWidth="16" strokeLinecap="round" />
      <path d="M112 116c26 34 56 54 92 66" fill="none" stroke="rgba(255,194,106,0.5)" strokeWidth="7" strokeLinecap="round" />
      <circle cx="128" cy="80" r="32" fill="rgba(255,255,255,0.08)" />
      <circle cx="84" cy="198" r="22" fill="rgba(255,255,255,0.04)" />
      <text x="24" y="268" fill="rgba(255,255,255,0.7)" fontSize="24" fontWeight="700" fontFamily="sans-serif">พร้อมใช้งานจริง</text>
    </svg>
  );
}

function QrCode() {
  const size = 21;
  const cells = useMemo(() => {
    const matrix: boolean[][] = Array.from({ length: size }, () => Array.from({ length: size }, () => false));
    const seed = 'https://line.me/ti/p/MWRVrZwhH7:e.meephu@gmail.com';

    const hash = (row: number, col: number) => {
      let value = 0;
      for (let i = 0; i < seed.length; i += 1) {
        value = (value * 31 + seed.charCodeAt(i) + row * 17 + col * 29) % 9973;
      }
      return value % 7 < 3;
    };

    const paintFinder = (r0: number, c0: number) => {
      for (let r = 0; r < 7; r += 1) {
        for (let c = 0; c < 7; c += 1) {
          const outer = r === 0 || c === 0 || r === 6 || c === 6;
          const inner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          matrix[r0 + r][c0 + c] = outer || inner;
        }
      }
    };

    paintFinder(0, 0);
    paintFinder(0, size - 7);
    paintFinder(size - 7, 0);

    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        const inTopLeft = row < 7 && col < 7;
        const inTopRight = row < 7 && col >= size - 7;
        const inBottomLeft = row >= size - 7 && col < 7;
        if (inTopLeft || inTopRight || inBottomLeft) continue;
        matrix[row][col] = hash(row, col);
      }
    }

    return matrix;
  }, []);

  return (
    <div className="qr-shell">
      <div className="qr-grid" role="img" aria-label="QR pattern">
        {cells.flatMap((row, rowIndex) =>
          row.map((filled, colIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            const isFinder =
              (rowIndex < 7 && colIndex < 7) ||
              (rowIndex < 7 && colIndex >= size - 7) ||
              (rowIndex >= size - 7 && colIndex < 7);
            return (
              <span
                key={key}
                className={`qr-cell ${filled ? 'is-filled' : ''} ${isFinder ? 'is-finder' : ''}`}
              />
            );
          }),
        )}
      </div>
      <div className="qr-center-badge">LINE</div>
    </div>
  );
}

function Icon({ kind }: { kind: 'chat' | 'mail' }) {
  if (kind === 'chat') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon">
        <path d="M6.5 17.5 4 20.5V7.6C4 6.16 5.16 5 6.6 5h10.8C18.84 5 20 6.16 20 7.6v6.8c0 1.44-1.16 2.6-2.6 2.6H9.2L6.5 17.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="8.4" cy="10.5" r="1" fill="currentColor" />
        <circle cx="12" cy="10.5" r="1" fill="currentColor" />
        <circle cx="15.6" cy="10.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-icon">
      <path d="M4.5 6.5h15v11h-15z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m5.5 7.5 6.5 5 6.5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="marcuz-home">
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-pill">⚙️ ดิจิทัลสตูดิโอระดับพรีเมียม</div>
            <h1 className="hero-title">
              สร้างเว็บไซต์ระดับ
              <br />
              พรีเมียม ระบบ AI
              <br />
              และระบบอัตโนมัติ
              <br />
              <span className="hero-accent-row">
                <span className="hero-accent-line">—</span> ได้เร็วขึ้น
              </span>
            </h1>
            <p className="hero-description">
              Marcuz Web ออกแบบและสร้างเว็บไซต์ที่เน้นการเพิ่มยอดขาย เครื่องมือ AI และระบบอัตโนมัติสำหรับธุรกิจ ที่พร้อมใช้งาน ขยายสเกลได้ และสร้างความประทับใจ
            </p>
            <div className="hero-actions">
              <Link href="/discovery" className="btn btn-primary hero-btn-primary">
                เริ่มต้นโปรเจกต์
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/work" className="btn btn-secondary hero-btn-secondary">
                ดูผลงาน
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-art-panel">
              <HeroPortrait />
            </div>

            <aside className="contact-panel">
              <div className="contact-kicker">
                <span className="contact-dot" />
                CONTACT MARCUZ
              </div>
              <h2>LINE, QR, and email in one place</h2>

              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} className="contact-chip">
                    <Icon kind={link.icon as 'chat' | 'mail'} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="qr-card">
                <div className="qr-card-label">
                  <span className="qr-mark">▣</span>
                  SCAN QR
                </div>
                <QrCode />
              </div>
            </aside>
          </div>
        </div>
        <div className="hero-strip" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </main>
  );
}
