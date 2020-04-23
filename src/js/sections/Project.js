import React, { Component, useState } from "react";
import { Link, } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import HeaderSubpage from './HeaderSubpage';
import ProjectTitle from './ProjectTitle';

import NavSubpages from '../components/NavSubpages';
import Footer from '../components/Footer';
import ProjectMarginBottom from '../components/ProjectMarginBottom';

class Project extends Component {
    state = {
        data: null,
        images: [],
        videos: []
    }
    load = () => {
        fetch("https://api.nice-studio.pl/projects/" + this.props.match.params.id)
            .then(resp => resp.json())
            .then(data => {

                if (data && data.length) {
                    this.setState({
                        data: data[0],
                    })
                    console.log(data)
                    this.patchState(data[0])
                    console.log({
                        vid: this.state.videos,
                        img: this.state.images
                    })
                }
            })
    }

    patchState(data) {
        console.log(data);
        const images = data.images.length ? data.images.map((img, i) => <img className='project__img' key={i} src={img}></img>) : null
        const videos = data.videos ? data.videos.map((video, i) =>
            <video className='project__video' key={i}
                src={video}
                autoPlay
                loop
                width="1000"
            >
            </video>) : null;
        this.setState(
            {
                images,
                videos
            }
        )
    }

    componentDidMount() {
        this.load()
    }
    componentDidUpdate(prevProps) {
        console.log(prevProps, 'kk', this.props)
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.load()
        }
        else if (this.props.match.params.id <= 1) {
            return null
        }

    }
    render() {
        if (!this.state.data) {
            return null;
        }
        return (
            <>
                <div className='preloader'>
                    <div className='preloader__left-side'></div>
                    <div className='preloader__right-side'></div>


                    <HeaderSubpage />
                    <NavSubpages />
                    <div className='container'>
                        <section className='project'>

                            {/* <div className="page"> */}
                            <div className='project__description'>
                                <div className='row '>
                                    <div className='col-6'>
                                        <p className='project__title'>{this.state.data.title}</p>
                                        <p className='project__description'>{this.state.data.description}</p>
                                    </div>
                                    <div className='col-6'>
                                        <p className='project__text'>{this.state.data.text}</p>
                                    </div>
                                </div>
                                <div className='row col-12 '>
                                    <div className='project__videos' >{this.state.videos}</div>
                                </div>
                                <div className='row col-12 '>
                                    <div className='project__foto' >{this.state.images}</div>
                                    {/* <div className='project__video' >{videos}</div> */}
                                </div>

                            </div>
                            {/* </div> */}

                        </section>
                    </div>
                    <Footer />
                    <NavBottom id={this.state.data.id} lastProject={this.props.match.params.lastProject} title={this.state.data.title} />
                    <ProjectMarginBottom />
                </div>
            </>
        )

    }


}




export function NavBottom(props) {
    console.log(props)
    const [count, setcount] = useState(props.id)
    const history = useHistory();



    function handleClick(e) {
        if (e === 'up') {
            setcount(count + 1)
            if (count === 16) setcount(1)
        } else if (e === 'down') {
            setcount(count - 1)
            if (count === 1) setcount(16)
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
                            <div className='navBottom__prev' onClick={() => handleClick('down')}><img className='arrow-size' src="../images/loga/arrow.png" /></div>
                            <ProjectTitle className='navBottom__link' title={title} />
                            <div className='navBottom__next' onClick={() => handleClick('up')} ><img className='arrow-size' src="../images/loga/arrow.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Project