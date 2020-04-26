import React, {Fragment} from "react";

export const Footer = () => {
    return (

        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__headerContainer'>
                    <h2 className='footer__headerText'>Aleksandra Polek Nice Studio</h2>
                </div>
                <div className='footer__adressContainer'>
                    <div className='footer__content'>
                        <div className='footer__title'>
                            <div className='footer__item'>NIP:</div>
                            <div className='footer__item'>REGON:</div>
                        </div>
                        <div className='footer__text'>
                            <div className='footer__item'>9442265881</div>
                            <div className='footer__item'>384672584</div>
                        </div>
                    </div>

                    <div className='footer__content'>
                        <div className='footer__title'>
                            <div className='footer__item'>Tel:</div>
                            <div className='footer__item'>Mail:</div>
                        </div>
                        <div className='footer__text'>
                            <div className='footer__item'>889683275</div>
                            <div className='footer__item'>polek.aleksandra@gmail.com</div>
                        </div>
                    </div>

                    <div className='footer__content'>
                        <div className='footer__title'>
                            <div className='footer__item'>Adres:</div>
                            <div className='footer__item'></div>
                        </div>
                        <div className='footer__text'>
                            <div className='footer__item'>ul.Zimnowiec 24</div>
                            <div className='footer__item'>32-052 Radziszów</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
