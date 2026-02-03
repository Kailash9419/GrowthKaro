import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
    return (
        <div className="whatsapp-widget">
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} />
                <span className="tooltip">Chat with GrowthKaro</span>
            </a>

            <style jsx="true">{`
        .whatsapp-widget {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 9999;
        }
        .whatsapp-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.4);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1) rotate(5deg);
        }
        .tooltip {
          position: absolute;
          right: 75px;
          background: var(--bg-card);
          color: var(--text-main);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: var(--shadow-lg);
          opacity: 0;
          visibility: hidden;
          transition: var(--transition);
          border: 1px solid var(--border);
        }
        .whatsapp-btn:hover .tooltip {
          opacity: 1;
          visibility: visible;
          right: 80px;
        }
        
        /* Pulse Animation */
        .whatsapp-btn::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: #25D366;
          border-radius: 50%;
          z-index: -1;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @media (max-width: 768px) {
          .whatsapp-widget { bottom: 20px; right: 20px; }
          .whatsapp-btn { width: 50px; height: 50px; }
          .tooltip { display: none; }
        }
      `}</style>
        </div>
    );
};

export default WhatsAppWidget;
