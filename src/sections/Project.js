import React, { Fragment } from "react";
import NavBottom from '../components/NavBottom';
import { Nav } from "../components/Nav";
const end = [4];
export default function Project({ id, title, description, text, videos, images }) {

    const getVideos = (videos) => {
        if (videos && videos.length) {
            return videos.map((video, i) => (
                <div key={i} className='videoContainer'>
                    <video className='project__video' alt={'project'} src={`https://nice-studio.pl${video}`} autoPlay loop width="1000"></video>
                </div>
            ))
        }
        return null;
    }
    const getImages = (images) => {
        if (images && images.length) {
            return images.map((img, i) => (
                <div key={i} className='imageContainer'>
                    <img className='project__img' alt={'project'} src={`https://nice-studio.pl${img}`} />
                </div>
            ));
        }
        return null;
    }
    const getText = (text) => {
        return { __html: text };
    }


    return (
        <Fragment>
            <Nav src="project" color={'rgba(206, 45, 36, 1)'} />
            <div className='project'>
                <section className='project__container'>
                    <div className='project__descriptionCont'>
                        <p className='project__title'>{title}</p>
                        <p className='project__description'>{description}</p>
                        <div className='project__text' >
                            <p className='project__text-cont' dangerouslySetInnerHTML={getText(text)}>
                            </p>
                        </div>
                    </div>
                    {end.includes(id) ? null : getVideos(videos)}
                    {getImages(images)}
                    {end.includes(id) ? getVideos(videos) : null}
                </section>
            </div>
            <NavBottom id={id} title={title} />
        </Fragment >
    )
}






