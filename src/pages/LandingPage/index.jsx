import './styles.scss';
import MainPage from './sections/MainPage';
import LuckyWallets from './sections/LuckyWallets';
import Tokenomics from './sections/Tokenomics';
import FAQ from './sections/FAQ';
import Cookie from './sections/Cookie';
import BGTop from './../../assets/images/BGTop.png';
import SecondGradient from './../../assets/images/SecondGradient.svg';
import Gradient2 from './../../assets/images/Gradient2.png';

const LandingPage = () => {
    return (
        <main>
            <img
                src={BGTop}
                alt='bg_top'
                className='bg_top'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='300'
            />
            <img
                src={SecondGradient}
                alt='gradeint'
                className='second_gradient'
            />
            <img src={Gradient2} alt='gradeint' className='gradient2' />
            <Cookie />
            <MainPage />
            <LuckyWallets />
            <Tokenomics />
            <FAQ />
        </main>
    );
};

export default LandingPage;
