'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GOOGLE_PLAY_STORE_URL, STORE_BADGE_GOOGLE_PLAY } from '@/lib/app-links';

const STEPS = [
  {
    title: 'Get it from Google Play',
    body: (
      <>
        <p>
          Zamara Zwela is available on the official{' '}
          <strong>Google Play Store</strong>. Tap the button below on your Android device to install.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
          On a computer? Open this page on your phone, or search for <strong>Zamara Zwela</strong> in the Play Store app.
        </p>
        <a
          href={GOOGLE_PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="store-badge-hit step-cta"
        >
          <img
            src={STORE_BADGE_GOOGLE_PLAY}
            alt="Get it on Google Play"
            className="store-badge-img"
          />
        </a>
      </>
    ),
  },
  {
    title: 'Open and start',
    body: (
      <>
        <p>
          After installing, open <strong>Zamara Zwela</strong> from your app drawer. Sign in if prompted, then explore
          nutrition, fitness, hydration, and more.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>
          Updates install automatically from the Play Store like any other app.
        </p>
        <Link href="/" className="tester-link step-cta">
          Back to home
        </Link>
      </>
    ),
  },
];

export default function AndroidSetupPage() {
  const [step, setStep] = useState(0);
  const totalSteps = STEPS.length;
  const isFirst = step === 0;
  const isLast = step === totalSteps - 1;

  return (
    <div className="landing-page">
      <Navbar />
      <div className="container">
        <section className="page-header">
          <div style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '1rem' }}>ANDROID</div>
          <h1>Get Zamara Zwela</h1>
          <p style={{ color: '#666', fontSize: '1rem', maxWidth: '560px', margin: '0.5rem auto 0' }}>
            Download the app from Google Play in a couple of quick steps.
          </p>
        </section>

        <section className="step-wizard">
          <div className="step-progress">
            <span className="step-progress-text">
              Step {step + 1} of {totalSteps}
            </span>
            <div className="step-progress-bar">
              <div className="step-progress-fill" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} />
            </div>
          </div>

          <div className="step-card">
            <h2 className="step-title">{STEPS[step].title}</h2>
            <div className="step-body">{STEPS[step].body}</div>

            <div className="step-nav">
              {isFirst ? (
                <Link href="/" className="step-btn step-btn-secondary">
                  Back to home
                </Link>
              ) : (
                <button type="button" onClick={() => setStep((s) => s - 1)} className="step-btn step-btn-secondary">
                  Back
                </button>
              )}
              {!isLast ? (
                <button type="button" onClick={() => setStep((s) => s + 1)} className="step-btn step-btn-primary">
                  Next
                </button>
              ) : null}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
