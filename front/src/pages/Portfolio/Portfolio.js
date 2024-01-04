import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const Introduce = () => {
    const [portfolio, setPortfolio] = useState();
    
    useEffect(() => {
        Axios.get('/portfolio')
            .then(res => {
                console.log(res.data);
                setPortfolio(res.data)
            })
        }, []);

    return (
        <div>
             {portfolio && portfolio.map((list) => (
                <div className='content career'>
                    <div className='title'>{list.title}
                    </div>
                    <div className='desc f-black-30'>{list.description}</div>
                    <div className='date f-purple-50'>{list.date}</div>
                    <div className='date f-purple-50'>{list.images}</div>
                    <div className='date f-purple-50'>{list.skills}</div>
                    <div className='date f-purple-50'>{list.responsibility}</div>
                    <div className='date f-purple-50'>{list.result}</div>
                    <div className='date f-purple-50'>{list.conclusion}</div>
                </div>
            ))}
        </div>
    )
}

export default Introduce;