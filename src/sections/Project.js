import React, { Fragment } from "react";
import NavBottom from '../components/NavBottom';
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
    const setColor = () => {
        document.querySelector('#nav').style.backgroundColor = "red";
    }
    setColor();
    return (
        <Fragment>
            <div className='project'>
                <section className='project__container'>
                    <div className='project__description'>
                        <p className='project__title'>{title}</p>
                        <p className='project__description'>{description}</p>
                        <p className='project__text'>{text}</p>
                    </div>
                    {getVideos(videos)}
                    {getImages(images)}
                </section>
            </div>
            <NavBottom id={id} title={title} />
        </Fragment >
    )
}






