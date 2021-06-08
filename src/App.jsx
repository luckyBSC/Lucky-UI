import { useEffect } from 'react';
import './App.scss';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <Header />
            <LandingPage />
            <Footer />
        </>
    );
}

export default App;
