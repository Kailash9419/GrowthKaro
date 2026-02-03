import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="contact-page">
            <section className="internal-hero">
                <div className="container">
                    <h1>Work With <span className="text-accent">Us</span></h1>
                    <p>Have a project in mind? Let’s build something incredible together.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info-panel">
                            <h2>Get in Touch</h2>
                            <p>We typically respond to all inquiries within 24 business hours.</p>

                            <div className="contact-methods">
                                <div className="method">
                                    <Mail className="text-accent" />
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>hello@growthkaro.com</p>
                                    </div>
                                </div>
                                <div className="method">
                                    <Phone className="text-accent" />
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="method">
                                    <MapPin className="text-accent" />
                                    <div>
                                        <h3>Visit Us</h3>
                                        <p>HSR Layout, Bengaluru, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="whatsapp-cta">
                                <MessageCircle className="text-accent" />
                                <span>Prefer WhatsApp? <a href="#">Chat Now</a></span>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            {submitted ? (
                                <div className="success-message glass">
                                    <h2>Message Sent!</h2>
                                    <p>Thank you for reaching out. A growth strategist will contact you shortly.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="john@company.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <select required>
                                            <option value="">Select a service</option>
                                            <option value="web-design">Website Design</option>
                                            <option value="web-dev">Web Development</option>
                                            <option value="seo">SEO & Optimization</option>
                                            <option value="other">Other Inquiry</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Project Details</label>
                                        <textarea rows="5" placeholder="Tell us about your project..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg w-full">
                                        Send Message <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx="true">{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 6rem;
        }
        .contact-info-panel h2 { font-size: 2.5rem; margin-bottom: 1.5rem; }
        .contact-info-panel p { color: var(--text-muted); font-size: 1.1rem; margin-bottom: 3rem; }
        
        .contact-methods { display: flex; flex-direction: column; gap: 2rem; margin-bottom: 4rem; }
        .method { display: flex; gap: 1.5rem; }
        .method h3 { font-size: 1.1rem; margin-bottom: 0.25rem; }
        .method p { margin-bottom: 0; font-weight: 600; color: var(--primary); }
        [data-theme='dark'] .method p { color: var(--accent); }

        .whatsapp-cta {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          font-weight: 600;
        }
        .whatsapp-cta a { color: var(--accent); text-decoration: underline; }

        .contact-form {
          background: var(--bg-card);
          padding: 3rem;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .form-group label { font-weight: 700; font-size: 0.9rem; color: var(--text-main); }
        .form-group input, .form-group select, .form-group textarea {
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: var(--bg-secondary);
          color: var(--text-main);
          font-family: inherit;
        }
        .form-group input:focus { border-color: var(--accent); outline: none; }
        .w-full { width: 100%; justify-content: center; }

        .success-message {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem;
          background: rgba(45, 212, 191, 0.05);
          border-radius: var(--radius-xl);
          border: 2px dashed var(--accent);
        }

        @media (max-width: 992px) { .contact-grid { grid-template-columns: 1fr; gap: 4rem; } }
      `}</style>
        </div>
    );
};

export default Contact;
