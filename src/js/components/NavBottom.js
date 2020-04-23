import React,{useState} from 'react'
import ProjectTitle from '../sections/ProjectTitle';
import {useHistory} from "react-router-dom";

export default function NavBottom(props) {
    const [count,
        setcount] = useState(props.id);
    const history = useHistory();

    function handleClick(e) {
        if (e === 'up') {
            setcount(count + 1)
            if (count === 16) 
                setcount(1)
        } else if (e === 'down') {
            setcount(count - 1)
            if (count === 1) 
                setcount(16)
        }
        if (location.hash.startsWith('#/')) {
            history.push(location.hash.replace('#', ''));
            history.push(`${count}`)
        }
    }
    const title = props.title
    return (
        <div className='navBottom'>
            <div className='container'>
                <div className='row '>
                    <div className='col-12'>
                        <div className='navBottom__bar'>
                            <div className='navBottom__prev' onClick={() => handleClick('down')}><img className='arrow-size' src="../images/loga/arrow.png"/></div>
                            <ProjectTitle className='navBottom__link' title={title}/>
                            <div className='navBottom__next' onClick={() => handleClick('up')}><img className='arrow-size' src="../images/loga/arrow.png"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
