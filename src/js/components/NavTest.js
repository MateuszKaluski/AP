// import { render } from 'react-dom'
import { Link, animateScroll as scroll } from "react-scroll";

import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { Keyframes } from 'react-spring/renderprops'

import NavTest__LinkToHome from './NavTest__LinkToHome';
import NavTest__LinkToAbout from './NavTest__LinkToAbout';

// class NavTest extends Component {
const NavTest = () => {

    const [isToggled, setToggled] = useState(false);
    const fade = useSpring({
        height: isToggled ? 1000 : 0
    });
    const [isDisplay, setDisplay] = useState(false);
    const leftFade = useSpring({
        // from: { display: 'none' },
        // to: { display: 'block' }

        // from: { display: 'block' },
        // to: { display: 'none' }

        // from: { x: -100, opacity: 0 },
        // to: { x: 0, opacity: 1 }

        // from: { display: 'none' },
        // display: 'block',

        display: isDisplay ? 'block' : 'none',
        // scale: isDisplay ? 2 : 1,
    });
        return (
            <>
                <div className='header3'>
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
                                <img className='burger-size' src="../images/loga/burger.png"
                                onClick={() => setToggled(!isToggled)}
                                // onClick={this.onToggle}
                                />
                            </div>
                        </div>
                        {/*  */}
                        <div className='content'>

                                <animated.div className="nav" style={fade}>
                                                <div className='container'>
                                                    <div className='row'>
                                                        <div className='nav__logo col-3'>
                                                            <NavTest__LinkToHome/>
                                                            {/* <Link className='logo' to={`/#`}>
                                                                <img className='logo-size' src="../images/loga/6s.png" />
                                                            </Link> */}
                                                        </div>
                                                        <div className='nav__exit-button'>
                                                                <img className='x-size' src="../images/loga/ix.png"
                                                                onClick={() => setToggled(!isToggled)}
                                                                />
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-4'>
                                                            {/* <div
                                                            // style={contactStyle}
                                                            className='contact--is-hide'> */}
                                                            <animated.div className="contact" style={leftFade}>
                                                                <ul
                                                                // className='contact'
                                                                >
                                                                    <li className='contact__phone'>
                                                                        889 683 275
                                                                    </li>
                                                                    <li className='contact__mail'>
                                                                        polek.aleksandra@gmail.com
                                                                    </li>
                                                                </ul>
                                                            </animated.div>
                                                            {/* </div> */}
                                                        </div>

                                                        <div className='col-8'>
                                                            <ul className='nav__menu'>
                                                                <li className='nav__item'>
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
                                                                </li>
                                                                <li className='nav__item'>
                                                                    <NavTest__LinkToAbout/>
                                                                </li>
                                                                <li className='nav__item'>
                                                                    <div
                                                                    onClick={() =>
                                                                         setDisplay(!isDisplay)
                                                                        }
                                                                    >
                                                                        kontakt
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                </animated.div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default NavTest;