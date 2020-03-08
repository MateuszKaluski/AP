import React, { Component, useState, useEffect } from "react";
// import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import Nav__ItemProjectsRS from '../components/Nav__ItemProjectsRS';

// const [state, setState] = useState({
//     initial: false,
//     clicked: null,
//     menuName: "Menu"
//   })

//   // Toggle menu
//   const handleMenu = () => {
//     disableMenu();
//     if (state.initial === false) {
//       setState({
//         initial: null,
//         clicked: true,
//         menuName: "Close"
//       });
//       console.log(1);
//     } else if (state.clicked === true) {
//       setState({
//         clicked: !state.clicked,
//         menuName: "Menu"
//       });
//       console.log(2)
//     } else if (state.clicked === false) {
//       setState({
//         clicked: !state.clicked,
//         menuName: "Close"
//       });
//       console.log(3);
//     }
//   };


    const handleClick = () => {
    // handleClick() {

        const nav = document.querySelector('.nav--is-hide');
        nav.style.display = 'none'
    }

const Nav = () => {

//
// to dodajemy
//

const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  })

// State of our button
    const [disabled, setDisabled] = useState(false);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
      console.log(1);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
      console.log(2)
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
      console.log(3);
    }
  };

//Determine if out menu button should be disabled
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
          setDisabled(false);
        }, 1200);
      };

//
// to wywalamy

        // const contactStyle = {
        //     display: this.state.display ? 'block' : 'none',
        // }
//


        return (
            <>
                <div className='nav--is-hide'>
                    <section className='nav'>
                        <div className='container'>
                            <div className='row'>
                                <div className='nav__logo col-3'>

                                <Link className='logo' to={`/#`}>
                                    <img className='logo-size' src="../images/loga/6s.png" />
                                </Link>

                                </div>

                                <div className='nav__exit-button'>
                                    <img className='x-size' src="../images/loga/ix.png"
                                    />
                                </div>
                            </div>
                            <div className='row'>
{/*  */}
                                <div className='col-4'>
                                    <div
                                     className='contact--is-hide'>
                                        <ul className='contact'>
                                            <li className='contact__phone1'>
                                                889 683 275
                                            </li>
                                            <li className='contact__mail'>
                                                polek.aleksandra@gmail.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='col-8'>
                                    <ul className='nav__menu'>
                                        <li className='nav__item'>
                                            <Nav__ItemProjectsRS/>
                                        </li>
                                        <li className='nav__item'>
                                            <Link to={`/about/`}>
                                                o mnie
                                            </Link>
                                        </li>
                                        <li className='nav__item'>
{/*  */}
{/*  */}

                                            <div
                                            className='Menu'
                                            // onClick={this.handleClickContact}
                                            disabled={disabled}
                                            onClick={handleMenu}
                                            >
                                                kontakt
                                            </div>
{/*  */}
{/*  */}

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
// }




export default Nav;