import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    Dr.ssa Rossi
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">Chi Sono</Link>
                    <Link to="/services" className="nav-link">Percorsi</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contatti</Link>
                    <Link to="/booking" className="btn-primary">Prenota Ora</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="mobile-nav">
                    <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>Chi Sono</Link>
                    <Link to="/services" className="mobile-nav-link" onClick={toggleMenu}>Percorsi</Link>
                    <Link to="/blog" className="mobile-nav-link" onClick={toggleMenu}>Blog</Link>
                    <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contatti</Link>
                    <Link to="/booking" className="btn-primary full-width" onClick={toggleMenu}>Prenota Ora</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
