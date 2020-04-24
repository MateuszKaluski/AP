import React, {Component} from "react";
import './app.scss'
import {HashRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// Components
import {NavTest} from "./components/NavTest";

import {NotFound} from './sections/NotFound';
import {Home} from './sections/Home';
import About from './sections/About';
import Project from './sections/Project'
class App extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch("https://api.nice-studio.pl/projects/")
            .then(resp => resp.json())
            .then(data => {
                this.setState({data: data})
            })
    }
    render() {
        const {data} = this.state;
        return (
            <HashRouter>
                <Route
                    render={({location}) => (
                    <div className="app">
                        <NavTest/>
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={1100} classNames="fade">
                                <Switch>
                                    <Route path="/about">
                                        <About/>
                                    </Route>
                                    {data && data.length
                                        ? data.map((project, index) => (
                                            <Route key={index} path={`/projects/${project.id}`}>
                                                <Project {...project}/>
                                            </Route>
                                        ))
                                        : null}
                                    <Route exact path="/">
                                        <Home/>
                                    </Route>
                                    <Route component={NotFound}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                )}/>
            </HashRouter>
        )
    }
}
export default App;
