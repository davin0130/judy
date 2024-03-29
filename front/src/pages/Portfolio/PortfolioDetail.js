import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

import '../../style/Portfolio/Portfolio.css';

const PortfolioDetail = () => {
    const params = useParams().id;
    const [pdetail, setPDetail] = useState();
    
    useEffect(() => {
        Axios.get(`/portfolio/${params}`)
            .then(res => {
                setPDetail(res.data);
            })
    }, []);
    return (
        <div className='pdetail'>
            <div className='title'>{pdetail?.title}</div>
            <div className='desc f-purple-50'>
                <p className='content'>{pdetail?.description}</p>
            </div>
            <div className='box'>
                {pdetail?.category.split(", ").map((item)=>{
                    return(
                        <div className='category l-purple-100'>{item}</div>
                        )
                })}
            </div>
            <div className='date box'>
                <p className='name'>수행기간</p>
                <p className='content'>{pdetail?.date}</p>
            </div>
            <div className='images box'>
                {pdetail?.images === null 
                ? <div></div>
                : pdetail?.images.split(", ").map((image)=>{
                    return(
                    <img
                        className='image'
                        src={`${process.env.PUBLIC_URL}/portfolio_image/${pdetail?.id}/${image}`} />)
                })
                }
            </div>
            <div className='skills box'>
                <p className='name'>사용기술</p>
                {pdetail?.skills.split(", ").map((item)=>{
                    return(
                    <img
                        className='simage'
                        alt={item}
                        src={`${process.env.PUBLIC_URL}/${item}.png`} />)
                })}
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