import React from 'react';
import { ArrowRight, Heart, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Ritrova il tuo equilibrio interiore</h1>
                    <p className="hero-subtitle">
                        Percorsi di psicoterapia e sostegno psicologico su misura per te.
                        Un approccio empatico e professionale per il tuo benessere.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/booking" className="btn-hero">Inizia il tuo percorso</Link>
                        <Link to="/about" className="btn-outline">Scopri di più</Link>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Placeholder for professional photo using a nature/calm abstract image or placeholder */}
                    <div className="placeholder-img" style={{ background: 'linear-gradient(to bottom right, var(--color-sage-light), var(--color-beige))' }}></div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission section-padding">
                <div className="container">
                    <h2 className="section-title">La mia Missione</h2>
                    <p className="section-text text-center">
                        Accompagnarti nella scoperta di te stesso, offrendoti uno spazio sicuro e privo di giudizio
                        dove poter affrontare le tue paure e valorizzare le tue risorse.
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <Brain size={40} className="feature-icon" />
                            <h3>Ascolto Empatico</h3>
                            <p>Uno spazio dove la tua voce è al centro dell'attenzione.</p>
                        </div>
                        <div className="feature-card">
                            <Heart size={40} className="feature-icon" />
                            <h3>Supporto Personalizzato</h3>
                            <p>Ogni percorso è unico, come la persona che lo intraprende.</p>
                        </div>
                        <div className="feature-card">
                            <Users size={40} className="feature-icon" />
                            <h3>Crescita Personale</h3>
                            <p>Strumenti pratici per affrontare le sfide quotidiane.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section-padding">
                <div className="container">
                    <h2>Pronto a fare il primo passo?</h2>
                    <p>La prima consulenza conoscitiva è il momento ideale per capire se possiamo lavorare insieme.</p>
                    <Link to="/booking" className="btn-white">Prenota un appuntamento <ArrowRight size={20} /></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
