import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <h3>Let's Build Together</h3>
                    <p>Catfe Studio &copy; {new Date().getFullYear()}</p>
                </div>
                <div className="footer-right">
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Discord</a>
                    <a href="#" className="social-link">Asset Store</a>
                </div>
            </div>
            <style>{`
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 50px 0;
          margin-top: 60px;
          background: rgba(10, 10, 12, 0.5);
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-left h3 {
          margin-bottom: 5px;
        }
        .footer-left p {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .footer-right {
          display: flex;
          gap: 20px;
        }
        .social-link {
          color: var(--text-muted);
        }
        .social-link:hover {
          color: var(--primary);
        }
        @media (max-width: 600px) {
          .footer-content { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
