'use client';

import Link from 'next/link';

const navItems = [
  { label: 'บริการ', href: '/#services' },
  { label: 'ผลงาน', href: '/work' },
  { label: 'ขั้นตอนการทำงาน', href: '/about' },
  { label: 'ราคา', href: '/#pricing' },
  { label: 'คำถามที่พบบ่อย', href: '/#faq' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand-link" aria-label="Marcuz Web home">
          <span className="brand-mark">M</span>
          <span className="brand-name">Marcuz Web</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="site-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
