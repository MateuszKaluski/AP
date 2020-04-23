import React, {Component, Fragment} from "react";
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './../sass/main.scss'; // adres do głównego pliku SASS

// Components
import NavTest from './components/NavTest';
import Footer from './components/Footer';

// Sections
import Projects from './sections/Projects';
import About from './sections/About';
import Project from './sections/Project'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route
                    render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition key={location.key} timeout={1100} classNames="fade">
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/projects/:id' component={Project}/>
                                <Route path='/about' component={About}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
            </HashRouter>
        )
    }
}
const Home = () => {

    return (
        <Fragment>
            <div className='preloader'>
                <div className='preloader__left-side'></div>
                <div className='preloader__right-side'></div>
                <NavTest/>
                <Projects/>
                <Footer/>
            </div>
        </Fragment>
    )
}

class NotFound extends Component {
    render() {
        return <h1>404,Nothing is here</h1 >;
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'))
