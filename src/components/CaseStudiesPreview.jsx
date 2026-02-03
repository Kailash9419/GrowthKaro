import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Zap, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesPreview = () => {
    const caseStudies = [
        {
            title: 'E-Commerce Growth',
            metric: '+42% Lead Conversion',
            icon: <TrendingUp className="text-accent" />,
            tag: 'E-Commerce',
            bg: '#EEF2FF'
        },
        {
            title: 'SaaS Optimization',
            metric: '–60% Page Load Time',
            icon: <Zap className="text-accent" />,
            tag: 'Software',
            bg: '#F0FDFA'
        },
        {
            title: 'Real Estate Sales',
            metric: '3x Sales Growth in 60 Days',
            icon: <Clock className="text-accent" />,
            tag: 'Industry',
            bg: '#FDF2F8'
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
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="case-visual" style={{ backgroundColor: study.bg }}>
                                <div className="case-metric-badge">
                                    {study.icon}
                                    <span>{study.metric}</span>
                                </div>
                            </div>
                            <div className="case-content">
                                <span className="case-tag">{study.tag}</span>
                                <h3>{study.title}</h3>
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
        }
        .case-visual {
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .case-metric-badge {
          background: white;
          padding: 1.25rem 2rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--primary);
        }
        [data-theme='dark'] .case-metric-badge {
          background: var(--bg-secondary);
          color: white;
        }
        .case-content {
          padding: 2rem;
        }
        .case-tag {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          display: block;
        }
        .case-content h3 {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
        }
        .read-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .read-more:hover {
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
        }
      `}</style>
        </section>
    );
};

export default CaseStudiesPreview;
