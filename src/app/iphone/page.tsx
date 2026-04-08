'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GOOGLE_PLAY_STORE_URL, STORE_BADGE_GOOGLE_PLAY } from '@/lib/app-links';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function IPhoneComingSoonPage() {
  const [email, setEmail] = useState('');
  const [wantLaunch, setWantLaunch] = useState(true);
  const [wantBeta, setWantBeta] = useState(true);
  const [state, setState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      setState('error');
      return;
    }
    if (!wantLaunch && !wantBeta) {
      setErrorMessage('Choose at least one: launch updates, beta invites, or both.');
      setState('error');
      return;
    }

    setState('loading');
    setErrorMessage('');

    const intent =
      wantLaunch && wantBeta ? 'both' : wantBeta ? 'beta' : 'launch';

    try {
      const res = await fetch('/api/groups/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmed,
          intent,
          waitlist: wantLaunch,
          beta: wantBeta,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(typeof data.error === 'string' ? data.error : 'Something went wrong. Please try again.');
        setState('error');
        return;
      }

      setState('success');
    } catch {
      setErrorMessage('Network error. Check your connection and try again.');
      setState('error');
    }
  }

  return (
    <div className="landing-page">
      <Navbar />
      <div className="container">
        <section className="iphone-hype-hero">
          <p className="iphone-hype-kicker">iPhone · coming soon</p>
          <h1>Zamara Zwela is about to feel right at home on iOS</h1>
          <p className="iphone-hype-lead">
            The same app Android users already love — nutrition, fitness, hydration, mindfulness, and mental
            wellbeing in one calm, beautiful flow — is landing on iPhone. We are polishing the last details, and you
            can be among the first to open the door.
          </p>
          <ul className="iphone-hype-highlights">
            <li>
              <strong>Early access</strong>
              <span>TestFlight beta spots for people who want to shape the experience before public launch.</span>
            </li>
            <li>
              <strong>Launch day</strong>
              <span>Get pinged the moment we hit the App Store — no spam, just the news you asked for.</span>
            </li>
            <li>
              <strong>One list, your choice</strong>
              <span>Pick beta invites, launch-only updates, or both. You are in control.</span>
            </li>
          </ul>
          <div className="store-badge-row store-badge-row--horizontal iphone-hype-play">
            <a
              href={GOOGLE_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="store-badge-hit"
            >
              <img src={STORE_BADGE_GOOGLE_PLAY} alt="Get it on Google Play" className="store-badge-img" />
            </a>
            <p className="iphone-hype-android-note">
              Already on Android? Grab the app now — your progress and habits carry the same vision we are bringing to
              iOS.
            </p>
          </div>
        </section>

        <section className="iphone-hype-signup">
          <div className="iphone-hype-card">
            <h2>Join the inner circle</h2>
            <p className="iphone-hype-card-intro">
              Drop your email below. We will use it only to send TestFlight invites (if you opt in) and/or App Store
              launch news — see our{' '}
              <Link href="/privacy" style={{ color: 'var(--primary)' }}>
                Privacy Policy
              </Link>
              .
            </p>

            {state === 'success' ? (
              <div className="iphone-hype-success">
                <p className="iphone-hype-success-title">You are in</p>
                <p className="iphone-hype-success-body">
                  Watch your inbox at <strong>{email.trim()}</strong>
                  {wantBeta && wantLaunch
                    ? ' for beta invites and launch news.'
                    : wantBeta
                      ? ' for TestFlight invites when we expand the beta.'
                      : ' when Zamara Zwela launches on the App Store.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="iphone-hype-form">
                <label className="iphone-hype-label" htmlFor="iphone-email">
                  Email
                </label>
                <input
                  id="iphone-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  aria-label="Email for iOS waitlist or beta"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(ev) => {
                    setEmail(ev.target.value);
                    if (state === 'error') setState('idle');
                  }}
                  disabled={state === 'loading'}
                  className="iphone-hype-input"
                />

                <fieldset className="iphone-hype-fieldset">
                  <legend className="iphone-hype-legend">What should we send you?</legend>
                  <label className="iphone-hype-check">
                    <input
                      type="checkbox"
                      checked={wantBeta}
                      onChange={(ev) => {
                        setWantBeta(ev.target.checked);
                        if (state === 'error') setState('idle');
                      }}
                      disabled={state === 'loading'}
                    />
                    <span>
                      <strong>TestFlight beta</strong> — invite me when there is room in the beta program.
                    </span>
                  </label>
                  <label className="iphone-hype-check">
                    <input
                      type="checkbox"
                      checked={wantLaunch}
                      onChange={(ev) => {
                        setWantLaunch(ev.target.checked);
                        if (state === 'error') setState('idle');
                      }}
                      disabled={state === 'loading'}
                    />
                    <span>
                      <strong>App Store launch</strong> — email me when Zamara Zwela is live for iPhone.
                    </span>
                  </label>
                </fieldset>

                {state === 'error' && errorMessage ? (
                  <p className="iphone-hype-error" role="alert">
                    {errorMessage}
                  </p>
                ) : null}

                <button type="submit" className="get-started-btn iphone-hype-submit" disabled={state === 'loading'}>
                  {state === 'loading' ? 'Sending…' : 'Join waitlist & beta list'}
                </button>
              </form>
            )}

            <div className="iphone-hype-back">
              <Link href="/" className="step-btn step-btn-secondary">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
