import Link from 'next/link';

export const metadata = {
  title: 'About | Marcuz',
  description: 'Learn about Marcuz, our mission, and how we approach digital transformation work.',
};

const values = [
  'Business First — Technology serves your goals, not the reverse',
  'Human-Centered — Systems should make people\'s jobs easier',
  'Simplicity — Elegant, not flashy. Purposeful, not complex',
  'Long-term Thinking — We build for your future, not just today',
];

export default function AboutPage() {
  return (
    <main className="dark-canvas">
      <section className="section-padding" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="dark-panel" style={{ padding: 'var(--space-12)' }}>
            <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              About Marcuz
            </p>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.8rem)', marginBottom: 'var(--space-6)', lineHeight: 1.02 }}>
              We design better operating systems for growing teams.
            </h1>
            <p className="dark-copy" style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', maxWidth: '760px', marginBottom: 0 }}>
              We're a Digital Transformation Partner dedicated to helping growing organizations redesign how they work through
              intelligent systems, thoughtful automation, and AI-enabled workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding dark-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="dark-card" style={{ padding: 'var(--space-8)', marginBottom: 'var(--space-6)' }}>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Our Mission</h2>
            <p className="dark-copy" style={{ fontSize: 'var(--font-size-lg)', marginBottom: 0, lineHeight: 'var(--line-height-relaxed)' }}>
              To help organizations reimagine their operations, eliminate inefficiency, and scale with intelligence. We believe
              technology should simplify work, not complicate it.
            </p>
          </div>

          <div className="dark-card" style={{ padding: 'var(--space-8)', marginBottom: 'var(--space-6)' }}>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>How We Work</h2>
            <p className="dark-copy" style={{ marginBottom: 'var(--space-4)', lineHeight: 'var(--line-height-relaxed)' }}>
              We don't start with software. We start with understanding your business. We listen, we analyze, we diagnose.
              Then we design solutions that work for your organization's unique context.
            </p>
            <p className="dark-copy" style={{ marginBottom: 0, lineHeight: 'var(--line-height-relaxed)' }}>
              We believe in deep partnerships. We're not vendors—we're advisors committed to your long-term success.
            </p>
          </div>

          <div className="dark-card" style={{ padding: 'var(--space-8)' }}>
            <h2 style={{ marginBottom: 'var(--space-6)' }}>Our Values</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 0, display: 'grid', gap: 'var(--space-4)' }}>
              {values.map((value) => (
                <li key={value} style={{ paddingLeft: 'var(--space-6)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#8ab4ff' }}>✓</span>
                  <span className="dark-copy"><strong style={{ color: '#f5f7fb' }}>{value.split(' — ')[0]}</strong> — {value.split(' — ')[1]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-12)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <p className="dark-copy" style={{ marginBottom: 'var(--space-6)' }}>
              Ready to explore what's possible for your organization?
            </p>
            <Link href="/discovery" className="btn-primary">
              Start Here
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
