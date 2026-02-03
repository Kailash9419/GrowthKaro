import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Rocket } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Process', path: '/process' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky-nav">
            <nav className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="logo">
                        <Rocket className="text-accent" size={32} />
                        <span className="logo-text">Growth<span>Karo</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="desktop-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={isActive(link.path) ? 'active' : ''}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-actions">
                        <button onClick={toggleTheme} className="theme-toggle">
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <Link to="/free-audit" className="btn btn-primary hide-mobile">
                            Free Website Audit
                        </Link>
                        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={isActive(link.path) ? 'active' : ''}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/free-audit" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                            Free Website Audit
                        </Link>
                    </div>
                )}
            </nav>

            <style jsx="true">{`
        .sticky-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--bg-main);
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
          transition: var(--transition);
        }
        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
        }
        .logo-text span {
          color: var(--accent);
        }
        .desktop-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .desktop-links a {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-muted);
        }
        .desktop-links a:hover, .desktop-links a.active {
          color: var(--accent);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .theme-toggle {
          background: none;
          color: var(--text-main);
          padding: 0.5rem;
          border-radius: 50%;
        }
        .theme-toggle:hover {
          background: var(--bg-secondary);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          color: var(--text-main);
        }
        .mobile-menu {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border);
          margin-top: 1rem;
        }
        @media (max-width: 992px) {
          .desktop-links, .hide-mobile {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
        </header>
    );
};

export default Navbar;
