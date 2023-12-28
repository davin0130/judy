import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
    <>
        <div className='logo'>
            <Link to="/">Home</Link>
        </div>
        <div className='r-navbar'>
            <Link to="/intro">Introduce</Link>
        </div>
    </>
    )
}

export default Header;