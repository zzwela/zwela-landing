import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <div className="container">
                <section className="page-header">
                    <div style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '1rem' }}>LEGAL</div>
                    <h1>Privacy Policy</h1>
                    <p style={{ color: '#666', fontSize: '1rem', maxWidth: '600px', margin: '0.5rem auto 2rem' }}>
                        Last updated: February 2026. This policy describes how Zamara Zwela collects, uses, and protects your information.
                    </p>
                </section>

                <section className="legal-content" style={{ maxWidth: '720px', margin: '0 auto 4rem' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>1. Who we are</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Zamara Zwela (“we”, “us”, “our”) operates the Zwela landing and waitlist services and the Zamara Zwela wellness application. We are committed to protecting your privacy and being transparent about our practices.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>2. Information we collect</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            When you sign in with Google or join our waitlist, we may collect:
                        </p>
                        <ul style={{ color: '#555', lineHeight: 1.8, marginLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li><strong>Account information:</strong> name, email address, and profile picture (from your Google account).</li>
                            <li><strong>Usage information:</strong> how you use our website and app (e.g. pages visited, features used).</li>
                            <li><strong>Device and technical data:</strong> device type, browser, IP address, and similar technical identifiers where necessary for security and operation.</li>
                        </ul>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            We do not sell your personal information to third parties.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>3. How we use your information</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            We use the information we collect to:
                        </p>
                        <ul style={{ color: '#555', lineHeight: 1.8, marginLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Provide, operate, and improve our services (including the Zwela app and waitlist).</li>
                            <li>Authenticate you and manage your account (e.g. Google sign-in).</li>
                            <li>Send you important service updates, beta invitations, or support-related messages.</li>
                            <li>Comply with legal obligations and protect our rights and the security of our services.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>4. Google sign-in and third parties</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Our sign-in is powered by Google. When you choose “Sign in with Google”, Google may share with us your basic profile information (name, email, profile image) in accordance with Google’s Privacy Policy. We store this information in our systems to manage your account and provide our services. Your use of Google sign-in is also subject to Google’s terms and privacy policy.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>5. Cookies and similar technologies</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how our site is used. You can control cookies through your browser settings; disabling them may limit some features.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>6. Data retention and security</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            We retain your data for as long as your account is active or as needed to provide our services and comply with law. We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>7. Your rights</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Depending on where you live, you may have the right to access, correct, delete, or port your personal data, or to object to or restrict certain processing. To exercise these rights or ask questions about your data, contact us using the details below.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>8. Children</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Our services are not directed at children under 13 (or higher age where required). We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us so we can delete it.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>9. Changes to this policy</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            We may update this Privacy Policy from time to time. We will post the updated version on this page and update the “Last updated” date. Continued use of our services after changes constitutes acceptance of the revised policy.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>10. Contact us</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            For privacy-related questions or requests, contact us at <Link href="/contact" style={{ color: 'var(--primary)' }}>Contact Us</Link> or email support@zamara.com. Our office is in Nairobi, Kenya.
                        </p>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <Link href="/" className="tester-link">Back to Home</Link>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
