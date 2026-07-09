'use client';

import Link from 'next/link';
import { content } from '@/lib/content';

export function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 14, 22, 0.78)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <div className="container">
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'var(--space-6) 0',
            minHeight: '64px',
          }}
        >
          <Link href="/">
            <span
              style={{
                fontSize: 'var(--font-size-h3)',
                fontWeight: 'var(--font-weight-bold)',
                color: '#f5f7fb',
              }}
            >
              Marcuz
            </span>
          </Link>

          <div
            style={{
              display: 'flex',
              gap: 'var(--space-8)',
              alignItems: 'center',
            }}
          >
            <Link href="/" style={{ color: 'rgba(245, 247, 251, 0.84)' }}>
              {content.nav.home}
            </Link>
            <Link href="/work" style={{ color: 'rgba(245, 247, 251, 0.84)' }}>
              {content.nav.work}
            </Link>
            <Link href="/insights" style={{ color: 'rgba(245, 247, 251, 0.84)' }}>
              {content.nav.insights}
            </Link>
            <Link href="/about" style={{ color: 'rgba(245, 247, 251, 0.84)' }}>
              {content.nav.about}
            </Link>
            <button className="btn-primary">
              <Link href="/discovery" style={{ color: 'white', textDecoration: 'none' }}>
                {content.nav.contact}
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
