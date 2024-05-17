import React from "react";
import logo from '../images/logo.png';

import '../styles/header.css';

export const Header = () => {
    return (
        <header id="store-header" className="store__header">
            <img className="store__header--logo" src={logo} alt="store-logo"/>
        </header>
    );
}
