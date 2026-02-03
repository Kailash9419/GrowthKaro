import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-gradient"></div>
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge">
            <CheckCircle size={16} />
            Growth-Focused Web Solutions
          </div>
          <h1>
            We Build Websites That <span className="text-accent">Grow Businesses</span>
          </h1>
          <p className="hero-subtext">
            High-performance, conversion-focused websites designed to generate leads, sales, and long-term growth. Stop losing customers to bad design.
          </p>
          <div className="hero-ctas">
            <Link to="/free-audit" className="btn btn-primary btn-lg">
              Get Free Website Audit <ArrowRight size={20} />
            </Link>
            <Link to="/case-studies" className="btn btn-secondary btn-lg">
              View Our Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-placeholder"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="premium-card-mockup glass">
            <div className="mockup-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="mockup-body">
              <div className="skeleton title"></div>
              <div className="skeleton-grid">
                <div className="skeleton item"></div>
                <div className="skeleton item"></div>
                <div className="skeleton item"></div>
              </div>
              <div className="skeleton-graph">
                <div className="bar" style={{ height: '40%' }}></div>
                <div className="bar" style={{ height: '70%' }}></div>
                <div className="bar" style={{ height: '50%' }}></div>
                <div className="bar" style={{ height: '90%' }}></div>
                <div className="bar accent" style={{ height: '100%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .hero {
          position: relative;
          padding: 120px 0 100px;
          overflow: hidden;
        }
        .hero-bg-gradient {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 60%;
          height: 80%;
          background: radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, rgba(26, 43, 76, 0.05) 100%);
          filter: blur(80px);
          z-index: -1;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg-secondary);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent);
          border: 1px solid var(--border);
          margin-bottom: 2rem;
        }
        .hero h1 {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--primary);
        }
        [data-theme='dark'] .hero h1 {
          color: white;
        }
        .hero-subtext {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }
        .hero-ctas {
          display: flex;
          gap: 1.5rem;
        }
        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        /* Premium Mockup Enhancement */
        .premium-card-mockup {
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          height: 450px;
          box-shadow: 0 40px 80px -20px rgba(26, 43, 76, 0.2);
          overflow: hidden;
          background: var(--bg-card);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .mockup-header {
          padding: 1.25rem;
          background: var(--bg-secondary);
          display: flex;
          gap: 0.6rem;
          border-bottom: 1px solid var(--border);
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .red { background: #FF5F56; }
        .yellow { background: #FFBD2E; }
        .green { background: #27C93F; }
        
        .mockup-body {
          padding: 2.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .skeleton.title { 
          height: 32px; 
          width: 70%; 
          background: linear-gradient(90deg, var(--bg-secondary) 25%, var(--border) 50%, var(--bg-secondary) 75%);
          background-size: 200% 100%;
          animation: loading 2s infinite;
          margin-bottom: 2rem;
        }
        .skeleton-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .skeleton.item { 
          height: 100px; 
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
        }
        .skeleton-graph {
          display: flex;
          align-items: flex-end;
          gap: 0.8rem;
          height: 150px;
          margin-top: auto;
          background: rgba(45, 212, 191, 0.03);
          padding: 1rem;
          border-radius: 12px;
        }
        .bar {
          flex: 1;
          background: var(--border);
          border-radius: 6px 6px 0 0;
          min-height: 10%;
        }
        .bar.accent {
          background: linear-gradient(to top, var(--accent), #14B8A6);
          box-shadow: 0 0 20px rgba(45, 212, 191, 0.4);
        }

        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @media (max-width: 1200px) {
          .hero h1 { font-size: 3.5rem; }
        }
        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero h1 { font-size: 3rem; margin: 0 auto 1.5rem; }
          .hero-subtext { margin: 0 auto 2.5rem; }
          .hero-ctas { justify-content: center; }
          .hero-image-placeholder { display: none; }
        }
        @media (max-width: 576px) {
          .hero h1 { font-size: 2.5rem; }
          .hero-ctas { flex-direction: column; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
