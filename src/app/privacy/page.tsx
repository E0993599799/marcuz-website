export const metadata = {
  title: 'Privacy Policy | Marcuz',
  description: 'Privacy policy for Marcuz and how we handle personal data submitted through the website.',
};

const sections = [
  {
    title: '1. Introduction',
    body: 'Marcuz ("we", "us", "our") respects your privacy. This policy explains how we collect, use, and protect your personal data.',
  },
  {
    title: '2. Information We Collect',
    body: 'We collect information you provide directly to us, such as when you complete a project review form or contact us. This may include your name, email, company, and inquiry details.',
  },
  {
    title: '3. How We Use Your Information',
    body: 'We use your information to respond to your inquiries, schedule project reviews, and improve our services. We do not share your information with third parties without your consent.',
  },
  {
    title: '4. Security',
    body: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.',
  },
  {
    title: '5. Your Rights',
    body: 'You have the right to access, correct, and delete your personal data. To exercise these rights, contact us at hello@marcuz.co.',
  },
  {
    title: '6. Contact Us',
    body: 'If you have questions about this privacy policy, please contact us at hello@marcuz.co.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="dark-canvas">
      <section className="section-padding" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="dark-panel" style={{ padding: 'var(--space-12)' }}>
            <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              Legal
            </p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 0 }}>Privacy Policy</h1>
          </div>
        </div>
      </section>

      <section className="section-padding dark-section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
            {sections.map((section) => (
              <article key={section.title} className="dark-card" style={{ padding: 'var(--space-8)' }}>
                <h2 style={{ marginBottom: 'var(--space-4)' }}>{section.title}</h2>
                <p className="dark-copy" style={{ marginBottom: 0, lineHeight: 'var(--line-height-relaxed)' }}>
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
