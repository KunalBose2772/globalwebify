'use client';

import { BUSINESS_INFO } from '@/lib/constants';
import styles from '../page.module.css'; // Reuse container/hero styles
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <div style={{ paddingTop: '2rem' }}>
            {/* Header */}
            <section className={styles.section} style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
                    <p className={styles.sectionDesc}>
                        Ready to start your project? Get in touch with our global team.
                    </p>
                </div>
            </section>

            <section className="container" style={{ paddingBottom: '6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Get in Touch</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {/* Phone */}
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-accent-cyan)' }}>
                                    <Phone size={24} /> Phone Support
                                </h3>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Main:</strong> {BUSINESS_INFO.contact.phone.main}</p>
                                <p style={{ marginBottom: '0.5rem' }}><strong>Toll Free:</strong> {BUSINESS_INFO.contact.phone.tollFree}</p>
                                <p><strong>US Office:</strong> {BUSINESS_INFO.contact.phone.us}</p>
                            </div>

                            {/* Email */}
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-accent-cyan)' }}>
                                    <Mail size={24} /> Email
                                </h3>
                                <p>{BUSINESS_INFO.contact.email}</p>
                            </div>

                            {/* Addresses */}
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-accent-cyan)' }}>
                                    <MapPin size={24} /> Locations
                                </h3>
                                <div style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)' }}>
                                    <h4 style={{ marginBottom: '0.5rem', color: 'white' }}>Ranchi HQ</h4>
                                    <p>{BUSINESS_INFO.address.ranchi.line1}</p>
                                    <p>{BUSINESS_INFO.address.ranchi.city}, {BUSINESS_INFO.address.ranchi.state} - {BUSINESS_INFO.address.ranchi.zip}</p>
                                </div>
                                <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)' }}>
                                    <h4 style={{ marginBottom: '0.5rem', color: 'white' }}>Kolkata Office</h4>
                                    <p>{BUSINESS_INFO.address.kolkata.line1}</p>
                                    <p>{BUSINESS_INFO.address.kolkata.city}, {BUSINESS_INFO.address.kolkata.state} - {BUSINESS_INFO.address.kolkata.zip}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Placeholder */}
                    <div style={{ background: 'var(--surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Send a Message</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: 'none', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input type="email" placeholder="email@example.com" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: 'none', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Service Interest</label>
                                <select style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: 'none', background: 'rgba(255,255,255,0.05)', color: 'white' }}>
                                    <option>Web Development</option>
                                    <option>Mobile App</option>
                                    <option>SEO</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                <textarea rows={5} placeholder="Tell us about your project..." style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: 'none', background: 'rgba(255,255,255,0.05)', color: 'white' }}></textarea>
                            </div>
                            <button type="button" className={styles.primaryBtn} style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}
