import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './../sass/main.scss'; // adres do głównego pliku SASS

// Components
import NavTest from './components/NavTest';
import Footer from './components/Footer';

// Sections
import Projects from './sections/Projects';
import About from './sections/About';
import Project from './sections/Project'

class App extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch("https://api.nice-studio.pl/projects")
            .then(resp => resp.json())
            .then(data => {
                if (data && data.length) {
                    this.setState({ data })

                }
            })
    }
    render() {
        const { data } = this.state;
        console.log(data)
        return (
            <HashRouter>
                <Route
                    render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={1100} classNames="fade">
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    {data && data.length ? data.map((project, index) => (<Route key={index} path={`/projects/${project.id}`}>
                                        <Project {...project} />
                                    </Route>)) : null}
                                    <Route path='/about' component={About} />
                                    <Route component={NotFound} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
            </HashRouter>
        )
    }
}
const Home = () => (
    <Fragment>
        <div className='preloader'>
            <div className='preloader__left-side'></div>
            <div className='preloader__right-side'></div>
            <NavTest />
            <Projects />
            <Footer />
        </div>
    </Fragment>
)


const NotFound = () => (<h2>404,Nothing is here</h2>);



ReactDOM.render(<App />, document.getElementById('app'));
