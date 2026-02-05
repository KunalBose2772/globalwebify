'use client';

import styles from '../page.module.css';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
    return (
        <div style={{ paddingTop: '2rem' }}>
            <section className={styles.section} style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Resources & Insights</h1>
                    <p className={styles.sectionDesc}>
                        Latest trends in digital transformation, SEO, and web development.
                    </p>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '6rem' }}>
                <div className={styles.grid}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={styles.card}>
                            <h3 className={styles.cardTitle} style={{ fontSize: '1.25rem' }}>Scaling Next.js Applications for Enterprise {i}</h3>
                            <p className={styles.cardDesc}>
                                Learn the best practices for building high-performance web applications using the App Router.
                            </p>
                            <Link href="#" className={styles.cardLink}>
                                Read Article <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
