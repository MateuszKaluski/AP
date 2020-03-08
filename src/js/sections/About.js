import React, { Component } from "react";
import { Link, } from 'react-router-dom';

import HeaderSubpage from './HeaderSubpage';
import NavSubpages from '../components/NavSubpages';
import Footer from '../components/Footer';


// sekcja 3
class About extends Component {
    render() {
        return (
            <>
                <HeaderSubpage />
                <NavSubpages />
                <section className='about' id='about'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 about__foto'>
                                <img className='foto-size' src="../images/autor/2.jpg" />

                                {/* kombinacja z vide1 */}

                                {/* <video src="/images/amway artistry/AA1.mp4" controls autoPlay loop height="300" width="400">
                                </video> */}

                                {/* kombinacja z vide2 */}
                                {/* <video autoplay controls>
                                    <source src="/images/amway artistry/AA1.mp4" type="video/mp4"> </source>
                                    <source src="/images/amway artistry/AA1.mp4" type="video/mp4"> </source>
                                </video> */}
                            </div>
                            <div className='col-6 about__info'>
                                <h1 className='about__autor'>__Cześć</h1>
                                <p className='about__textLight'>Jestem projektantką. Kreowanie jest dla mnie najlepszą formą spędzania czasu. Uwielbiam poszerzać swoją wiedzę, dlatego każdy projekt, z różnych dziedzin jest dla mnie wyzwaniem i pasją.
                                </p>
                                <p className='about__textBold'>Projektuję:
                                </p>
                                <p className='about__textBold'>strony internetowe__ materiały do social media__ materiały graficzne do internetu__ materiały promocyjne__ materiały POS__ szablony prezentacji__ plakaty__ etykiety__ opakowania__ gadżety__ logo__ animacje__ koncepcje kreatywne
                                </p>
                                <p className='about__textLight'>Masz jakiś niekonwencjonalny projekt? Napisz!
                                </p>
                                <p className='about__textBold'>Olka
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default About;