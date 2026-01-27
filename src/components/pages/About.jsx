import React from 'react';
import { BookOpen, Award, UserCheck } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page section-padding">
            <div className="container">
                <div className="about-header text-center">
                    <h1>Chi Sono</h1>
                    <p className="subtitle">Dr.ssa Giulia Rossi</p>
                </div>

                <div className="about-content">
                    <div className="about-image">
                        {/* Placeholder for professional portrait */}
                        <div className="portrait-placeholder"></div>
                    </div>
                    <div className="about-text">
                        <h2>Il mio approccio</h2>
                        <p>
                            Credo che ogni persona abbia in sé le risorse per superare i momenti difficili.
                            Il mio compito è aiutarti a ritrovarle. Utilizzo un approccio psicodinamico integrato,
                            che unisce la comprensione profonda delle dinamiche interiori a strumenti pratici per il cambiamento.
                        </p>
                        <p>
                            Accolgo i miei pazienti in un ambiente protetto, dove l'ascolto non giudicante è la base
                            per costruire una relazione terapeutica di fiducia.
                        </p>

                        <div className="cv-highlights">
                            <div className="cv-item">
                                <BookOpen className="cv-icon" />
                                <div>
                                    <h4>Formazione</h4>
                                    <p>Laurea in Psicologia Clinica presso Università degli Studi di Milano.</p>
                                </div>
                            </div>
                            <div className="cv-item">
                                <Award className="cv-icon" />
                                <div>
                                    <h4>Specializzazione</h4>
                                    <p>Psicoterapia Cognitivo-Comportamentale.</p>
                                </div>
                            </div>
                            <div className="cv-item">
                                <UserCheck className="cv-icon" />
                                <div>
                                    <h4>Albo</h4>
                                    <p>Iscritta all'Albo degli Psicologi della Lombardia n. 12345.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
