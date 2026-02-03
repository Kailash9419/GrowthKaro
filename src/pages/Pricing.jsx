import React, { useEffect } from 'react';
import { Check, Info } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const plans = [
        {
            name: 'Starter',
            price: '$999',
            desc: 'Perfect for small businesses and personal brands looking to establish a presence.',
            features: ['5 Page Modern Design', 'Responsive Build', 'Basic SEO Setup', '1 Month Support', 'Contact Form Integration'],
            recommended: false
        },
        {
            name: 'Growth',
            price: '$2,499',
            desc: 'Our most popular plan for businesses ready to scale and convert visitors into leads.',
            features: ['Up to 15 Pages', 'Performance Optimization', 'Advanced SEO Strategy', '3 Months Support', 'Conversion Hub Setup', 'Blog Customization'],
            recommended: true
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            desc: 'Full-scale bespoke solutions for complex requirements and high-traffic portals.',
            features: ['Unlimited Pages', 'E-commerce Engine', 'Custom API Integrations', 'Priority 24/7 Support', 'Dedicated Account Manager', 'Security Hardening'],
            recommended: false
        }
    ];

    return (
        <div className="pricing-page">
            <section className="internal-hero">
                <div className="container">
                    <h1>Transparent <span className="text-accent">Pricing</span></h1>
                    <p>No hidden costs. No surprises. Just high-quality digital growth.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="pricing-grid">
                        {plans.map((plan) => (
                            <div key={plan.name} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                                {plan.recommended && <div className="badge-popular">Most Popular</div>}
                                <h3>{plan.name}</h3>
                                <div className="price">{plan.price}<span>{plan.price !== 'Custom' ? '/project' : ''}</span></div>
                                <p className="plan-desc">{plan.desc}</p>
                                <div className="plan-features">
                                    {plan.features.map((feat) => (
                                        <div key={feat} className="feature-item">
                                            <Check size={18} className="text-accent" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className={`btn btn-lg ${plan.recommended ? 'btn-primary' : 'btn-secondary'}`}>
                                    {plan.price === 'Custom' ? 'Contact Us' : 'Choose Plan'}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="pricing-note">
                        <div className="note-card glass">
                            <Info size={24} className="text-accent" />
                            <p>All plans include a dedicated account strategist and a final visual guidebook for your brand.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA />

            <style jsx="true">{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 4rem;
        }
        .pricing-card {
          background: var(--bg-card);
          padding: 3rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          position: relative;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }
        .pricing-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-lg); border-color: var(--accent); }
        .pricing-card.recommended {
           border: 2px solid var(--accent);
           box-shadow: 0 20px 40px rgba(45, 212, 191, 0.1);
        }
        .badge-popular {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: var(--bg-main);
          padding: 0.5rem 1.5rem;
          border-radius: 999px;
          font-weight: 800;
          font-size: 0.8rem;
          text-transform: uppercase;
        }
        .pricing-card h3 { font-size: 1.5rem; margin-bottom: 1.5rem; }
        .price { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; color: var(--primary); }
        [data-theme='dark'] .price { color: white; }
        .price span { font-size: 1rem; color: var(--text-muted); font-weight: 500; }
        .plan-desc { color: var(--text-muted); margin-bottom: 2rem; min-height: 60px; }
        .plan-features { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 3rem; flex-grow: 1; }
        .feature-item { display: flex; align-items: center; gap: 1rem; color: var(--text-main); font-size: 0.95rem; }

        .pricing-note { max-width: 800px; margin: 0 auto; }
        .note-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
        }
        .note-card p { margin: 0; color: var(--text-muted); font-weight: 500; }

        @media (max-width: 992px) { .pricing-grid { grid-template-columns: 1fr; } }
      `}</style>
        </div>
    );
};

export default Pricing;
