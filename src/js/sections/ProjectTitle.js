import React, { Component } from "react";
import { Link, } from "react-scroll";

class ProjectTitle extends Component {
    render() {
        const title = this.props.title
        return (

            <Link className='navBottom__link'
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >{title}</Link>
        )
    }
}


export default ProjectTitle