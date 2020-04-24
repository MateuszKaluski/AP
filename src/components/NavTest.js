import { Link } from "react-scroll";
import React, { useState, Fragment } from "react";
import { useSpring, animated } from 'react-spring';
import { NavTestLinkToHome } from './NavTestLinkToHome';
import { NavTestLinkToAbout } from './NavTestLinkToAbout';

const NavTest = () => {

    const [isToggled,
        setToggled] = useState(false);
    const fade = useSpring({
        height: isToggled
            ? 1000
            : 0
    });
    const [isDisplay, setDisplay] = useState(false);

    return (
        <Fragment>
            <div className='header3'>
                <div className='container'>
                    <div className='row'>
                        <div className='header__logo col-3'>
                            <Link
                                className='logo'
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-125}
                                duration={500}>
                                <img alt={'logo'} className='logo-size' src={require('../images/loga/3s.png')} />
                            </Link>
                        </div>
                        <div className='header__nav col-9'>
                            <img
                                alt={'menu'}
                                className='burger-size'
                                src={require('../images/loga/burger.png')}
                                onClick={() => setToggled(!isToggled)} />
                        </div>
                    </div>
                    <div className='content'>

                        <animated.div className="nav" style={fade}>
                            <div className='container'>
                                <div className='row'>
                                    <div className='nav__logo col-3'>
                                        <NavTestLinkToHome />
                                    </div>
                                    <div className='nav__exit-button'>
                                        <img
                                            alt={'exit'}
                                            className='x-size'
                                            src={require('../images/loga/ix.png')}
                                            onClick={() => setToggled(!isToggled)} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>

                                        <div className={isDisplay ? 'openContact' : 'closeContact'}>
                                            <ul>
                                                <li className='contact__phone'>
                                                    889 683 275
                                                </li>
                                                <li className='contact__mail'>
                                                    polek.aleksandra@gmail.com
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <ul className='nav__menu'>
                                            <li className='nav__item'>
                                                <Link
                                                    onClick={() => setToggled(!isToggled)}
                                                    activeClass="active"
                                                    to="projects"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-125}
                                                    duration={500}>
                                                    projekty
                                                </Link>
                                            </li>
                                            <li className='nav__item'>
                                                <NavTestLinkToAbout />
                                            </li>
                                            <li className='nav__item'>
                                                <div onClick={() => setDisplay(!isDisplay)}>
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
        </Fragment>
    )
}

export default NavTest;