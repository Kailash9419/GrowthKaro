import React, { useEffect, useState, useRef } from 'react';
import { Search, PenTool, Code, Rocket, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import FinalCTA from '../components/FinalCTA';

const Process = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;
            
            const element = timelineRef.current;
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            let progress = 0;
            if (elementTop < windowHeight) {
                progress = Math.min(
                    1,
                    (windowHeight - elementTop) / (elementHeight + windowHeight)
                );
            }
            
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const steps = [
        {
            icon: <Search />,
            title: 'Discovery & Research',
            desc: 'Every project starts with a deep dive. We interview your team, analyze your competitors, and study your target audience. We don’t just build what you ask for; we build what your business needs to grow.',
            detail: 'Market Analysis, Competitor Benchmarking, Brand Audit, Goal Setting'
        },
        {
            icon: <PenTool />,
            title: 'Design & UX Strategy',
            desc: 'We map out every click. Our design process focuses on user psychology to ensure that every visitor is guided towards your conversion goals through intuitive and beautiful UI.',
            detail: 'User Flow Mapping, Wireframing, High-Fidelity Design, Style Guides'
        },
        {
            icon: <Code />,
            title: 'Agile Development',
            desc: 'Our developers turn designs into reality using modern, clean code. We build mobile-first, ensuring that your site is fast, secure, and accessible on every device.',
            detail: 'Responsive Coding, Performance Tuning, CMS Integration, API Setup'
        },
        {
            icon: <Rocket />,
            title: 'Testing & Launch',
            desc: 'We don’t just hit "Publish". We rigorously test every link, form, and script. Our launch process is seamless, ensuring zero downtime and a perfect first impression.',
            detail: 'Cross-browser QA, Speed Optimization, SEO Checklist, DNS Deployment'
        },
        {
            icon: <LifeBuoy />,
            title: 'Scale & Support',
            desc: 'Launch is just the beginning. We provide monthly maintenance and data-driven updates to keep your site at peak performance while you focus on running your business.',
            detail: 'Security Updates, Monthly Reporting, A/B Testing, Feature Expansion'
        }
    ];

    const itemVariants = {
        hidden: (isLeft) => ({
            opacity: 0,
            x: isLeft ? -80 : 80,
            y: 20,
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className="process-page">
            <section className="internal-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our <span className="text-accent">Methodology</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        A proven, data-backed approach to building high-conversion digital experiences.
                    </motion.p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="process-timeline" ref={timelineRef}>
                        <motion.div
                            className="timeline-line-container"
                            initial={{ scaleY: 0 }}
                            style={{ scaleY: scrollProgress }}
                        >
                            <div className="timeline-line"></div>
                        </motion.div>
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                                initial="hidden"
                                whileInView="visible"
                                variants={itemVariants}
                                custom={idx % 2 === 0}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <div className="timeline-content">
                                    <motion.div
                                        className="timeline-icon"
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: false }}
                                    >
                                        {step.icon}
                                    </motion.div>
                                    <motion.h2
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                        viewport={{ once: false }}
                                    >
                                        0{idx + 1}. {step.title}
                                    </motion.h2>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                        viewport={{ once: false }}
                                    >
                                        {step.desc}
                                    </motion.p>
                                    <motion.div
                                        className="timeline-detail"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.5 }}
                                        viewport={{ once: false }}
                                    >
                                        <strong>Focus:</strong> {step.detail}
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="timeline-dot"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 200,
                                        damping: 15,
                                        delay: 0.6
                                    }}
                                    viewport={{ once: false }}
                                    whileHover={{ scale: 1.4 }}
                                ></motion.div>
                            </motion.div>
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
        
        .process-timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 0;
        }
        .timeline-line-container {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          transform-origin: top;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--accent);
          transform: translateX(-50%);
          height: 100%;
        }
        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 80px;
          width: 100%;
          position: relative;
          gap: 2rem;
        }
        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 2.5rem;
          width: 20px;
          height: 20px;
          background: var(--accent);
          border: 4px solid var(--bg-main);
          border-radius: 50%;
          transform: translate(-50%, 0);
          z-index: 2;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(45, 212, 191, 0.6);
          transition: all 0.3s ease;
        }
        .timeline-item:hover .timeline-dot {
          box-shadow: 0 0 30px rgba(45, 212, 191, 0.8);
        }
        .timeline-content {
          width: 45%;
          background: var(--bg-card);
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .timeline-item:hover .timeline-content {
          border-color: var(--accent);
          box-shadow: 0 10px 30px rgba(45, 212, 191, 0.15);
          transform: translateY(-5px);
        }
        .left .timeline-content { 
          align-items: flex-start;
          text-align: left;
          order: 1;
        }
        .right .timeline-content { 
          align-items: flex-start;
          text-align: left;
          order: 2;
        }
        .right {
          flex-direction: row-reverse;
        }
        
        .timeline-icon {
          color: var(--accent);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(45, 212, 191, 0.1);
          border-radius: 12px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .timeline-item:hover .timeline-icon {
          background: rgba(45, 212, 191, 0.2);
          transform: scale(1.1);
        }
        .timeline-content h2 { margin-bottom: 1rem; font-size: 1.5rem; color: var(--text-main); }
        .timeline-content p { color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6; text-align: left; }
        .timeline-detail {
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          font-size: 0.9rem;
          color: var(--primary);
          text-align: left;
          width: 100%;
        }
        [data-theme='dark'] .timeline-detail { color: var(--accent); }

        @media (max-width: 768px) {
          .timeline-line, .timeline-line-container { left: 20px; }
          .timeline-dot { left: 20px; }
          .timeline-item { 
            flex-direction: row !important; 
            margin-bottom: 50px; 
            align-items: flex-start;
          }
          .timeline-content { 
            width: calc(100% - 60px); 
            text-align: left !important; 
            margin-left: 60px;
            align-items: flex-start !important;
          }
          .timeline-icon { 
            justify-content: center !important;
            align-self: flex-start !important;
          }
        }
      `}</style>
        </div>
    );
};

export default Process;
