import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <span className="logo-icon" role="img" aria-label="cat face">😺</span> Catfe<span className="highlight">Studio</span>
          <span className="coffee-steam" role="img" aria-label="coffee">☕</span>
        </Link>

        <button className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>Menu (Home)</Link>
          <a href="/#tools" className="nav-link" onClick={closeMobileMenu}>Tools</a>
          <Link to="/blog" className="nav-link" onClick={closeMobileMenu}>Tech Blog</Link>
          <Link to="/contact" className="btn btn-primary btn-sm" onClick={closeMobileMenu}>Get in Touch</Link>
        </nav>
      </div>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s ease;
          padding: 20px 0;
        }
        .header.scrolled {
          background: rgba(45, 35, 30, 0.9); /* Coffee bean dark */
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(224, 159, 125, 0.1);
          padding: 12px 0;
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-main);
          z-index: 1002;
        }
        .logo-icon {
          font-size: 2rem;
          filter: drop-shadow(0 2px 5px rgba(0,0,0,0.2));
        }
        .highlight {
          color: var(--primary);
        }
        .coffee-steam {
            font-size: 1.2rem;
            animation: float 3s ease-in-out infinite;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .nav-link {
          font-size: 1rem;
          font-weight: 600;
          opacity: 0.8;
          position: relative;
          color: var(--text-main);
        }
        .nav-link:hover {
          opacity: 1;
          color: var(--primary);
        }
        .btn-sm {
          padding: 8px 24px;
          font-size: 0.85rem;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            flex-direction: column;
            gap: 6px;
            z-index: 1002;
            padding: 5px;
        }
        .bar {
            width: 25px;
            height: 3px;
            background-color: var(--text-main);
            border-radius: 2px;
            transition: all 0.3s ease;
        }
        
        /* Hamburger Animation */
        .mobile-menu-btn.open .bar:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }
        .mobile-menu-btn.open .bar:nth-child(2) {
            opacity: 0;
        }
        .mobile-menu-btn.open .bar:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
              display: flex;
          }
          
          .nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--bg-dark);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
            transform: translateY(-100%);
            transition: transform 0.4s ease-in-out;
            z-index: 1001;
          }
          
          .nav.mobile-open {
            transform: translateY(0);
          }

          .nav-link { 
            font-size: 1.5rem;
            display: block; 
          }
          
          .btn-sm {
            font-size: 1.2rem;
            padding: 12px 30px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
