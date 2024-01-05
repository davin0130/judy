import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import styled from "styled-components";
import '../../style/Portfolio/Portfolio.css'

const PCLink = styled(Link)`
	text-decoration: none;
`;

const Portfolio = () => {
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
            <div>
                <div className='m-title'>Portfolio</div>
                <div className='m-desc'>
                    2018년도 대학생활 때부터 현재까지 약 6년간 쌓아온 포트폴리오 입니다.
                </div>
            </div>
            {portfolio?.map((list) => (
                <PCLink key={list.id} to={`/portfolio/${list.id}`}>
                    <div className='pcard'>
                        <div className='title'>{list.title}</div>
                        <div className='desc f-black-30'>{list.description}</div>
                        <div className='date f-purple-50'>{list.date}</div>                   
                </div>
                </PCLink>
            ))}
             
        </div>
    )
}

export default Portfolio;