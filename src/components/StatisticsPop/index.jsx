import './styles.scss';

const StatisticsPop = () => {
    return (
        <section className='content_wrap statistics_container'>
            <div className='main_head'>My Statistics</div>
            <div className='contents_wrap'>
                <div className='item'>
                    Your Tokens : <span className='pink_text'>20</span>
                </div>
                <div className='item'>
                    Your Tickets : <span className='pink_text'>5</span>
                </div>
                <div className='item'>
                    Total Tickets : <span className='pink_text'>10</span>
                </div>
                <div className='item'>
                    Chance To Win(%) : <span className='pink_text'>95%</span>
                </div>
                <div className='item'>
                    Total Winnings : <span className='pink_text'>200$</span>
                </div>
            </div>
        </section>
    );
};

export default StatisticsPop;
