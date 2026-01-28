import React, { useState } from 'react';
import { useData } from '../../context/DataContext';

const ContentEditor = () => {
    const { siteContent, updateSiteContent } = useData();
    const [localContent, setLocalContent] = useState(siteContent);
    const [message, setMessage] = useState('');

    const handleChange = (section, field, value) => {
        setLocalContent(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handleSave = (section) => {
        updateSiteContent(section, localContent[section]);
        setMessage('Modifiche salvate con successo!');
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="dashboard-content-wrapper">
            <div className="dashboard-card mb-4">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Home Page</h2>
                    <button className="btn-success" onClick={() => handleSave('home')}>Salva Home</button>
                </div>
                <div className="admin-form" style={{ marginTop: '1rem', maxWidth: '100%' }}>
                    <div className="form-group">
                        <label>Titolo Hero</label>
                        <input
                            value={localContent.home.heroTitle}
                            onChange={(e) => handleChange('home', 'heroTitle', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sottotitolo Hero</label>
                        <textarea
                            value={localContent.home.heroSubtitle}
                            onChange={(e) => handleChange('home', 'heroSubtitle', e.target.value)}
                            rows="3"
                        />
                    </div>
                    <div className="form-group">
                        <label>Titolo Mission</label>
                        <input
                            value={localContent.home.missionTitle}
                            onChange={(e) => handleChange('home', 'missionTitle', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Testo Mission</label>
                        <textarea
                            value={localContent.home.missionText}
                            onChange={(e) => handleChange('home', 'missionText', e.target.value)}
                            rows="3"
                        />
                    </div>
                </div>
            </div>

            <div className="dashboard-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Chi Sono (About)</h2>
                    <button className="btn-success" onClick={() => handleSave('about')}>Salva Chi Sono</button>
                </div>
                <div className="admin-form" style={{ marginTop: '1rem', maxWidth: '100%' }}>
                    <div className="form-group">
                        <label>Nome Completo</label>
                        <input
                            value={localContent.about.name}
                            onChange={(e) => handleChange('about', 'name', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Sottotitolo / Ruolo</label>
                        <input
                            value={localContent.about.subtitle}
                            onChange={(e) => handleChange('about', 'subtitle', e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Bio Paragrafo 1</label>
                        <textarea
                            value={localContent.about.bio1}
                            onChange={(e) => handleChange('about', 'bio1', e.target.value)}
                            rows="4"
                        />
                    </div>
                    <div className="form-group">
                        <label>Bio Paragrafo 2</label>
                        <textarea
                            value={localContent.about.bio2}
                            onChange={(e) => handleChange('about', 'bio2', e.target.value)}
                            rows="4"
                        />
                    </div>
                </div>
            </div>

            {message && (
                <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    background: '#2ecc71',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    animation: 'fadeIn 0.3s ease'
                }}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default ContentEditor;
