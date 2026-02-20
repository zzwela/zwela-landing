'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from '@/lib/auth-client';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: sessionData, isPending } = useSession();
    const session = sessionData?.user;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const avatarUrl = session?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${session?.email || 'default'}`;

    const renderAuth = (isMobile: boolean) => {
        if (session) {
            return (
                <div className="nav-auth" style={{ display: isMobile ? (isMenuOpen ? 'flex' : 'none') : (isMenuOpen ? 'none' : 'flex') }}>
                    <div className="user-profile">
                        <div className="avatar">
                            <img src={avatarUrl} alt={session.name || 'User'} />
                        </div>
                        <span className="name">{session.name || 'User'}</span>
                    </div>
                    <button onClick={() => signOut()} className="nav-signout-btn">Sign Out</button>
                </div>
            );
        }
        return (
            <div className="nav-auth" style={{ display: isMobile ? (isMenuOpen ? 'flex' : 'none') : (isMenuOpen ? 'none' : 'flex') }}>
                <button
                    onClick={() => signIn.social({ provider: 'google' })}
                    className="nav-signin-btn"
                    disabled={isPending}
                >
                    {isPending ? '...' : 'Sign In'}
                </button>
            </div>
        );
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
                    <Link href="/#waitlist" onClick={() => setIsMenuOpen(false)}>Waitlist</Link>
                    <Link href="/#previews" onClick={() => setIsMenuOpen(false)}>Sneak Peak</Link>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

                    <div className="mobile-only" style={{ width: '100%' }}>
                        {renderAuth(true)}
                    </div>
                </div>

                <div className="desktop-only">
                    {renderAuth(false)}
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
