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
        <div className='main-banner'>
            <div className='name'>Dabin Jeong | <span className='job'>Product Manager</span></div>
            <div className='m-title'>Education</div>
            <div className='list'>
                학점은행제 컴퓨터공학과 <br />
                한양여자대학교 스마트IT과 <br />
                한양여자대학교 미래창업비즈니스과 <br />
            </div>
        </div>
        <div className='career'>
            <div className='category f-pink-50'><span>Career</span></div>
            {intro && intro.filter(list => list.category === "career").map((list) => (
                <div className='content career'>
                    <div className='title'>{list.title}
                    </div>
                    <div className='desc f-black-30'>{list.description}</div>
                    <div className='date f-purple-50'>{list.date}</div>
                </div>
            ))}
        </div>
        <div className='experience'>
            <div className='category f-green-50'><span>Experience</span></div>
            {intro && intro.filter(list => list.category === "experience").map((list) => (
                <div className='content'>
                    <div className='title'>{list.title}
                    </div>
                    <div className='desc f-black-30'>{list.description}</div>
                    <div className='date f-purple-50'>{list.date}</div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Introduce;