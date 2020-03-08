import React, { Component } from "react";
import ReactDOM from 'react-dom';

// Router
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './../sass/main.scss'; // adres do głównego pliku SASS

// Components
import Nav from './components/Nav';
//  czy to jest potrzebne?
// import NavSubpages from '../components/NavSubpages';
//
import Footer from './components/Footer';
// Sections
import Header from './sections/Header';
// import HeaderMax from './sections/HeaderMax';
import Projects from './sections/Projects';
import About from './sections/About';
import Project from './sections/Project'

class App extends Component {
    render() {

        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/projects/:id' component={Project} />
                    <Route path='/About' component={About} />
                </Switch>
            </HashRouter>
        )
    }
}

class Home extends Component {

    render() {

        return (
            <>
                <Header />
                <Nav />
                <Projects />
                {/* <About /> */}
                <Footer />
            </>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App />, document.getElementById('app')
    )
})




