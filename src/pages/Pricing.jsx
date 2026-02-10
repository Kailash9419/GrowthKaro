import React, { useEffect } from 'react';
import { Check, Info, MessageCircle } from 'lucide-react';
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

                    <div className="pricing-footer">
                        <div className="pricing-note">
                            <div className="note-card glass">
                                <Info size={24} className="text-accent" />
                                <p>All plans include a dedicated account strategist and a final visual guidebook for your brand.</p>
                            </div>
                        </div>

                        <div className="whatsapp-section">
                            <h3>Questions About Pricing?</h3>
                            <p>Chat directly with our team to customize a plan that fits your needs perfectly.</p>
                            <a 
                                href="https://wa.me/919876543210?text=Hi%20GrowthKaro!%20I%20want%20to%20discuss%20pricing%20for%20my%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                <MessageCircle size={20} />
                                Message on WhatsApp
                            </a>
                        </div>
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

        .pricing-footer {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top: 4rem;
        }

        .whatsapp-section {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          padding: 3rem 2.5rem;
          background: linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(37, 211, 102, 0.05));
          border: 1px solid rgba(37, 211, 102, 0.2);
          border-radius: var(--radius-xl);
          backdrop-filter: blur(10px);
          width: 100%;
        }
        .whatsapp-section h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--text-main);
        }
        .whatsapp-section p {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .btn-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: white;
          padding: 0.85rem 2rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
          text-decoration: none;
          border: none;
          cursor: pointer;
        }
        .btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }
        .btn-whatsapp:active {
          transform: translateY(0);
        }

        @media (max-width: 992px) { 
          .pricing-grid { grid-template-columns: 1fr; }
          .whatsapp-section {
            padding: 2rem 1.5rem;
          }
          .whatsapp-section h3 {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 576px) {
          .pricing-card {
            padding: 2rem;
          }
          .whatsapp-section {
            padding: 1.5rem 1.25rem;
          }
          .btn-whatsapp {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
};

export default Pricing;
