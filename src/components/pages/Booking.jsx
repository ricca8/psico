import React, { useState } from 'react';
import { Calendar, Video, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import './Booking.css';

const Booking = () => {
    const { addBooking } = useData();
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        type: '',
        date: '',
        time: '',
        name: '',
        email: '',
        notes: ''
    });

    const [newBookingId, setNewBookingId] = useState(null);

    const handleTypeSelect = (type) => {
        setBookingData({ ...bookingData, type });
        setStep(2);
    };

    const handleDateSelect = (date, time) => {
        setBookingData({ ...bookingData, date, time });
        setStep(3);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const created = addBooking(bookingData);
        setNewBookingId(created.id);
        setStep(4);
    };

    return (
        <div className="booking-page section-padding">
            <div className="container booking-container">
                <h1>Prenota la tua Seduta</h1>
                <div className="progress-bar">
                    <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Servizio</div>
                    <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Orario</div>
                    <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Dettagli</div>
                    <div className={`step ${step >= 4 ? 'active' : ''}`}>4. Conferma</div>
                </div>

                <div className="booking-content">
                    {step === 1 && (
                        <div className="step-content">
                            <h2>Scegli la modalità</h2>
                            <div className="service-cards">
                                <div className="service-card" onClick={() => handleTypeSelect('online')}>
                                    <Video size={48} className="service-icon" />
                                    <h3>Consulenza Online</h3>
                                    <p>Videochiamata sicura da dove vuoi.</p>
                                    <span className="price">€70 / 50 min</span>
                                </div>
                                <div className="service-card" onClick={() => handleTypeSelect('studio')}>
                                    <MapPin size={48} className="service-icon" />
                                    <h3>Seduta in Studio</h3>
                                    <p>In presenza presso lo studio di Milano.</p>
                                    <span className="price">€80 / 50 min</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step-content">
                            <h2>Seleziona Data e Ora</h2>
                            <p>Disponibilità per: {bookingData.type === 'online' ? 'Online' : 'Studio'}</p>

                            {/* Mock Calendar Grid */}
                            <div className="calendar-mock">
                                <div className="dates-grid">
                                    {['Lun', 'Mar', 'Mer', 'Gio', 'Ven'].map(day => (
                                        <div key={day} className="calendar-day-header">{day}</div>
                                    ))}
                                    {/* Mock slots */}
                                    {[...Array(10)].map((_, i) => (
                                        <button
                                            key={i}
                                            className="time-slot"
                                            onClick={() => handleDateSelect('2024-05-20', '10:00')}
                                        >
                                            10:00
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button className="btn-back" onClick={() => setStep(1)}>Indietro</button>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="step-content">
                            <h2>I tuoi dati</h2>
                            <form className="booking-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nome e Cognome</label>
                                    <input
                                        type="text"
                                        required
                                        value={bookingData.name}
                                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={bookingData.email}
                                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                                    />
                                </div>
                                <div className="summary-box">
                                    <p><strong>Riepilogo:</strong> {bookingData.type === 'online' ? 'Online' : 'Studio'}</p>
                                    <p>Data: {bookingData.date} alle {bookingData.time}</p>
                                </div>
                                <div className="form-actions">
                                    <button type="button" className="btn-back" onClick={() => setStep(2)}>Indietro</button>
                                    <button type="submit" className="btn-primary">Conferma Prenotazione</button>
                                </div>
                            </form>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="step-content success-message">
                            <CheckCircle size={64} color="var(--color-sage)" />
                            <h2>Prenotazione Confermata!</h2>
                            <p>Grazie {bookingData.name}. Abbiamo inviato una mail di conferma a {bookingData.email}.</p>
                            <p>Riceverai un reminder 24h prima dell'appuntamento.</p>

                            {/* Simulated Email Notification */}
                            <div style={{ margin: '2rem 0', padding: '1.5rem', border: '2px dashed #ccc', borderRadius: '8px', textAlign: 'left', background: '#f8f9fa' }}>
                                <h4 style={{ marginTop: 0, color: '#666' }}>📩 SIMULAZIONE EMAIL UTENTE</h4>
                                <p><strong>Oggetto:</strong> Conferma Prenotazione - Dr. Rossi</p>
                                <p>Ciao {bookingData.name}, la tua prenotazione per {bookingData.type} il giorno {bookingData.date} alle {bookingData.time} è confermata.</p>
                                <p>Se desideri cancellare, clicca qui:</p>
                                <Link to={`/cancel-booking/${newBookingId}`} className="btn-link" style={{ fontSize: '0.9rem' }}>Cancella Prenotazione</Link>
                            </div>

                            <div style={{ margin: '1rem 0', padding: '1rem', border: '2px dashed #e74c3c', borderRadius: '8px', textAlign: 'left', background: '#fff5f5' }}>
                                <h4 style={{ marginTop: 0, color: '#c0392b' }}>🔔 SIMULAZIONE NOTIFICA ADMIN</h4>
                                <p>Nuova prenotazione da <strong>{bookingData.name}</strong> ({bookingData.email}).</p>
                                <p>Accedi alla dashboard per gestire.</p>
                            </div>

                            <Link to="/" className="btn-primary">Torna alla Home</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Booking;
