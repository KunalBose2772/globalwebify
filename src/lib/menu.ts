import {
    Code, Smartphone, Search, Palette, Cloud, ShoppingCart,
    Users, Briefcase, Zap, Megaphone, BarChart,
    Globe, Server, Shield, Database, Mail, Monitor, Layers,
    MessageSquare, Video, Mic, PenTool, Image as ImageIcon, HelpCircle, Folder
} from 'lucide-react';

export interface MenuItem {
    id: string;
    title: string;
    href: string;
    description?: string;
    iconName?: string;
    featuredImage?: string; // For the first column image
    children?: MenuItem[];
}

export const initialMenuData: MenuItem[] = [
    {
        id: 'website',
        title: 'WEBSITE',
        href: '/website',
        featuredImage: '/images/mega-menu-feature.jpg',
        children: [
            { id: '2376', title: 'Small Business Website', href: '/small-business-website', iconName: 'Monitor' },
            { id: '2377', title: 'Web Development', href: '/web-development', iconName: 'Code' },
            { id: '2378', title: 'ECommerce Web Designing', href: '/ecommerce-web-designing', iconName: 'ShoppingCart' },
            { id: '2380', title: 'Website Designing By Industry', href: '/website-designing-by-industry', iconName: 'Layers' },
            { id: '2381', title: 'Responsive Web Designing', href: '/responsive-web-designing', iconName: 'Smartphone' },
            { id: '2382', title: 'Website Redesigning', href: '/website-redesigning', iconName: 'Palette' },
            { id: '2383', title: 'Website Maintenance', href: '/website-maintenance', iconName: 'Zap' },
            { id: '2384', title: 'Domain Registration / Pricing', href: '/domain-registration-pricing', iconName: 'Globe' },
            { id: '2385', title: 'Domain Transfer', href: '/domain-transfer', iconName: 'ArrowRight' },
            { id: '2386', title: 'Domain Renewal', href: '/domain-renewal', iconName: 'RefreshCw' },
        ]
    },
    {
        id: 'hosting',
        title: 'HOSTING',
        href: '/hosting',
        featuredImage: '/images/mega-menu-feature.jpg',
        children: [
            { id: '2387', title: 'Shared Hosting', href: '/shared-hosting', iconName: 'Server' },
            { id: '2388', title: 'VPS Hosting', href: '/vps-hosting', iconName: 'Database' },
            { id: '2389', title: 'Dedicated Hosting', href: '/dedicated-hosting', iconName: 'HardDrive' },
            { id: '2390', title: 'Unlimited Hosting', href: '/unlimited-hosting', iconName: 'Cloud' },
            { id: '2391', title: 'Cloud Hosting', href: '/cloud-hosting', iconName: 'CloudLightning' },
            { id: '2392', title: 'WordPress Hosting', href: '/wordpress-hosting', iconName: 'Globe' },
            { id: '2393', title: 'Email Hosting', href: '/email-hosting', iconName: 'Mail' },
            { id: '2394', title: 'SSL Certificate', href: '/ssl-certificate', iconName: 'Shield' },
            { id: '2395', title: 'Website Backup', href: '/website-backup', iconName: 'Save' },
        ]
    },
    {
        id: 'digital-marketing',
        title: 'DIGITAL MARKETING',
        href: '/digital-marketing',
        featuredImage: '/images/mega-menu-feature.jpg',
        children: [
            { id: '2396', title: 'Whatsapp Marketing', href: '/whatsapp-marketing', iconName: 'MessageSquare' },
            { id: '2397', title: 'SMS Marketing', href: '/sms-marketing', iconName: 'Smartphone' },
            { id: '2398', title: 'Content Marketing', href: '/content-marketing', iconName: 'PenTool' },
            { id: '2399', title: 'Digital Marketing By Industry', href: '/digital-marketing-by-industry', iconName: 'BarChart' },
            { id: '2400', title: 'SEO/ Search Engine Optimisation', href: '/seo-search-engine-optimisation', iconName: 'Search' },
            { id: '2401', title: 'Social Media Marketing', href: '/social-media-marketing', iconName: 'ThumbsUp' },
            { id: '2402', title: 'Paid Ads/PPC', href: '/paid-ads-ppc', iconName: 'MousePointer' },
            { id: '2403', title: 'Email Marketing', href: '/email-marketing', iconName: 'Mail' },
            { id: '2404', title: 'Voice Marketing', href: '/voice-marketing', iconName: 'Mic' },
            { id: '2443', title: 'Digital Marketing Services', href: '/digital-marketing', iconName: 'Megaphone' },
        ]
    },
    {
        id: 'branding-pr',
        title: 'BRANDING & PR',
        href: '/branding-pr',
        featuredImage: '/images/mega-menu-feature.jpg',
        children: [
            { id: '2406', title: 'Online Reputation Management', href: '/online-reputation-management', iconName: 'Star' },
            { id: '2407', title: 'Press Release Distribution', href: '/press-release', iconName: 'Newspaper' },
            { id: '2408', title: 'Digital Branding Agency', href: '/branding', iconName: 'Palette' },
            { id: '2409', title: 'Corporate Video Production Agency', href: '/corporate-video-production-agency', iconName: 'Video' },
            { id: '2410', title: 'Influencer Marketing', href: '/influencer-marketing', iconName: 'Users' },
            { id: '2411', title: 'Graphic Designing', href: '/graphic-designing', iconName: 'PenTool' },
            { id: '2412', title: 'PR Agency', href: '/pr', iconName: 'Megaphone' },
            { id: '2413', title: 'Brand Image Building', href: '/brand-image-building', iconName: 'Image' },
            { id: '2414', title: 'Corporate Film Makers', href: '/corporate-film-makers', iconName: 'Film' },
        ]
    },
    {
        id: 'company',
        title: 'COMPANY',
        href: '/company',
        featuredImage: '/images/mega-menu-feature.jpg',
        children: [
            { id: '2418', title: 'About Us', href: '/about', iconName: 'Info' },
            { id: '2419', title: 'Our Team', href: '/team', iconName: 'Users' },
            { id: '2420', title: 'Careers', href: '/career', iconName: 'Briefcase' },
            { id: '2421', title: 'Testimonials', href: '/testimonials', iconName: 'MessageSquare' },
            { id: '2422', title: 'Gallery', href: '/gallery', iconName: 'ImageIcon' },
            { id: '2423', title: 'Blogs', href: '/blogs', iconName: 'BookOpen' },
            { id: '2425', title: 'FAQ', href: '/faq', iconName: 'HelpCircle' },
            { id: '2427', title: 'Portfolio', href: '/portfolio', iconName: 'Folder' },
        ]
    },
    {
        id: 'partners',
        title: 'PARTNERS',
        href: '/partners',
        children: []
    },
    { id: 'contact', title: 'CONTACT', href: '/contact', children: [] }
];

export async function getMegaMenuData(): Promise<MenuItem[]> {
    return initialMenuData;
}
