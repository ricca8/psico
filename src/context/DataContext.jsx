import React, { createContext, useState, useContext, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const INITIAL_ARTICLES = [
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

export const DataProvider = ({ children }) => {
    // User State
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('site_user');
        return saved ? JSON.parse(saved) : null;
    });

    // Bookings State
    const [bookings, setBookings] = useState(() => {
        const saved = localStorage.getItem('site_bookings');
        return saved ? JSON.parse(saved) : [];
    });

    // Articles State
    const [articles, setArticles] = useState(() => {
        const saved = localStorage.getItem('site_articles');
        return saved ? JSON.parse(saved) : INITIAL_ARTICLES;
    });

    // Persistence Effects
    useEffect(() => {
        if (user) localStorage.setItem('site_user', JSON.stringify(user));
        else localStorage.removeItem('site_user');
    }, [user]);

    useEffect(() => {
        localStorage.setItem('site_bookings', JSON.stringify(bookings));
    }, [bookings]);

    useEffect(() => {
        localStorage.setItem('site_articles', JSON.stringify(articles));
    }, [articles]);

    // Actions
    const login = (username, password) => {
        // Simple hardcoded auth
        if (username === 'admin' && password === 'admin123') {
            setUser({ name: 'Dr. Rossi', role: 'admin' });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    const addBooking = (booking) => {
        const newBooking = { ...booking, id: Date.now(), status: 'pending', createdAt: new Date().toISOString() };
        setBookings(prev => [newBooking, ...prev]);
        return newBooking;
    };

    const updateBookingStatus = (id, status) => {
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
    };

    const addArticle = (article) => {
        const newArticle = { ...article, id: Date.now() };
        setArticles(prev => [newArticle, ...prev]);
    };

    const deleteArticle = (id) => {
        setArticles(prev => prev.filter(a => a.id !== id));
    };

    // Site Content State
    const [siteContent, setSiteContent] = useState(() => {
        const saved = localStorage.getItem('site_content');
        return saved ? JSON.parse(saved) : {
            home: {
                heroTitle: "Ritrova il tuo equilibrio interiore",
                heroSubtitle: "Percorsi di psicoterapia e sostegno psicologico su misura per te. Un approccio empatico e professionale per il tuo benessere.",
                missionTitle: "La mia Missione",
                missionText: "Accompagnarti nella scoperta di te stesso, offrendoti uno spazio sicuro e privo di giudizio dove poter affrontare le tue paure e valorizzare le tue risorse."
            },
            about: {
                name: "Dr.ssa Giulia Rossi",
                subtitle: "Psicologa Psicoterapeuta",
                bio1: "Credo che ogni persona abbia in sé le risorse per superare i momenti difficili. Il mio compito è aiutarti a ritrovarle. Utilizzo un approccio psicodinamico integrato, che unisce la comprensione profonda delle dinamiche interiori a strumenti pratici per il cambiamento.",
                bio2: "Accolgo i miei pazienti in un ambiente protetto, dove l'ascolto non giudicante è la base per costruire una relazione terapeutica di fiducia."
            }
        };
    });

    useEffect(() => {
        localStorage.setItem('site_content', JSON.stringify(siteContent));
    }, [siteContent]);

    const updateSiteContent = (section, updates) => {
        setSiteContent(prev => ({
            ...prev,
            [section]: { ...prev[section], ...updates }
        }));
    };

    return (
        <DataContext.Provider value={{
            user,
            bookings,
            articles,
            siteContent,
            login,
            logout,
            addBooking,
            updateBookingStatus,
            addArticle,
            deleteArticle,
            cancelBooking,
            updateSiteContent
        }}>
            {children}
        </DataContext.Provider>
    );
};
