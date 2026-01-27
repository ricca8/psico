import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: "Quanto dura una seduta?",
        answer: "Ogni seduta ha una durata di 50 minuti, sia in studio che online."
    },
    {
        question: "Qual è il costo di un incontro?",
        answer: "Il primo colloquio conoscitivo ha un costo ridotto. Le sedute successive hanno un costo di 80€ in studio e 70€ online."
    },
    {
        question: "Come posso pagare?",
        answer: "Accetto pagamenti tramite bonifico bancario, carte di credito e contanti (solo in studio). Per le sedute online, il pagamento è richiesto anticipatamente."
    },
    {
        question: "Cosa succede se devo cancellare l'appuntamento?",
        answer: "È possibile cancellare o spostare l'appuntamento con almeno 24 ore di preavviso senza costi aggiuntivi."
    },
    {
        question: "Come funziona la terapia online?",
        answer: "La terapia online si svolge tramite videochiamata su piattaforma sicura. Riceverai un link via email prima dell'appuntamento."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page section-padding">
            <div className="container faq-container">
                <h1 className="text-center section-title">Domande Frequenti</h1>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </button>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
