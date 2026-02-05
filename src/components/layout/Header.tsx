'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    Facebook, Linkedin, Instagram, Twitter,
    Code, Palette, Megaphone, Server,
    Smartphone, Globe, ShoppingCart, Zap,
    ArrowRight, ChevronDown,
    Search, BarChart, Cloud,
    Briefcase, Users, Menu, X as XIcon,
    Shield, Database, Mail, Monitor, Layers,
    MessageSquare, Video, Mic, PenTool, Image as ImageIcon, HelpCircle, Folder,
    HardDrive, CloudLightning, Save, ThumbsUp, MousePointer, Star, Newspaper, Film, Info, BookOpen, RefreshCw
} from 'lucide-react';
import styles from './Header.module.css';
import { getMegaMenuData, MenuItem } from '@/lib/menu';
import clsx from 'clsx';

// Map string names from API to React Components
const iconMap: Record<string, any> = {
    Facebook, Linkedin, Instagram, X: Twitter,
    Code, Palette, Megaphone, Server,
    Smartphone, Globe, ShoppingCart, Zap,
    ArrowRight, ChevronDown,
    Search, BarChart, Cloud,
    Briefcase, Users,
    Shield, Database, Mail, Monitor, Layers,
    MessageSquare, Video, Mic, PenTool, ImageIcon, HelpCircle, Folder,
    HardDrive, CloudLightning, Save, ThumbsUp, MousePointer, Star, Newspaper, Film, Info, BookOpen, RefreshCw
};

export default function Header() {
    const pathname = usePathname();
    const isHomepage = pathname === '/';
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [megaMenuData, setMegaMenuData] = useState<MenuItem[]>([]);

    useEffect(() => {
        // Since getMegaMenuData is async (even if hardcoded), we resolve it here
        async function fetchData() {
            const data = await getMegaMenuData();
            setMegaMenuData(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileMenuOpen]);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <>
            <header className={clsx(styles.header, (scrolled || !isHomepage) && styles.scrolled)}>
                <div className={styles.container}>

                    {/* Logo Wrapper */}
                    <div className={styles.logoWrapper}>
                        <Link href="/" className={styles.logoContainer}>
                            <Image
                                src="/images/logo.png"
                                alt="Global Webify"
                                width={120}
                                height={100}
                                className={styles.logo}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav}>
                        {megaMenuData.map((rootItem) => {
                            const hasChildren = rootItem.children && rootItem.children.length > 0;

                            return (
                                <div
                                    key={rootItem.id}
                                    className={styles.navItem}
                                    onMouseEnter={() => setActiveMegaMenu(rootItem.id)}
                                    onMouseLeave={() => setActiveMegaMenu(null)}
                                >
                                    {hasChildren ? (
                                        <>
                                            <button className={styles.navLink}>
                                                {rootItem.title}
                                                <ChevronDown size={14} className={styles.chevron} strokeWidth={3} />
                                            </button>

                                            {/* MEGA MENU DROPDOWN */}
                                            {activeMegaMenu === rootItem.id && (
                                                <div className={styles.megaMenuFullWidth}>
                                                    <div className={styles.megaMenuInner}>
                                                        <div className={styles.megaMenuColumns}>

                                                            {/* Image Column (Column 1) */}
                                                            <div className={clsx(styles.megaMenuImageCol)}>
                                                                {rootItem.featuredImage && (
                                                                    <Image
                                                                        src={rootItem.featuredImage}
                                                                        alt={rootItem.title}
                                                                        fill
                                                                        style={{ objectFit: 'cover' }}
                                                                        priority
                                                                    />
                                                                )}
                                                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>

                                                                <div className={styles.megaMenuCtaCard}>
                                                                    <h4 className={styles.ctaTitle}>Need {rootItem.title}?</h4>
                                                                    <p className={styles.ctaDesc}>Get professional {rootItem.title.toLowerCase()} services.</p>
                                                                    <Link href="/contact" className={styles.ctaBtn}>
                                                                        Get Started
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            {/* Menu Items Grid */}
                                                            <div className={styles.megaMenuItemsGrid}>
                                                                {rootItem.children!.map((child) => {
                                                                    const ChildIcon = iconMap[child.iconName || 'ArrowRight'] || ArrowRight;
                                                                    return (
                                                                        <Link key={child.id} href={child.href} className={styles.megaMenuLink}>
                                                                            <div className={styles.megaMenuLinkIcon}>
                                                                                <ChildIcon size={20} />
                                                                            </div>
                                                                            <div className={styles.megaMenuLinkContent}>
                                                                                <span className={styles.megaMenuLinkTitle}>{child.title}</span>
                                                                            </div>
                                                                        </Link>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link href={rootItem.href} className={styles.navLink}>
                                            {rootItem.title}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right Side: Socials & CTA */}
                    <div className={styles.rightUtils}>
                        <div className={styles.headerSocials}>
                            <a href="https://facebook.com/globalwebify" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <Facebook size={18} />
                            </a>
                            <a href="https://linkedin.com/company/globalwebify" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://instagram.com/globalwebify" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <Instagram size={18} />
                            </a>
                        </div>

                        <Link href="/contact" className={styles.btnCustom}>Contact Us</Link>

                        <button className={styles.mobileToggler} onClick={toggleMenu} aria-label="Toggle navigation">
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Offcanvas Menu */}
            <div className={clsx(styles.backdrop, mobileMenuOpen && styles.open)} onClick={toggleMenu}></div>
            <div className={clsx(styles.mobileMenu, mobileMenuOpen && styles.open)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                    <Image src="/images/logo.png" alt="Logo" width={80} height={60} style={{ objectFit: 'contain' }} />
                    <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer' }}>
                        <XIcon size={24} />
                    </button>
                </div>
                <ul className={styles.mobileList}>
                    <li className={styles.mobileListItem}><Link href="/" className={styles.mobileLink} onClick={toggleMenu}>WEBSITE</Link></li>
                    {megaMenuData.map((item) => ( // Simplified for mobile
                        <li key={item.id} className={styles.mobileListItem}>
                            <Link href={item.href} className={styles.mobileLink} onClick={toggleMenu}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
