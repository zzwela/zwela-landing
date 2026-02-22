'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="container header-inner">
                <Link href="/" className="logo-group" style={{ textDecoration: 'none' }}>
                    <img src="/logo_light.png" alt="Zamara-Zwela Logo" style={{ height: '40px' }} />
                    <span className="app-brand-title desktop-only">Everyday Wellbeing</span>
                    <span className="app-brand-title mobile-only">Everyday Wellbeing</span>
                </Link>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/#features" onClick={() => setIsMenuOpen(false)}>Features</Link>
                    <Link href="/#waitlist" onClick={() => setIsMenuOpen(false)}>Get App</Link>
                    <Link href="/#previews" onClick={() => setIsMenuOpen(false)}>Sneak Peak</Link>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}
