import React, { useEffect } from 'react';
import { Award, Users, Target, ShieldCheck } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        { icon: <Target />, title: 'Goal Oriented', desc: 'We start with your business goals and work backwards.' },
        { icon: <ShieldCheck />, title: 'Trust First', desc: 'Full transparency in our process, pricing, and communication.' },
        { icon: <Users />, title: 'Collaborative', desc: 'We treat your business as if it were our own.' },
        { icon: <Award />, title: 'Excellence', desc: 'We don’t settle for "good enough". We build for the best.' }
    ];

    return (
        <div className="about-page">
            <section className="internal-hero">
                <div className="container">
                    <h1>Building the Future of <span className="text-accent">Digital Business</span></h1>
                    <p>GrowthKaro was founded on a simple principle: Websites should be an investment, not an expense.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="about-split">
                        <div className="about-image-placeholder">
                            <div className="abstract-shape bg-accent"></div>
                            <div className="team-mockup glass">
                                <h3>GrowthKaro Team</h3>
                                <p>15+ Dedicated Specialists</p>
                            </div>
                        </div>
                        <div className="about-text">
                            <span className="subtitle">Our Story</span>
                            <h2>From a Small Studio to a <span className="text-accent">Growth Powerhouse</span></h2>
                            <p>
                                Started in 2021, GrowthKaro has helped over 50 businesses reclaim their digital identity. We noticed that many agencies focus on flashy designs that don’t actually convert. We decided to change that by blending high-end aesthetics with hardcore performance data.
                            </p>
                            <p>
                                Today, we are a global team of designers, developers, and strategists obsessed with one thing: your growth.
                            </p>
                            <div className="about-metrics">
                                <div className="metric">
                                    <span>50+</span>
                                    <p>Projects</p>
                                </div>
                                <div className="metric">
                                    <span>15+</span>
                                    <p>Experts</p>
                                </div>
                                <div className="metric">
                                    <span>3yr</span>
                                    <p>Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-secondary">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Core <span className="text-accent">Values</span></h2>
                        <p>The principles that guide every pixel we design and every line of code we write.</p>
                    </div>
                    <div className="values-grid">
                        {values.map((v) => (
                            <div key={v.title} className="value-card">
                                <div className="value-icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />

            <style jsx="true">{`
        .about-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .about-image-placeholder {
          position: relative;
          height: 500px;
          background: var(--bg-secondary);
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .abstract-shape {
          position: absolute;
          width: 80%;
          height: 80%;
          opacity: 0.1;
          filter: blur(50px);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        .team-mockup {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          text-align: center;
          z-index: 1;
        }
        [data-theme='dark'] .team-mockup { background: var(--bg-secondary); }
        .about-text h2 { font-size: 2.5rem; margin-bottom: 2rem; }
        .about-text p { color: var(--text-muted); font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem; }
        
        .about-metrics { display: flex; gap: 3rem; margin-top: 3rem; }
        .metric span { font-size: 2.5rem; font-weight: 800; color: var(--primary); display: block; }
        [data-theme='dark'] .metric span { color: var(--accent); }
        .metric p { font-weight: 600; font-size: 0.9rem; }

        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; margin-top: 4rem; }
        .value-card { background: var(--bg-card); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border); }
        .value-icon { color: var(--accent); margin-bottom: 1.5rem; }
        .value-card h3 { font-size: 1.2rem; margin-bottom: 0.75rem; }
        .value-card p { color: var(--text-muted); font-size: 0.9rem; }

        @media (max-width: 992px) {
          .about-split { grid-template-columns: 1fr; gap: 4rem; }
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 576px) { .values-grid { grid-template-columns: 1fr; } }
      `}</style>
        </div>
    );
};

export default About;
