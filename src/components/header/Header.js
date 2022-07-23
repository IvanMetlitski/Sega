import React from "react";
import './header.css'


const Header =()=> {
    return (
        <header className="header">
            <div className="header__block">
                <img className='header__block_logo' src={require('../../icons/sega-logo.svg').default} alt='mainlogo'/>
                <div className='header__group'>
                    <h1 className="header__group_h1">React Sega</h1>
                    <h3 className="header__group_text">About games </h3>
                </div>
            </div>
            <div className="header__right">
                <a href="#" className="header__right_sum">1200$</a>
                <a className='header__right_link' href="src/components/header/Header#">
                    <img src={require('../../icons/shopping_bag.svg').default} alt="bag"/>
                </a>
            </div>
        </header>
    )
}

export default Header;