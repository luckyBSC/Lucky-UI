import { useEffect } from 'react';
import './App.scss';
import LandingPage from './pages/LandingPage';
import PresalePage from './pages/PresalePage';
import Header from './components/Header';
import Footer from './components/Footer';
import 'aos/dist/aos.css';
import AOS from 'aos';

import { connectToWeb3 } from './web3/web3.js';

// import Web3 from "web3";
// import Web3Modal from "web3modal";



function App() {
    let page = window.location.href.split('/')[3];
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        const loadWeb3 = async () => {
            await connectToWeb3();
        }

        loadWeb3()
    }, []);

    return (
        <>
            <Header page={page}/>
            {page === 'presale' ?
                <PresalePage />
                :
                <LandingPage />
            }
            <Footer />
        </>
    );
}

export default App;
