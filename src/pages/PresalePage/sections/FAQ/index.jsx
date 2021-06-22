import './styles.scss';
import { useState } from 'react';
import DownShade from './../../../../assets/images/svg/DownShade.svg';
import FAQIcon from './../../../../assets/images/FAQIcon.png';
import WhiteSquare from './../../../../assets/images/svg/WhiteSquare.svg';
import Coins from './../../../../assets/images/svg/Coins.svg';

const faqData = [
    {
        question: 'How does the presale work?',
        answer: 'Presale is $250 BUSD for 711,111,111,111 tokens or 0.08% of supply. Contribute 250 BUSD on this page and you will receive tokens shortly after launch. Tokens have a vesting schedule.',
    },
    {
        question: 'When is launch?',
        answer: 'Wednesday at a time TBD. Please be sure to keep an eye on the telegram channel https://t.me/luckytokenbsc for announcements.',
    },
    {
        question: 'What is vesting?',
        answer: 'Vesting is 15% unlocked at launch, then after 24 hours 5% unlocked per day thereafter. We will have a means for you to check how many you can sell.',
    },
    {
        question: 'What is initial marketcap?',
        answer: 'Initial marketcap is ~204k. Fully diluted the marketcap is ~291k. The difference reflects that 30% of supply will be burned.',
    },
    {
        question: 'What is presale price?',
        answer: '$0.000000000351563',
    },
    {
        question: 'What is listing price?',
        answer: '$0.000000000328125',
    },
    {
        question: 'What is initial liquidity?',
        answer: '87,500 BUSD will be paired vs 30% of LUCKY supply',
    },
];

const FAQ = () => {
    return (
        <section
            className='FAQ'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='200'>
            <img
                src={DownShade}
                alt='shade_gradient'
                className='shade_gradient'
            />
            <div className='container' id='FAQ' adjustHeight='-50'>
                <img
                    src={WhiteSquare}
                    alt='w_square'
                    className='w_square'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='800'
                />
                <img
                    src={Coins}
                    alt='coins'
                    className='coins'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='800'
                />
                <img src={FAQIcon} alt='faq icon' className='faq_icon' />
                <h1
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    PRESALE INFO
                </h1>
                <div className='flex_wrap width_100 column'>
                    {faqData.map((el, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            question={el.question}
                            answer={el.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div
            className='width_100 faq_item margin_bottom_40'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-delay={index + 1 * 50}
            data-aos-duration='500'>
            <div
                className={'card width_100 no_layer'}
                onClick={() => setOpen(!isOpen)}>
                <div>{question}</div>
                <div className='pink_text'>{'>'}</div>
            </div>
            <div className={'content_wrap' + (isOpen ? ' active' : '')}>
                {isOpen && <p>{answer}</p>}
            </div>
        </div>
    );
};
export default FAQ;
