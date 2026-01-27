import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Dr.ssa Rossi</h3>
                    <p>Psicologa e Psicoterapeuta</p>
                    <div className="contact-item">
                        <MapPin size={16} />
                        <span>Via Roma 123, Milano</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={16} />
                        <span>info@drssarossi.it</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={16} />
                        <span>+39 333 1234567</span>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Link Utili</h4>
                    <ul>
                        <li><a href="/about">Chi Sono</a></li>
                        <li><a href="/services">Percorsi</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Seguimi</h4>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dr.ssa Rossi. P.IVA 12345678900 | Privacy Policy</p>
            </div>
        </footer>
    );
};

export default Footer;
