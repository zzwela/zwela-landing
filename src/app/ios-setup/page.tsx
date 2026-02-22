'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const TESTFLIGHT_APP_STORE = 'https://apps.apple.com/app/testflight/id899247664';
const TESTFLIGHT_INVITE_URL = process.env.NEXT_PUBLIC_TESTFLIGHT_INVITE_URL || 'https://testflight.apple.com/join/f3RByPSV';

const STEPS = [
  {
    title: 'Download TestFlight',
    body: (
      <>
        <p>On your iPhone, open the <strong>App Store</strong> and search for <strong>TestFlight</strong>, or tap the link below.</p>
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>TestFlight is Apple's official app for installing beta apps. It's free and safe.</p>
        <a href={TESTFLIGHT_APP_STORE} target="_blank" rel="noopener noreferrer" className="tester-link step-cta">
          Get TestFlight from the App Store
        </a>
      </>
    ),
  },
  {
    title: 'Open the invite link on your iPhone',
    body: (
      <>
        <p>On your <strong>iPhone</strong>, tap the link below. It will open in TestFlight and show the Zamara Zwela beta.</p>
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>If the link opens on your computer instead, send it to yourself (e.g. by email or message) and open it on your iPhone.</p>
        <a href={TESTFLIGHT_INVITE_URL} target="_blank" rel="noopener noreferrer" className="tester-link step-cta">
          Open Zamara Zwela invite in TestFlight
        </a>
      </>
    ),
  },
  {
    title: 'Install Zamara Zwela',
    body: (
      <>
        <p>In TestFlight, you'll see <strong>Zamara Zwela</strong>. Tap <strong>Accept</strong> (if asked), then tap <strong>Install</strong>.</p>
        <p style={{ marginTop: '1rem' }}>When the install finishes, the app will appear on your home screen like any other app. Tap it to open and start your wellness journey.</p>
        <Link href="/" className="tester-link step-cta">
          Back to home
        </Link>
      </>
    ),
  },
];

export default function IOSSetupPage() {
  const [step, setStep] = useState(0);
  const totalSteps = STEPS.length;
  const isFirst = step === 0;
  const isLast = step === totalSteps - 1;

  return (
    <div className="landing-page">
      <Navbar />
      <div className="container">
        <section className="page-header">
          <div style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '1rem' }}>iOS</div>
          <h1>Install Zamara Zwela</h1>
          <p style={{ color: '#666', fontSize: '1rem', maxWidth: '560px', margin: '0.5rem auto 0' }}>
            Follow these steps to get the app on your iPhone.
          </p>
        </section>

        <section className="step-wizard">
          <div className="step-progress">
            <span className="step-progress-text">Step {step + 1} of {totalSteps}</span>
            <div className="step-progress-bar">
              <div className="step-progress-fill" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} />
            </div>
          </div>

          <div className="step-card">
            <h2 className="step-title">{STEPS[step].title}</h2>
            <div className="step-body">
              {STEPS[step].body}
            </div>

            <div className="step-nav">
              {isFirst ? (
                <Link href="/" className="step-btn step-btn-secondary">Back to home</Link>
              ) : (
                <button type="button" onClick={() => setStep(s => s - 1)} className="step-btn step-btn-secondary">
                  Back
                </button>
              )}
              {!isLast ? (
                <button type="button" onClick={() => setStep(s => s + 1)} className="step-btn step-btn-primary">
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
