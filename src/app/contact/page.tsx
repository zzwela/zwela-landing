import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <div className="container">
                <section className="page-header">
                    <div style={{ color: 'var(--primary)', fontWeight: '500', marginBottom: '1rem' }}>GET IN TOUCH</div>
                    <h1>Contact Us</h1>
                    <p style={{ color: '#666', fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
                        Have questions about Zamara Zwela or our testing program? We're here to help.
                    </p>
                </section>

                <section className="contact-grid" style={{ marginBottom: '6rem' }}>
                    <div className="contact-card">
                        <h4>SUPPORT EMAIL</h4>
                        <p>support@zamara.com</p>
                    </div>
                    <div className="contact-card">
                        <h4>PARTNERSHIPS</h4>
                        <p>hello@ikiwellness.com</p>
                    </div>
                    <div className="contact-card">
                        <h4>OFFICE</h4>
                        <p>Nairobi, Kenya</p>
                    </div>
                </section>

                <div style={{ textAlign: 'center', paddingBottom: '4rem' }}>
                    <Link href="/" className="tester-link">Back to Home</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
