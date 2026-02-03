import React, { useEffect } from 'react';
import { Search, PenTool, Code, Rocket, LifeBuoy } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const Process = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        {
            icon: <Search />,
            title: 'Discovery & Research',
            desc: 'Every project starts with a deep dive. We interview your team, analyze your competitors, and study your target audience. We don’t just build what you ask for; we build what your business needs to grow.',
            detail: 'Market Analysis, Competitor Benchmarking, Brand Audit, Goal Setting'
        },
        {
            icon: <PenTool />,
            title: 'Design & UX Strategy',
            desc: 'We map out every click. Our design process focuses on user psychology to ensure that every visitor is guided towards your conversion goals through intuitive and beautiful UI.',
            detail: 'User Flow Mapping, Wireframing, High-Fidelity Design, Style Guides'
        },
        {
            icon: <Code />,
            title: 'Agile Development',
            desc: 'Our developers turn designs into reality using modern, clean code. We build mobile-first, ensuring that your site is fast, secure, and accessible on every device.',
            detail: 'Responsive Coding, Performance Tuning, CMS Integration, API Setup'
        },
        {
            icon: <Rocket />,
            title: 'Testing & Launch',
            desc: 'We don’t just hit "Publish". We rigorously test every link, form, and script. Our launch process is seamless, ensuring zero downtime and a perfect first impression.',
            detail: 'Cross-browser QA, Speed Optimization, SEO Checklist, DNS Deployment'
        },
        {
            icon: <LifeBuoy />,
            title: 'Scale & Support',
            desc: 'Launch is just the beginning. We provide monthly maintenance and data-driven updates to keep your site at peak performance while you focus on running your business.',
            detail: 'Security Updates, Monthly Reporting, A/B Testing, Feature Expansion'
        }
    ];

    return (
        <div className="process-page">
            <section className="internal-hero">
                <div className="container">
                    <h1>Our <span className="text-accent">Methodology</span></h1>
                    <p>A proven, data-backed approach to building high-conversion digital experiences.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="process-timeline">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-content">
                                    <div className="timeline-icon">{step.icon}</div>
                                    <h2>0{idx + 1}. {step.title}</h2>
                                    <p>{step.desc}</p>
                                    <div className="timeline-detail">
                                        <strong>Focus:</strong> {step.detail}
                                    </div>
                                </div>
                                <div className="timeline-dot"></div>
                            </div>
                        ))}
                        <div className="timeline-line"></div>
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
        }
        [data-theme='dark'] .internal-hero { background: var(--bg-secondary); }
        .internal-hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
        
        .process-timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 0;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border);
          transform: translateX(-50%);
        }
        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 80px;
          width: 100%;
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 40px;
          width: 20px;
          height: 20px;
          background: var(--accent);
          border: 4px solid var(--bg-main);
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        .timeline-content {
          width: 45%;
          background: var(--bg-card);
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .left .timeline-content { text-align: right; }
        .right { flex-direction: row-reverse; }
        
        .timeline-icon {
          color: var(--accent);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: inherit;
        }
        .timeline-content h2 { margin-bottom: 1rem; font-size: 1.5rem; }
        .timeline-content p { color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6; }
        .timeline-detail {
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          font-size: 0.9rem;
          color: var(--primary);
        }
        [data-theme='dark'] .timeline-detail { color: var(--accent); }

        @media (max-width: 768px) {
          .timeline-line { left: 20px; }
          .timeline-dot { left: 20px; }
          .timeline-item { flex-direction: row !important; margin-bottom: 50px; }
          .timeline-content { width: calc(100% - 60px); text-align: left !important; margin-left: 60px; }
          .timeline-icon { justify-content: flex-start !important; }
        }
      `}</style>
        </div>
    );
};

export default Process;
