'use client';

import styles from '../page.module.css';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PortfolioPage() {
    return (
        <div style={{ paddingTop: '2rem' }}>
            <section className={styles.section} style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Work</h1>
                    <p className={styles.sectionDesc}>
                        Showcasing our best digital solutions delivered to global clients.
                    </p>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '6rem' }}>
                <div className={styles.grid}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={styles.card}>
                            <div style={{ height: '200px', background: 'var(--brand-deep-blue)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Project Preview {i}</span>
                            </div>
                            <h3 className={styles.cardTitle} style={{ fontSize: '1.5rem' }}>Global E-commerce Platform</h3>
                            <p style={{ color: 'var(--brand-accent-green)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>RETAIL / WEB</p>
                            <p className={styles.cardDesc}>
                                A scalable multi-vendor marketplace built for high traffic and conversion.
                            </p>
                            <Link href="#" className={styles.cardLink}>
                                View Case Study <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
