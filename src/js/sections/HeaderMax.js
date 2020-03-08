import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class HeaderMax extends Component {

    render() {

        return (
            <>
                <header className='header'>
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
                                >LOGO</Link>
                            </div>

                            <div className='col-9'>
                                <nav className='header__nav'>
                                    <ul className='nav__list'>
                                        <li className='nav__item'>
                                            <Link className='nav__link'
                                                activeClass="active"
                                                to="projects"
                                                spy={true}
                                                smooth={true}
                                                offset={-125}
                                                duration={500}
                                            >Projekty</Link>
                                        </li>
                                        <li className='nav__item'>
                                            <Link className='nav__link'
                                                activeClass="active"
                                                to="about"
                                                spy={true}
                                                smooth={true}
                                                offset={-125}
                                                duration={500}
                                            >O mnie</Link>
                                        </li>
                                        <li className='nav__item'>
                                            <Link className='nav__link'
                                                activeClass="active"
                                                to="contact"
                                                spy={true}
                                                smooth={true}
                                                offset={-125}
                                                duration={500}
                                            >Kontakt</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default HeaderMax;