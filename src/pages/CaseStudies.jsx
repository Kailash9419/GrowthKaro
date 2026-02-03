import React, { useEffect } from 'react';
import { TrendingUp, Clock, Zap, ArrowUpRight, BarChart2 } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const CaseStudies = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const studies = [
        {
            client: 'UrbanFashion Co.',
            category: 'E-Commerce',
            title: 'Scaling an apparel brand to $1M ARR via UX overhaul.',
            result: '+124% Revenue Growth',
            desc: 'We rebuilt their entire store from scratch, focusing on mobile performance and 1-click checkout conversion.'
        },
        {
            client: 'SaaSFlow',
            category: 'Software',
            title: 'Reducing churn and increasing signups by 40%.',
            result: '-30% Bounce Rate',
            desc: 'A complete redesign of their dashboard and landing pages to simplify the user onboarding journey.'
        },
        {
            client: 'GreenEnergy Solutions',
            category: 'Corporate',
            title: 'Generating 500+ B2B leads per month through SEO.',
            result: '5x Lead Volume',
            desc: 'Technical SEO and content strategy that moved them from page 10 to the top 3 spots for key industry terms.'
        }
    ];

    return (
        <div className="cases-page">
            <section className="internal-hero">
                <div className="container">
                    <h1>Case <span className="text-accent">Studies</span></h1>
                    <p>Real results for real businesses. See how we’ve helped our clients scale.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="studies-list">
                        {studies.map((study) => (
                            <div key={study.title} className="study-full-card">
                                <div className="study-info">
                                    <span className="case-tag">{study.category}</span>
                                    <h2>{study.title}</h2>
                                    <p>{study.desc}</p>
                                    <div className="result-box">
                                        <BarChart2 className="text-accent" />
                                        <span>{study.result}</span>
                                    </div>
                                    <button className="btn btn-secondary">Read Full Story</button>
                                </div>
                                <div className="study-image-placeholder">
                                    <div className="mockup-screen glass">
                                        <div className="header"></div>
                                        <div className="content">
                                            <div className="line long"></div>
                                            <div className="line med"></div>
                                            <div className="box"></div>
                                        </div>
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
        }
        [data-theme='dark'] .internal-hero { background: var(--bg-secondary); }
        .internal-hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
        
        .studies-list {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .study-full-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding: 3rem;
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .study-info h2 { font-size: 2rem; margin: 1rem 0; }
        .study-info p { color: var(--text-muted); font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.6; }
        .case-tag { color: var(--accent); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; }
        
        .result-box {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: var(--bg-secondary);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .study-image-placeholder {
          background: var(--bg-secondary);
          height: 350px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .mockup-screen {
          width: 80%;
          height: 80%;
          background: white;
          border-radius: 8px;
          border: 1px solid var(--border);
          padding: 1rem;
        }
        [data-theme='dark'] .mockup-screen { background: var(--bg-main); }
        .line { height: 10px; background: var(--border); border-radius: 4px; margin-bottom: 1rem; }
        .long { width: 90%; }
        .med { width: 60%; }
        .box { height: 100px; background: var(--bg-secondary); border-radius: 4px; }

        @media (max-width: 992px) {
          .study-full-card { grid-template-columns: 1fr; gap: 2rem; padding: 2rem; }
          .study-image-placeholder { height: 250px; }
        }
      `}</style>
        </div>
    );
};

export default CaseStudies;
