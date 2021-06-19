import { useState, useEffect } from 'react';
import './styles.scss';
import {getUserBalance, getUserTickets, getMoveablePresaleAmount} from '../../web3/web3';

const StatisticsPop = () => {
    const [userBalance, setUserBalance] = useState(null);
    const [ticketBalance, setTicketBalance] = useState(null);
    const [moveablePresaleAmount, setMoveablePresaleAmount] = useState(0);

    useEffect(() => {
        
        async function load() {
            setUserBalance(await getUserBalance());
            setTicketBalance(await getUserTickets());
            setMoveablePresaleAmount(await getMoveablePresaleAmount());
        }
        load()
    }, []);

    return (
        <section className='content_wrap statistics_container'>
            <div className='main_head'>My Statistics</div>
            <div className='contents_wrap'>
                <div className='item'>
                    Your Tokens : <span className='pink_text'>{userBalance}</span>
                </div>
                <div className='item'>
                    Your Tickets : <span className='pink_text'>{ticketBalance}</span>
                </div>
                {moveablePresaleAmount > 0 ?
                    <div className='item'>
                        Presale Amount Movable : <span className='pink_text'>{moveablePresaleAmount}</span>
                    </div>
                    :
                    null
                }
            </div>
        </section>
    );
};

export default StatisticsPop;
