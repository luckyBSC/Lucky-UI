import './styles.scss';
import { useState } from 'react';
import DownShade from './../../../../assets/images/svg/DownShade.svg';
import FAQIcon from './../../../../assets/images/FAQIcon.png';
import WhiteSquare from './../../../../assets/images/svg/WhiteSquare.svg';
import Coins from './../../../../assets/images/svg/Coins.svg';

const faqData = [
    {
        question: 'How do I buy?',
        answer: 'A guide will be updated here soon.',
    },
    {
        question: 'How do I participate in the lottery?',
        answer: 'The only thing you have to do is buy tokens and HODL. Whenever a transfer occurs the contract collects the tax and checks lottery balance.  If the balance is over the payout threshold the contract then picks a winner and sends that wallet BUSD.  Every 888,888 LUCKY gives you a ticket and tickets never expire. The more tickets you buy, the better your odds of winning.',
    },
    {
        question: 'Are funds SAFU?',
        answer: 'The lottery is 100% decentralized meaning there is no handling of funds by any person at any point in time.  Everything is handled by the smart contract. Ownership of the contract is renounced. Liquidity is locked for 100 years.  The presale was split across 500 wallets with no one wallet getting more than 0.08%. While any token is a risk you can be certain with LUCKY that there will be no new tokens minted, no large whales dumping on you, no team tokens, and liquidity will be available on pancakeswap.',
    },
    {
        question: 'What is the contract address?',
        answer: 'The contract address will be released upon launch. Please watch the telegram channel for further details at https://t.me/luckytokenbsc',
    },
    {
        question: 'Is pancakeswap liquidity locked?',
        answer: 'Yes, liquidity will be locked for 100 years at launch. After launch this will be updated with a verification link.',
    },
    {
        question: 'Is contract ownership renounced?',
        answer: 'Yes, ahead of launch the contract ownership will be renounced. After launch this will be updated with BSCscan link where you will be able to verify this.',
    },
    {
        question: 'What was the presale?',
        answer: '500 wallets were given allocations of 711,111,111,111 tokens in exchange for 250 BUSD. This presale enabled the initial liquidity pool to be established on pancakeswap and provided funds for initial marketing. The presale was designed to minimize whales by limiting each allocation to 0.08% of supply.  Presale allocations have a vesting schedule of 10% unlocked at TGE and 5% unlocked per day thereafter.',
    },
    {
        question: 'Why is the team anon?',
        answer: 'We wanted to keep our privacy. We are coordinating initial marketing to help with liftoff, but intend this token to be a community driven project. The team is participating in the presale alongside everyone else.',
    },
    {
        question: 'Why can’t I see my token balance in my wallet?',
        answer: 'You need to add the token as a custom token to your wallet. Click on add token in metamask and add the token contract address. The other fields should populate automatically and when you click add you should now be able to see your balance.',
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
