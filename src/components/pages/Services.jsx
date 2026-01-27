import React from 'react';
import { User, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page section-padding">
            <div className="container">
                <h1 className="text-center section-title">I Miei Percorsi</h1>
                <p className="text-center section-text">
                    Soluzioni personalizzate per rispondere ai tuoi bisogni specifici.
                </p>

                <div className="services-list">
                    <div className="service-item">
                        <div className="service-icon-box">
                            <User size={40} />
                        </div>
                        <div className="service-details">
                            <h2>Terapia Individuale</h2>
                            <p>
                                Un percorso volto ad affrontare ansia, depressione, difficoltà relazionali
                                o momenti di crisi. Insieme esploreremo le cause del malessere per trovare
                                nuove strategie di adattamento.
                            </p>
                            <ul>
                                <li>Gestione dell'ansia e attacchi di panico</li>
                                <li>Elaborazione del lutto</li>
                                <li>Autostima e crescita personale</li>
                            </ul>
                            <Link to="/booking" className="btn-outline">Prenota</Link>
                        </div>
                    </div>

                    <div className="service-item reverse">
                        <div className="service-icon-box">
                            <Globe size={40} />
                        </div>
                        <div className="service-details">
                            <h2>Terapia Online</h2>
                            <p>
                                La stessa efficacia della terapia in studio, ma con la flessibilità
                                di poterla svolgere ovunque tu sia. Ideale per chi viaggia spesso o
                                vive lontano dallo studio.
                            </p>
                            <ul>
                                <li>Videochiamata protetta</li>
                                <li>Flessibilità oraria</li>
                                <li>Comfort del proprio ambiente</li>
                            </ul>
                            <Link to="/booking" className="btn-outline">Prenota</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
