import React from "react";
import { Link } from "react-router-dom";

export const NavTestLinkToHome = () => (
    <Link className='logo' to={`/#`}>
        <img className='logo-size' alt={'logo'} src={require('../images/loga/6s.png')} />
    </Link>
)


