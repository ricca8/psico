import React from 'react';
import { useData } from '../../context/DataContext';
import './Blog.css';

const Blog = () => {
    const { articles } = useData();

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
