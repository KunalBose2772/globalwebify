'use client';

import styles from '../page.module.css';
import { Users, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function TeamPage() {
    return (
        <div style={{ paddingTop: '2rem' }}>
            <section className={styles.section} style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Team</h1>
                    <p className={styles.sectionDesc}>
                        Meet the experts behind Global Webify’s success.
                    </p>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '6rem' }}>
                <div className={styles.grid}>
                    {/* Placeholder Team Members */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={styles.card} style={{ textAlign: 'center', alignItems: 'center' }}>
                            <div style={{ width: '120px', height: '120px', background: 'var(--background)', borderRadius: '50%', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Users size={40} color="var(--brand-accent-cyan)" />
                            </div>
                            <h3 className={styles.cardTitle}>Team Member {i}</h3>
                            <p className={styles.cardDesc} style={{ marginBottom: '0.5rem', color: 'var(--brand-accent-green)' }}>Senior Engineer</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                Expert in scalable architecture and distributed systems.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#" style={{ color: 'white' }}><Linkedin size={20} /></a>
                                <a href="#" style={{ color: 'white' }}><Twitter size={20} /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
