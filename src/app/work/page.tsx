import Link from 'next/link';
import { content } from '@/lib/content';

const workHighlights = [
  {
    name: 'ORRY Thailand',
    sector: 'Premium natural lip care',
    focus: 'E-commerce operations that need to stay fast as demand grows.',
    themes: ['Order-flow clarity', 'Operational handoffs', 'Repeatable digital workflows'],
  },
  {
    name: 'Arigeo',
    sector: 'Geographic data platform',
    focus: 'Business intelligence surfaces that turn location data into decisions.',
    themes: ['Data visibility', 'Decision support', 'Information architecture'],
  },
  {
    name: 'Cation Maid',
    sector: 'Sustainable cleaning services',
    focus: 'Service operations that need to scale without adding chaos.',
    themes: ['Scheduling discipline', 'Field-ops coordination', 'Growth-ready systems'],
  },
];

const deliveryAreas = [
  {
    title: 'Workflow redesign',
    description: 'Map the real process first, then remove friction, duplication, and unclear ownership.',
  },
  {
    title: 'Systems integration',
    description: 'Connect the tools people already use so information does not get trapped in silos.',
  },
  {
    title: 'Automation opportunities',
    description: 'Move repetitive work out of inboxes and spreadsheets and into reliable systems.',
  },
  {
    title: 'Operational visibility',
    description: 'Create a shared view of status, bottlenecks, and next actions for decision-makers.',
  },
];

export const metadata = {
  title: 'Our Work | Marcuz',
  description: 'Selected engagements and delivery areas from Marcuz projects in operations, data, and service workflows.',
};

export default function WorkPage() {
  const { trustedRelationships, businessReality, beliefs } = content;

  return (
    <main className="dark-canvas">
      <section className="section-padding" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div className="dark-panel" style={{ padding: 'var(--space-12)' }}>
            <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              Selected work
            </p>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: 'var(--space-6)', lineHeight: 1.02, maxWidth: '900px' }}>
              Practical systems for real operating pressure.
            </h1>
            <p className="dark-copy" style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', maxWidth: '760px' }}>
              Marcuz works where growth starts to create friction: operations, information flow, and repetitive manual work.
              The focus is not novelty. The focus is making the business easier to run.
            </p>
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
          <div style={{ display: 'grid', gap: 'var(--space-8)', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {workHighlights.map((item) => (
              <article key={item.name} className="dark-card" style={{ padding: 'var(--space-8)' }}>
                <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-2)' }}>
                  {item.sector}
                </p>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>{item.name}</h3>
                <p className="dark-copy" style={{ marginBottom: 'var(--space-6)' }}>
                  {item.focus}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 'var(--space-3)' }}>
                  {item.themes.map((theme) => (
                    <li key={theme} style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                      <span style={{ color: '#8ab4ff' }}>•</span>
                      <span className="dark-copy">{theme}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section-alt">
        <div className="container" style={{ maxWidth: '1120px' }}>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>What Marcuz usually delivers</h2>
          <p className="dark-copy" style={{ marginBottom: 'var(--space-8)', maxWidth: '720px' }}>
            These are the recurring delivery patterns across projects. They line up with the problems growing teams face every day.
          </p>
          <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {deliveryAreas.map((area) => (
              <div key={area.title} className="dark-card" style={{ padding: 'var(--space-6)' }}>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>{area.title}</h3>
                <p className="dark-copy" style={{ marginBottom: 0 }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding dark-section">
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div style={{ display: 'grid', gap: 'var(--space-8)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: 'var(--space-8)' }}>
            <div className="dark-card" style={{ padding: 'var(--space-8)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{businessReality.headline}</h2>
              <p className="dark-copy" style={{ marginBottom: 0 }}>
                {businessReality.intro}
              </p>
            </div>
            <div className="dark-card" style={{ padding: 'var(--space-8)' }}>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{beliefs.headline}</h2>
              <p className="dark-copy" style={{ marginBottom: 0 }}>
                {beliefs.intro}
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
            {businessReality.problems.map((problem) => (
              <article key={problem.headline} className="dark-card" style={{ padding: 'var(--space-6)' }}>
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

      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #121826 0%, #0f1117 100%)', color: '#f5f7fb' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
            Next step
          </p>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>Prefer to see the approach before starting?</h2>
          <p className="dark-copy" style={{ marginBottom: 'var(--space-8)' }}>
            The fastest way to decide is to compare the work, the thinking, and the operating pattern side by side.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/discovery" className="btn-primary">
              Start Here
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
