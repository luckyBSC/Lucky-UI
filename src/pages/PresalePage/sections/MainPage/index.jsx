import './styles.scss';
import React, { useEffect, useState } from "react";
import { ReactComponent as MainLogoBG } from './../../../../assets/images/svg/MainLogoBG.svg';
import { ReactComponent as JackpotDraw } from './../../../../assets/images/svg/Jackpot Draw.svg';
import { ReactComponent as LuckyDraw } from './../../../../assets/images/svg/Lucky Draw.svg';
import { ReactComponent as Dots } from './../../../../assets/images/svg/Dots.svg';
import { ReactComponent as Coins } from './../../../../assets/images/svg/Coins.svg';
import WhiteSquare from './../../../../assets/images/svg/WhiteSquare.svg';
import Graphics from './../../../../assets/images/svg/Graphics.svg';

import MainLogo from './../../../../assets/images/MainLogo.png';


import {approveBUSD, getBUSDApprovalBalance, depositBUSD, isWhitelisted} from '../../../../web3/web3';


const MainPage = () => {
    const [luckyDrawAmount, setLuckyDrawAmount]  = useState(1);
    const [jackpotAmount, setJackpotAmount]  = useState(1);
    const [totalWinnings, setTotalWinnings]  = useState(1);
    const [BUSDAllowance, setBUSDAllowance] = useState(0);
    const [walletWhitelisted, setWalletWhitelisted] = useState(0);

    function goToBuyLink() {
        window.location.assign('https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    }

    async function checkAllowance() {
        return await new Promise(resolve => {
            const interval = setInterval(() => {
              setBUSDAllowance(getBUSDApprovalBalance());
            }, 10000);
          });
    }


    useEffect(() => {
        
        async function load() {
            setBUSDAllowance(await getBUSDApprovalBalance());
            setWalletWhitelisted(await isWhitelisted());
            await checkAllowance();
            
        }
        load()
    }, []);

    return (
        <section className='main_page'>
            {/* <img src={BGTop} alt="BG Top" /> */}
            <div className='container'>
                <div className='split_box_wrap'>
                    <div className='split_box contents_wrap'>
                        {/* <h1
                            className='all_uppercase main_head'
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='500'>
                            <div>Lucky</div>
                            Decentralized Lotteries
                        </h1>
                        <p
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='700'>
                            The premier decentralized lottery token on the Binance Smart Chain network paying out BUSD directly. Just buy, hold, and win.
                        </p> */}
                        {/* <div className='buttons_wrap '>
                            <button
                                
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='800'>
                                BUY TOKENS
                            </button>
                            <button
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='900'>
                                HOW IT WORKS
                            </button>
                        </div> */}
                    </div>
                    {/* <div
                        className='split_box image_box'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='800'>
                        <MainLogoBG />
                        <img
                            src={MainLogo}
                            alt='MainLogo'
                            className='main_logo'
                        />
                    </div> */}
                </div>
                {/* <div className='split_box_wrap'>
                    <Dots className='dots' />
                    <div
                        className='split_box card'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='800'>
                        <LuckyDraw />
                        <div className='main_head'>LUCKY DRAW</div>
                        <div className='value'>{luckyDrawAmount} / 888 BUSD</div>
                    </div>
                    <div
                        className='split_box card'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='1000'>
                        <JackpotDraw />
                        <div className='main_head'>JACKPOT DRAW</div>
                        <div className='value'>{jackpotAmount} / 88,888 BUSD</div>
                    </div>
                </div> */}
                <div className='flex_wrap'>
                    <Coins
                        className='coins'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='1800'
                    />
                    <img
                        src={WhiteSquare}
                        alt=''
                        className='w_square'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='1600'
                    />

                    <div
                        className='total_distributed card card_bradius'
                        data-aos='fade-up'
                        data-aos-offset='-120'
                        data-aos-duration='900'>
                        <div className='main_head'>Lucky Presale: 
                            {walletWhitelisted ?
                                <div>You are whitelisted</div>
                                :
                                <div>Not Whitelisted</div>
                            }
                        </div>
                        <p
                            className="presale-text"
                            data-aos='fade-up'
                            data-aos-offset='-120'
                            data-aos-duration='700'>
                            To use: <br></br>
                            <br></br>
                            1. Click approve to allow the presale contract to transfer up to 250 BUSD <br></br>
                            <br></br>
                            2. Click deposit to transfer your BUSD to the contract.
                        </p>
                        {BUSDAllowance < 250 * 10**18 ? 
                            <button onClick={() => approveBUSD()} className='value button-click'>Approve BUSD</button>
                            : 
                            <button onClick={() => depositBUSD()} className='value button-click'>Deposit BUSD</button>
                        }
                    </div>
                    <img
                        src={Graphics}
                        alt=''
                        className='graphics'
                        data-aos='fade-right'
                        data-aos-offset='0'
                        data-aos-duration='1600'
                    />
                </div>
            </div>
        </section>
    );
};

export default MainPage;
