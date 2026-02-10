import React, { useEffect } from 'react';
import FinalCTA from '../components/FinalCTA';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <section className="internal-hero">
                <div className="container">
                    <h1>Privacy <span className="text-accent">Policy</span></h1>
                    <p>Your privacy is important to us. Learn how we collect and protect your data.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="legal-content">
                        <div className="legal-section">
                            <h2>1. Information We Collect</h2>
                            <p>We collect information you voluntarily provide through forms, emails, and communications. This may include:</p>
                            <ul className="legal-list">
                                <li>Name and contact information</li>
                                <li>Email address and phone number</li>
                                <li>Business information and project details</li>
                                <li>Payment and billing information</li>
                                <li>Usage data and analytics</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>2. How We Use Your Information</h2>
                            <p>We use collected information to:</p>
                            <ul className="legal-list">
                                <li>Provide and improve our services</li>
                                <li>Communicate with you about projects and updates</li>
                                <li>Process payments and send invoices</li>
                                <li>Send marketing communications (with your consent)</li>
                                <li>Analyze usage patterns to improve user experience</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Data Security</h2>
                            <p>We implement industry-standard security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your information is encrypted and stored securely on our servers.</p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Third-Party Services</h2>
                            <p>We may use third-party services for payment processing, analytics, and communication. These services have their own privacy policies, and we recommend reviewing them.</p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="legal-list">
                                <li>Access the personal data we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>6. Contact Us</h2>
                            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                            <p><strong>Email:</strong> hello@growthkaro.com</p>
                            <p><strong>Phone:</strong> +91 7017628078</p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Updates to This Policy</h2>
                            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. Your continued use of our services after changes constitutes your acceptance of the updated policy.</p>
                        </div>

                        <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
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
        .internal-hero p { font-size: 1.2rem; opacity: 0.8; max-width: 700px; margin: 0 auto; }
        
        .legal-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .legal-section {
          margin-bottom: 3rem;
        }
        .legal-section h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }
        .legal-section p {
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 1.05rem;
        }
        .legal-list {
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        .legal-list li {
          padding-left: 2rem;
          position: relative;
          margin-bottom: 0.75rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .legal-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }
        .last-updated {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-style: italic;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }

        @media (max-width: 768px) {
          .internal-hero h1 { font-size: 2.5rem; }
          .legal-section h2 { font-size: 1.4rem; }
        }
      `}</style>
        </div>
    );
};

export default Privacy;
