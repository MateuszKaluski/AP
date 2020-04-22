import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Spring } from 'react-spring';

class Header extends Component {
    handleClick() {
        const nav = document.querySelector('.nav--is-hide');
        nav.style.display = 'block'
    }

    render() {

        return (
            <>
                <header className='header3'>
                    <div className='container'>
                        <div className='row'>
                            <div className='header__logo col-3'>
                                <Link className='logo'
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-125}
                                    duration={500}
                                >
                                    <img className='logo-size' src="../images/loga/3s.png" />
                                </Link>
                            </div>

                            <div className='header__nav col-9'>
                                <img className='burger-size' src="../images/loga/burger.png" onClick={this.handleClick} />
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;