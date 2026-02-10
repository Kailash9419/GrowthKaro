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
                            <div className="team-image-container">
                                <div className="team-image">
                                    <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" className="team-illustration">
                                        <defs>
                                            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: 'rgba(45, 212, 191, 0.1)', stopOpacity: 1 }} />
                                                <stop offset="100%" style={{ stopColor: 'rgba(26, 43, 76, 0.05)', stopOpacity: 1 }} />
                                            </linearGradient>
                                        </defs>
                                        <rect width="300" height="400" fill="url(#bgGrad)" />
                                        <circle cx="75" cy="80" r="35" fill="#2DD4BF" opacity="0.8" />
                                        <text x="75" y="95" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">👨‍💼</text>
                                        <circle cx="150" cy="120" r="40" fill="#1A2B4C" opacity="0.9" />
                                        <text x="150" y="138" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">👨‍💻</text>
                                        <circle cx="225" cy="80" r="35" fill="#2D4A80" opacity="0.85" />
                                        <text x="225" y="95" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">👩‍💼</text>
                                        <circle cx="60" cy="220" r="38" fill="#14B8A6" opacity="0.8" />
                                        <text x="60" y="238" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">👩‍💻</text>
                                        <circle cx="240" cy="240" r="36" fill="#60A5FA" opacity="0.85" />
                                        <text x="240" y="256" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">👨‍🎨</text>
                                        <line x1="75" y1="115" x2="150" y2="120" stroke="#2DD4BF" strokeWidth="2" opacity="0.3" />
                                        <line x1="225" y1="115" x2="150" y2="120" stroke="#2DD4BF" strokeWidth="2" opacity="0.3" />
                                        <line x1="150" y1="160" x2="60" y2="220" stroke="#2DD4BF" strokeWidth="2" opacity="0.3" />
                                        <line x1="150" y1="160" x2="240" y2="240" stroke="#2DD4BF" strokeWidth="2" opacity="0.3" />
                                        <text x="75" y="370" textAnchor="middle" fill="#2D3748" fontSize="12" fontWeight="600">Strategist</text>
                                        <text x="150" y="370" textAnchor="middle" fill="#2D3748" fontSize="12" fontWeight="600">Developer</text>
                                        <text x="225" y="370" textAnchor="middle" fill="#2D3748" fontSize="12" fontWeight="600">Manager</text>
                                    </svg>
                                </div>
                                <div className="team-mockup glass">
                                    <h3>GrowthKaro Team</h3>
                                    <p>15+ Dedicated Specialists</p>
                                    <div className="team-badges">
                                        <span className="badge">Design</span>
                                        <span className="badge">Dev</span>
                                        <span className="badge">Strategy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-text">
                            <span className="subtitle">Our Story</span>
                            <h2>From a Small Studio to a <span className="text-accent">Growth Powerhouse</span></h2>
                            <p>
                                Started in 2025, GrowthKaro has helped over 50 businesses reclaim their digital identity. We noticed that many agencies focus on flashy designs that don't actually convert. We decided to change that by blending high-end aesthetics with hardcore performance data.
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
                                    <span>1yr</span>
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
          overflow: hidden;
        }
        .team-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .team-image {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .team-illustration {
          width: 80%;
          height: 80%;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .team-mockup {
          background: white;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          text-align: center;
          z-index: 10;
          position: absolute;
          bottom: 20px;
          right: 20px;
          min-width: 280px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        [data-theme='dark'] .team-mockup { 
          background: rgba(30, 41, 59, 0.95);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .team-mockup h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        .team-mockup p {
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        .team-badges {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .badge {
          background: rgba(45, 212, 191, 0.1);
          color: var(--accent);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid var(--accent);
        }
        .abstract-shape {
          position: absolute;
          width: 80%;
          height: 80%;
          opacity: 0.1;
          filter: blur(50px);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        .about-text h2 { font-size: 2.5rem; margin-bottom: 2rem; }
        .about-text p { color: var(--text-muted); font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem; }
        
        .about-metrics { display: flex; gap: 3rem; margin-top: 3rem; }
        .metric span { font-size: 2.5rem; font-weight: 800; color: var(--primary); display: block; }
        [data-theme='dark'] .metric span { color: var(--accent); }
        .metric p { font-weight: 600; font-size: 0.9rem; }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
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
