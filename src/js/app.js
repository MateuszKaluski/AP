import React, { Component } from "react";
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    BrowserRouter,
  } from 'react-router-dom';

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';


import './../sass/main.scss'; // adres do głównego pliku SASS

// Components
import Nav from './components/Nav';
import NavTest from './components/NavTest';
//  czy to jest potrzebne?
// import NavSubpages from '../components/NavSubpages';
//
import Footer from './components/Footer';
// Sections
import Header from './sections/Header';
import Test from './sections/Test';
// import HeaderMax from './sections/HeaderMax';
import Projects from './sections/Projects';


import About from './sections/About';
import Project from './sections/Project'


// 
{/* <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
                <HashRouter>
                    <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/projects/:id' component={Project} />
                            <Route path='/about' component={About} />
                            <Route component={NotFound} />
                    </Switch>
                </HashRouter>
            </CSSTransition>
          </TransitionGroup>
        )} /> */}
// 

class App extends Component {
    render() {

        return (
        <BrowserRouter>
        <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                    key={location.key}
                    timeout={1100}
                    classNames="fade"
                    >
                        {/* <HashRouter> */}
                            <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/projects/:id' component={Project} />
                                    <Route path='/about' component={About} />
                                    <Route component={NotFound} />
                            </Switch>
                        {/* </HashRouter> */}
                    </CSSTransition>
                </TransitionGroup>
                )} />
        </BrowserRouter>
        )
    }
}
const Home = () => {
// class Home extends Component {

//     render() {

        return (
                <>
                    <div className='preloader'>
                        <div className='preloader__left-side'></div>
                        <div className='preloader__right-side'></div>
                    <NavTest/>
                    <Projects />
                    <Footer />
                    </div>
                    {/* <NavTest/>
                    <Projects />
                    <Footer /> */}
                </>
        )
    // }
}

class NotFound extends Component {
    render() {
      return <h1>404,Nothing is here</h1>;
    }
  }

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App />, document.getElementById('app')
    )
})




{/* <div className='preloader'>
<div className='preloader__left-side'></div>
<div className='preloader__right-side'></div>
</div> */}