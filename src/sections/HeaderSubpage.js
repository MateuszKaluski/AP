import React, { Component } from "react";
import { Link, } from 'react-router-dom';

class HeaderSubpage extends Component {
    handleClick() {
        const nav = document.querySelector('.nav--is-hide');
        nav.style.display = 'block'
    }

    render() {

        return (
            <>
                <header className='header'>
                    <div className='container'>
                        <div className='row'>
                            <div className='header__logo col-3'>
                                <Link className='logo-subpage' to={`/#`}>
                                    <img className='logo-size' src={require('../images/loga/6s.png')} alt={'logo'}/>
                                </Link>
                            </div>
                            <div className='header__nav col-9'>
                                <img className='burger-size' src={require('../images/loga/burger-white.png')} alt={'menu'} onClick={this.handleClick} />
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default HeaderSubpage;