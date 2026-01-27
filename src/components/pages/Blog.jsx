import React from 'react';
import './Blog.css';

const articles = [
    {
        id: 1,
        title: "Gestire l'ansia nel quotidiano",
        excerpt: "Piccole strategie pratiche per non farsi sopraffare dallo stress di ogni giorno.",
        date: "26 Gennaio 2024",
        category: "Benessere",
        imageColor: "#B2C29D"
    },
    {
        id: 2,
        title: "L'importanza del sonno",
        excerpt: "Come migliorare la qualità del riposo per vivere meglio e più sereni.",
        date: "20 Gennaio 2024",
        category: "Salute",
        imageColor: "#A4B6C1"
    },
    {
        id: 3,
        title: "Ricominciare da sé",
        excerpt: "Imparare ad ascoltarsi è il primo passo per costruire relazioni sane.",
        date: "15 Gennaio 2024",
        category: "Crescita",
        imageColor: "#E8E4D9"
    }
];

const Blog = () => {
    return (
        <div className="blog-page section-padding">
            <div className="container">
                <h1 className="text-center section-title">Pillole di Benessere</h1>
                <p className="text-center section-text">Approfondimenti e consigli per la tua salute mentale.</p>

                <div className="articles-grid">
                    {articles.map(article => (
                        <article key={article.id} className="article-card">
                            <div className="article-image" style={{ backgroundColor: article.imageColor }}></div>
                            <div className="article-content">
                                <span className="article-category">{article.category}</span>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <div className="article-footer">
                                    <span className="article-date">{article.date}</span>
                                    <button className="btn-link">Leggi tutto</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
