import React, { Component, Fragment } from "react";
import HeaderSubpage from './HeaderSubpage';
import NavSubpages from '../components/NavSubpages';
import Footer from '../components/Footer';
import ProjectMarginBottom from '../components/ProjectMarginBottom';
import NavBottom from '../components/NavBottom';
export default class Project extends Component {
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
                    this.setState({ data: data[0] })
                    this.patchState(data[0])
                }
            })
    }

    patchState(data) {
        if (data.images && data.images.length) {
            const images = data.images.map((img, i) => (
                <img className='project__img' key={i} src={img}></img>
            ));
            this.setState({ images })
        }
        if (data.videos && data.videos.length) {
            const videos = data.videos.map((video, i) => (
                <video className='project__video' key={i} src={video} autoPlay loop width="1000"></video>
            ))
            this.setState({ videos })
        }
    }

    componentDidMount() {
        this.load()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) this.load();
        else if (this.props.match.params.id <= 1) return null;
    }

    render() {
        if (!this.state.data) {
            return null;
        }
        return (
            <Fragment>
                <div className='preloader'>
                    <div className='preloader__left-side'></div>
                    <div className='preloader__right-side'></div>
                    <HeaderSubpage />
                    <NavSubpages />
                    <div className='container'>
                        <section className='project'>
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
                                    <div className='project__videos'>{this.state.videos}</div>
                                </div>
                                <div className='row col-12 '>
                                    <div className='project__foto'>{this.state.images}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                    <NavBottom
                        id={this.state.data.id}
                        lastProject={this.props.match.params.lastProject}
                        title={this.state.data.title} />
                    <ProjectMarginBottom />
                </div>
            </Fragment>
        )
    }
}



