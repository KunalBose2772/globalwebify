'use client';

import { initialMenuData } from '@/lib/menu';
import styles from '../page.module.css';
import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Search, Palette, Cloud, ShoppingCart } from 'lucide-react';

// Manual mapping because icons are stored as strings in menu data
const icons: Record<string, any> = {
    'Code': Code,
    'Smartphone': Smartphone,
    'Search': Search,
    'Palette': Palette,
    'Cloud': Cloud,
    'ShoppingCart': ShoppingCart
};

export default function ServicesPage() {
    // Find servies category
    const services = initialMenuData.find(item => item.id === 'services')?.children || [];

    return (
        <div style={{ paddingTop: '2rem' }}>
            <section className={styles.section} style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Services</h1>
                    <p className={styles.sectionDesc}>
                        End-to-end digital solutions tailored for growth and scalability.
                    </p>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '6rem' }}>
                <div className={styles.grid}>
                    {services.map((service) => {
                        const Icon = icons[service.iconName || 'Code'] || Code;
                        return (
                            <div key={service.id} className={styles.card}>
                                <div className={styles.cardIcon}>
                                    <Icon size={48} />
                                </div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <Link href={service.href} className={styles.cardLink}>
                                    View Details <ArrowRight size={16} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
