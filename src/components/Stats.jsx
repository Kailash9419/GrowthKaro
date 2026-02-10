import React from 'react';
import { Star, Rocket, TrendingUp } from 'lucide-react';

const Stats = () => {
    const stats = [
        { 
            emoji: '⭐',
            number: '4.9/5', 
            label: 'Client Rating',
            description: 'Consistently delivering excellence',
            color: '#FFD700',
            bgGradient: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05))'
        },
        { 
            emoji: '🚀',
            number: '50+', 
            label: 'Projects Delivered',
            description: 'Across diverse industries',
            color: '#FF6B6B',
            bgGradient: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 107, 107, 0.05))'
        },
        { 
            emoji: '📈',
            number: '3x', 
            label: 'Avg. Conversion Growth',
            description: 'Real results for our clients',
            color: '#51CF66',
            bgGradient: 'linear-gradient(135deg, rgba(81, 207, 102, 0.1), rgba(81, 207, 102, 0.05))'
        },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <h2 className="stats-title">Proven Results for Our Clients</h2>
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.label} className="stat-card" style={{ backgroundImage: stat.bgGradient }}>
                            <div className="stat-content">
                                <div className="stat-emoji">{stat.emoji}</div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                                <div className="stat-description">{stat.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .stats-section {
          padding: 60px 0;
          background: var(--bg-main);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .stats-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: var(--text-main);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .stat-card {
          background: var(--bg-card);
          border: 2px solid var(--border);
          border-radius: 1.5rem;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), transparent);
        }
        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 8px 25px rgba(45, 212, 191, 0.15);
        }
        .stat-content {
          position: relative;
          z-index: 1;
        }
        .stat-emoji {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          display: block;
        }
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--accent), #14B8A6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }
        .stat-label {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.75rem;
        }
        .stat-description {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .stats-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          .stat-number {
            font-size: 2.5rem;
          }
          .stat-emoji {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Stats;
