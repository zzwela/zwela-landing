'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const APK_URL = process.env.NEXT_PUBLIC_ANDROID_APK_URL || 'https://drive.google.com/file/d/12dboofD1V14JgYFZp45BesNPPZcY0-mC/view?usp=drive_link';

const STEPS = [
  {
    title: 'Download the app',
    body: (
      <>
        <p>Tap the button below to download the Zamara Zwela app (APK) to your Android device.</p>
        <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>If you're on a computer, you can send the download link to your phone or open it directly on your phone's browser.</p>
        <a href={APK_URL} target="_blank" rel="noopener noreferrer" className="tester-link step-cta">
          Download Zamara Zwela (APK)
        </a>
      </>
    ),
  },
  {
    title: 'Allow installs from unknown sources',
    body: (
      <>
        <p>Android will ask you to allow installs from "unknown sources." This is normal and safe.</p>
        <p style={{ marginTop: '1rem' }}><strong>Why?</strong> Our app is not on the Google Play Store yet, so Android labels it as "unknown." It's the official Zamara Zwela app from us.</p>
        <div className="step-tip">
          <p><strong>How to allow it:</strong></p>
          <ul>
            <li>When you tap the downloaded file, Android may say "For your security, your phone is not allowed to install unknown apps from this source."</li>
            <li>Tap <strong>Settings</strong>, then turn on <strong>Allow from this source</strong> (or "Install unknown apps" → choose your browser or Files → Allow).</li>
            <li>Go back and tap the download again to continue.</li>
          </ul>
          <p style={{ marginTop: '0.75rem', color: 'var(--primary)', fontWeight: '500' }}>This is safe. You're only allowing this one app from our official link.</p>
        </div>
      </>
    ),
  },
  {
    title: 'Install and open',
    body: (
      <>
        <p>Tap the downloaded file (usually in your notification shade or in the Downloads folder) and follow the prompts to install.</p>
        <p style={{ marginTop: '1rem' }}>When installation is done, tap <strong>Open</strong> or find <strong>Zamara Zwela</strong> on your home screen and start your wellness journey.</p>
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
          <h1>Install Zamara Zwela</h1>
          <p style={{ color: '#666', fontSize: '1rem', maxWidth: '560px', margin: '0.5rem auto 0' }}>
            Follow these steps to get the app on your phone.
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
