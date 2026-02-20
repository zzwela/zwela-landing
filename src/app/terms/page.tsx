import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <div className="container">
                <section className="coming-soon">
                    <div style={{ fontSize: '4rem' }}>⚖️</div>
                    <h1>Terms & Conditions</h1>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>Our legal terms are being drafted to ensure your safety. Coming soon.</p>
                    <div style={{ marginTop: '2rem' }}>
                        <Link href="/" className="tester-link">Back to Home</Link>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
