import { ReactComponent as StraightLine } from './../../../../assets/images/svg/Lines/Straight.svg';
import Oval from './../../../../assets/images/svg/Oval.svg';
import RedSquare from './../../../../assets/images/svg/RedSquare.svg';

const luckyDrawTexts = [
    '4% of transactions are taxed and added to liquidity',
    'Lucky draw liquidity value reaches 1,500 BUSD',
    'LP is unwrapped',
    'LUCKY from LP is burnt',
    '888 BUSD prize distributed',
    'Remaining BUSD added to the jackpot draw',
];
const LuckyDraw = () => {
    return (
        <div className='lucky_draw_wrap flex_wrap width_100 column'>
            <img
                src={RedSquare}
                alt='RedSquare'
                className='red_square'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='1200'
            />
            <div
                className='main_head'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='800'>
                LUCKY DRAW
            </div>
            <StraightLine />
            <img src={Oval} alt='' className='oval' />
            <div className='cards_wrap'>
                {luckyDrawTexts.map((el, index) => (
                    <LDCard key={index} index={index} text={el} />
                ))}
            </div>
        </div>
    );
};

const LDCard = ({ text, index }) => {
    return (
        <div
            className='ld_card'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-delay={index + 1 * 50}
            data-aos-duration='500'>
            <div>{text}</div>
        </div>
    );
};

export default LuckyDraw;
