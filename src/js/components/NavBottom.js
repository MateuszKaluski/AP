import React, { useState } from 'react'
import ProjectTitle from '../sections/ProjectTitle';
import { Link } from 'react-router-dom'
export default function NavBottom(props) {

    function location(arrow) {
        if (arrow === 'next') {
            if (props.id === 16) return `1`
            else return `${props.id + 1}`
        } else {
            if (props.id === 1) return `16`
            else return `${props.id - 1}`
        }
    }
    const title = props.title
    return (
        <div className='navBottom'>
            <div className='container'>
                <div className='row '>
                    <div className='col-12'>
                        <div className='navBottom__bar'>
                            <Link className='navBottom__prev' to={location('prev')}><img className='arrow-size' src="../images/loga/arrow.png" /></Link>
                            <ProjectTitle className='navBottom__link' title={title} />
                            <Link className='navBottom__next' to={location('next')}><img className='arrow-size' src="../images/loga/arrow.png" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
