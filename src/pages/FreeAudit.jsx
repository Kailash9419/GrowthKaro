import React, { useEffect, useState } from 'react';
import { Search, Shield, Zap, CheckCircle } from 'lucide-react';

const FreeAudit = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="audit-page">
            <section className="audit-hero">
                <div className="container audit-container">
                    <div className="audit-content">
                        <h1>Get Your Free <span className="text-accent">Website Audit</span></h1>
                        <p className="lead">
                            Stop guessing why your website isn't growing. Get a comprehensive, manual review from our experts worth $499—absolutely free.
                        </p>

                        <div className="audit-benefits">
                            <div className="benefit">
                                <Shield className="text-accent" size={24} />
                                <span>Security & Technical Check</span>
                            </div>
                            <div className="benefit">
                                <Zap className="text-accent" size={24} />
                                <span>Page Speed & Performance</span>
                            </div>
                            <div className="benefit">
                                <Search className="text-accent" size={24} />
                                <span>SEO & Ranking Opportunity</span>
                            </div>
                        </div>

                        <div className="trust-badge">
                            <div className="avatars">
                                <span className="avatar"></span>
                                <span className="avatar"></span>
                                <span className="avatar"></span>
                            </div>
                            <p>Join 200+ businesses who got their free audit this month.</p>
                        </div>
                    </div>

                    <div className="audit-form-card">
                        {submitted ? (
                            <div className="audit-success">
                                <CheckCircle size={60} className="text-accent" />
                                <h2>Audit Requested!</h2>
                                <p>Our team is currently analyzing your site. You will receive your custom report via email within 48 hours.</p>
                                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Request Another</button>
                            </div>
                        ) : (
                            <div className="form-wrapper">
                                <h3>Enter details to start</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" placeholder="Janice Smith" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Work Email</label>
                                            <input type="email" placeholder="janice@company.com" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Website URL</label>
                                        <input type="url" placeholder="https://yourwebsite.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Business Type</label>
                                        <select required>
                                            <option value="">Select your industry</option>
                                            <option value="ecommerce">E-Commerce</option>
                                            <option value="saas">SaaS / Software</option>
                                            <option value="service">Service Provider</option>
                                            <option value="local">Local Business</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg w-full">
                                        Get My Free Audit <Zap size={18} />
                                    </button>
                                    <p className="form-footer">
                                        🔒 100% Secure. We never share your data.
                                    </p>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <style jsx="true">{`
        .audit-page { background: var(--bg-main); min-height: 90vh; }
        .audit-hero { padding: 100px 0; position: relative; overflow: hidden; }
        .audit-hero::before {
          content: '';
          position: absolute;
          top: -10%;
          left: -10%;
          width: 50%;
          height: 100%;
          background: radial-gradient(circle, rgba(45, 212, 191, 0.05) 0%, transparent 70%);
          z-index: 0;
        }
        
        .audit-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .audit-content h1 { font-size: 3.5rem; margin-bottom: 2rem; }
        .audit-content .lead { font-size: 1.25rem; color: var(--text-muted); margin-bottom: 3rem; line-height: 1.6; }
        
        .audit-benefits { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 4rem; }
        .benefit { display: flex; align-items: center; gap: 1rem; font-weight: 700; font-size: 1.1rem; color: var(--primary); }
        [data-theme='dark'] .benefit { color: white; }

        .trust-badge { display: flex; align-items: center; gap: 1.5rem; }
        .avatars { display: flex; }
        .avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--border); border: 2px solid white; margin-left: -10px; }
        .avatar:first-child { margin-left: 0; }
        .trust-badge p { margin: 0; font-size: 0.9rem; color: var(--text-muted); font-weight: 500; }

        .audit-form-card {
          background: var(--bg-card);
          padding: 3.5rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
        }
        .form-wrapper h3 { font-size: 1.5rem; margin-bottom: 2rem; text-align: center; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
        .form-group label { font-size: 0.85rem; font-weight: 700; color: var(--text-main); }
        .form-group input, .form-group select {
           padding: 1rem;
           border: 1px solid var(--border);
           border-radius: 8px;
           background: var(--bg-secondary);
           color: var(--text-main);
           font-family: inherit;
        }
        .w-full { width: 100%; justify-content: center; }
        .form-footer { text-align: center; margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-muted); }

        .audit-success { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
        .audit-success h2 { font-size: 2rem; }
        .audit-success p { color: var(--text-muted); font-size: 1.1rem; margin-bottom: 2rem; }

        @media (max-width: 992px) {
           .audit-container { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
           .audit-benefits { align-items: center; }
           .trust-badge { justify-content: center; }
           .form-row { grid-template-columns: 1fr; gap: 0; }
           .audit-form-card { padding: 2rem; }
        }
      `}</style>
        </div>
    );
};

export default FreeAudit;
