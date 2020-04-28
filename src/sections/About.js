import React, { Fragment } from "react";
import { Nav } from "../components/Nav";

import HeaderSubpage from './HeaderSubpage';
import NavSubpages from '../components/NavSubpages';

const About = () => (
    <Fragment>
        <Nav />
        <div className="page">
            <HeaderSubpage />
            <section className='about' id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 about__foto'>
                            <img className='foto-size' alt={'autor'} src={require('../images/autor/2.jpg')} />
                        </div>
                        <div className='col-6 about__info'>
                            <h1 className='about__autor'>__Cześć</h1>
                            <p className='about__textLight'>Jestem projektantką. Kreowanie jest dla mnie
                            najlepszą formą spędzania czasu. Uwielbiam poszerzać swoją wiedzę, dlatego każdy
                            projekt, z różnych dziedzin jest dla mnie wyzwaniem i pasją.
                                </p>
                            <p className='about__textBold'>Projektuję:
                                </p>
                            <p className='about__textBold'>strony internetowe__ materiały do social media__
                            materiały graficzne do internetu__ materiały promocyjne__ materiały POS__
                            szablony prezentacji__ plakaty__ etykiety__ opakowania__ gadżety__ logo__
                            animacje__ koncepcje kreatywne
                                </p>
                            <p className='about__textLight'>Masz jakiś niekonwencjonalny projekt? Napisz!
                                </p>
                            <p className='about__textBold'>Olka
                                </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Fragment>
)

export default About;