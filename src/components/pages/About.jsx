import React from 'react';
import { BookOpen, Award, UserCheck } from 'lucide-react';
import { useData } from '../../context/DataContext';
import './About.css';

const About = () => {
    const { siteContent } = useData();
    const { name, subtitle, bio1, bio2 } = siteContent.about;

    return (
        <div className="about-page section-padding">
            <div className="container">
                <div className="about-header text-center">
                    <h1>Chi Sono</h1>
                    <p className="subtitle">{name} - {subtitle}</p>
                </div>

                <div className="about-content">
                    <div className="about-image">
                        {/* Placeholder for professional portrait */}
                        <div className="portrait-placeholder"></div>
                    </div>
                    <div className="about-text">
                        <h2>Il mio approccio</h2>
                        <p>
                            {bio1}
                        </p>
                        <p>
                            {bio2}
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
