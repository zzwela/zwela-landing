import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from 'next/link';

export default function TCSPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <div className="container">
                <section className="page-header">
                    <div style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '1rem' }}>LEGAL</div>
                    <h1>Terms of Service</h1>
                    <p style={{ color: '#666', fontSize: '1rem', maxWidth: '600px', margin: '0.5rem auto 2rem' }}>
                        Last updated: February 2026. Please read these terms before using Zamara Zwela services.
                    </p>
                </section>

                <section className="legal-content" style={{ maxWidth: '720px', margin: '0 auto 4rem' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>1. Acceptance of terms</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            By accessing or using the Zamara Zwela website, waitlist, or mobile application (“Services”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree, do not use our Services. We may update these Terms from time to time; continued use after changes constitutes acceptance.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>2. Description of services</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Zamara Zwela (“Zwela”, “we”, “us”) provides wellness-related services, including but not limited to fitness, nutrition, hydration, mindfulness, and mental health tools. Our website may offer waitlist sign-up and beta access. Services are provided “as is” and may change or be discontinued without notice.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>3. Account and eligibility</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            You may need to create an account (e.g. via Google sign-in) to access certain features. You must provide accurate information and keep your account secure. You must be at least 13 years of age (or the applicable age of consent in your jurisdiction) to use our Services. You are responsible for all activity under your account.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>4. Acceptable use</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            You agree not to use our Services to: (a) violate any law or third-party rights; (b) harass, abuse, or harm others; (c) distribute malware or attempt to gain unauthorised access to our or others’ systems; (d) scrape or automate access in a way that burdens our systems; or (e) use the Services for any purpose that is illegal or prohibited by these Terms. We may suspend or terminate access for breach of these terms.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>5. Intellectual property</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            All content, branding, and materials in our Services (including but not limited to text, graphics, logos, and software) are owned by Zamara Zwela or our licensors. You may not copy, modify, distribute, or create derivative works without our prior written consent, except as permitted by applicable law.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>6. Health and wellness disclaimer</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Our Services are for general wellness and informational purposes only. They are not a substitute for professional medical, mental health, or nutritional advice. Always consult a qualified healthcare provider before making health decisions. We are not liable for any outcomes resulting from your use of the app or reliance on its content.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>7. Limitation of liability</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            To the maximum extent permitted by law, Zamara Zwela and its affiliates, officers, and employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or goodwill, arising from your use of or inability to use the Services. Our total liability for any claims arising from these Terms or the Services shall not exceed the amount you paid us, if any, in the twelve months preceding the claim (or one hundred United States dollars, whichever is greater). Some jurisdictions do not allow certain limitations; in such cases our liability is limited to the fullest extent permitted by law.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>8. Indemnification</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            You agree to indemnify and hold harmless Zamara Zwela and its affiliates from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of the Services, your breach of these Terms, or your violation of any law or third-party rights.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>9. Termination</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            We may suspend or terminate your access to the Services at any time, with or without cause or notice. You may stop using the Services at any time. Provisions that by their nature should survive (including disclaimers, limitation of liability, and indemnification) will survive termination.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>10. Governing law and disputes</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            These Terms are governed by the laws of Kenya, without regard to conflict of law principles. Any dispute arising from these Terms or the Services shall be subject to the exclusive jurisdiction of the courts of Kenya, unless otherwise required by mandatory law in your country of residence.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>11. General</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            If any part of these Terms is held invalid or unenforceable, the remaining parts remain in effect. Our failure to enforce any right does not waive that right. These Terms constitute the entire agreement between you and Zamara Zwela regarding the Services.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem', color: 'var(--black)' }}>12. Contact</h2>
                        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
                            For questions about these Terms, contact us via <Link href="/contact" style={{ color: 'var(--primary)' }}>Contact Us</Link> or email support@zamara.com. Our office is in Nairobi, Kenya.
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
