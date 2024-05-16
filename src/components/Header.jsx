import React from "react";
import logo from '../images/logo.png';

export const Header = () => {
    return (
        <header>
            <img className="logo" src={logo} alt="logo"/>
        </header>
    );
}
