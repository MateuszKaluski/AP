import React from 'react'
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';

export default function NavBottom({ title, id }) {

    const location = (arrow) => {
        if (arrow === 'next') {
            if (id === 16) return `1`;
            else return `${id + 1}`;
        } else {
            if (id === 1) return `16`;
            else return `${id - 1}`;
        }
    }

    const scroll = () => {
        return (<ScrollLink className='navBottom__link'
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
        >{title}</ScrollLink>)
    }

    return (
        <div className='navBottom'>
            <div className='navBottom__container'>
                <Link className='navBottom__prev' to={location('prev')}><img className='arrow-size' alt={'arrow right'} src={require('../images/loga/arrow.png')} /></Link>
                {scroll()}
                <Link className='navBottom__next' to={location('next')}><img className='arrow-size' alt={'arrow left'} src={require('../images/loga/arrow.png')} /></Link>
            </div>
        </div>
    )
}
