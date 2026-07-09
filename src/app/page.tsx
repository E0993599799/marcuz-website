import Link from 'next/link';
import { content } from '@/lib/content';

export const metadata = {
  title: 'MARCUZ - Digital Transformation Partner',
  description: 'Transform your business with intelligent systems.',
};

export default function Home() {
  const { hero, trustedRelationships, businessReality, beliefs } = content;

  return (
    <main className="dark-canvas">
      <section
        className="section-padding"
        style={{
          paddingTop: 'var(--spacing-3xl)',
          paddingBottom: 'var(--spacing-3xl)',
        }}
      >
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div
            className="dark-panel"
            style={{
              padding: 'var(--space-12)',
              display: 'grid',
              gap: 'var(--space-10)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            }}
          >
            <div>
              <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
                Digital transformation partner
              </p>
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.8rem)', marginBottom: 'var(--space-6)', lineHeight: 1.02 }}>
                {hero.headline}
              </h1>
              <p
                className="dark-copy"
                style={{
                  fontSize: 'var(--font-size-lg)',
                  lineHeight: 'var(--line-height-relaxed)',
                  maxWidth: '760px',
                }}
              >
                {hero.subheading}
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap', marginTop: 'var(--space-8)' }}>
                <Link href="/discovery" className="btn-primary">
                  {hero.primaryCta}
                </Link>
                <Link href="/work" className="btn-secondary">
                  {hero.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="dark-card" style={{ padding: 'var(--space-8)' }}>
              <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
                What the work changes
              </p>
              <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
                <div>
                  <strong style={{ display: 'block', marginBottom: 'var(--space-1)' }}>Fewer manual handoffs</strong>
                  <span className="dark-copy">Reduce the number of places work can get stuck.</span>
                </div>
                <div>
                  <strong style={{ display: 'block', marginBottom: 'var(--space-1)' }}>Clearer operating signals</strong>
                  <span className="dark-copy">Give leaders a shared view of reality instead of fragmented status updates.</span>
                </div>
                <div>
                  <strong style={{ display: 'block', marginBottom: 'var(--space-1)' }}>Better decisions, faster</strong>
                  <span className="dark-copy">Move repeatable steps into systems so judgment can stay on the important parts.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding dark-section">
        <div className="container" style={{ maxWidth: '1120px' }}>
          <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Trusted relationships
          </p>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>{trustedRelationships.headline}</h2>
          <p className="dark-copy" style={{ maxWidth: '760px', marginBottom: 'var(--space-8)' }}>
            {trustedRelationships.intro}
          </p>
          <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {trustedRelationships.clients.map((client: any) => (
              <article key={client.name} className="dark-card" style={{ padding: 'var(--space-8)' }}>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>{client.name}</h3>
                <p className="dark-copy" style={{ marginBottom: 0 }}>
                  {client.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section-alt">
        <div className="container" style={{ maxWidth: '1120px' }}>
          <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Business reality
          </p>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>{businessReality.headline}</h2>
          <p className="dark-copy" style={{ maxWidth: '780px', marginBottom: 'var(--space-8)' }}>
            {businessReality.intro}
          </p>
          <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
            {businessReality.problems.map((problem: any, idx: number) => (
              <article key={idx} className="dark-card" style={{ padding: 'var(--space-6)' }}>
                <h3 style={{ marginBottom: 'var(--space-2)' }}>{problem.headline}</h3>
                <p className="dark-copy" style={{ marginBottom: 'var(--space-2)' }}>
                  {problem.description}
                </p>
                <p style={{ marginBottom: 0, color: '#8ab4ff', fontWeight: 'var(--font-weight-semibold)' }}>
                  {problem.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section">
        <div className="container" style={{ maxWidth: '1120px' }}>
          <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Operating principles
          </p>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>{beliefs.headline}</h2>
          <p className="dark-copy" style={{ maxWidth: '760px', marginBottom: 'var(--space-8)' }}>
            {beliefs.intro}
          </p>
          <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {beliefs.beliefs.map((belief: any, idx: number) => (
              <article key={idx} className="dark-card" style={{ padding: 'var(--space-6)' }}>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>{belief.headline}</h3>
                <p className="dark-copy" style={{ marginBottom: 0 }}>
                  {belief.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #121826 0%, #0f1117 100%)', color: '#f5f7fb' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Next step
          </p>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>Want the short version first?</h2>
          <p className="dark-copy" style={{ marginBottom: 'var(--space-8)' }}>
            If you're comparing options, start with the work and the thinking behind it before you open a conversation.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/work" className="btn-primary">
              View Our Work
            </Link>
            <Link href="/about" className="btn-secondary">
              How We Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
