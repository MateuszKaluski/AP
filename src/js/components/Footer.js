import React, { Component } from "react";

class Footer extends Component {

    render() {

        return (
            <>
                <footer className='footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='company__data col-12'>
                                <div className='data__textBoldContainer'>
                                    <div className='data__textBold'>__</div>
                                    <div className='data__textBold'>Aleksandra Polek Nice Studio</div>
                                </div>
                                <div className='data__textLightContainer'>
                                    {/*  */}

                                        <div className='textLight__col col-4'>
                                        <div className='data__textLightLeftBox'>
                                            <div className='data__textLight'>NIP:</div>
                                            <div className='data__textLight'>REGON:</div>
                                        </div>
                                        <div className='data__textLightRightBox'>
                                            <div className='data__textLight'>9442265881</div>
                                            <div className='data__textLight'>384672584</div>
                                        </div>
                                        </div>

                                        <div className='textLight__col col-4'>
                                        <div className='data__textLightLeftBox'>
                                            <div className='data__textLight'>Tel:</div>
                                            <div className='data__textLight'>Mail:</div>
                                        </div>
                                        <div className='data__textLightRightBox'>
                                            <div className='data__textLight'>889683275</div>
                                            <div className='data__textLight'>polek.aleksandra@gmail.com</div>
                                        </div>
                                        </div>

                                        <div className='textLight__col col-4'>
                                        <div className='data__textLightLeftBox'>
                                            <div className='data__textLight'>Adres:</div>
                                            <div className='data__textLight'></div>
                                        </div>
                                        <div className='data__textLightRightBox'>
                                            <div className='data__textLight'>ul.Zimnowiec 24</div>
                                            <div className='data__textLight'>32-052 Radziszów</div>
                                        </div>
                                        </div>



                                    {/* <div className='data__textLightLeftBox'>

                                        <div className='data__textLight'>NIP:</div>
                                        <div className='data__textLight'>REGON:</div>

                                        <div className='data__textLight'>Tel:</div>
                                        <div className='data__textLight'>Mail:</div>

                                        <div className='data__textLight'>Adres:</div>
                                        <div className='data__textLight'></div>
                                    </div>
                                    <div className='data__textLightRightBox'>
                                        <div className='data__textLight'>9442265881</div>
                                        <div className='data__textLight'>384672584</div>

                                        <div className='data__textLight'>889683275</div>
                                        <div className='data__textLight'>polek.aleksandra@gmail.com</div>

                                        <div className='data__textLight'>ul.Zimnowiec 24</div>
                                        <div className='data__textLight'>32-052 Radziszów</div>
                                    </div> */}


                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;