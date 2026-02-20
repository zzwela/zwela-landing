'use client';

import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from '@/lib/auth-client';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  const { data: sessionData, isPending: isLoadingSession } = useSession();
  const session = sessionData?.user;
  const [isLoadingGroup, setIsLoadingGroup] = useState(false);
  const [isAddedToGroup, setIsAddedToGroup] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'ios' | 'android' | null>(null);

  useEffect(() => {
    if (session?.email) {
      handleGroupAddition(session.email);
    }
  }, [session]);

  const handleGroupAddition = async (email: string) => {
    setIsLoadingGroup(true);
    try {
      const response = await fetch('/api/groups/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAddedToGroup(true);
      } else {
        // Fallback for demo purposes if service account is not yet configured
        if (data.mock) {
          setIsAddedToGroup(true);
        } else {
          setError(data.error || 'Failed to add you to the testing group.');
        }
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoadingGroup(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn.social({ provider: 'google' });
  };

  const isLoading = isLoadingSession || isLoadingGroup;

  return (
    <div className="landing-page">
      <Navbar />

      <div className="container">
        {!session ? (
          <>
            <section className="hero">
              <div style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '1rem' }}>
                <span className="desktop-only">ZAMARA ZWELA</span>
                <span className="mobile-only">Everyday Wellbeing</span>
              </div>
              <h1>Your Journey to Holistic Wellbeing Starts Here</h1>
              <p>
                Experience a smarter way to track nutrition, fitness, and lifestyle.
                Sign in to join the exclusive closed tester program for Zamara Zwela.
              </p>

              <div className="cta-area" id="waitlist" style={{ marginTop: '2rem' }}>
                <button
                  className="google-btn"
                  onClick={handleGoogleSignIn}
                  disabled={isLoadingSession}
                >
                  {isLoadingSession ? (
                    <div className="spinner" style={{ width: '20px', height: '20px', margin: 0 }}></div>
                  ) : (
                    <>
                      <svg className="google-icon" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <span className="desktop-only">Sign in with Google to Access Beta</span>
                      <span className="mobile-only">Sign In</span>
                    </>
                  )}
                </button>
                <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#999' }}>
                  You must be signed in to access the TestFlight and Google Play download links.
                </p>
              </div>
            </section>
          </>
        ) : (
          <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 0' }}>
            <div className="success-card" style={{ maxWidth: '650px' }}>
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  <h2>{isLoadingSession ? 'Authenticating...' : 'Registering...'}</h2>
                  <p>{isLoadingSession ? 'Verifying your account...' : `Granting beta access to ${session.email}...`}</p>
                </>
              ) : isAddedToGroup ? (
                <>
                  <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🌍</div>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: '300' }}>You're Authorized!</h2>
                  <p style={{ margin: '1.5rem 0', color: '#666', fontSize: '1.1rem' }}>
                    Welcome to the <strong>Everyday Wellbeing</strong> community. Select your device platform below to begin testing.
                  </p>

                  <div className="store-buttons">
                    <button onClick={() => setActiveTab('android')} className={`store-btn green ${activeTab === 'android' ? 'active' : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.95 3.45,2.5 4,2.5L13.5,12L4,21.5C3.45,21.5 3,21.05 3,20.5M14,12.5L16.5,15L19.5,13.2C20.1,12.8 20.1,11.2 19.5,10.8L16.5,9L14,11.5L12.5,13.5M4.5,22L15.5,15.5L13,13L4.5,22Z" /></svg>
                      <span>
                        <span className="small">GET IT FOR</span>
                        <span className="big">Android</span>
                      </span>
                    </button>
                    <button onClick={() => setActiveTab('ios')} className={`store-btn green ${activeTab === 'ios' ? 'active' : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" /></svg>
                      <span>
                        <span className="small">GET IT FOR</span>
                        <span className="big">iOS (iPhone)</span>
                      </span>
                    </button>
                  </div>

                  {activeTab === 'ios' && (
                    <div className="ios-expand-area">
                      <h3 style={{ marginBottom: '1.5rem', color: 'var(--black)' }}>TestFlight Setup</h3>
                      <ul className="ios-steps">
                        <li className="ios-step">
                          <span className="step-num">1</span>
                          <span>Download the <strong>TestFlight</strong> app from the App Store.</span>
                        </li>
                        <li className="ios-step">
                          <span className="step-num">2</span>
                          <span>Open the invitation link below on your iPhone.</span>
                        </li>
                        <li className="ios-step">
                          <span className="step-num">3</span>
                          <span>Tap "Start Testing" to install the Zwela Beta.</span>
                        </li>
                      </ul>
                      <a href="https://testflight.apple.com/join/YOUR_CODE" className="tester-link" style={{ width: '100%', textAlign: 'center' }}>
                        Open TestFlight Link
                      </a>
                    </div>
                  )}

                  {activeTab === 'android' && (
                    <div className="android-note">
                      <p><strong>Heads up!</strong> You've been whitelisted. In a few minutes, you will receive an invitation link from Zwela via email to join the Play Store closed testing program.</p>
                    </div>
                  )}

                  <div style={{ marginTop: '3rem' }}>
                    <button
                      onClick={() => signOut()}
                      style={{ background: 'none', border: 'none', color: '#999', textDecoration: 'underline', cursor: 'pointer' }}
                    >
                      Use another account
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
                  <h2>Registration Needed</h2>
                  <p style={{ margin: '1rem 0', color: '#666' }}>{error || "We couldn't add you to the group automatically. Please try again."}</p>
                  <button className="tester-link" style={{ border: 'none', cursor: 'pointer' }} onClick={() => handleGroupAddition(session.email!)}>
                    Retry Registration
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Persistent Sections */}
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
