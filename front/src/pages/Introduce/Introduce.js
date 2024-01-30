import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import awardL from '../../images/award_left.png';
import awardR from '../../images/award_right.png';
import licenseIcon from '../../images/license.png';
import awardIcon from '../../images/award.png';

import '../../style/Introduce/Introduce.css'

const Introduce = () => {

    const [intro, setIntro] = useState();
    
    useEffect(() => {
        Axios.get('/intro')
            .then(res => {
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
            <div className='category f-pink-50'><span className='f-green-linear'>Career</span></div>
            {intro && intro.filter(list => list.category === "career").map((list) => (
                <div className='content career'>
                    <div className='title'>{list.title}</div>
                    <div className='desc f-black-30'>{list.description}</div>
                    <div className='date f-purple-50'>{list.date}</div>
                </div>
            ))}
        </div>
        <div className='experience'>
            <div className='category f-green-50'><span className='f-purple-linear'>Experience</span></div>
            {intro && intro.filter(list => list.category === "experience").map((list) => (
                <div className='content'>
                    <div className='title'>{list.title}</div>
                    <div className='desc f-black-30'>{list.description}</div>
                    <div className='date f-purple-50'>{list.date}</div>
                </div>
            ))}
        </div>
        <div className='awards'>
            <div className='category'>
                <img src={awardL} width={43} />
                <span className='f-yellow-linear'>License & Awards</span>
                <img src={awardR} width={43} />
            </div>
            {intro && intro.filter(list => list.category === "license" || list.category ==="award").map((list) => (
                <div className='content'>
                    <div className='dcategory'>
                        {list.category === "license"
                            ? <img src={licenseIcon} width={30} />
                            : <img src={awardIcon} width={30} />}
                    </div>
                    <div className='title'>{list.title}</div>
                    <div className='desc'>{list.description}</div>
                    <div className='date'>{list.date}</div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Introduce;