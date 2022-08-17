import React from "react";
import './header.css'
import {NavLink} from "react-router-dom";


const Header =({onClickBasket})=> {
    return (
        <header className="header">
            <div className="header__block">
                <img className='header__block_logo' src={require('../../icons/sega-logo.svg').default} alt='mainlogo'/>
                <div className='header__group'>
                    <h1 className="header__group_h1">React Sega</h1>
                    <h3 className="header__group_text">About games </h3>
                </div>
            </div>
            <div className="header__middle">
                <NavLink end
                         style={({isActive}) => ({color: isActive ? '#1E90FF' : '#000'})}
                         to="/games">Games /</NavLink>
                <NavLink end
                         style={({isActive}) => ({color: isActive ? '#1E90FF' : '#000'})}
                         to="/consoles">Consoles </NavLink>
            </div>
            <div className="header__right">
                <a href="#"><img onClick={onClickBasket} src={require('../../icons/shopping_bag.svg').default} alt="bag"/></a>
            </div>
        </header>
    )
}

export default Header;