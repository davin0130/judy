import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';


const PortfolioDetail = () => {
    const params = useParams().id;
    const [pdetail, setPDetail] = useState();
    
    useEffect(() => {
        Axios.get(`/portfolio/${params}`)
            .then(res => {
                setPDetail(res.data)
            })
    }, []);
    
    return (
        <div className='pdetail'>
            <div className='title'>{pdetail?.title}</div>
            <div className='desc f-purple-50'>
                <p className='content'>{pdetail?.description}</p>
            </div>
            <div className='date box'>
                <p className='name'>수행기간</p>
                <p className='content'>{pdetail?.date}</p>
            </div>
            <div className='images box'>
                <p className='image'>{pdetail?.images}</p>
            </div>
            <div className='skills box'>
                <p className='name'>사용기술</p>
                <p className='content'>{pdetail?.skills}</p>
            </div>
            <div className='responsibility box'>
                <p className='name'>역할</p>
                <p className='content'>{pdetail?.responsibility}</p>
            </div>
            <div className='result box'>
                <p className='name'>산출물</p>
                <p className='content'>{pdetail?.result}</p>
            </div>
            <div className='conclusion box'>
                <p className='name'>결과</p>
                <p className='content'>{pdetail?.conclusion}</p>
            </div>
        </div>
    )
}

export default PortfolioDetail;