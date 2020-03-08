import React, { Component } from "react";
import { Link, } from "react-scroll";

class Nav__ItemProjectsRS extends Component {
    render() {
        return (

            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-125}
            duration={500}
            >
            projekty
            </Link>
        )
    }
}

export default Nav__ItemProjectsRS