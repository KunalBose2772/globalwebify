'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { initialMenuData } from '@/lib/menu';
import { ArrowRight, Code, Smartphone, Search, Palette, Cloud, ShoppingCart, Activity, Shield, Globe, Star, TrendingUp, CheckCircle, Zap, MapPin, Users, Briefcase, CalendarClock, Globe2 } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// PROCESS SECTION DATA
const PROCESS_STEPS = [
  {
    id: 1,
    title: "How the business actually makes money",
    desc: "We understand what truly drives revenue, what is assumed to work, and what silently blocks growth.",
    card: {
      header: "Business Overview",
      metrics: [
        { label: "Revenue Drivers", value: "Identified & Mapped" },
        { label: "Sales Cycle", value: "Analyzed (14-30 Days)" }
      ],
      status: "Business Context Understood"
    }
  },
  {
    id: 2,
    title: "Where enquiries get lost",
    desc: "We identify gaps between traffic, trust, conversion, and follow-up that reduce enquiries.",
    card: {
      header: "Enquiry Flow Analysis",
      metrics: [
        { label: "Traffic -> Enquiry", value: "Conversion Gap Found" },
        { label: "Drop-off Points", value: "Checkout & Contact" }
      ],
      status: "Leak Points Identified"
    }
  },
  {
    id: 3,
    title: "What kind of system is needed",
    desc: "Not every business needs more marketing. Some need clarity, structure, and alignment.",
    card: {
      header: "System Architecture",
      metrics: [
        { label: "Core Modules", value: "Website + CRM + Tracking" },
        { label: "Integration", value: "Seamless Data Flow" }
      ],
      status: "System Mapped"
    }
  },
  {
    id: 4,
    title: "Who owns which result",
    desc: "Clear responsibility so outcomes don’t get lost between vendors, tools, or teams.",
    card: {
      header: "Execution Protocols",
      metrics: [
        { label: "Primary Owner", value: "Defined per KPI" },
        { label: "Reporting", value: "Weekly Accountability" }
      ],
      status: "Accountability Assigned"
    }
  },
  {
    id: 5,
    title: "What to track and why",
    desc: "We focus on numbers that guide decisions — not vanity metrics.",
    card: {
      header: "Performance Review",
      metrics: [
        { label: "Key Metrics", value: "Revenue, CPA, LTV" },
        { label: "Growth Trend", value: "Positive Trajectory" }
      ],
      status: "System Optimized"
    }
  }
];

const SERVICES_DATA = [
  {
    title: "High-Converting Website Systems",
    desc: "Websites engineered to generate revenue, not just represent your brand. We build digital storefronts that guide visitors from curiosity to conversion.",
    capabilities: ["Conversion-focused UI", "Landing Systems", "Lead Capture Flows"],
    cta: "See Website Systems",
    visual: "WebModule"
  },
  {
    title: "Lead & Revenue Growth Infrastructure",
    desc: "Marketing systems designed to bring consistent enquiries. We fix the gaps where you're losing money and build a pipeline that works.",
    capabilities: ["Performance Campaigns", "Funnel Structuring", "Lead Tracking"],
    cta: "View Growth Infrastructure",
    visual: "FunnelModule"
  },
  {
    title: "Brand Authority & Market Positioning",
    desc: "Positioning your business as a credible leader. We ensure your market perceives you as the premium choice.",
    capabilities: ["Identity Systems", "Brand Communication", "Trust Architecture"],
    cta: "Explore Branding",
    visual: "BrandModule"
  },
  {
    title: "Technology, Automation & Tracking",
    desc: "Backend systems that automate busywork and track every dollar. Know exactly what's working and scale without chaos.",
    capabilities: ["CRM Integrations", "Analytics Setup", "Automation Pipelines"],
    cta: "Check Tech Capabilities",
    visual: "TechModule"
  }
];

// UNIQUE CARD COMPONENTS - Each card has completely different design

// Card 1: Analytics Dashboard (like hero section)
function RevenueAnalyticsCard({ data }: { data: any }) {
  return (
    <div className={styles.revenueCard}>
      <div className={styles.revenueHeader}>
        <div className={styles.revenueDots}>
          <div className={`${styles.dot} ${styles.red}`}></div>
          <div className={`${styles.dot} ${styles.yellow}`}></div>
          <div className={`${styles.dot} ${styles.green}`}></div>
        </div>
        <div className={styles.revenueTitle}>business_intelligence.app</div>
      </div>

      <div className={styles.revenueBody}>
        <div className={styles.revenueMetrics}>
          <div className={styles.revenueMetric}>
            <div className={styles.metricLabel}>REVENUE STREAMS</div>
            <div className={styles.metricValue}>
              ₹247K <span className={styles.growth}>+32%</span>
            </div>
          </div>
          <div className={styles.revenueMetric}>
            <div className={styles.metricLabel}>SALES VELOCITY</div>
            <div className={styles.metricValue}>
              18 Days <span className={styles.growth}>-6d</span>
            </div>
          </div>
        </div>

        <div className={styles.revenueChart}>
          <div className={styles.chartLabel}>Revenue Drivers Mapped</div>
          <div className={styles.chartBars}>
            <div className={styles.chartBar} style={{ height: '60%' }}></div>
            <div className={styles.chartBar} style={{ height: '85%' }}></div>
            <div className={styles.chartBar} style={{ height: '75%' }}></div>
            <div className={styles.chartBar} style={{ height: '95%' }}></div>
          </div>
        </div>

        <div className={styles.revenueBadge}>
          <CheckCircle size={14} /> {data.status}
        </div>
      </div>
    </div>
  );
}

// Card 2: Funnel Visualization
function FunnelAnalysisCard({ data }: { data: any }) {
  return (
    <div className={styles.funnelCard}>
      <div className={styles.funnelHeader}>
        <div className={styles.funnelIcon}>
          <TrendingUp size={20} />
        </div>
        <div className={styles.funnelTitle}>Conversion Funnel Analysis</div>
      </div>

      <div className={styles.funnelBody}>
        <div className={styles.funnelStages}>
          <div className={styles.funnelStage} style={{ width: '100%' }}>
            <span>Traffic</span>
            <strong>10,000</strong>
          </div>
          <div className={styles.funnelStage} style={{ width: '75%' }}>
            <span>Engaged</span>
            <strong>7,500</strong>
          </div>
          <div className={styles.funnelStage} style={{ width: '45%' }}>
            <span>Intent</span>
            <strong>4,500</strong>
          </div>
          <div className={styles.funnelStage} style={{ width: '25%' }}>
            <span>Enquiry</span>
            <strong>2,500</strong>
          </div>
        </div>

        <div className={styles.funnelInsight}>
          <div className={styles.insightIcon}>⚠️</div>
          <div className={styles.insightText}>
            <strong>Drop-off Alert:</strong> 40% loss at checkout
          </div>
        </div>

        <div className={styles.funnelStatus}>
          <CheckCircle size={14} /> {data.status}
        </div>
      </div>
    </div>
  );
}

// Card 3: System Architecture Diagram
function SystemArchitectureCard({ data }: { data: any }) {
  return (
    <div className={styles.architectureCard}>
      <div className={styles.archHeader}>
        <div className={styles.archTitle}>System Blueprint</div>
        <div className={styles.archVersion}>v2.1</div>
      </div>

      <div className={styles.archBody}>
        <div className={styles.archDiagram}>
          <div className={styles.archNode}>
            <Globe size={18} />
            <span>Website</span>
          </div>
          <div className={styles.archConnector}></div>
          <div className={styles.archNode}>
            <Users size={18} />
            <span>CRM</span>
          </div>
          <div className={styles.archConnector}></div>
          <div className={styles.archNode}>
            <Activity size={18} />
            <span>Analytics</span>
          </div>
        </div>

        <div className={styles.archModules}>
          <div className={styles.archModule}>
            <div className={styles.moduleIcon}>🎯</div>
            <div className={styles.moduleInfo}>
              <div className={styles.moduleName}>Lead Capture</div>
              <div className={styles.moduleStatus}>Active</div>
            </div>
          </div>
          <div className={styles.archModule}>
            <div className={styles.moduleIcon}>🔄</div>
            <div className={styles.moduleInfo}>
              <div className={styles.moduleName}>Auto-Sync</div>
              <div className={styles.moduleStatus}>Real-time</div>
            </div>
          </div>
        </div>

        <div className={styles.archBadge}>
          <CheckCircle size={14} /> {data.status}
        </div>
      </div>
    </div>
  );
}

// Card 4: Team Accountability Board
function AccountabilityCard({ data }: { data: any }) {
  return (
    <div className={styles.accountabilityCard}>
      <div className={styles.accHeader}>
        <div className={styles.accTitle}>Execution Dashboard</div>
        <div className={styles.accDate}>Week 12, 2026</div>
      </div>

      <div className={styles.accBody}>
        <div className={styles.accOwners}>
          <div className={styles.accOwner}>
            <div className={styles.ownerAvatar}>PM</div>
            <div className={styles.ownerInfo}>
              <div className={styles.ownerName}>Project Manager</div>
              <div className={styles.ownerKpi}>Timeline & Delivery</div>
            </div>
            <div className={styles.ownerStatus}>✓</div>
          </div>

          <div className={styles.accOwner}>
            <div className={styles.ownerAvatar}>MK</div>
            <div className={styles.ownerInfo}>
              <div className={styles.ownerName}>Marketing Lead</div>
              <div className={styles.ownerKpi}>Lead Generation</div>
            </div>
            <div className={styles.ownerStatus}>✓</div>
          </div>
        </div>

        <div className={styles.accReporting}>
          <div className={styles.reportLabel}>Next Review</div>
          <div className={styles.reportValue}>Monday, 9 AM</div>
        </div>

        <div className={styles.accBadge}>
          <CheckCircle size={14} /> {data.status}
        </div>
      </div>
    </div>
  );
}

// Card 5: Metrics Tracking Panel
function MetricsTrackingCard({ data }: { data: any }) {
  return (
    <div className={styles.metricsCard}>
      <div className={styles.metricsHeader}>
        <div className={styles.metricsIcon}>
          <Activity size={20} />
        </div>
        <div className={styles.metricsTitle}>Performance Metrics</div>
      </div>

      <div className={styles.metricsBody}>
        <div className={styles.metricsGrid}>
          <div className={styles.metricItem}>
            <div className={styles.metricItemLabel}>Revenue</div>
            <div className={styles.metricItemValue}>₹128K</div>
            <div className={styles.metricItemTrend}>↗ +28%</div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricItemLabel}>CPA</div>
            <div className={styles.metricItemValue}>₹4200</div>
            <div className={styles.metricItemTrend}>↘ -15%</div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricItemLabel}>LTV</div>
            <div className={styles.metricItemValue}>₹2,40000</div>
            <div className={styles.metricItemTrend}>↗ +12%</div>
          </div>

          <div className={styles.metricItem}>
            <div className={styles.metricItemLabel}>ROI</div>
            <div className={styles.metricItemValue}>4.8x</div>
            <div className={styles.metricItemTrend}>↗ +0.6x</div>
          </div>
        </div>

        <div className={styles.metricsInsight}>
          <Zap size={14} />
          <span>All metrics trending positive</span>
        </div>

        <div className={styles.metricsBadge}>
          <CheckCircle size={14} /> {data.status}
        </div>
      </div>
    </div>
  );
}

// Dynamic Card Renderer
function DynamicProcessCard({ stepId, data }: { stepId: number; data: any }) {
  switch (stepId) {
    case 1:
      return <RevenueAnalyticsCard data={data} />;
    case 2:
      return <FunnelAnalysisCard data={data} />;
    case 3:
      return <SystemArchitectureCard data={data} />;
    case 4:
      return <AccountabilityCard data={data} />;
    case 5:
      return <MetricsTrackingCard data={data} />;
    default:
      return <RevenueAnalyticsCard data={data} />;
  }
}

function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [sectionHeight, setSectionHeight] = useState<number>(0);
  const [isPinned, setIsPinned] = useState(false);
  const headerHeight = 90;

  useEffect(() => {
    const compute = () => setSectionHeight(window.innerHeight * PROCESS_STEPS.length);
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId: number | null = null;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = rect.top + window.scrollY - headerHeight;
      const total = sectionHeight || el.offsetHeight || viewport * PROCESS_STEPS.length;
      const end = start + total - viewport;
      const scrollTop = window.scrollY;

      setIsPinned(scrollTop >= start && scrollTop < end);

      const clamped = Math.min(Math.max(scrollTop - start, 0), total - viewport);
      const progress = clamped / Math.max(total - viewport, 1);
      const index = Math.min(PROCESS_STEPS.length - 1, Math.floor(progress * PROCESS_STEPS.length));
      setActiveStep(index);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, [sectionHeight, headerHeight]);

  return (
    <>
      <section
        ref={containerRef}
        className={styles.processSection}
        style={{ height: `${PROCESS_STEPS.length * 100}vh` }}
      >
        <div
          className={styles.processSticky}
          style={
            isPinned
              ? {
                position: 'fixed',
                top: `${headerHeight}px`,
                left: 0,
                right: 0,
                height: `calc(100vh - ${headerHeight}px)`
              }
              : {
                position: 'absolute',
                top: isPinned ? `${headerHeight}px` : undefined,
                height: `calc(100vh - ${headerHeight}px)`
              }
          }
        >
          <div className={styles.processContainer}>
            <div className={styles.leftColumn}>
              <div className={styles.contentStage}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className={styles.stepContent}
                  >
                    <span className={styles.stepNumber}>0{PROCESS_STEPS[activeStep].id}</span>
                    <h3 className={styles.stepTitle}>{PROCESS_STEPS[activeStep].title}</h3>
                    <p className={styles.stepDesc}>{PROCESS_STEPS[activeStep].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.cardStage}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.9, rotateY: 25 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -25 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.cardSwap}
                  >
                    <DynamicProcessCard stepId={PROCESS_STEPS[activeStep].id} data={PROCESS_STEPS[activeStep].card} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mobileProcess}>
        <div className="container">
          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className={styles.mobileStep}>
              <div className={styles.mobileStepText}>
                <span className={styles.stepNumber}>0{step.id}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              <DynamicProcessCard stepId={step.id} data={step.card} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// Visual Components for Each Outcome Card
function WebsiteSystemVisual() {
  return (
    <div className={styles.systemVisual}>
      <div className={styles.browserMock}>
        <div className={styles.browserBar}>
          <div className={styles.browserDots}>
            <span></span><span></span><span></span>
          </div>
        </div>
        <div className={styles.browserContent}>
          <div className={styles.mockSection} style={{ height: '30%', background: 'linear-gradient(135deg, #00d4ff 0%, #0088cc 100%)' }}></div>
          <div className={styles.mockGrid}>
            <div className={styles.mockBlock}></div>
            <div className={styles.mockBlock}></div>
            <div className={styles.mockBlock}></div>
          </div>
          <div className={styles.ctaButton}>Convert</div>
        </div>
      </div>
    </div>
  );
}

function GrowthFunnelVisual() {
  return (
    <div className={styles.systemVisual}>
      <div className={styles.funnelDiagram}>
        <div className={styles.funnelStageViz} style={{ width: '100%' }}>
          <span>Traffic</span>
          <strong>10K</strong>
        </div>
        <div className={styles.funnelStageViz} style={{ width: '70%' }}>
          <span>Engaged</span>
          <strong>7K</strong>
        </div>
        <div className={styles.funnelStageViz} style={{ width: '40%' }}>
          <span>Leads</span>
          <strong>4K</strong>
        </div>
        <div className={styles.funnelStageViz} style={{ width: '20%' }}>
          <span>Sales</span>
          <strong>2K</strong>
        </div>
        <div className={styles.conversionBadge}>
          <TrendingUp size={16} />
          <span>+28% Growth</span>
        </div>
      </div>
    </div>
  );
}

function BrandSystemVisual() {
  return (
    <div className={styles.systemVisual}>
      <div className={styles.brandShowcase}>
        <div className={styles.brandLogo}>
          <div className={styles.logoShape}></div>
        </div>
        <div className={styles.brandElements}>
          <div className={styles.colorPalette}>
            <div className={styles.colorSwatch} style={{ background: '#00d4ff' }}></div>
            <div className={styles.colorSwatch} style={{ background: '#0088cc' }}></div>
            <div className={styles.colorSwatch} style={{ background: '#22c55e' }}></div>
          </div>
          <div className={styles.typographyPreview}>
            <div className={styles.typeHeading}>Aa</div>
            <div className={styles.typeBody}>Typography</div>
          </div>
        </div>
        <div className={styles.trustBadgeViz}>
          <Shield size={20} />
          <span>Premium</span>
        </div>
      </div>
    </div>
  );
}

function TechSystemVisual() {
  return (
    <div className={styles.systemVisual}>
      <div className={styles.techDiagram}>
        <div className={styles.techNode}>
          <Globe size={18} />
          <span>Website</span>
        </div>
        <div className={styles.techFlow}></div>
        <div className={styles.techNode}>
          <Users size={18} />
          <span>CRM</span>
        </div>
        <div className={styles.techFlow}></div>
        <div className={styles.techNode}>
          <Activity size={18} />
          <span>Analytics</span>
        </div>
        <div className={styles.automationBadge}>
          <Zap size={14} />
          <span>Automated</span>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isPinned, setIsPinned] = React.useState(false);
  const containerRef = React.useRef<HTMLElement>(null);

  const outcomes = [
    {
      id: 1,
      title: "High-Converting Website Systems",
      desc: "Websites engineered to generate revenue, not just represent your brand. We build digital storefronts that guide visitors from curiosity to conversion.",
      capabilities: ["Conversion-focused UI", "Landing Systems", "Lead Capture Flows"],
      cta: "See Website Systems",
      visual: <WebsiteSystemVisual />
    },
    {
      id: 2,
      title: "Lead & Revenue Growth Infrastructure",
      desc: "Marketing systems designed to bring consistent enquiries. We fix the gaps where you're losing money and build a pipeline that works.",
      capabilities: ["Performance Campaigns", "Funnel Structuring", "Lead Tracking"],
      cta: "View Growth Infrastructure",
      visual: <GrowthFunnelVisual />
    },
    {
      id: 3,
      title: "Brand Authority & Market Positioning",
      desc: "Positioning your business as a credible leader. We ensure your market perceives you as the premium choice.",
      capabilities: ["Identity Systems", "Brand Communication", "Trust Architecture"],
      cta: "Explore Branding",
      visual: <BrandSystemVisual />
    },
    {
      id: 4,
      title: "Technology, Automation & Tracking",
      desc: "Backend systems that automate busywork and track every dollar. Know exactly what's working and scale without chaos.",
      capabilities: ["CRM Integrations", "Analytics Setup", "Automation Pipelines"],
      cta: "Check Tech Capabilities",
      visual: <TechSystemVisual />
    }
  ];

  // Progressive scale for stacking effect: 75% → 80% → 90% → 100%
  const cardScales = [0.75, 0.80, 0.90, 1.0];

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId: number | null = null;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = rect.top + window.scrollY;
      const total = el.offsetHeight || viewport * outcomes.length;
      const end = start + total - viewport;
      const scrollTop = window.scrollY;

      setIsPinned(scrollTop >= start && scrollTop < end);

      const clamped = Math.min(Math.max(scrollTop - start, 0), total - viewport);
      const progress = clamped / Math.max(total - viewport, 1);
      const index = Math.min(outcomes.length - 1, Math.floor(progress * outcomes.length));
      setActiveCard(index);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, [outcomes.length]);

  return (
    <section
      ref={containerRef}
      className={styles.servicesSection}
      style={{ height: `${outcomes.length * 100}vh` }}
    >
      <div
        className={styles.servicesSticky}
        style={
          isPinned
            ? {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '100vh'
            }
            : {
              position: 'absolute',
              top: 0,
              height: '100vh'
            }
        }
      >
        {/* Header */}
        <div className={styles.servicesHeader}>
          <h2 className={styles.sectionTitle}>Business Outcome Stack</h2>
          <p className={styles.sectionDesc}>
            We don't sell "services". We build systems that deliver specific business outcomes.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className={styles.stackedCardsWrapper}>
          {outcomes.map((outcome, index) => {
            const isActive = index === activeCard;
            const isPast = index < activeCard;
            const isFuture = index > activeCard;

            // Calculate scale based on position
            const baseScale = cardScales[index] || 1.0;
            const scale = isActive ? 1.0 : isPast ? baseScale * 0.95 : baseScale;

            // Calculate offset for stacking
            const yOffset = isPast ? -20 * (activeCard - index) : isFuture ? 40 * (index - activeCard) : 0;

            return (
              <motion.div
                key={index}
                className={styles.stackedCardItem}
                animate={{
                  scale: scale,
                  y: yOffset,
                  opacity: isActive ? 1 : isPast ? 0.3 : 0.7,
                  zIndex: isActive ? 50 : 50 - Math.abs(index - activeCard) * 10
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  filter: isActive ? 'blur(0px)' : `blur(${Math.abs(index - activeCard) * 2}px)`
                }}
              >
                <div className={styles.largeOutcomeCard}>
                  {/* Card Content - Horizontal Layout */}
                  <div className={styles.cardLeft}>
                    <span className={styles.cardNumber}>0{outcome.id}</span>
                    <h3 className={styles.cardTitle}>{outcome.title}</h3>
                    <p className={styles.cardDesc}>{outcome.desc}</p>
                    <div className={styles.cardCaps}>
                      {outcome.capabilities.map((cap, i) => (
                        <span key={i} className={styles.cardCapBadge}>{cap}</span>
                      ))}
                    </div>
                    <Link href="/services" className={styles.cardCta}>
                      {outcome.cta} <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Card Visual */}
                  <div className={styles.cardRight}>
                    {outcome.visual}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



// SECTION 6: PORTFOLIO / PROOF OF WORK (Selected Systems)
function PortfolioSection() {
  const projects = [
    {
      id: 1,
      type: "E-Commerce System",
      title: "Direct-to-Consumer Growth Platform",
      desc: "An e-commerce system built to increase repeat purchases and lifetime value, not just one-off sales.",
      metric: "+38% Repeat Revenue",
      link: "/case-studies/ecommerce"
    },
    {
      id: 2,
      type: "Lead Gen Platform",
      title: "Real Estate Acquisition System",
      desc: "A high-performance lead generation platform for a developer, automating qualification and follow-up.",
      metric: "Reduced Lead Cost by 22%",
      link: "/case-studies/real-estate"
    },
    {
      id: 3,
      type: "B2B Service Platform",
      title: "Consultancy Operations Hub",
      desc: "A centralized digital hub for a consultancy firm to manage client resources and authority content.",
      metric: "3× Faster Client Onboarding",
      link: "/case-studies/consultancy"
    },
    {
      id: 4,
      type: "SaaS Dashboard",
      title: "Analytics & Reporting Interface",
      desc: "A custom dashboard for tracking operational efficiency and visualizing key performance metrics.",
      metric: "Real-time Data Sync",
      link: "/case-studies/saas"
    }
  ];

  return (
    <section className={styles.portfolioSection}>
      <div className="container">
        <div className={styles.portfolioHeader}>
          <h2 className={styles.sectionTitle}>Selected business systems we’ve built and scaled</h2>
          <p className={styles.sectionDesc}>
            Evidence of business impact across different industries.
          </p>
        </div>

        <div className={styles.portfolioGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectVisual}>
                <div className={styles.projectImagePlaceholder}>
                  {/* Abstract Visual Placeholder */}
                  <div className={styles.projectAbstractViz} data-type={project.id}></div>
                  <div className={styles.projectMetricBadge}>
                    <TrendingUp size={14} />
                    {project.metric}
                  </div>
                </div>
                <div className={styles.projectOverlay}>
                  <Link href={project.link} className={styles.viewProjectBtn}>
                    View Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className={styles.projectContent}>
                <span className={styles.projectType}>{project.type}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 7: CLIENT TESTIMONIALS (Social Proof)
function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh K.",
      role: "Director",
      company: "Apex Manufacturing",
      industry: "Manufacturing",
      quote: "We had worked with multiple agencies before, but clarity was always missing. Global Webify helped us understand where our enquiries were actually dropping — and built a system around fixing that. It wasn't just a website; it was a process fix.",
      initials: "RK"
    },
    {
      id: 2,
      name: "Sneha M.",
      role: "Founder",
      company: "Urban Retail",
      industry: "Retail & E-commerce",
      quote: "I was skeptical about another 'redesign'. But they didn't talk about colors; they talked about repeat purchase systems. The result is a platform that actually retains our customers, rather than just showing them products.",
      initials: "SM"
    },
    {
      id: 3,
      name: "Arun V.",
      role: "Managing Partner",
      company: "Legal Associates",
      industry: "Professional Services",
      quote: "Our biggest challenge was positioning. We looked like every other firm. Global Webify's clear outcome stack helped us package our services as a 'solution', which completely changed how clients perceive our value.",
      initials: "AV"
    }
  ];

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.testimonialHeader}>
          <h2 className={styles.sectionTitle}>What business owners say after working with us</h2>
          <p className={styles.sectionDesc}>Feedback from businesses we’ve partnered with.</p>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((t) => (
            <div key={t.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.testimonialText}>{t.quote}</p>

              <div className={styles.clientProfile}>
                <div className={styles.clientAvatar}>{t.initials}</div>
                <div className={styles.clientInfo}>
                  <div className={styles.clientName}>{t.name}</div>
                  <div className={styles.clientRole}>{t.role}, {t.company}</div>
                  <div className={styles.clientIndustry}>{t.industry}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.testimonialFooter}>
          <div className={styles.retentionBadge}>
            <CheckCircle size={16} />
            Most of our partnerships continue beyond the first project.
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 8: FINAL CTA (Decision Block)
function FinalCTASection() {
  return (
    <section className={styles.finalCtaSection}>
      <div className="container">
        <div className={styles.decisionBlock}>
          <h2 className={styles.decisionTitle}>Let’s understand where your growth stands today.</h2>
          <p className={styles.decisionDesc}>
            No sales pitch. No commitments. Just a clear conversation about your current digital setup and growth opportunities.
          </p>

          <div className={styles.decisionActions}>
            <Link href="/contact" className={styles.primaryDecisionBtn}>
              Get a Growth Plan
            </Link>
            <Link href="/contact" className={styles.secondaryDecisionBtn}>
              Claim Free Website Audit
            </Link>
          </div>

          <p className={styles.trustMicroLine}>
            Most businesses we speak to leave with clarity — even before working with us.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const services = initialMenuData.find(item => item.id === 'website')?.children || [];

  return (
    <>
      {/* Hero Section - Growth System Authority */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>

          {/* COLUMN 1: Business Authority Copy */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              <span className={styles.headlinePain}>Most business websites look fine — but don’t bring enquiries.</span>
              <span className={styles.headlineOutcome}>We design websites and digital systems that actually bring business.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We help business owners turn their website and marketing into a steady source of leads — not just something that looks good online.
            </p>
            <div className={styles.trustBadges}>
              <span><TrendingUp size={18} /> Built for growing businesses</span>
              <span><Globe size={18} /> Used by clients across India & abroad</span>
            </div>
          </div>

          {/* COLUMN 2: Growth System Visual (Realism Dashboard) */}
          <div className={styles.heroCenter}>
            <div className={styles.growthVisualWrapper}>
              <div className={styles.cssDashboard}>
                {/* Dashboard Toolbar */}
                <div className={styles.dashToolbar}>
                  <div className={styles.dashDots}>
                    <div className={`${styles.dashDot} ${styles.red}`}></div>
                    <div className={`${styles.dashDot} ${styles.yellow}`}></div>
                    <div className={`${styles.dashDot} ${styles.green}`}></div>
                  </div>
                  <div className={styles.dashUrlBar}>globalwebify.com/analytics</div>
                </div>

                {/* Dashboard Content */}
                <div className={styles.dashContent}>
                  <div className={styles.dashWidget}>
                    <div className={styles.widgetTitle}>TOTAL REVENUE</div>
                    <div className={styles.widgetValue}>
                      ₹128,450
                      <span className={styles.widgetGrowth}>+28%</span>
                    </div>
                  </div>
                  <div className={styles.dashWidget}>
                    <div className={styles.widgetTitle}>CONVERSION RATE</div>
                    <div className={styles.widgetValue}>
                      4.8%
                      <span className={styles.widgetGrowth}>+1.2%</span>
                    </div>
                  </div>
                  {/* Large Area Chart */}
                  <div className={styles.chartArea}>
                    <div className={styles.widgetTitle}>TRAFFIC GROWTH (30 DAYS)</div>
                    <div className={styles.chartLine}></div>
                    <div className={styles.chartPath}></div>
                  </div>
                </div>

                {/* Floating Notification */}
                <div className={styles.dashNavFloat}>
                  <CheckCircle size={18} color="#22c55e" /> System Optimized
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Right Trust Card */}
          <div className={styles.heroRight}>
            <div className={styles.conversionCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardLabel}>Trusted by 500+ Business Owners</span>
                <div className={styles.cardStars}>★★★★★</div>
              </div>

              <p className={styles.cardPitch}>
                Working with clients in India and overseas.
              </p>

              <div className={styles.industryIcons}>
                <Code size={18} strokeWidth={1.5} />
                <ShoppingCart size={18} strokeWidth={1.5} />
                <Activity size={18} strokeWidth={1.5} />
                <Zap size={18} strokeWidth={1.5} />
              </div>

              <div className={styles.cardActions}>
                {/* Highlights: Free Website Audit */}
                <Link href="/contact" className={styles.auditBtn}>
                  Claim Free Website Audit
                </Link>

                <Link href="/contact" className={styles.growthBtn}>
                  Get a Growth Plan
                </Link>
              </div>

              <p className={styles.cardFooterText}>No sales pressure. We’ll just tell you what’s working and what isn’t.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: TRUST & REALITY CHECK (The Confidence Bar) */}
      <section className={styles.trustSignals}>
        <div className="container">
          <div className={styles.trustGrid}>

            {/* Metric 1 */}
            <div className={styles.trustItem}>
              <div className={styles.trustIconWrapper}><Briefcase size={20} strokeWidth={1.5} /></div>
              <div className={styles.trustContent}>
                <span className={styles.trustMetric}>Worked with 500+ businesses</span>
                <p className={styles.trustDesc}>Across different industries and business sizes</p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className={styles.trustItem}>
              <div className={styles.trustIconWrapper}><TrendingUp size={20} strokeWidth={1.5} /></div>
              <div className={styles.trustContent}>
                <span className={styles.trustMetric}>Websites designed to bring enquiries</span>
                <p className={styles.trustDesc}>Not just to look good online</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className={styles.trustItem}>
              <div className={styles.trustIconWrapper}><Globe2 size={20} strokeWidth={1.5} /></div>
              <div className={styles.trustContent}>
                <span className={styles.trustMetric}>Clients in India and overseas markets</span>
                <p className={styles.trustDesc}>Working across time zones and markets</p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className={styles.trustItem}>
              <div className={styles.trustIconWrapper}><CalendarClock size={20} strokeWidth={1.5} /></div>
              <div className={styles.trustContent}>
                <span className={styles.trustMetric}>Long-term partnerships</span>
                <p className={styles.trustDesc}>Because growth doesn't happen in one month</p>
              </div>
            </div>

          </div>

          {/* Micro-Detail Bottom Line */}
          <div className={styles.trustFooterLine}>
            We work with business owners who care about long-term results — not quick gimmicks.
          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM MIRROR (Reality Check) */}
      <section className={styles.problemMirror}>
        <div className="container">
          <div className={styles.problemGrid}>

            {/* LEFT: Context & Empathy */}
            <div className={styles.problemLeft}>
              <h2 className={styles.problemHeadline}>
                Most business owners don’t struggle with effort — they struggle with clarity.
              </h2>
              <p className={styles.problemIntro}>
                You invest in a website, marketing, or vendors — but results feel inconsistent. You’re not sure what’s working, what’s wasting money, or who’s actually responsible for growth.
              </p>
            </div>

            {/* RIGHT: The Mirror (Problem List) */}
            <div className={styles.problemRight}>
              <ul className={styles.problemList}>
                <li>Your website looks professional, but enquiries are unpredictable.</li>
                <li>Marketing spends money, but ROI is unclear.</li>
                <li>Different vendors give different answers.</li>
                <li>You don’t know what to fix first.</li>
                <li>Growth depends more on luck than process.</li>
              </ul>
            </div>

          </div>

          {/* The Bridge (Mindset Shift) */}
          <div className={styles.problemBridge}>
            Most businesses don’t need more tools. They need a clearer system and someone who takes ownership of results.
          </div>
        </div>
      </section>


      {/* SECTION 4: OUR APPROACH (System Process) */}
      <ProcessSection />

      {/* SECTION 5: SERVICES (Business Outcome Stack) */}
      <ServicesSection />

      {/* SECTION 6: PORTFOLIO (Selected Systems) */}
      <PortfolioSection />

      {/* SECTION 7: TESTIMONIALS (Social Proof) */}
      <TestimonialSection />

      {/* SECTION 8: FINAL CTA (Decision Block) */}
      <FinalCTASection />
    </>
  );
}
