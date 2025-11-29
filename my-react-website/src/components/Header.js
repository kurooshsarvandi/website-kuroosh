import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">کوروش</Link>
        </div>
        
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              خانه
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              درباره من
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              پروژه‌ها
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              تماس
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;