import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <div className="container">
                <section className="coming-soon">
                    <div style={{ fontSize: '4rem' }}>📄</div>
                    <h1>Privacy Policy</h1>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>Our privacy commitment is being finalized. Stay tuned!</p>
                    <div style={{ marginTop: '2rem' }}>
                        <Link href="/" className="tester-link">Back to Home</Link>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
