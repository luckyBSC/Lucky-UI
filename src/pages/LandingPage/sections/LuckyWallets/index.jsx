import './styles.scss';
import LuckyWalletsLogo from './../../../../assets/images/Lucky Wallets Logo.png';
import Holders from './../../../../assets/images/svg/Holders.svg';
import MarkeCap from './../../../../assets/images/svg/MarkeCap.svg';
import Price from './../../../../assets/images/svg/Price.svg';
import { ReactComponent as BuyNow } from './../../../../assets/images/svg/Buy Now.svg';
import { ReactComponent as Statictics } from './../../../../assets/images/svg/Statictics.svg';
import { ReactComponent as Dots } from './../../../../assets/images/svg/Dots.svg';
import Oval from './../../../../assets/images/svg/Oval.svg';

const listingArray = [
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '88,888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '888 BUSD' },
    { title: 'Werr532srtyhfERT2456tfsww', value: '88,888 BUSD' },
];

const Wallets = () => {
    return (
        <section className='luckyDraw'>
            <div className='container' id='luckyDraw' adjustHeight='-50'>
                <img src={LuckyWalletsLogo} alt='Logo' className='logo' />
                <h1
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='600'>
                    LUCKY WALLETS
                </h1>
                <Dots
                    className='dots'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='1100'
                />
                <div
                    className='card width_100 balance_card'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='700'>
                    <div className='value flex_wrap space_between'>
                        <div>Werr532srtyhfERT2456tfsww</div>
                        <div className='pink_text'>888 BUSD</div>
                    </div>
                </div>

                <div className='flex_wrap width_100'>
                    <img src={Oval} alt='' className='oval' />
                    <div
                        className='listings_wrap card width_100 no_layer'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='800'>
                        <div className='scroll_wrap'>
                            {listingArray.map((el, index) => (
                                <div
                                    key={index}
                                    className='list_item flex_wrap space_between'>
                                    <div>{el.title}</div>
                                    <div className='pink_text'>{el.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex_wrap width_100 blocks_wrap space_between'>
                    <DesignedCard
                        index={1}
                        title={'PRICE'}
                        value={'$0.0000001845'}
                        logo={Price}
                    />
                    <DesignedCard
                        index={2}
                        title={'MARKET CAP'}
                        value={'$2,000,000,000'}
                        logo={MarkeCap}
                    />
                    <DesignedCard
                        index={3}
                        title={'HOLDERS'}
                        value={'110,000'}
                        logo={Holders}
                    />
                </div>
                <div className='button_wrap flex_wrap width_100'>
                    <button
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='500'>
                        <BuyNow />
                        BUY NOW
                    </button>
                    <button
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='700'>
                        <Statictics />
                        HOW TO BUY
                    </button>
                </div>
            </div>
        </section>
    );
};

const DesignedCard = ({ title, value, logo, index }) => {
    return (
        <div
            className='special_card'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-delay={(index + 1) * 50}
            data-aos-duration='700'>
            <div className='bg_square'></div>
            <img src={logo} alt='' />
            <div className='title'>{title}</div>
            <div className='price pink_text'>{value}</div>
        </div>
    );
};
export default Wallets;
