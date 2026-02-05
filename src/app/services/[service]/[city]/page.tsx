import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/db';
import { Service, Location, IService, ILocation } from '@/models/Service';
import { generateMetadataFromService, generateContentFromService } from '@/lib/seo-helper';
import styles from '@/app/page.module.css'; // Reuse basic styles for consistency
import Link from 'next/link';

// Mock Data for Fallback/Demo if DB is empty (Crucial for immediate verification)
const MOCK_SERVICE: Partial<IService> = {
    slug: 'web-development',
    title: 'Web Development',
    seoTitleTemplate: 'Best {service} Company in {city}, {state}',
    seoDescriptionTemplate: 'Top-rated {service} services in {city}. We build scalable websites.',
    contentTemplate: `
    ## World-Class {service} in {city}
    
    Global Webify brings **enterprise-grade {service}** to businesses in **{city}, {state}**. 
    We specialize in building scalable, secure, and high-performance solutions tailored to the {city} market.
    
    ### Why Choose Us in {city}?
    - Local market understanding
    - Global technology standards
    - 24/7 Support
  `
};

const MOCK_LOCATION: Partial<ILocation> = {
    slug: 'ranchi',
    name: 'Ranchi',
    state: 'Jharkhand'
};

interface Props {
    params: {
        service: string;
        city: string;
    };
}

async function getData(serviceSlug: string, citySlug: string) {
    await dbConnect();

    // Try DB first
    let service = await Service.findOne({ slug: serviceSlug }).lean() as IService | null;
    let location = await Location.findOne({ slug: citySlug }).lean() as ILocation | null;

    // Fallback for demo if DB empty (remove in production or keep as dev fallback)
    if (!service && serviceSlug === 'web-development') service = MOCK_SERVICE as IService;
    if (!location && citySlug === 'ranchi') location = MOCK_LOCATION as ILocation;

    return { service, location };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { service, location } = await getData(params.service, params.city);

    if (!service || !location) {
        return { title: 'Not Found' };
    }

    return generateMetadataFromService(service, location);
}

export default async function ServiceLocationPage({ params }: Props) {
    const { service, location } = await getData(params.service, params.city);

    if (!service || !location) {
        notFound();
    }

    const content = generateContentFromService(service, location);

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '60vh' }}>
            <nav style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>{service.title}</span> / <span style={{ color: 'var(--brand-accent-cyan)' }}>{location.name}</span>
            </nav>

            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                {service.title} in <span style={{ color: 'var(--brand-accent-cyan)' }}>{location.name}</span>
            </h1>

            {/* Dynamic Content Block */}
            <div
                style={{
                    background: 'var(--surface)',
                    padding: '2.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    whiteSpace: 'pre-wrap', // Simple markdown simulation
                    lineHeight: '1.8'
                }}
            >
                {content}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link href="/contact" className={styles.primaryBtn}>
                    Hire Us in {location.name}
                </Link>
            </div>
        </div>
    );
}
