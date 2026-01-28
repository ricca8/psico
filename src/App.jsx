import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Booking from './components/pages/Booking';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import FAQ from './components/pages/FAQ';
import './App.css';

import { DataProvider } from './context/DataContext';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import CancelBooking from './components/pages/CancelBooking';

function App() {
    return (
        <DataProvider>
            <Router>
                <div className="app-wrapper">
                    <Header />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/booking" element={<Booking />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/faq" element={<FAQ />} />

                            {/* Admin Routes */}
                            <Route path="/login" element={<Login />} />
                            <Route path="/dashboard" element={<Dashboard />} />

                            {/* Functional Routes */}
                            <Route path="/cancel-booking/:id" element={<CancelBooking />} />

                            <Route path="*" element={<div className="section-padding text-center"><h2>Pagina non trovata</h2></div>} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;
