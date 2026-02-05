import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/db';
import { Service, IService } from '@/models/Service';
import { generateMetadataFromService, generateContentFromService } from '@/lib/seo-helper';
import styles from '@/app/page.module.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const MOCK_SERVICE: Partial<IService> = {
    slug: 'web-development',
    title: 'Web Development',
    seoTitleTemplate: 'Best {service} Company',
    seoDescriptionTemplate: 'Top-rated {service} services. We build scalable websites.',
    contentTemplate: `
    ## World-Class {service}
    
    Global Webify brings **enterprise-grade {service}** to businesses worldwide.
    We specialize in building scalable, secure, and high-performance solutions.
    
    ### Why Choose Us?
    - Global market understanding
    - Global technology standards
    - 24/7 Support
  `
};

interface Props {
    params: {
        service: string;
    };
}

async function getData(serviceSlug: string) {
    await dbConnect();
    let service = await Service.findOne({ slug: serviceSlug }).lean() as IService | null;
    if (!service && serviceSlug === 'web-development') service = MOCK_SERVICE as IService;
    return service;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const service = await getData(params.service);
    if (!service) return { title: 'Not Found' };
    return generateMetadataFromService(service);
}

export default async function ServicePage({ params }: Props) {
    const service = await getData(params.service);

    if (!service) {
        notFound();
    }

    // Generate content without location
    const content = generateContentFromService(service);

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}>
            <nav style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Link href="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ArrowLeft size={16} /> Back to Services
                </Link>
            </nav>

            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                {service.title}
            </h1>

            <div
                style={{
                    background: 'var(--surface)',
                    padding: '2.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.8'
                }}
            >
                {content}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link href="/contact" className={styles.primaryBtn}>
                    Start Your Project
                </Link>
            </div>
        </div>
    );
}
