import Link from 'next/link';

export function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo-group">
                            <img src="/logo_light.png" alt="Zamara-Zwela" style={{ height: '35px' }} />
                            <span className="app-brand-title">Everyday Wellbeing</span>
                        </div>
                        <p className="footer-description">
                            Empowering your journey to holistic health. Smart, intuitive, and designed for you.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>RESOURCES</h4>
                            <Link href="/#previews">Sneak Peak</Link>
                            <Link href="/#waitlist">Join Waitlist</Link>
                            <Link href="/contact">Support Center</Link>
                        </div>
                        <div className="link-group">
                            <h4>LEGAL</h4>
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/tcs">Terms of Service</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Zamara Zwela. All rights reserved. Powered by Everyday Wellbeing.</p>
                    <div className="social-links">
                        {/* Add social icons here if needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
