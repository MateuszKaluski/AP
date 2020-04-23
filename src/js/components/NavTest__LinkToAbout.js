import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavTest__LinkToAbout extends Component {
    render() {
        return (
            <Link to="/about" >
                o mnie
            </Link>
        )
    }
}

export default NavTest__LinkToAbout