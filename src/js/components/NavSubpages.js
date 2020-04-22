import React, { Component } from "react";
import { Link, } from 'react-router-dom'

class NavSubpages extends Component {
    state = {
        display: false,
    }
    handleClick() {

        const nav = document.querySelector('.nav--is-hide');
        nav.style.display = 'none'
    }
    handleClickContact = () => {
        this.setState ({
            display: !this.state.display,
        })
    }
    render() {
        const contactStyle = {
            display: this.state.display ? 'block' : 'none',
        }

        return (
            <>
                <div className='nav--is-hide'>
                    <section className='nav'>
                        <div className='container'>
                            <div className='row'>
                                <div className='nav__logo col-3'>

                                <Link className='logo-subpage' to={`/#`}>
                                    <img className='logo-size' src="../images/loga/6s.png" />
                                </Link>

                                </div>
                                    <div className='nav__exit-button'>
                                        <img className='x-size' src="../images/loga/ix.png" onClick={this.handleClick} />
                                    </div>
                                </div>
                                <div className='row'>

                                <div className='col-4'>
                                    <div style={contactStyle} className='contact--is-hide'>
                                        <ul className='contact'>
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
                                            <Link to={`/#`}>
                                                projekty
                                            </Link>
                                        </li>
                                        <li className='nav__item'>
                                            <Link to={`/about/`}>
                                                o mnie
                                            </Link>
                                        </li>
                                        <li className='nav__item'>
                                            <div onClick={this.handleClickContact}>
                                                kontakt
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}

export default NavSubpages;