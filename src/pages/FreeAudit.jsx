import React, { useEffect, useState } from 'react';
import { Search, Shield, Zap, CheckCircle, ArrowRight, ArrowLeft, RefreshCw, BarChart3, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FreeAudit = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [step, setStep] = useState(1);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [formData, setFormData] = useState({
        url: '',
        bottleneck: '',
        name: '',
        email: '',
        businessType: ''
    });

    const updateForm = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleNext = () => {
        if (step === 1 && !formData.url) return;
        if (step === 2 && !formData.bottleneck) return;
        setStep(prev => prev + 1);
    };

    const handleBack = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        setStep(4);
        setIsAnalyzing(true);
        setProgress(0);
        
        // Simulate analysis progress
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 15) + 5;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                setTimeout(() => setIsAnalyzing(false), 800);
            }
            setProgress(currentProgress);
        }, 350);
    };

    const bottlenecks = [
        { id: 'traffic', icon: <Search size={24}/>, label: 'Low Website Traffic', desc: 'Not getting enough visitors.' },
        { id: 'conversion', icon: <BarChart3 size={24}/>, label: 'Poor Conversion Rate', desc: 'Traffic isn\'t turning into leads.' },
        { id: 'design', icon: <Zap size={24}/>, label: 'Outdated Design', desc: 'Website looks old or runs slow.' },
        { id: 'technical', icon: <AlertTriangle size={24}/>, label: 'Technical/SEO Issues', desc: 'Bugs, broken links, or Google ranking issues.' }
    ];

    const slideVariants = {
        enter: { x: 50, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -50, opacity: 0 }
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
                        <div className="wizard-progress">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
                            </div>
                            <span className="step-count">Step {step > 3 ? 3 : step} of 3</span>
                        </div>

                        <div className="form-wrapper-animated">
                            <AnimatePresence mode="wait">
                                {step === 1 && (
                                    <motion.div key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="wizard-step">
                                        <h3>Where should we send our crawlers?</h3>
                                        <p className="step-desc">Enter your website URL so we can run initial diagnostics.</p>
                                        <div className="form-group">
                                            <input 
                                                type="url" 
                                                placeholder="https://yourwebsite.com" 
                                                value={formData.url}
                                                onChange={(e) => updateForm('url', e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && formData.url && handleNext()}
                                                required 
                                                autoFocus
                                            />
                                        </div>
                                        <button 
                                            onClick={handleNext} 
                                            className="btn btn-primary btn-lg w-full"
                                            disabled={!formData.url}
                                        >
                                            Continue <ArrowRight size={18} />
                                        </button>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="wizard-step">
                                        <h3>What's your biggest bottleneck?</h3>
                                        <p className="step-desc">This helps our engineers focus on what matters most to you.</p>
                                        
                                        <div className="bottleneck-grid">
                                            {bottlenecks.map(b => (
                                                <div 
                                                    key={b.id} 
                                                    className={`bottleneck-card ${formData.bottleneck === b.id ? 'selected' : ''}`}
                                                    onClick={() => updateForm('bottleneck', b.id)}
                                                >
                                                    <div className="icon-wrap">{b.icon}</div>
                                                    <div className="b-info">
                                                        <h4>{b.label}</h4>
                                                        <p>{b.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="wizard-actions">
                                            <button onClick={handleBack} className="btn btn-secondary">
                                                <ArrowLeft size={18} /> Back
                                            </button>
                                            <button 
                                                onClick={handleNext} 
                                                className="btn btn-primary"
                                                disabled={!formData.bottleneck}
                                            >
                                                Continue <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="wizard-step">
                                        <h3>Where should we send the report?</h3>
                                        <p className="step-desc">Our experts will manually review the data and send you a custom growth plan.</p>
                                        
                                        <form onSubmit={handleSubmit} className="step3-form">
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>Full Name</label>
                                                    <input 
                                                        type="text" 
                                                        required 
                                                        value={formData.name}
                                                        onChange={(e) => updateForm('name', e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label>Work Email</label>
                                                    <input 
                                                        type="email" 
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => updateForm('email', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Business Type</label>
                                                <select 
                                                    required
                                                    value={formData.businessType}
                                                    onChange={(e) => updateForm('businessType', e.target.value)}
                                                >
                                                    <option value="">Select your industry</option>
                                                    <option value="ecommerce">E-Commerce</option>
                                                    <option value="saas">SaaS / Software</option>
                                                    <option value="service">Service Provider</option>
                                                    <option value="local">Local Business</option>
                                                </select>
                                            </div>

                                            <div className="wizard-actions margin-top">
                                                <button type="button" onClick={handleBack} className="btn btn-secondary">
                                                    <ArrowLeft size={18} /> Back
                                                </button>
                                                <button type="submit" className="btn btn-primary">
                                                    Start Audit <RefreshCw size={18} />
                                                </button>
                                            </div>
                                            <p className="form-footer">🔒 100% Secure. We never share your data.</p>
                                        </form>
                                    </motion.div>
                                )}

                                {step === 4 && (
                                    <motion.div key="step4" variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }} className="wizard-step">
                                        {isAnalyzing ? (
                                            <div className="analyzing-state">
                                                <RefreshCw size={48} className="spin text-accent" />
                                                <h3>Analyzing {formData.url}...</h3>
                                                <div className="scan-progress-bar">
                                                    <div className="scan-fill" style={{ width: `${progress}%` }}></div>
                                                </div>
                                                <p className="scan-status">
                                                    {progress < 30 && 'Checking server response maps...'}
                                                    {progress >= 30 && progress < 60 && 'Scanning for technical SEO issues...'}
                                                    {progress >= 60 && progress < 90 && 'Evaluating conversion pathways...'}
                                                    {progress >= 90 && 'Compiling initial payload...'}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="audit-success">
                                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                                                    <CheckCircle size={60} className="text-accent" />
                                                </motion.div>
                                                <h2>Scan Complete!</h2>
                                                <p>Our experts have received the diagnostic data. We are composing your custom growth report and will send it to <strong>{formData.email}</strong> within 48 hours.</p>
                                                <button className="btn btn-secondary" onClick={() => { setStep(1); setFormData({url:'', bottleneck:'', name:'', email:'', businessType:''}); }}>
                                                    Audit Another Site
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx="true">{`
        .audit-page { background: var(--bg-main); min-height: 90vh; }
        .audit-hero { padding: 100px 0; position: relative; overflow: hidden; }
        .audit-hero::before {
          content: ''; position: absolute; top: -10%; left: -10%; width: 50%; height: 100%;
          background: radial-gradient(circle, rgba(45, 212, 191, 0.05) 0%, transparent 70%); z-index: 0;
        }
        
        .audit-container { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; position: relative; z-index: 1; }
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
          background: var(--bg-card); padding: 3.5rem; border-radius: var(--radius-xl);
          border: 1px solid var(--border); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          min-height: 520px; display: flex; flex-direction: column;
        }
        
        .wizard-progress { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2.5rem; }
        .progress-bar { width: 100%; height: 6px; background: var(--bg-secondary); border-radius: 10px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--accent); transition: width 0.4s ease; }
        .step-count { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; text-align: right; }

        .form-wrapper-animated { position: relative; flex: 1; display: flex; flex-direction: column; overflow: hidden; }
        .wizard-step { width: 100%; display: flex; flex-direction: column; flex: 1; }
        .wizard-step h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .step-desc { color: var(--text-muted); margin-bottom: 2.5rem; font-size: 0.95rem; }
        
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
        .form-group label { font-size: 0.85rem; font-weight: 700; color: var(--text-main); }
        .form-group input, .form-group select {
           padding: 1.2rem 1rem; border: 1px solid var(--border); border-radius: 8px;
           background: var(--bg-secondary); color: var(--text-main); font-family: inherit; font-size: 1rem;
        }
        .form-group input:focus { border-color: var(--accent); outline: none; }
        
        .bottleneck-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
        .bottleneck-card {
          border: 2px solid var(--border); padding: 1.25rem; border-radius: 12px; cursor: pointer;
          transition: var(--transition); display: flex; flex-direction: column; gap: 1rem;
          background: var(--bg-main);
        }
        .bottleneck-card:hover { border-color: var(--accent); }
        .bottleneck-card.selected { border-color: var(--accent); background: rgba(45, 212, 191, 0.05); }
        .icon-wrap { color: var(--accent); }
        .b-info h4 { font-size: 1rem; margin-bottom: 0.25rem; }
        .b-info p { font-size: 0.8rem; color: var(--text-muted); margin: 0; line-height: 1.4; }

        .step3-form { display: flex; flex-direction: column; flex: 1; justify-content: space-between; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .wizard-actions { display: flex; justify-content: space-between; gap: 1rem; margin-top: auto; padding-top: 1rem; }
        .margin-top { margin-top: 2rem; }
        .w-full { width: 100%; justify-content: center; margin-top: 1rem; }
        .form-footer { text-align: center; margin-top: 1.5rem; font-size: 0.8rem; color: var(--text-muted); }

        .analyzing-state { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 1.5rem; padding: 2rem 0; height: 100%; flex: 1; }
        .spin { animation: spin 2s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .scan-progress-bar { width: 100%; max-width: 300px; height: 8px; background: var(--bg-secondary); border-radius: 10px; overflow: hidden; }
        .scan-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--accent)); transition: width 0.2s ease; }
        .scan-status { font-size: 0.9rem; color: var(--text-muted); font-family: monospace; }
        
        .audit-success { text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem; height: 100%; flex: 1; }
        .audit-success h2 { font-size: 2rem; margin-bottom: 0; }
        .audit-success p { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1rem; line-height: 1.6; max-width: 400px; }

        @media (max-width: 992px) {
           .audit-container { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
           .audit-benefits { align-items: center; }
           .trust-badge { justify-content: center; }
           .form-row { grid-template-columns: 1fr; gap: 0; }
           .audit-form-card { padding: 2rem; min-height: 600px; }
           .bottleneck-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default FreeAudit;
