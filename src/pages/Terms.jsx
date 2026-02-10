import React, { useEffect } from 'react';
import FinalCTA from '../components/FinalCTA';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <section className="internal-hero">
                <div className="container">
                    <h1>Terms of <span className="text-accent">Service</span></h1>
                    <p>Please read these terms carefully before using our services.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="legal-content">
                        <div className="legal-section">
                            <h2>1. Agreement to Terms</h2>
                            <p>By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Use License</h2>
                            <p>Permission is granted to temporarily download one copy of the materials (information or software) on GrowthKaro's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                            <ul className="legal-list">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose or for any public display</li>
                                <li>Attempt to decompile or reverse engineer any software contained on GrowthKaro's website</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Disclaimer</h2>
                            <p>The materials on GrowthKaro's website are provided "as is". GrowthKaro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Limitations</h2>
                            <p>In no event shall GrowthKaro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GrowthKaro's website, even if GrowthKaro or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Accuracy of Materials</h2>
                            <p>The materials appearing on GrowthKaro's website could include technical, typographical, or photographic errors. GrowthKaro does not warrant that any of the materials on its website are accurate, complete, or current. GrowthKaro may make changes to the materials contained on its website at any time without notice.</p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Links</h2>
                            <p>GrowthKaro has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GrowthKaro of the site. Use of any such linked website is at the user's own risk.</p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Modifications</h2>
                            <p>GrowthKaro may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Governing Law</h2>
                            <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in India.</p>
                        </div>

                        <div className="legal-section">
                            <h2>9. User Responsibilities</h2>
                            <p>You agree that:</p>
                            <ul className="legal-list">
                                <li>You will provide accurate and complete information</li>
                                <li>You will not use the services for any illegal purpose</li>
                                <li>You will not infringe upon any intellectual property rights</li>
                                <li>You will not transmit viruses or malicious code</li>
                                <li>You will not attempt to gain unauthorized access to our systems</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>10. Contact Information</h2>
                            <p>For any questions regarding these Terms of Service, please contact us at:</p>
                            <p><strong>Email:</strong> hello@growthkaro.com</p>
                            <p><strong>Phone:</strong> +91 7017628078</p>
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

export default Terms;
