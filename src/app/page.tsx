'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  const [showDeviceChoice, setShowDeviceChoice] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [pageUrl, setPageUrl] = useState('');
  const router = useRouter();

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    setPageUrl(window.location.href);
    return () => mq.removeEventListener('change', update);
  }, []);

  const showGetStarted = isMobile === true && !showDeviceChoice;
  const showDeviceChoiceBlock = isMobile === true && showDeviceChoice;
  const showDesktopMessage = isMobile === false || isMobile === null;

  return (
    <div className="landing-page">
      <Navbar />

      <div className="container">
        <section className="hero" style={{ minHeight: showDeviceChoiceBlock ? 'auto' : '70vh', justifyContent: showDeviceChoiceBlock ? 'flex-start' : 'center', paddingTop: showDeviceChoiceBlock ? '2rem' : '4rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '1rem' }}>
            <span className="desktop-only">ZAMARA ZWELA</span>
            <span className="mobile-only">Everyday Wellbeing</span>
          </div>
          <h1>Your Journey to Holistic Wellbeing Starts Here</h1>
          <p>
            Experience a smarter way to track nutrition, fitness, and lifestyle.
            Get the Zamara Zwela app and start your wellness journey.
          </p>

          {showGetStarted && (
            <div className="cta-area" id="waitlist" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <button
                className="get-started-btn"
                onClick={() => setShowDeviceChoice(true)}
              >
                Get started
              </button>
            </div>
          )}

          {showDesktopMessage && (
            <div className="desktop-get-started-message" id="waitlist">
              <p className="desktop-message-text">
                To install Zamara Zwela, open this page on your phone. We'll guide you through a quick setup — just open this link on your mobile device to get started.
              </p>
              <p className="desktop-message-sub">
                You can send this link to yourself by email or messaging, or type it into your phone's browser: {pageUrl ? <strong>{pageUrl}</strong> : null}
              </p>
            </div>
          )}

          {showDeviceChoiceBlock && (
            <div className="device-choice" style={{ marginTop: '2.5rem', width: '100%', maxWidth: '500px' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Choose your device</p>
              <div className="store-buttons" style={{ flexDirection: 'column', gap: '1rem' }}>
                <button
                  onClick={() => router.push('/android-setup')}
                  className="store-btn green"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.95 3.45,2.5 4,2.5L13.5,12L4,21.5C3.45,21.5 3,21.05 3,20.5M14,12.5L16.5,15L19.5,13.2C20.1,12.8 20.1,11.2 19.5,10.8L16.5,9L14,11.5L12.5,13.5M4.5,22L15.5,15.5L13,13L4.5,22Z" /></svg>
                  <span>
                    <span className="small">GET IT FOR</span>
                    <span className="big">Android</span>
                  </span>
                </button>
                <button
                  onClick={() => router.push('/ios-setup')}
                  className="store-btn green"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" /></svg>
                  <span>
                    <span className="small">GET IT FOR</span>
                    <span className="big">iOS (iPhone)</span>
                  </span>
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowDeviceChoice(false)}
                style={{ marginTop: '1rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.95rem', textDecoration: 'underline' }}
              >
                Back
              </button>
            </div>
          )}
        </section>

        <section className="previews" id="previews">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '1rem' }}>Sneak Peak</h2>
            <p style={{ color: '#666' }}>A glimpse into your new wellness ecosystem.</p>
          </div>
          <div className="preview-container">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="iphone-frame">
                <img src={`/screenshot${num}.png`} alt={`Preview ${num}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="facets" id="features">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '1rem' }}>Our Features</h2>
            <p style={{ color: '#666' }}>Comprehensive tools for your holistic health journey.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="card-bg"><img src="/facets/fitness.png" alt="Fitness" /></div>
              <div className="overlay"></div>
              <div className="card-content">
                <h3>Fitness</h3>
                <p>Workout plans tailored to your level, from beginner to advanced athletes.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="card-bg"><img src="/facets/nutrition.png" alt="Nutrition" /></div>
              <div className="overlay"></div>
              <div className="card-content">
                <h3>Nutrition</h3>
                <p>Smart logs and discovery tools to track your calories and macros effortlessly.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="card-bg"><img src="/facets/hydration.png" alt="Hydration" /></div>
              <div className="overlay"></div>
              <div className="card-content">
                <h3>Hydration</h3>
                <p>Monitor your water intake with smart reminders and elegant progress tracking.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="card-bg"><img src="/facets/mindfulness.png" alt="Mindfulness" /></div>
              <div className="overlay"></div>
              <div className="card-content">
                <h3>Mindfulness</h3>
                <p>Guided sessions and breathing exercises to keep you grounded every day.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="card-bg"><img src="/facets/mental_health.png" alt="Mental Health" /></div>
              <div className="overlay"></div>
              <div className="card-content">
                <h3>Mental Health</h3>
                <p>Tools for mood tracking and self-reflection to ensure holistic balance.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
