import './styles.scss';
import React, { useEffect, useState } from "react";
import LuckyWalletsLogo from './../../../../assets/images/Lucky Wallets Logo.png';
import Holders from './../../../../assets/images/svg/Holders.svg';
import MarkeCap from './../../../../assets/images/svg/MarkeCap.svg';
import Price from './../../../../assets/images/svg/Price.svg';
import { ReactComponent as BuyNow } from './../../../../assets/images/svg/Buy Now.svg';
import { ReactComponent as Statictics } from './../../../../assets/images/svg/Statictics.svg';
import { ReactComponent as Dots } from './../../../../assets/images/svg/Dots.svg';
import Oval from './../../../../assets/images/svg/Oval.svg';

import {getWinners} from '../../../../web3/web3';

let listingArray = [
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
    const [pastWinners, setPastWinners]  = useState([]);

    function goToBuyLink() {
        window.location.assign('https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    }

    useEffect(() => {
        
        async function load() {
            // setPastWinners(await getWinners());
            listingArray = pastWinners;
            console.log(listingArray);
        }
        load()
    }, []);

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
                    {pastWinners.length > 0 ?
                        <div className='value flex_wrap space_between'>
                            <div>{pastWinners[0].title}</div>
                            <div className='pink_text'>{pastWinners[0].value} BUSD</div>
                        </div>
                        :
                        <div className='value flex_wrap space_between'>
                            <div>Most Recent Winner: </div>
                            <div className='pink_text'>NO WINNERS YET</div>
                        </div>
                    }
                </div>

                <div className='flex_wrap width_100'>
                    <img src={Oval} alt='' className='oval' />
                    <div
                        className='listings_wrap card width_100 no_layer'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='800'>
                        <div className='scroll_wrap'>
                            {pastWinners.map((el, index) => (
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
                        value={'$0.-----'}
                        logo={Price}
                    />
                    <DesignedCard
                        index={2}
                        title={'MARKET CAP'}
                        value={'$-----'}
                        logo={MarkeCap}
                    />
                    <DesignedCard
                        index={3}
                        title={'HOLDERS'}
                        value={'-----'}
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
