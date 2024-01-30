import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import styled from "styled-components";
import '../../style/Portfolio/Portfolio.css';

const PCLink = styled(Link)`
	text-decoration: none;
`;

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState();
    
    useEffect(() => {
        Axios.get('/portfolio')
            .then(res => {
                setPortfolio(res.data)
            })
        }, []);

    return (
        <div>
            <div>
                <div className='m-title'>Portfolio</div>
            </div>
            {portfolio?.map((list) => (
                <PCLink key={list.id} to={`/portfolio/${list.id}`}>
                    <div className='pcard'>
                        {list.id[0] ==="P"
                        ? <div className='pcategory l-purple-100'>기획</div>
                        : list.id[0] === "D"
                        ? <div className='pcategory l-blue-100'>개발</div>
                        : <div className='pcategory l-yellow-100'>운영</div>}
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