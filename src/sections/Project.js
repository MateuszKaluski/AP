import React, { Component, Fragment } from "react";
import HeaderSubpage from './HeaderSubpage';
import NavSubpages from '../components/NavSubpages';
import { Footer } from '../components/Footer';
import ProjectMarginBottom from '../components/ProjectMarginBottom';
import NavBottom from '../components/NavBottom';
export default class Project extends Component {

    getVideos(videos) {
        if (videos && videos.length) {
            return videos.map((video, i) => (
                <video className='project__video' alt={'project'} key={i} src={`https://nice-studio.pl${video}`} autoPlay loop width="1000"></video>
            ))
        }
        return null;
    }
    getImages(images) {
        if (images && images.length) {
            return images.map((img, i) => (
                <img className='project__img' alt={'project'} key={i} src={`https://nice-studio.pl${img}`} />
            ));
        }
        return null;
    }
    render() {
        const { id, title, description, text, videos, images } = this.props;

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
                                        <p className='project__title'>{title}</p>
                                        <p className='project__description'>{description}</p>
                                    </div>
                                    <div className='col-6'>
                                        <p className='project__text'>{text}</p>
                                    </div>
                                </div>
                                <div className='row col-12 '>
                                    <div className='project__videos'>{this.getVideos(videos)}</div>
                                </div>
                                <div className='row col-12 '>
                                    <div className='project__foto'>{this.getImages(images)}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer />
                    <NavBottom id={id} title={title} />
                    <ProjectMarginBottom />
                </div>
            </Fragment>
        )
    }
}



