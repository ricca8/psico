import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import '../../App.css';

const CancelBooking = () => {
    const { id } = useParams();
    const { bookings, cancelBooking } = useData();
    const [booking, setBooking] = useState(null);
    const [status, setStatus] = useState('confirm'); // confirm, success, error

    useEffect(() => {
        const found = bookings.find(b => b.id === parseInt(id));
        setBooking(found);
    }, [id, bookings]);

    const handleConfirm = () => {
        if (booking) {
            cancelBooking(id);
            setStatus('success');
        } else {
            setStatus('error');
        }
    };

    if (!booking) {
        return (
            <div className="section-padding container text-center">
                <h2>Cercando la prenotazione...</h2>
                <p>Se questo messaggio persiste, la prenotazione potrebbe non esistere.</p>
                <Link to="/" className="btn-link">Torna alla Home</Link>
            </div>
        );
    }

    if (booking.status === 'cancelled_by_user') {
        return (
            <div className="section-padding container text-center">
                <CheckCircle size={64} className="text-secondary" style={{ margin: '0 auto 1rem' }} />
                <h2>Prenotazione già cancellata</h2>
                <p>Questa prenotazione è stata cancellata correttamente.</p>
                <Link to="/" className="btn-primary">Torna alla Home</Link>
            </div>
        );
    }

    return (
        <div className="section-padding container" style={{ maxWidth: '600px' }}>
            {status === 'confirm' && (
                <div className="text-center">
                    <AlertTriangle size={64} color="#e74c3c" style={{ margin: '0 auto 1rem' }} />
                    <h2>Vuoi cancellare questa prenotazione?</h2>
                    <div className="booking-summary-card" style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '12px', margin: '2rem 0' }}>
                        <h3>{booking.name}</h3>
                        <p>{booking.date} alle {booking.time}</p>
                        <p>{booking.type === 'online' ? 'Consulenza Online' : 'In Studio'}</p>
                    </div>
                    <p>L'operazione è irreversibile.</p>
                    <div className="flex-center gap-1">
                        <button onClick={handleConfirm} className="btn-primary" style={{ backgroundColor: '#e74c3c' }}>Sì, cancella</button>
                        <Link to="/" className="btn-outline">No, mantieni</Link>
                    </div>
                </div>
            )}

            {status === 'success' && (
                <div className="text-center">
                    <CheckCircle size={64} color="var(--color-sage)" style={{ margin: '0 auto 1rem' }} />
                    <h2>Prenotazione Cancellata</h2>
                    <p>Abbiamo rimosso il tuo appuntamento. Speriamo di rivederti presto.</p>
                    <Link to="/" className="btn-primary">Torna alla Home</Link>
                </div>
            )}
        </div>
    );
};

export default CancelBooking;
