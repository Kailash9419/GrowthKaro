import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="final-cta-section">
            <div className="container">
                <div className="cta-card">
                    <div className="cta-content">
                        <h2>Ready to grow your business online?</h2>
                        <p>Join 50+ successful businesses that scaled with GrowthKaro. Get your bespoke strategy today.</p>
                        <Link to="/contact" className="btn btn-primary btn-white btn-lg">
                            Start Your Project <Rocket size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        .final-cta-section {
          padding: 100px 0;
          background: var(--bg-main);
        }
        .cta-card {
          background: linear-gradient(135deg, var(--primary) 0%, #2D4A80 100%);
          padding: 80px 40px;
          border-radius: var(--radius-xl);
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }
        [data-theme='dark'] .cta-card {
           background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
           border: 1px solid var(--border);
        }
        .cta-card::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: var(--accent);
          opacity: 0.1;
          filter: blur(100px);
          border-radius: 50%;
        }
        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
        }
        .cta-card h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .cta-card p {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          opacity: 0.9;
        }
        .btn-white {
          background: white !important;
          color: var(--primary) !important;
        }
        [data-theme='dark'] .btn-white {
          background: var(--accent) !important;
          color: var(--bg-main) !important;
        }
        .btn-white:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .cta-card h2 { font-size: 2rem; }
          .cta-card { padding: 60px 20px; }
        }
      `}</style>
        </section>
    );
};

export default FinalCTA;
