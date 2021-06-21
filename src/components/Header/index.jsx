import { useState, useEffect } from 'react';
import PopUp from './../PopUp';
import StatisticsPop from './../StatisticsPop';
import useCheckMobileScreen from './../../shared/useCheckMobileScreen';
import './styles.scss';
import {connectWallet} from '../../web3/web3';

const Header = (props = {}) => {
    const {
      page
    } = props;

    const isMobile = useCheckMobileScreen();
    const [showPop, setShowPop] = useState(false);
    const [sticked, setSticked] = useState(false);
    const [clickedTopic, setClickedTopic] = useState('');
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [userWallet, setUserWallet] = useState(null);

    useEffect(() => {
        function stickHeaderHandler(e) {
            onScroll();
            if (e.currentTarget.scrollY >= 5) {
                setSticked(true);
            } else if (e.currentTarget.scrollY < 5) {
                setSticked(false);
            }
            
        }
        async function load() {
            setUserWallet(await connectWallet());
        }
        load()
        window.addEventListener('scroll', stickHeaderHandler);

        return () => {
            window.removeEventListener('scroll', stickHeaderHandler);
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setHamburgerClicked(false);
        if (showPop) {
            setClickedTopic('statistics');
            if (document.getElementsByTagName('main'))
                document.getElementsByTagName('main')[0].classList.add('blur');
        } else {
            onScroll();
            if (document.getElementsByTagName('main'))
                document
                    .getElementsByTagName('main')[0]
                    .classList.remove('blur');
        }
        // eslint-disable-next-line
    }, [showPop]);

    const anchorLinkClickHandler = (e) => {
        e.preventDefault();
        setHamburgerClicked(false);
        const element = document.getElementById(
            e.currentTarget.hash.replace('#', '')
        );
        if (!element) return;
        const adjustHeight = +element.getAttribute('adjustHeight') || 0;
        setClickedTopic(e.currentTarget.hash.replace('#', ''));
        const offsetAdjust = isMobile
            ? element.offsetParent.offsetTop + adjustHeight
            : element.offsetParent.offsetTop + adjustHeight;
        if (element)
            window.scrollTo({
                top: offsetAdjust,
                behavior: 'smooth',
            });
    };

    const isElementInVP = (el) => {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < window.pageYOffset + window.innerHeight &&
            left < window.pageXOffset + window.innerWidth &&
            top + height > window.pageYOffset &&
            left + width > window.pageXOffset
        );
    };

    const elementsToCheck = ['FAQ', 'luckyDraw', 'tokenomics'];
    const onScroll = (e) => {
        let inViewItem = '';
        elementsToCheck.forEach((el) => {
            const thisElement = document.getElementById(el);
            if (thisElement && isElementInVP(thisElement)) {
                inViewItem = el;
            }
        });

        setClickedTopic(inViewItem);
    };

    return (
        <>
            <PopUp visible={showPop} onClose={() => setShowPop(false)}>
                <StatisticsPop />
            </PopUp>
            <header
                className={sticked ? ' sticked' : ''}
                data-aos='fade-down'
                data-aos-offset='0'
                data-aos-duration='500'>
                <div className='container'>
                    <div
                        className={
                            `${page === 'presale' ? 'invisible ' : ''}` +
                            'btn ' +
                            (hamburgerClicked ? 'active' : 'not-active')
                        }
                        onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div
                        className={
                            'links_wrap' + (hamburgerClicked ? ' active' : '')
                        }>
                        <a
                            href='#luckyDraw'
                            onClick={anchorLinkClickHandler}
                            className={
                              `${page === 'presale' ? 'invisible ' : ''}` +
                                'link' +
                                (clickedTopic === 'luckyDraw' ? ' active' : '')
                            }>
                            Lucky Draw
                        </a>
                        <div
                            onClick={(e) => {
                                setShowPop(true);
                                setHamburgerClicked(false);
                            }}
                            className={
                              `${page === 'presale' ? 'invisible ' : ''}` +
                                'link' +
                                (clickedTopic === 'statistics' ? ' active' : '')
                            }>
                            Statistics
                        </div>
                        <a
                            href='#tokenomics'
                            onClick={anchorLinkClickHandler}
                            className={
<<<<<<< HEAD
                                `${page === 'presale' ? 'invisible ' : ''}` +
=======
                              `${page === 'presale' ? 'invisible ' : ''}` +
>>>>>>> 7915396085ea1e5a46ca0b8e3d0f6a4917d80434
                                'link' +
                                (clickedTopic === 'tokenomics' ? ' active' : '')
                            }>
                            Tokenomics
                        </a>
                        <a
                            href='#FAQ'
                            onClick={anchorLinkClickHandler}
                            className={
<<<<<<< HEAD
                                `${page === 'presale' ? 'invisible ' : ''}` +
=======
                              `${page === 'presale' ? 'invisible ' : ''}` +
>>>>>>> 7915396085ea1e5a46ca0b8e3d0f6a4917d80434
                                'link' +
                                (clickedTopic === 'FAQ' ? ' active' : '')
                            }>
                            FAQ
                        </a>
                    </div>
                    {userWallet && userWallet.length > 0 ?
                        <button onClick={() => connectWallet()}>...{userWallet[0].substr(userWallet[0].length - 8)}</button>
                        :
                        <button onClick={() => connectWallet()}>Connect Wallet</button>
                    }
                </div>
            </header>
        </>
    );
};

export default Header;
