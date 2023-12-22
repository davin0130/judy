import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
    <>
        <div className='header'>
            <div className='logo'>
                <Link to="/">Home</Link>
            </div>
            <div className='navbar'>
                <Link to="/intro">Introduce</Link>
            </div>
        </div>
    </>
    )
}

export default Header;