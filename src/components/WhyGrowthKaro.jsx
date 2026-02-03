import React from 'react';
import { Briefcase, Zap, BarChart, CreditCard, Headphones } from 'lucide-react';

const WhyGrowthKaro = () => {
    const points = [
        {
            icon: <Briefcase />,
            title: 'Business-First Approach',
            desc: 'We focus on ROI, not just looks. Our designs are built to grow your bottom line.'
        },
        {
            icon: <Zap />,
            title: 'Fast & Mobile-First',
            desc: 'Lightning speed and perfect responsiveness across all devices and screen sizes.'
        },
        {
            icon: <BarChart />,
            title: 'SEO & Analytics Ready',
            desc: 'Pre-optimized for Google rankings and integrated with advanced tracking from day one.'
        },
        {
            icon: <CreditCard />,
            title: 'Transparent Pricing',
            desc: 'No hidden costs. Simple, upfront pricing models that fit your business budget.'
        },
        {
            icon: <Headphones />,
            title: 'Dedicated Support',
            desc: 'Personalized attention from our expert team. We’re here whenever you need us.'
        }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div className="why-grid">
                    <div className="why-content">
                        <span className="subtitle">Why Choose Us</span>
                        <h2>We’re Not Just an Agency, We’re <span className="text-accent">Your Partner</span> in Growth.</h2>
                        <p>
                            Traditional agencies focus on deliverables. We focus on results. Our methodology is designed to solve business problems through digital excellence.
                        </p>
                        <div className="why-stats">
                            <div className="why-stat-item">
                                <h4>98%</h4>
                                <p>Client Satisfaction</p>
                            </div>
                            <div className="why-stat-item">
                                <h4>24/7</h4>
                                <p>Support Available</p>
                            </div>
                        </div>
                    </div>

                    <div className="why-points">
                        {points.map((point) => (
                            <div key={point.title} className="why-point-card">
                                <div className="why-icon">{point.icon}</div>
                                <div className="why-text">
                                    <h3>{point.title}</h3>
                                    <p>{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
          align-items: center;
        }
        .subtitle {
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          display: block;
        }
        .why-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .why-content p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }
        .why-stats {
          display: flex;
          gap: 3rem;
        }
        .why-stat-item h4 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 0.25rem;
        }
        [data-theme='dark'] .why-stat-item h4 {
          color: var(--accent);
        }
        .why-stat-item p {
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0;
        }
        .why-points {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .why-point-card {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          transition: var(--transition);
        }
        .why-point-card:hover {
          background: var(--bg-secondary);
        }
        .why-icon {
          background: var(--primary);
          color: white;
          width: 50px;
          height: 50px;
          min-width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }
        [data-theme='dark'] .why-icon {
          background: var(--accent);
          color: var(--bg-main);
        }
        .why-text h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }
        .why-text p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .why-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .why-content {
            text-align: center;
          }
          .why-stats {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default WhyGrowthKaro;
