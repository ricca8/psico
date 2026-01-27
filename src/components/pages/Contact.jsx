import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="contact-page section-padding">
            <div className="container">
                <h1 className="text-center section-title">Contatti</h1>
                <p className="text-center section-text">
                    Hai domande o vuoi prenotare un primo colloquio? Scrivimi.
                </p>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>Studio</h3>
                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <p>Via Roma 123<br />20121 Milano (MI)</p>
                            </div>
                            <div className="map-placeholder">
                                <p>Google Maps Integration</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <h3>Recapiti</h3>
                            <div className="info-item">
                                <Mail className="info-icon" />
                                <p>info@drssarossi.it</p>
                            </div>
                            <div className="info-item">
                                <Phone className="info-icon" />
                                <p>+39 333 1234567</p>
                            </div>
                            <div className="social-links-contact">
                                <a href="#"><Instagram /></a>
                                <a href="#"><Linkedin /></a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        {submitted ? (
                            <div className="success-message">
                                <h3>Messaggio inviato!</h3>
                                <p>Ti risponderò il prima possibile.</p>
                                <button className="btn-outline" onClick={() => setSubmitted(false)}>Invia un altro messaggio</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nome</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Messaggio</label>
                                    <textarea
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary">Invia Messaggio</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
