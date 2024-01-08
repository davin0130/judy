import React from 'react';
import { Link } from 'react-router-dom';

import mainLogo from '../../images/main_logo.png';

import styled from "styled-components";

const HLink = styled(Link)`
	text-decoration: none;
`;

const Header = () => {

    return (
    <>
        <div className='logo'>
            <HLink to="/"><img src={mainLogo} width={150} /></HLink>
        </div>
        <div className='navbar'>
            <HLink className='menu' to="/intro">INTRODUCE</HLink>
            <HLink className='menu' to="/portfolio">PORTFOLIO</HLink>
       </div>
    </>
    )
}

export default Header;