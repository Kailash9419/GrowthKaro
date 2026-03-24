import React, { useEffect } from 'react';
import { Layout, Code, Target, ShoppingBag, Search, LifeBuoy, Bot, Zap, ShieldCheck } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const serviceList = [
        {
            icon: <Layout className="text-accent" size={40} />,
            title: 'UI/UX Design',
            points: ['User Research & Analysis', 'High-Fidelity Wireframing', 'Interactive Prototyping', 'Conversion Optimization']
        },
        {
            icon: <Code className="text-accent" size={40} />,
            title: 'Full-Stack Development',
            points: ['React & Modern Frameworks', 'API Integrations', 'E-commerce Backends', 'Headless CMS Setup']
        },
        {
            icon: <Target className="text-accent" size={40} />,
            title: 'Landing Page Hub',
            points: ['Multi-variant A/B Testing', 'Copywriting That Sells', 'Mobile-First Layouts', 'Lead Gen Integration']
        },
        {
            icon: <Search className="text-accent" size={40} />,
            title: 'Performance SEO',
            points: ['Technical SEO Audit', 'Keyword Strategy', 'Speed Optimization', 'Backlink Building']
        },
        {
            icon: <ShieldCheck className="text-accent" size={40} />,
            title: 'QA & Software Testing',
            points: ['Automated End-to-End Testing', 'Manual QA & Bug Tracking', 'Performance & Load Testing', 'Security Audits']
        },
        {
            icon: <Zap className="text-accent" size={40} />,
            title: 'Workflow Automation',
            points: ['Custom CI/CD Pipelines', 'Business Process Automation', 'API & Webhook Integrations', 'Data Syncing']
        },
        {
            icon: <Bot className="text-accent" size={40} />,
            title: 'AI Agent Solutions',
            points: ['Custom Chatbot Development', 'LLM Integration & Tuning', 'AI-Driven Customer Support', 'Internal Workflow Bots']
        }
    ];

    return (
        <div className="services-page">
            <section className="internal-hero">
                <div className="container">
                    <h1>Our <span className="text-accent">Services</span></h1>
                    <p>Comprehensive digital solutions designed to help your business scale and dominate the market.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="detailed-services-grid">
                        {serviceList.map((service) => (
                            <div key={service.title} className="detailed-service-item">
                                <div className="service-main">
                                    {service.icon}
                                    <h3>{service.title}</h3>
                                    <div className="points-grid">
                                        {service.points.map((p) => (
                                            <div key={p} className="point">
                                                <span className="dot"></span> {p}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />

            <style jsx="true">{`
        .internal-hero {
          background: var(--primary);
          color: white;
          padding: 80px 0;
          text-align: center;
          margin-bottom: 20px;
        }
        [data-theme='dark'] .internal-hero {
          background: var(--bg-secondary);
        }
        .internal-hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
        .internal-hero p { font-size: 1.2rem; opacity: 0.8; max-width: 700px; margin: 0 auto; }
        
        .detailed-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }
        .detailed-service-item {
          background: var(--bg-card);
          padding: 3rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .detailed-service-item h3 {
          font-size: 1.8rem;
          margin: 1.5rem 0;
        }
        .points-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .point {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .detailed-services-grid { grid-template-columns: 1fr; }
          .points-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default Services;
