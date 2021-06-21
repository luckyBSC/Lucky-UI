import './styles.scss';
import TransactionTAX from './TransactionTAX';
import LuckyDraw from './LuckyDraw';
import DownShade from './../../../../assets/images/svg/DownShade.svg';
import Token1 from './../../../../assets/images/Token1.png';
import Token2 from './../../../../assets/images/Token2.png';
import Token3 from './../../../../assets/images/Token3.png';
import WhiteSquare from './../../../../assets/images/svg/WhiteSquare.svg';
import Coins from './../../../../assets/images/svg/Coins.svg';
import Dots from './../../../../assets/images/svg/Dots.svg';
import OrangeSquare from './../../../../assets/images/svg/OrangeSquare.svg';
import Gradient3 from './../../../../assets/images/Gradient3.png';

const Tokenomics = () => {
    return (
        <section className='tokenomics'>
            <img src={Gradient3} alt='gradeint' className='gradient3' />
            <img
                src={DownShade}
                alt='shade_gradient'
                className='shade_gradient'
            />
            <img
                src={OrangeSquare}
                alt='shade_gradient'
                className='orange_square'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='800'
            />

            <div className='container' id='tokenomics' adjustHeight='40'>
                <img
                    src={WhiteSquare}
                    alt='w_square'
                    className='w_square xs_hidden'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='800'
                />
                <img
                    src={Coins}
                    alt='coins'
                    className='coins xs_hidden'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='800'
                />
                <img
                    src={Dots}
                    alt='dots'
                    className='dots'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='1500'
                />
                <h1
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='500'>
                    TOKENOMICS
                </h1>
                <div className='flex_wrap width_100 space_between main_cards'>
                    <div
                        className='card card_bradius'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='600'>
                        <img src={Token1} alt='token logo' />
                        <div className='title'>30% BURNED</div>
                        <p>
                            Burning part of the supply makes the token deflationary as yield goes to the burn address.
                        </p>
                    </div>
                    <div
                        className='card card_bradius'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='700'>
                        <img src={Token2} alt='token logo' />
                        <div className='title'>40% PRESALE</div>
                        <p>
                            500 presale participants were allocated
                            711,111,111,111 tokens for $250 each with funds used
                            for liquidity and marketing.
                        </p>
                    </div>
                    <div
                        className='card card_bradius'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='800'>
                        <img src={Token3} alt='token logo' />
                        <div className='title'>30% LIQUIDITY</div>
                        <p>
                            87,500 BUSD is paired with 266,666,666,666,666
                            LUCKY for an initial market cap of approximately
                            $204,000
                        </p>
                    </div>
                </div>
                <TransactionTAX />
                <LuckyDraw />
            </div>
        </section>
    );
};

export default Tokenomics;
