import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavTest__LinkToHome extends Component {
    render() {
        return (

        <Link className='logo' to={`/#`} activeClassName="active">
            <img className='logo-size' src="../images/loga/6s.png" />
        </Link>
        )
    }
}

export default NavTest__LinkToHome