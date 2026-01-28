import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import '../../App.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { login } = useData();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (login(credentials.username, credentials.password)) {
            navigate('/dashboard');
        } else {
            setError('Credenziali non valide');
        }
    };

    return (
        <div className="section-padding container" style={{ maxWidth: '400px', marginTop: '50px' }}>
            <h1 className="text-center">Area Riservata</h1>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Accedi</button>
            </form>
        </div>
    );
};

export default Login;
