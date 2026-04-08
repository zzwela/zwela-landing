'use client';

import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GOOGLE_PLAY_STORE_URL, STORE_BADGE_GOOGLE_PLAY } from '@/lib/app-links';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />

      <div className="container">
        <section className="hero" style={{ minHeight: '70vh', justifyContent: 'center', paddingTop: '4rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '1rem' }}>
            ZAMARA ZWELA
          </div>
          <h1>Your Journey to Holistic Wellbeing Starts Here</h1>
          <p>
            Experience a smarter way to track nutrition, fitness, and lifestyle.
            Get the Zamara Zwela app and start your wellness journey.
          </p>

          <div className="hero-store-badges store-badge-row store-badge-row--horizontal" id="waitlist">
            <div className="hero-store-cell">
              <a
                href={GOOGLE_PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-hit hero-store-hit"
                title="Get Zamara Zwela on Google Play"
              >
                <img src={STORE_BADGE_GOOGLE_PLAY} alt="Get it on Google Play" className="store-badge-img hero-store-img" />
              </a>
            </div>
            <div className="hero-store-cell">
              <Link href="/iphone" className="ios-soon-badge-hit" title="Join iOS">
                <span className="ios-soon-badge-text">Join iOS</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="intro-showcase" id="intro-showcase" aria-labelledby="intro-showcase-title">
          <div className="intro-showcase-header">
            <p className="intro-showcase-eyebrow">See it in motion</p>
            <h2 id="intro-showcase-title" className="intro-showcase-title">
              Introducing Zamara Zwela
            </h2>
            <p className="intro-showcase-sub">
              Plays automatically (muted). Use the video controls if you want sound. Then scroll for screenshots, our
              April poster, and features.
            </p>
          </div>
          <div className="intro-video-shell">
            <div className="intro-video-glow" aria-hidden />
            <div className="intro-video-frame">
              <video
                className="intro-video"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
                aria-label="Zamara Zwela intro video (plays muted; use controls for sound)"
              >
                <source src="/zwela-intro-video.mp4" type="video/mp4" />
                Your browser does not support embedded video.{' '}
                <a href="/zwela-intro-video.mp4">Download the intro video</a>.
              </video>
            </div>
          </div>
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

        <section className="campaign-poster-section" id="campaign-poster" aria-labelledby="campaign-poster-heading">
          <h2 id="campaign-poster-heading" className="campaign-poster-heading">
            The vibe
          </h2>
          <p className="campaign-poster-lead">April 2026 — the energy we are bringing to everyday wellbeing.</p>
          <figure className="campaign-poster-card">
            <img
              src="/zwela-intro-poster.jpg"
              alt="Zamara Zwela — April 2026 campaign poster"
              width={1080}
              height={1350}
              loading="lazy"
              decoding="async"
            />
          </figure>
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
