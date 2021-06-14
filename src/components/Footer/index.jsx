import { ReactComponent as FB } from './../../assets/images/svg/icons/fb.svg';
import { ReactComponent as Tw } from './../../assets/images/svg/icons/tw.svg';
import { ReactComponent as Dribble } from './../../assets/images/svg/icons/dr.svg';
import { ReactComponent as Clock } from './../../assets/images/svg/icons/clock.svg';
import { ReactComponent as Envelope } from './../../assets/images/svg/icons/envelope.svg';
import { ReactComponent as Language } from './../../assets/images/svg/icons/language.svg';
import { ReactComponent as Location } from './../../assets/images/svg/icons/location.svg';
import { ReactComponent as Phone } from './../../assets/images/svg/icons/phone.svg';
import { ReactComponent as MapMarkerAlt } from './../../assets/images/svg/icons/map-marker-alt.svg';

import './styles.scss';

const Footer = () => {
    return (
        <footer className='container'>
            <div className='social_icons'>
                {/* <a
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'
                    target='_blank'
                    href='https://www.google.com/'
                    rel='noreferrer'>
                    <FB />
                </a> */}
                <a
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='600'
                    target='_blank'
                    href='https://www.twitter.com/BscLucky'
                    rel='noreferrer'>
                    <Tw />
                </a>
                {/* <a
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='800'
                    target='_blank'
                    href='https://www.google.com/'
                    rel='noreferrer'>
                    <Dribble />
                </a> */}
            </div>
            <div
                className='top_wrap'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='900'>
                
                <div className='copyright'>© Copyright 2021</div>
            </div>
            
        </footer>
    );
};

export default Footer;
