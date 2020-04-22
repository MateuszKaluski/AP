import React, { Component } from "react";
import { Link, } from 'react-router-dom';

import HeaderSubpage from './HeaderSubpage';
import ProjectTitle from './ProjectTitle';

import NavSubpages from '../components/NavSubpages';
import Footer from '../components/Footer';
import ProjectMarginBottom from '../components/ProjectMarginBottom';

class Project extends Component {
    state = {
        data: null,
    }
    load = () => {
        fetch("http://localhost:3000/projects/" + this.props.match.params.id)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    data: data,
                })
            })
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
        if (this.state.data === null) {
            return (
                null
            )
        }

        const images = this.state.data.images.map((img, i) => <img className='project__img' key={i} src={img}></img>)
        //
        //
        const videos = this.state.data.videos.map((video, i) =>
        <video className='project__video' key={i}
        src={video}
        // controls
        autoPlay
        loop
        // height="600"
        width="1000"
        >
        </video>)
        //
        // <video src="/images/amway artistry/AA1.mp4" controls autoPlay loop height="300" width="400">
        // </video>
        //

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
                                    <div className='project__videos' >{videos}</div>
                                </div>
                                <div className='row col-12 '>
                                    <div className='project__foto' >{images}</div>
                                    {/* <div className='project__video' >{videos}</div> */}
                                </div>

                            </div>
                        {/* </div> */}

                        </section>
                    </div>
                    <Footer />
                    <NavBottom id={this.props.match.params.id} lastProject={this.props.match.params.lastProject} title={this.state.data.title} />
                    <ProjectMarginBottom />
                </div>
            </>
        )
    }
}

class NavBottom extends Component {

    render() {

        const prev = this.props.id - 1;
        const next = Number(this.props.id) + 1;

        const title = this.props.title
        return (
            <div className='navBottom'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-12'>
                            <div className='navBottom__bar'>
                                <Link className='navBottom__prev' to={`/projects/${prev}`}><img className='arrow-size' src="../images/loga/arrow.png" /></Link>
                                <ProjectTitle className='navBottom__link' title={title} />
                                <Link className='navBottom__next' to={`/projects/${next}`}><img className='arrow-size' src="../images/loga/arrow.png" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Project