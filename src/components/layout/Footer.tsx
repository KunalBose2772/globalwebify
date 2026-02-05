'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

const styles = {
    footerElement: {
        background: '#040b19', // Deepest Royal Navy
        color: '#e2e8f0',
        paddingTop: '5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        fontFamily: 'var(--font-inter, sans-serif)',
        position: 'relative' as const,
        backgroundImage: 'linear-gradient(to bottom, rgba(30, 58, 138, 0.05), transparent)'
    },
    topGlow: {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent)'
    },
    container: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1.2fr', // 5 Columns
        gap: '2rem',
        paddingBottom: '5rem'
    },
    column: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1.25rem'
    },
    brandBlock: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1.5rem'
    },

    positioningText: {
        fontSize: '0.95rem',
        color: '#94a3b8',
        lineHeight: 1.6,
        maxWidth: '280px'
    },
    heading: {
        fontSize: '0.9rem',
        fontWeight: '700',
        color: 'white',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.05em',
        marginBottom: '0.5rem'
    },
    linkList: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.75rem'
    },
    footerLink: {
        color: '#94a3b8',
        textDecoration: 'none',
        fontSize: '0.9rem',
        transition: 'color 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem'
    },
    contactBlock: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem'
    },
    contactItem: {
        fontSize: '0.9rem',
        color: '#cbd5e1'
    },
    contactLabel: {
        color: '#64748b',
        fontSize: '0.75rem',
        textTransform: 'uppercase' as const,
        fontWeight: '600',
        marginBottom: '0.25rem',
        display: 'block'
    },
    microTrust: {
        fontSize: '0.8rem',
        color: '#64748b',
        marginTop: '1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        paddingTop: '1rem'
    },
    socialRow: {
        display: 'flex',
        gap: '1rem',
        marginTop: '0.5rem'
    },
    socialIcon: {
        color: '#64748b',
        transition: 'color 0.2s',
        cursor: 'pointer'
    },
    bottomStrip: {
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '2rem 0',
        background: '#020617'
    },
    bottomContainer: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.85rem',
        color: '#64748b'
    },
    bottomLinks: {
        display: 'flex',
        gap: '2rem'
    }
};

export default function Footer() {
    return (
        <footer style={styles.footerElement}>
            <div style={styles.topGlow}></div>

            <div style={styles.container} className="footer-grid">
                {/* COLUMN 1 - BRAND */}
                <div style={styles.column}>
                    <div style={styles.brandBlock}>
                        {/* Logo with White Background */}
                        <div style={{
                            background: 'white',
                            padding: '16px 24px',
                            borderRadius: '8px',
                            display: 'inline-flex',
                            width: 'fit-content',
                            marginBottom: '0.5rem'
                        }}>
                            <img
                                src="/images/logo.png"
                                alt="Global Webify Logo"
                                style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
                            />
                        </div>

                        <p style={styles.positioningText}>
                            Building digital systems that drive real business growth — not just online presence.
                        </p>
                        <div style={styles.socialRow}>
                            <Facebook size={18} style={styles.socialIcon} />
                            <Linkedin size={18} style={styles.socialIcon} />
                            <Instagram size={18} style={styles.socialIcon} />
                            <Twitter size={18} style={styles.socialIcon} />
                            <Youtube size={18} style={styles.socialIcon} />
                        </div>
                    </div>
                </div>

                {/* COLUMN 2 - SERVICES */}
                <div style={styles.column}>
                    <h4 style={styles.heading}>Services</h4>
                    <div style={styles.linkList}>
                        <Link href="/services/website-systems" style={styles.footerLink}>High-Converting Website Systems</Link>
                        <Link href="/services/growth-infrastructure" style={styles.footerLink}>Lead & Revenue Growth Infrastructure</Link>
                        <Link href="/services/brand-authority" style={styles.footerLink}>Brand Authority & Positioning</Link>
                        <Link href="/services/automation" style={styles.footerLink}>Technology & Automation</Link>
                    </div>
                </div>

                {/* COLUMN 3 - COMPANY */}
                <div style={styles.column}>
                    <h4 style={styles.heading}>Company</h4>
                    <div style={styles.linkList}>
                        <Link href="/about" style={styles.footerLink}>About</Link>
                        <Link href="/portfolio" style={styles.footerLink}>Portfolio</Link>
                        <Link href="/case-studies" style={styles.footerLink}>Case Studies</Link>
                        <Link href="/careers" style={styles.footerLink}>Careers</Link>
                        <Link href="/contact" style={styles.footerLink}>Contact</Link>
                    </div>
                </div>

                {/* COLUMN 4 - RESOURCES */}
                <div style={styles.column}>
                    <h4 style={styles.heading}>Resources</h4>
                    <div style={styles.linkList}>
                        <Link href="/blog" style={styles.footerLink}>Blog / Insights</Link>
                        <Link href="/resources/guides" style={styles.footerLink}>Growth Guides</Link>
                        <Link href="/audit" style={styles.footerLink}>Website Audit</Link>
                        <Link href="/faq" style={styles.footerLink}>FAQs</Link>
                    </div>
                </div>

                {/* COLUMN 5 - CONTACT */}
                <div style={styles.column}>
                    <h4 style={styles.heading}>Contact & Offices</h4>
                    <div style={styles.contactBlock}>
                        <div>
                            <span style={styles.contactLabel}>Phone</span>
                            <div style={styles.contactItem}>+91 75639 01100 (Main)</div>
                            <div style={styles.contactItem}>1800-890-5489 (Toll Free)</div>
                            <div style={styles.contactItem}>+1 917-590-8135 (US)</div>
                        </div>
                        <div>
                            <span style={styles.contactLabel}>Email</span>
                            <div style={styles.contactItem}>help@globalwebify.com</div>
                        </div>
                        <div>
                            <span style={styles.contactLabel}>Ranchi Office</span>
                            <div style={styles.contactItem}>2nd Floor, Alam Complex,</div>
                            <div style={styles.contactItem}>Ashok Nagar Road, Kadru</div>
                            <div style={styles.contactItem}>Ranchi, Jharkhand - 834002</div>
                        </div>
                        <div>
                            <span style={styles.contactLabel}>Kolkata Office</span>
                            <div style={styles.contactItem}>36/1E/1L, Topsia Road,</div>
                            <div style={styles.contactItem}>Panchannagram</div>
                            <div style={styles.contactItem}>Kolkata, West Bengal - 700039</div>
                        </div>
                    </div>
                    <div style={styles.microTrust}>
                        Serving businesses across India and international markets.
                    </div>
                </div>
            </div>

            {/* BOTTOM STRIP */}
            <div style={styles.bottomStrip}>
                <div style={styles.bottomContainer}>
                    <div>© 2026 Global Webify. All rights reserved.</div>
                    <div style={styles.bottomLinks}>
                        <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
                        <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</Link>
                        <Link href="/sitemap" style={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                        gap: 3rem !important;
                    }
                    .bottomContainer {
                        flex-direction: column;
                        gap: 1.5rem;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
}
