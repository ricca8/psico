import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { Calendar, PenTool, LogOut, FileText } from 'lucide-react';
import './Dashboard.css';
import ContentEditor from './ContentEditor';

// Placeholder for sub-components (will be separated later or defined in same file if small)
const BookingsList = ({ bookings, updateBookingStatus }) => {
    const pendingBookings = bookings.filter(b => b.status === 'pending');
    const pastBookings = bookings.filter(b => b.status !== 'pending');

    return (
        <div className="dashboard-content-wrapper">
            <div className="dashboard-card mb-4">
                <h2>Prenotazioni in Arrivo</h2>
                {pendingBookings.length === 0 ? <p className="text-muted">Nessuna nuova richiesta.</p> : (
                    <div className="bookings-list">
                        {pendingBookings.map(b => (
                            <div key={b.id} className={`booking-item ${b.status}`}>
                                <div className="booking-info">
                                    <h4>{b.name}</h4>
                                    <p>{b.date} - {b.time} ({b.type})</p>
                                    <small>{b.email}</small>
                                </div>
                                <div className="booking-actions">
                                    <button className="btn-success" onClick={() => updateBookingStatus(b.id, 'confirmed')}>Accetta</button>
                                    <button className="btn-danger" onClick={() => updateBookingStatus(b.id, 'rejected')}>Rifiuta</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="dashboard-card">
                <h2>Storico Prenotazioni</h2>
                {pastBookings.length === 0 ? <p className="text-muted">Nessuna prenotazione passata.</p> : (
                    <div className="bookings-list">
                        {pastBookings.map(b => (
                            <div key={b.id} className={`booking-item ${b.status} history-item`}>
                                <div className="booking-info">
                                    <h4>{b.name}</h4>
                                    <p>{b.date} - {b.time} ({b.type})</p>
                                    <p className="booking-decision">
                                        Esito:
                                        <span className={`status-badge ${b.status}`}>
                                            {b.status === 'confirmed' ? ' Confermata' : ' Rifiutata'}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const ArticleManager = ({ articles, addArticle, deleteArticle }) => {
    const [newArticle, setNewArticle] = useState({ title: '', category: '', excerpt: '', date: new Date().toLocaleDateString() });

    const handleSubmit = (e) => {
        e.preventDefault();
        addArticle({ ...newArticle, imageColor: '#E8E4D9' }); // Default color for now
        setNewArticle({ title: '', category: '', excerpt: '', date: new Date().toLocaleDateString() });
    };

    return (
        <div className="dashboard-card">
            <h2>Gestione Blog</h2>

            <form onSubmit={handleSubmit} className="admin-form">
                <h3>Nuovo Articolo</h3>
                <input placeholder="Titolo" value={newArticle.title} onChange={e => setNewArticle({ ...newArticle, title: e.target.value })} required />
                <input placeholder="Categoria" value={newArticle.category} onChange={e => setNewArticle({ ...newArticle, category: e.target.value })} required />
                <textarea placeholder="Estratto" value={newArticle.excerpt} onChange={e => setNewArticle({ ...newArticle, excerpt: e.target.value })} required />
                <button type="submit" className="btn-primary">Pubblica</button>
            </form>

            <div className="articles-list-admin">
                <h3>Articoli Pubblicati</h3>
                {articles.map(a => (
                    <div key={a.id} className="article-item-admin">
                        <span>{a.title}</span>
                        <button onClick={() => deleteArticle(a.id)} className="text-danger">Elimina</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Dashboard = () => {
    const { user, bookings, articles, logout, updateBookingStatus, addArticle, deleteArticle } = useData();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('bookings');

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) return null;

    return (
        <div className="dashboard-page section-padding">
            <div className="container">
                <div className="dashboard-header">
                    <h1>Bentornata, {user.name}</h1>
                    <button onClick={logout} className="btn-outline"><LogOut size={16} /> Logout</button>
                </div>

                <div className="dashboard-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bookings')}
                    >
                        <Calendar size={18} /> Prenotazioni
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'blog' ? 'active' : ''}`}
                        onClick={() => setActiveTab('blog')}
                    >
                        <PenTool size={18} /> Blog
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
                        onClick={() => setActiveTab('content')}
                    >
                        <FileText size={18} /> Contenuti
                    </button>
                </div>

                <div className="dashboard-content">
                    {activeTab === 'bookings' && (
                        <BookingsList bookings={bookings} updateBookingStatus={updateBookingStatus} />
                    )}
                    {activeTab === 'blog' && (
                        <ArticleManager articles={articles} addArticle={addArticle} deleteArticle={deleteArticle} />
                    )}
                    {activeTab === 'content' && (
                        <ContentEditor />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
