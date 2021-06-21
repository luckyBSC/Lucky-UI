import RedBox from './../../../../assets/images/svg/Lines/RedBox.svg';
import GreenBox from './../../../../assets/images/svg/Lines/GreenBox.svg';
import YellowBox from './../../../../assets/images/svg/Lines/YellowBox.svg';
import { ReactComponent as StraightLine } from './../../../../assets/images/svg/Lines/Straight.svg';
import RedCross from './../../../../assets/images/svg/RedCross.svg';
import GreenCross from './../../../../assets/images/svg/GreenCross.svg';
import RedSquare from './../../../../assets/images/svg/RedSquare.svg';

const TransactionTAX = () => {
    return (
        <div className='transaction_tax_wrap flex_wrap width_100 column'>
            <img
                src={RedCross}
                alt='RedCross'
                className='red_cross'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='800'
            />
            <img
                src={GreenCross}
                alt='GreenCross'
                className='green_cross'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='900'
            />
            <img
                src={RedSquare}
                alt='RedSquare'
                className='red_square'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='1200'
            />
            <div
                className='card no_layer top_head'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='500'>
                <div className='main_head'>8% TRANSACTION TAX</div>
            </div>
            <div className='boxes_wrap'>
                <div
                    className='card no_layer second_box card_bradius'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='600'>
                    <img src={RedBox} alt='Box' />
                    <div className='title pink_text'>2%</div>
                    <p>Reflection yield to existing holders</p>
                </div>
                <div
                    className='card no_layer second_box card_bradius'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='700'>
                    <img src={GreenBox} alt='Box' />
                    <div className='title pink_text'>4%</div>
                    <p>Contributed to the Lotteries</p>
                    <StraightLine />
                </div>
                <div
                    className='card no_layer second_box card_bradius'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='800'>
                    <img src={YellowBox} alt='Box' />
                    <div className='title pink_text'>2%</div>
                    <p>To liquidity to form a higher base</p>
                </div>
            </div>
        </div>
    );
};

export default TransactionTAX;
