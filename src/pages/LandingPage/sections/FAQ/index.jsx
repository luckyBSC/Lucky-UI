import './styles.scss';
import { useState } from 'react';
import DownShade from './../../../../assets/images/svg/DownShade.svg';
import FAQIcon from './../../../../assets/images/FAQIcon.png';
import WhiteSquare from './../../../../assets/images/svg/WhiteSquare.svg';
import Coins from './../../../../assets/images/svg/Coins.svg';

const faqData = [
    {
        question: 'Why you should hire a professional painter ?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quo sunt dicta explicabo labore quod exercitationem eum rem, voluptatibus ea autem magnam veniam consequatur. Doloribus mollitia ipsa nobis corporis sapiente.',
    },
    {
        question: 'What is the contract ID?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quo sunt dicta explicabo labore quod exercitationem eum rem, voluptatibus ea autem magnam veniam consequatur. Doloribus mollitia ipsa nobis corporis sapiente.',
    },
    {
        question: 'What is the token distribution?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quo sunt dicta explicabo labore quod exercitationem eum rem, voluptatibus ea autem magnam veniam consequatur. Doloribus mollitia ipsa nobis corporis sapiente.',
    },
    {
        question: 'What is the token distribution?',
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quo sunt dicta explicabo labore quod exercitationem eum rem, voluptatibus ea autem magnam veniam consequatur. Doloribus mollitia ipsa nobis corporis sapiente.',
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
                    FREQUENTLY ASKED QUESTIONS
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
