import { Link } from "react-scroll";
import React, { useState, Fragment } from "react";
import { useSpring, animated } from 'react-spring';
import { NavTestLinkToHome } from './NavTestLinkToHome';
import { NavTestLinkToAbout } from './NavTestLinkToAbout';

export const NavTest = () => {

    const [isToggled,
        setToggled] = useState(false);

    const [isDisplay,
        setDisplay] = useState(false);

    return (
        <Fragment>
            <div className='nav'>
                <div className='nav__container'>
                    <div className='nav__logo'>
                        <Link
                            className='logo'
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-125}
                            duration={500}>
                            <img alt={'logo'} className='logo-size' src={require('../images/loga/2.png')} />
                        </Link>
                        <div onClick={() => setToggled(!isToggled)} className="menuIconContainer">
                            <div id="nav-icon3">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`nav__list ${isToggled
                            ? 'ulOpen'
                            : 'ulClose'}`}>
                        <div className='listNav__grid'>
                            <div className="item1">
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
                            </div>
                            <div className="item2">

                                <Link to="/about">
                                    o mnie
                            </Link>

                            </div>
                            <div className="item3" onClick={() => setDisplay(!isDisplay)}>
                                kontakt
                            </div>

                            <div className={isDisplay ? 'item4 openContact' : 'item4 closeContact'}>
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
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
