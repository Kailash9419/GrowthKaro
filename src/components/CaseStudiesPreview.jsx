import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Code2, Home, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesPreview = () => {
    const caseStudies = [
        {
            title: 'E-Commerce Breakthrough',
            description: 'Transformed an online store with modern UI/UX',
            metric: '+42% Sales Conversion',
            emoji: '🛍️',
            icon: <ShoppingCart className="text-white" size={32} />,
            tag: 'E-Commerce',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            accentColor: '#667eea'
        },
        {
            title: 'SaaS Performance',
            description: 'Optimized platform for millions of users',
            metric: '–60% Page Load Time',
            emoji: '⚡',
            icon: <Code2 className="text-white" size={32} />,
            tag: 'Software',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            accentColor: '#f5576c'
        },
        {
            title: 'Real Estate Boom',
            description: 'Scaled sales pipeline with conversion tools',
            metric: '3x Sales in 60 Days',
            emoji: '🏠',
            icon: <Home className="text-white" size={32} />,
            tag: 'Real Estate',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            accentColor: '#00f2fe'
        }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div className="section-header-flex">
                    <div className="section-header">
                        <span className="subtitle">Our Success Stories</span>
                        <h2>Proven <span className="text-accent">Results</span> for Our Clients</h2>
                    </div>
                    <Link to="/case-studies" className="btn btn-secondary">
                        View All Case Studies <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="case-grid">
                    {caseStudies.map((study) => (
                        <motion.div
                            key={study.title}
                            className="case-card"
                            whileHover={{ scale: 1.05, translateY: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="case-visual" style={{ background: study.gradient }}>
                                <div className="case-icon-container">
                                    {study.icon}
                                </div>
                                <div className="case-emoji-badge">{study.emoji}</div>
                            </div>
                            <div className="case-content">
                                <span className="case-tag" style={{ color: study.accentColor }}>{study.tag}</span>
                                <h3>{study.title}</h3>
                                <p className="case-description">{study.description}</p>
                                <div className="case-metric">
                                    <span className="metric-icon">✓</span>
                                    <strong>{study.metric}</strong>
                                </div>
                                <Link to="/case-studies" className="read-more">
                                    Read Success Story <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .section-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
        }
        .section-header-flex .section-header {
          text-align: left;
          margin-bottom: 0;
        }
        .case-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .case-card {
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
        }
        .case-card:hover {
          box-shadow: 0 15px 40px rgba(45, 212, 191, 0.15);
          border-color: var(--accent);
        }
        .case-visual {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .case-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          position: relative;
        }
        .case-emoji-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 2.5rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .case-content {
          padding: 2rem;
        }
        .case-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          display: block;
          letter-spacing: 1px;
        }
        .case-content h3 {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
          color: var(--text-main);
        }
        .case-description {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }
        .case-metric {
          background: rgba(45, 212, 191, 0.08);
          padding: 0.85rem 1.2rem;
          border-radius: 0.75rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-left: 3px solid var(--accent);
        }
        .metric-icon {
          color: var(--accent);
          font-weight: 800;
          font-size: 1.2rem;
        }
        .case-metric strong {
          color: var(--text-main);
          font-size: 0.95rem;
        }
        .read-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--accent);
          transition: all 0.3s ease;
        }
        .read-more:hover {
          gap: 0.75rem;
          color: var(--primary);
        }
        [data-theme='dark'] .read-more:hover {
          color: var(--accent);
        }

        @media (max-width: 992px) {
          .case-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .section-header-flex {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          .case-grid {
            grid-template-columns: 1fr;
          }
          .case-visual {
            height: 180px;
          }
          .case-emoji-badge {
            font-size: 2rem;
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
        </section>
    );
};

export default CaseStudiesPreview;
