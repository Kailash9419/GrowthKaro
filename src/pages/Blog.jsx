import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posts = [
        {
            title: '5 Reasons Your Website Isn’t Converting Leads',
            excerpt: 'Struggling to get sales despite high traffic? The problem might be your UX strategy.',
            date: 'Jan 28, 2026',
            author: 'Sameer K.',
            category: 'Conversion'
        },
        {
            title: 'The Future of Web Design: Trends to Watch in 2026',
            excerpt: 'AI-driven layouts and micro-interactions are changing how users interact with brands.',
            date: 'Jan 20, 2026',
            author: 'Priya R.',
            category: 'Design'
        },
        {
            title: 'SEO vs. PPC: Which One Should Your Startup Prioritize?',
            excerpt: 'A comprehensive guide to choosing the right growth channel for your business budget.',
            date: 'Jan 15, 2026',
            author: 'Tushar M.',
            category: 'Strategy'
        },
        {
            title: 'How to Optimize Your Page Speed for Core Web Vitals',
            excerpt: 'Improve your Google rankings by following these technical performance tuning tips.',
            date: 'Jan 05, 2026',
            author: 'Sameer K.',
            category: 'Technical'
        }
    ];

    return (
        <div className="blog-page">
            <section className="internal-hero">
                <div className="container">
                    <h1>Growth <span className="text-accent">Insights</span></h1>
                    <p>Expert advice on design, development, and scaling your business in the digital age.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="blog-grid">
                        {posts.map((post) => (
                            <div key={post.title} className="blog-card">
                                <div className="blog-image-placeholder">
                                    <span className="blog-category">{post.category}</span>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span><Calendar size={14} /> {post.date}</span>
                                        <span><User size={14} /> {post.author}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <button className="read-more-btn">
                                        Read Article <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />

            <style jsx="true">{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }
        .blog-card {
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: var(--transition);
        }
        .blog-card:hover { transform: translateY(-5px); border-color: var(--accent); }
        .blog-image-placeholder {
          height: 250px;
          background: var(--bg-secondary);
          position: relative;
          padding: 2rem;
          display: flex;
          align-items: flex-end;
        }
        .blog-category {
          background: var(--accent);
          color: var(--bg-main);
          padding: 0.4rem 1rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
        }
        .blog-content { padding: 2.5rem; }
        .blog-meta { display: flex; gap: 1.5rem; color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1rem; }
        .blog-meta span { display: flex; align-items: center; gap: 0.5rem; }
        .blog-content h3 { font-size: 1.5rem; margin-bottom: 1rem; line-height: 1.4; }
        .blog-content p { color: var(--text-muted); margin-bottom: 2rem; line-height: 1.6; }
        .read-more-btn {
          background: none;
          color: var(--primary);
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
        }
        [data-theme='dark'] .read-more-btn { color: var(--accent); }
        .read-more-btn:hover { text-decoration: underline; }

        @media (max-width: 768px) { .blog-grid { grid-template-columns: 1fr; } }
      `}</style>
        </div>
    );
};

export default Blog;
