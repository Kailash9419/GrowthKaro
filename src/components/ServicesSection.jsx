import React from 'react';
import { Layout, Code, Target, ShoppingBag, Search, LifeBuoy, ArrowRight, Bot, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
    const services = [
        {
            icon: <Layout size={32} />,
            title: 'Website Design (UI/UX)',
            desc: 'Modern, high-converting interfaces designed to captivate your audience and reduce bounce rates.'
        },
        {
            icon: <Code size={32} />,
            title: 'Web Development',
            desc: 'Blazing fast, secure, and scalable websites built with the latest technologies for peak performance.'
        },
        {
            icon: <Target size={32} />,
            title: 'Landing Pages for Ads',
            desc: 'Purpose-built sales funnels designed to turn expensive ad clicks into high-value leads and sales.'
        },
        {
            icon: <ShoppingBag size={32} />,
            title: 'E-Commerce Solutions',
            desc: 'Robust online stores built to provide a seamless shopping experience and drive revenue growth.'
        },
        {
            icon: <Search size={32} />,
            title: 'Website Optimization & SEO',
            desc: 'Data-driven SEO and speed optimizations to help you rank higher and load faster than competitors.'
        },
        {
            icon: <LifeBuoy size={32} />,
            title: 'Maintenance & Support',
            desc: 'Dedicated technical support and regular updates to keep your website running smoothly 24/7.'
        },
        {
            icon: <ShieldCheck size={32} />,
            title: 'QA & Testing',
            desc: 'Rigorous manual and automated testing to ensure your software is bug-free and reliable.'
        },
        {
            icon: <Zap size={32} />,
            title: 'Test & Workflow Automation',
            desc: 'Automate repetitive tasks and deployments to speed up your operations and reduce human error.'
        },
        {
            icon: <Bot size={32} />,
            title: 'AI Agents & Chatbots',
            desc: 'Intelligent AI assistants trained on your data to handle customer support and automate sales 24/7.'
        }
    ];

    return (
        <section className="section-padding bg-secondary">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Our Expertise</span>
                    <h2>Services Tailored for <span className="text-accent">Growth</span></h2>
                    <p>We combine design brilliance with technical excellence to deliver results.</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            className="service-card"
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <Link to="/services" className="service-link">
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .bg-secondary {
          background-color: var(--bg-secondary);
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .subtitle {
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          display: block;
        }
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .section-header p {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .service-card {
          background: var(--bg-card);
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          transition: var(--transition);
          box-shadow: var(--shadow);
        }
        .service-card:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow-lg);
        }
        .service-icon {
          color: var(--accent);
          margin-bottom: 1.5rem;
        }
        .service-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .service-card p {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .service-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--primary);
          font-size: 0.9rem;
        }
        [data-theme='dark'] .service-link {
          color: var(--accent);
        }
        .service-link:hover {
          gap: 0.75rem;
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default ServicesSection;
