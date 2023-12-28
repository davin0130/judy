import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import '../../style/Introduce/Introduce.css'

const Introduce = () => {

    const [intro, setIntro] = useState();
    
    useEffect(() => {
        Axios.get('/intro')
            .then(res => {
                console.log(res.data);
                setIntro(res.data)
            })
        }, [])
    return (
    <div className='intro'>
        {intro && intro.map((list) => (
            <div className='content career'>
                <div className='title'>{list.title}
                    {list.category}
                </div>
                <div className='desc'>{list.description}</div>
                <div className='date'>{list.date}</div>
            </div>
        ))}
    </div>
    )
}

export default Introduce;