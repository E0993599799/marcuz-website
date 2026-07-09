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
    <main>
      <section
        style={{
          paddingTop: 'var(--spacing-2xl)',
          paddingBottom: 'var(--spacing-2xl)',
          background: 'linear-gradient(135deg, var(--color-white) 0%, var(--color-gray-warm) 100%)',
        }}
      >
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ marginBottom: 'var(--space-4)', color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
            Selected work
          </p>
          <h1 style={{ fontSize: 'var(--font-size-display-lg)', marginBottom: 'var(--space-6)' }}>
            Practical systems for real operating pressure.
          </h1>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)', maxWidth: '760px' }}>
            Marcuz works where growth starts to create friction: operations, information flow, and repetitive manual work.
            The focus is not novelty. The focus is making the business easier to run.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 style={{ marginBottom: 'var(--space-8)' }}>{trustedRelationships.headline}</h2>
          <div style={{ display: 'grid', gap: 'var(--space-8)', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {workHighlights.map((item) => (
              <article
                key={item.name}
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--card-radius)',
                  padding: 'var(--space-8)',
                  background: 'var(--color-white)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <p style={{ marginBottom: 'var(--space-2)', color: 'var(--color-primary)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {item.sector}
                </p>
                <h3 style={{ marginBottom: 'var(--space-4)' }}>{item.name}</h3>
                <p style={{ marginBottom: 'var(--space-6)', color: 'var(--color-text-secondary)' }}>{item.focus}</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 'var(--space-3)' }}>
                  {item.themes.map((theme) => (
                    <li key={theme} style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--color-primary)' }}>•</span>
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-gray-warm)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>What Marcuz usually delivers</h2>
          <p style={{ marginBottom: 'var(--space-8)', maxWidth: '720px', color: 'var(--color-text-secondary)' }}>
            These are the recurring delivery patterns across projects. They line up with the problems growing teams face every day.
          </p>
          <div style={{ display: 'grid', gap: 'var(--space-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {deliveryAreas.map((area) => (
              <div
                key={area.title}
                style={{
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--card-radius)',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h3 style={{ marginBottom: 'var(--space-3)' }}>{area.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 0 }}>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'grid', gap: 'var(--space-8)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: 'var(--space-8)' }}>
            <div>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{businessReality.headline}</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                The work typically starts by addressing the bottlenecks below before adding new tooling.
              </p>
            </div>
            <div>
              <h2 style={{ marginBottom: 'var(--space-4)' }}>{beliefs.headline}</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Every engagement is shaped by the same operating principles: simplify work, surface better information, and keep human judgment in the loop.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
            {businessReality.problems.map((problem) => (
              <article
                key={problem.headline}
                style={{
                  padding: 'var(--space-6)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--card-radius)',
                  background: 'var(--color-white)',
                }}
              >
                <h3 style={{ marginBottom: 'var(--space-2)' }}>{problem.headline}</h3>
                <p style={{ marginBottom: 'var(--space-2)', color: 'var(--color-text-secondary)' }}>{problem.description}</p>
                <p style={{ marginBottom: 0, color: 'var(--color-primary)', fontWeight: 'var(--font-weight-medium)' }}>{problem.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'var(--color-black-soft)', color: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>Need help clarifying the next move?</h2>
          <p style={{ marginBottom: 'var(--space-8)', color: 'rgba(255,255,255,0.72)' }}>
            Book a discovery session if you want a structured look at the parts of the business that are slowing you down.
          </p>
          <Link href="/discovery" className="btn-primary">
            Book a Discovery Session
          </Link>
        </div>
      </section>
    </main>
  );
}
