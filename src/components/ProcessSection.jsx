import React from 'react';
import { Search, PenTool, Code, Rocket, LifeBuoy } from 'lucide-react';

const ProcessSection = () => {
    const steps = [
        {
            icon: <Search size={28} />,
            title: 'Discover & Research',
            desc: 'We analyze your business, goals, and competitors to define a winning strategy.'
        },
        {
            icon: <PenTool size={28} />,
            title: 'Design & UX Planning',
            desc: 'Creating high-fidelity wireframes and user journeys that prioritize conversions.'
        },
        {
            icon: <Code size={28} />,
            title: 'Development & Testing',
            desc: 'Building your site with clean code and rigorous QA across all browsers.'
        },
        {
            icon: <Rocket size={28} />,
            title: 'Optimization & Launch',
            desc: 'Speed tuning, SEO checks, and a seamless deployment to your live server.'
        },
        {
            icon: <LifeBuoy size={28} />,
            title: 'Growth & Support',
            desc: 'Ongoing analysis and updates to ensure your website continues to scale.'
        }
    ];

    return (
        <section className="section-padding bg-secondary bg-pattern">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Our Process</span>
                    <h2>How We Deliver <span className="text-accent">Success</span></h2>
                    <p>A streamlined, 5-step methodology designed for maximum efficiency and ROI.</p>
                </div>

                <div className="process-flow">
                    {steps.map((step, idx) => (
                        <div key={step.title} className="process-step">
                            <div className="step-number">{idx + 1}</div>
                            <div className="step-card">
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                            {idx < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .bg-pattern {
          background-image: radial-gradient(var(--border) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .process-flow {
          display: flex;
          justify-content: space-between;
          margin-top: 4rem;
          gap: 1.5rem;
        }
        .process-step {
          flex: 1;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .step-number {
          width: 40px;
          height: 40px;
          background: var(--accent);
          color: var(--bg-main);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          margin-bottom: 2rem;
          z-index: 2;
          box-shadow: 0 0 0 6px var(--bg-secondary);
        }
        .step-card {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          height: 100%;
        }
        .step-icon {
          color: var(--accent);
          margin-bottom: 1.5rem;
        }
        .step-card h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        .step-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .step-connector {
          position: absolute;
          top: 20px;
          left: 50%;
          width: 100%;
          height: 2px;
          background: var(--border);
          z-index: 1;
        }

        @media (max-width: 1100px) {
          .process-flow {
            flex-direction: column;
            gap: 3rem;
          }
          .step-connector {
            display: none;
          }
          .process-step {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
          }
          .step-number {
            margin-bottom: -20px;
          }
        }
      `}</style>
        </section>
    );
};

export default ProcessSection;
