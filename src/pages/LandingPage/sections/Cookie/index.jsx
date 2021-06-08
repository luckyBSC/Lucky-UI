import './styles.scss';
import { useCookies } from 'react-cookie';

const Cookie = () => {
    const [cookies, setCookie] = useCookies(['cookie-consent']);
    const acceptHandler = () => {
        setCookie('cookie-consent', 'accepted');
    };
    return (
        <>
            {cookies['cookie-consent'] !== 'accepted' && (
                <div
                    className='cookie'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='800'>
                    By using this site you agree to our
                    <strong>
                        {' '}
                        Cookie Policy <span onClick={acceptHandler}>✖</span>
                    </strong>
                </div>
            )}
        </>
    );
};

export default Cookie;
