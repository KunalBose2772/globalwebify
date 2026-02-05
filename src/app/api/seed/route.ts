import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Service, Location } from '@/models/Service';

export async function GET() {
    await dbConnect();

    try {
        // Seed Services
        const services = [
            {
                slug: 'web-development',
                title: 'Web Development',
                seoTitleTemplate: 'Best {service} Company in {city}, {state}',
                seoDescriptionTemplate: 'Top-rated {service} services in {city}. We build scalable websites.',
                contentTemplate: `## Enterprise {service} in {city}\n\nGlobal Webify leverages cutting-edge technology to deliver **{service}** solutions in **{city}, {state}**.\n\n### Our Expertise\n- React / Next.js\n- Scalable Architecture\n- SEO Optimization`,
                iconName: 'Code'
            },
            {
                slug: 'mobile-apps',
                title: 'Mobile App Development',
                seoTitleTemplate: 'Top {service} Agency in {city}',
                seoDescriptionTemplate: 'Custom iOS and Android {service} in {city}, {state}.',
                contentTemplate: `## Native & Hybrid {service} in {city}\n\nWe build highly engaging mobile experiences for startups and enterprises in **{city}**.\n\n### Platforms\n- iOS (Swift)\n- Android (Kotlin)\n- Flutter / React Native`,
                iconName: 'Smartphone'
            },
            {
                slug: 'seo',
                title: 'SEO & Marketing',
                seoTitleTemplate: '#1 {service} Services in {city}',
                seoDescriptionTemplate: 'Drive organic traffic with our expert {service} in {city}, {state}.',
                contentTemplate: `## Data-Driven {service} Strategy in {city}\n\nDominate local search results in **{city}** with our proven SEO strategies.\n\n### Services\n- Technical SEO\n- Content Marketing\n- Link Building`,
                iconName: 'Search'
            }
        ];

        for (const s of services) {
            await Service.findOneAndUpdate({ slug: s.slug }, s, { upsert: true, new: true });
        }

        // Seed Locations
        const locations = [
            { slug: 'ranchi', name: 'Ranchi', state: 'Jharkhand', isPrimary: true },
            { slug: 'kolkata', name: 'Kolkata', state: 'West Bengal', isPrimary: true },
            { slug: 'delhi', name: 'New Delhi', state: 'Delhi', isPrimary: false },
            { slug: 'mumbai', name: 'Mumbai', state: 'Maharashtra', isPrimary: false },
            { slug: 'bangalore', name: 'Bangalore', state: 'Karnataka', isPrimary: false },
            { slug: 'ny', name: 'New York', state: 'NY', isPrimary: false },
        ];

        for (const l of locations) {
            await Location.findOneAndUpdate({ slug: l.slug }, l, { upsert: true, new: true });
        }

        return NextResponse.json({ success: true, message: 'Database seeded successfully' });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}
