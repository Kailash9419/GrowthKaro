import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading completion after 2 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const chartData = [
    { value: 40, label: 'Jan' },
    { value: 70, label: 'Feb' },
    { value: 50, label: 'Mar' },
    { value: 90, label: 'Apr' },
    { value: 100, label: 'May' },
  ];

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
              {isLoaded ? (
                <>
                  <div className="loaded-title">Analytics Dashboard</div>
                  <div className="loaded-grid">
                    <div className="loaded-item">
                      <span className="loaded-label">Traffic</span>
                      <span className="loaded-value">+284%</span>
                    </div>
                    <div className="loaded-item">
                      <span className="loaded-label">Conversions</span>
                      <span className="loaded-value">+142%</span>
                    </div>
                    <div className="loaded-item">
                      <span className="loaded-label">Revenue</span>
                      <span className="loaded-value">+3.2x</span>
                    </div>
                  </div>
                  <div className="loaded-graph">
                    {chartData.map((data, idx) => (
                      <motion.div
                        key={idx}
                        className="loaded-bar-wrapper"
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                      >
                        <div
                          className={`loaded-bar ${idx === chartData.length - 1 ? 'accent' : ''}`}
                          style={{ height: `${data.value}%` }}
                        >
                          <span className="bar-label">{data.label}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        .hero {
          position: relative;
          padding: 80px 0 60px;
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
          background: linear-gradient(90deg, var(--border) 25%, rgba(255, 255, 255, 0.1) 50%, var(--border) 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
          border-radius: 6px 6px 0 0;
          min-height: 10%;
        }
        .bar.accent {
          background: linear-gradient(90deg, rgba(45, 212, 191, 0.6) 25%, rgba(45, 212, 191, 1) 50%, rgba(45, 212, 191, 0.6) 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite, glow 2s ease-in-out infinite;
          box-shadow: 0 0 20px rgba(45, 212, 191, 0.4);
        }

        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(45, 212, 191, 0.2); }
          50% { box-shadow: 0 0 30px rgba(45, 212, 191, 0.6); }
        }

        /* Loaded State Styles */
        .loaded-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 2rem;
        }
        
        .loaded-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .loaded-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .loaded-label {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .loaded-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
        }
        
        .loaded-graph {
          display: flex;
          align-items: flex-end;
          gap: 0.8rem;
          height: 150px;
          background: rgba(45, 212, 191, 0.05);
          padding: 1rem;
          border-radius: 12px;
          margin-top: auto;
        }
        
        .loaded-bar-wrapper {
          flex: 1;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          min-height: 10%;
        }
        
        .loaded-bar {
          width: 100%;
          background: linear-gradient(to top, var(--primary-light), var(--primary));
          border-radius: 6px 6px 0 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 0.5rem;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .loaded-bar:hover {
          opacity: 0.8;
          transform: scaleY(1.05);
        }
        
        .loaded-bar.accent {
          background: linear-gradient(to top, var(--accent), #14B8A6);
          box-shadow: 0 0 20px rgba(45, 212, 191, 0.4);
        }
        
        .bar-label {
          font-size: 0.75rem;
          color: white;
          font-weight: 600;
          opacity: 0.8;
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
