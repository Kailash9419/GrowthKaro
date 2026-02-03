import React from 'react';
import { Star, Rocket, TrendingUp } from 'lucide-react';

const Stats = () => {
    const stats = [
        { icon: <Star size={24} />, label: '4.9/5 Client Rating', value: '⭐ Top Rated' },
        { icon: <Rocket size={24} />, label: '50+ Projects Delivered', value: '🚀 Success' },
        { icon: <TrendingUp size={24} />, label: 'Avg. 3x Conversion Growth', value: '📈 Growth' },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.label} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-info">
                                <h3>{stat.label.split(' ')[0]}</h3>
                                <p>{stat.label.split(' ').slice(1).join(' ')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        .stats-section {
          padding: 40px 0;
          background: var(--bg-main);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .stat-card {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          padding: 1rem;
        }
        .stat-icon {
          color: var(--accent);
          background: rgba(45, 212, 191, 0.1);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
        }
        .stat-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.25rem;
        }
        .stat-info p {
          color: var(--text-muted);
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .stat-card {
            justify-content: flex-start;
          }
        }
      `}</style>
        </section>
    );
};

export default Stats;
