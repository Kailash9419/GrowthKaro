import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <Rocket className="text-accent" size={32} />
                            <span className="logo-text">Growth<span>Karo</span></span>
                        </Link>
                        <p className="footer-description">
                            We build high-performance websites that turn visitors into customers. Your growth is our mission.
                        </p>
                        <div className="social-links">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter"><Twitter size={20} /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/process">Our Process</Link></li>
                            <li><Link to="/case-studies">Case Studies</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/services">UI/UX Design</Link></li>
                            <li><Link to="/services">Web Development</Link></li>
                            <li><Link to="/services">Performance SEO</Link></li>
                            <li><Link to="/services">Growth Strategy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <ul className="contact-info">
                            <li><Mail size={18} /> <a href="mailto:hello@growthkaro.com">hello@growthkaro.com</a></li>
                            <li><Phone size={18} /> <a href="tel:+917017628078">+91 7017628078</a></li>
                            <li><MapPin size={18} /> Haldwani, Nainital, UK, India</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} GrowthKaro. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        .footer {
          background: var(--bg-secondary);
          padding: 80px 0 40px;
          border-top: 1px solid var(--border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 4rem;
          margin-bottom: 60px;
        }
        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .logo-text span {
          color: var(--accent);
        }
        .footer-description {
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          max-width: 300px;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          color: var(--text-muted);
          background: var(--bg-main);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid var(--border);
        }
        .social-links a:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .footer-links h3, .footer-contact h3 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }
        .footer-links ul {
          list-style: none;
        }
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        .footer-links a {
          color: var(--text-muted);
        }
        .footer-links a:hover {
          color: var(--accent);
          padding-left: 5px;
        }
        .contact-info {
          list-style: none;
        }
        .contact-info li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .contact-info a {
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .contact-info a:hover {
          color: var(--accent);
        }
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }
        .footer-bottom-links a {
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .footer-bottom-links a:hover {
          color: var(--accent);
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
