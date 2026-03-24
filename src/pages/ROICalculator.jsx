import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, MousePointerClick, DollarSign, ArrowRight, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROICalculator = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    // Base Metrics
    const [traffic, setTraffic] = useState(5000);
    const [convRate, setConvRate] = useState(1.5);
    const [aov, setAov] = useState(500);
    const [showWhy, setShowWhy] = useState(false);

    // GrowthKaro Boosts
    const [trafficBoost, setTrafficBoost] = useState(30); // % increase
    const [convBoost, setConvBoost] = useState(1.0); // % flat addition

    // Calculations
    const currentLeads = Math.round(traffic * (convRate / 100));
    const currentRevenue = currentLeads * aov;

    const newTraffic = Math.round(traffic * (1 + trafficBoost / 100));
    const newConvRate = convRate + convBoost;
    const newLeads = Math.round(newTraffic * (newConvRate / 100));
    const projectedRevenue = newLeads * aov;

    const additionalRevenue = projectedRevenue - currentRevenue;

    const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
    const formatNumber = (value) => new Intl.NumberFormat('en-US').format(value);

    return (
        <div className="roi-page">
            <section className="internal-hero">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                        Calculate Your <span className="text-accent">Growth Potential</span>
                    </motion.h1>
                    <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                        Discover exactly how much revenue you're leaving on the table. Adjust the sliders below to see your projected ROI.
                    </motion.p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="calculator-grid">

                        {/* Input Controls */}
                        <div className="calc-controls glass-panel">
                            <h3>Current Metrics</h3>
                            <div className="control-group">
                                <label>
                                    <span className="label-flex"><Users size={16} /> Monthly Traffic</span>
                                    <span className="value-badge">{formatNumber(traffic)} visitors</span>
                                </label>
                                <input type="range" min="500" max="100000" step="500" value={traffic} onChange={(e) => setTraffic(Number(e.target.value))} className="styled-slider" />
                            </div>

                            <div className="control-group">
                                <label>
                                    <span className="label-flex"><MousePointerClick size={16} /> Conversion Rate</span>
                                    <span className="value-badge">{convRate.toFixed(1)}%</span>
                                </label>
                                <input type="range" min="0.1" max="10" step="0.1" value={convRate} onChange={(e) => setConvRate(Number(e.target.value))} className="styled-slider" />
                            </div>

                            <div className="control-group">
                                <label>
                                    <span className="label-flex"><DollarSign size={16} /> Average Order/Client Value</span>
                                    <span className="value-badge">{formatCurrency(aov)}</span>
                                </label>
                                <input type="range" min="50" max="10000" step="50" value={aov} onChange={(e) => setAov(Number(e.target.value))} className="styled-slider" />
                            </div>

                            <div className="divider"></div>

                            <h3>GrowthKaro Projections</h3>
                            <p className="helper-text">See what happens when our experts optimize your digital presence.</p>
                            
                            <div className="projection-card">
                                <div className="p-header">
                                    <span className="label-flex text-accent">Estimated Traffic Increase</span>
                                    <span className="value-badge highlight">Up to +{trafficBoost}%</span>
                                </div>
                                <p className="micro-justification">“Based on 120+ successful growth campaigns”</p>
                            </div>

                            <div className="projection-card">
                                <div className="p-header">
                                    <span className="label-flex text-accent">Estimated Conv. Rate Increase</span>
                                    <span className="value-badge highlight">Up to +{convBoost.toFixed(1)}%</span>
                                </div>
                                <p className="micro-justification">“Benchmarked from industry standard UI/UX improvements”</p>
                            </div>

                            <button className="why-btn" onClick={() => setShowWhy(!showWhy)}>
                                <Info size={14} /> Why this projection? {showWhy ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                            </button>
                            
                            <AnimatePresence>
                                {showWhy && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }} 
                                        animate={{ height: 'auto', opacity: 1 }} 
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div className="why-content">
                                            {traffic < 10000 ? (
                                                <p><strong>Traffic (+{trafficBoost}%):</strong> Lower traffic sites typically gain faster due to untapped SEO & funnel gaps.</p>
                                            ) : (
                                                <p><strong>Traffic (+{trafficBoost}%):</strong> Higher traffic sites see steady, compounding gains from optimized keyword targeting.</p>
                                            )}
                                            {convRate < 2.0 ? (
                                                <p><strong>Conversion (+{convBoost.toFixed(1)}%):</strong> Sites below a 2% conversion rate usually have major friction points we can instantly fix.</p>
                                            ) : (
                                                <p><strong>Conversion (+{convBoost.toFixed(1)}%):</strong> Sites already converting well see refined, incremental growth through deep A/B testing.</p>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Result Display */}
                        <div className="calc-results glass-panel">
                            <div className="result-header">
                                <TrendingUp size={32} className="text-accent" />
                                <h2>Your Growth Potential</h2>
                            </div>

                            <div className="metrics-display">
                                <div className="metric-box current">
                                    <p>Current Monthly Revenue</p>
                                    <h3>{formatCurrency(currentRevenue)}</h3>
                                    <span>From {formatNumber(currentLeads)} conversions</span>
                                </div>

                                <div className="metric-box new">
                                    <p>Projected Monthly Revenue</p>
                                    <motion.h3 key={projectedRevenue} initial={{ scale: 1.1, color: "var(--accent)" }} animate={{ scale: 1, color: "var(--text-main)" }}>
                                        {formatCurrency(projectedRevenue)}
                                    </motion.h3>
                                    <span>From {formatNumber(newLeads)} conversions</span>
                                </div>
                            </div>

                            <div className="roi-highlight">
                                <h3>Total Added Value</h3>
                                <motion.div className="massive-number text-accent" key={additionalRevenue} initial={{ y: -10, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }}>
                                    +{formatCurrency(additionalRevenue)} <span className="per-month">/mo</span>
                                </motion.div>
                                <p>That's an extra <strong>{formatCurrency(additionalRevenue * 12)}</strong> projected in annual revenue.</p>
                            </div>

                            <Link to="/free-audit" className="btn btn-primary btn-lg w-full mt-4">
                                Claim Your Growth Plan <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx="true">{`
                .roi-page { background: var(--bg-main); min-height: 90vh; }
                .internal-hero { background: var(--primary); color: white; padding: 80px 0; text-align: center; }
                [data-theme='dark'] .internal-hero { background: var(--bg-secondary); }
                .internal-hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
                .internal-hero .lead { font-size: 1.2rem; opacity: 0.8; max-width: 700px; margin: 0 auto; }
                
                .calculator-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
                
                .glass-panel { background: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-xl); border: 1px solid var(--border); box-shadow: var(--shadow-lg); }
                
                .calc-controls h3 { font-size: 1.4rem; margin-bottom: 0.5rem; }
                .helper-text { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2rem; }
                .divider { height: 1px; background: var(--border); margin: 2rem 0; width: 100%; }
                
                .control-group { margin-bottom: 2rem; }
                .control-group label { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; font-weight: 600; font-size: 0.95rem; }
                .label-flex { display: flex; align-items: center; gap: 0.5rem; }
                
                .value-badge { background: var(--bg-secondary); padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.85rem; font-family: monospace; border: 1px solid var(--border); }
                .value-badge.highlight { background: rgba(45, 212, 191, 0.1); color: var(--accent); border-color: rgba(45, 212, 191, 0.3); }

                /* Custom Range Slider */
                .styled-slider { -webkit-appearance: none; width: 100%; height: 8px; border-radius: 4px; background: var(--border); outline: none; }
                .styled-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 24px; height: 24px; border-radius: 50%; background: var(--primary); cursor: pointer; transition: transform 0.1s; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
                [data-theme='dark'] .styled-slider::-webkit-slider-thumb { background: white; }
                .styled-slider::-webkit-slider-thumb:hover { transform: scale(1.15); }
                
                .accent-slider::-webkit-slider-thumb { background: var(--accent); }
                [data-theme='dark'] .accent-slider::-webkit-slider-thumb { background: var(--accent); }

                .projection-card { background: rgba(45, 212, 191, 0.05); padding: 1.25rem; border-radius: 12px; border: 1px solid rgba(45, 212, 191, 0.2); margin-bottom: 1.5rem; }
                .p-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
                .p-header .label-flex { font-weight: 600; font-size: 0.95rem; }
                .p-header .value-badge { font-size: 1.05rem; }
                .micro-justification { font-size: 0.8rem; color: var(--text-muted); font-style: italic; margin: 0; opacity: 0.9; }
                
                .why-btn { display: flex; align-items: center; gap: 0.5rem; background: none; border: none; color: var(--text-muted); font-size: 0.85rem; font-weight: 600; cursor: pointer; padding: 0.5rem 0; margin-bottom: 0.5rem; transition: color 0.2s; }
                .why-btn:hover { color: var(--accent); }
                .why-content { background: var(--bg-main); padding: 1rem; border-radius: 8px; font-size: 0.85rem; color: var(--text-muted); border: 1px dashed var(--border); margin-bottom: 1.5rem; }
                .why-content p { margin-bottom: 0.5rem; line-height: 1.5; }
                .why-content p:last-child { margin-bottom: 0; }
                .why-content strong { color: var(--text-main); }

                .result-header { display: flex; flex-direction: column; align-items: center; gap: 1rem; text-align: center; margin-bottom: 3rem; }
                .result-header h2 { font-size: 2rem; }

                .metrics-display { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 3rem; }
                .metric-box { padding: 1.5rem; border-radius: 16px; text-align: center; border: 1px solid var(--border); background: var(--bg-secondary); }
                .metric-box.new { border-color: rgba(45, 212, 191, 0.3); background: rgba(45, 212, 191, 0.05); }
                
                .metric-box p { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; margin-bottom: 0.5rem; }
                .metric-box h3 { font-size: 1.5rem; margin-bottom: 0.25rem; font-family: monospace; }
                .metric-box.new h3 { color: var(--accent); font-size: 1.8rem; }
                .metric-box span { font-size: 0.8rem; color: var(--text-muted); }

                .roi-highlight { text-align: center; padding: 2.5rem; background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%); border-radius: 20px; color: white; margin-bottom: 2rem; }
                [data-theme='dark'] .roi-highlight { background: rgba(0,0,0,0.3); border: 1px solid var(--border); }
                .roi-highlight h3 { font-size: 1.2rem; font-weight: 500; opacity: 0.9; margin-bottom: 0.5rem; }
                
                .massive-number { font-size: 3.5rem; font-weight: 800; line-height: 1; margin-bottom: 1rem; text-shadow: 0 4px 20px rgba(45, 212, 191, 0.4); }
                .per-month { font-size: 1.2rem; font-weight: 500; opacity: 0.8; }
                .roi-highlight p { font-size: 1rem; opacity: 0.9; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1); }

                .mt-4 { margin-top: 1rem; justify-content: center; font-size: 1.1rem; }

                @media (max-width: 1024px) {
                    .calculator-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 600px) {
                    .metrics-display { grid-template-columns: 1fr; }
                    .massive-number { font-size: 2.5rem; }
                    .calc-controls, .calc-results { padding: 1.5rem; }
                    .internal-hero h1 { font-size: 2.5rem; }
                }
            `}</style>
        </div>
    );
};

export default ROICalculator;
