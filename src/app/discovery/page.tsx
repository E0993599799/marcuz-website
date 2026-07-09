'use client';

import { useState } from 'react';
import { content } from '@/lib/content';

export default function DiscoveryPage() {
  const { discovery } = content;
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    company: '',
    industry: '',
    challenge: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormState({ fullName: '', email: '', company: '', industry: '', challenge: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="dark-canvas">
      <section className="section-padding" style={{ paddingTop: 'var(--spacing-3xl)', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div className="dark-panel" style={{ padding: 'var(--space-12)' }}>
            <div style={{ display: 'grid', gap: 'var(--space-10)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div>
                <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
                  Project review
                </p>
                <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.4rem)', lineHeight: 1.02, marginBottom: 'var(--space-6)' }}>
                  {discovery.headline}
                </h1>
                <p className="dark-copy" style={{ fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', maxWidth: '620px', marginBottom: 'var(--space-8)' }}>
                  {discovery.subheading}
                </p>
                <div className="dark-card" style={{ padding: 'var(--space-6)' }}>
                  <h2 style={{ marginBottom: 'var(--space-4)' }}>What this review covers</h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 'var(--space-3)' }}>
                    <li className="dark-copy">• Current operational friction and where work is slowing down</li>
                    <li className="dark-copy">• Tools, handoffs, and gaps in the current process</li>
                    <li className="dark-copy">• The highest-impact next move before any build work starts</li>
                  </ul>
                </div>
              </div>

              <div>
                {submitted ? (
                  <div className="dark-card" style={{ textAlign: 'center', padding: 'var(--space-12)' }}>
                    <p className="dark-eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
                      Submitted
                    </p>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>Review request received.</h2>
                    <p className="dark-copy" style={{ marginBottom: 'var(--space-8)' }}>
                      Thank you. We will review the details and follow up within 24 hours to confirm next steps.
                    </p>
                    <button className="btn-primary" onClick={() => window.location.href = '/'}>
                      Return to Home
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="dark-card" style={{ padding: 'var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-8)' }}>{discovery.formTitle}</h2>

                    {discovery.formFields.map((field) => (
                      <div key={field.name} style={{ marginBottom: 'var(--space-6)' }}>
                        <label
                          style={{
                            display: 'block',
                            marginBottom: 'var(--space-2)',
                            fontWeight: 'var(--font-weight-semibold)',
                            fontSize: 'var(--font-size-sm)',
                            color: '#f5f7fb',
                          }}
                        >
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            name={field.name}
                            value={formState[field.name as keyof typeof formState]}
                            onChange={handleChange}
                            required={field.required}
                            style={{
                              width: '100%',
                              minHeight: '130px',
                              padding: 'var(--space-3) var(--space-4)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              borderRadius: 'var(--input-radius)',
                              background: 'rgba(7, 10, 16, 0.72)',
                              color: '#f5f7fb',
                            }}
                          />
                        ) : field.type === 'select' ? (
                          <select
                            name={field.name}
                            value={formState[field.name as keyof typeof formState]}
                            onChange={handleChange}
                            required={field.required}
                            style={{
                              width: '100%',
                              padding: 'var(--space-3) var(--space-4)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              borderRadius: 'var(--input-radius)',
                              background: 'rgba(7, 10, 16, 0.72)',
                              color: '#f5f7fb',
                            }}
                          >
                            <option value="">Select an industry...</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="retail">Retail</option>
                            <option value="hospitality">Hospitality</option>
                            <option value="services">Professional Services</option>
                            <option value="other">Other</option>
                          </select>
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={formState[field.name as keyof typeof formState]}
                            onChange={handleChange}
                            required={field.required}
                            style={{
                              width: '100%',
                              padding: 'var(--space-3) var(--space-4)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              borderRadius: 'var(--input-radius)',
                              background: 'rgba(7, 10, 16, 0.72)',
                              color: '#f5f7fb',
                            }}
                          />
                        )}
                      </div>
                    ))}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        marginTop: 'var(--space-8)',
                      }}
                    >
                      {loading ? 'Submitting...' : discovery.submitButton}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
