import React, { Component } from "react";
import './app.scss'
import { Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Components
import { Footer } from './components/Footer';
import { NotFound } from './sections/NotFound';
import Projects from './sections/Projects';
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
        this.setState({ data: data })
      })
  }
  prepareProjects(projects) {
    return projects.map((project, index) => (
      <Route key={index} path={`/projects/${project.id}`}>
        {this.preloader()}
        <Project {...project} />
      </Route>
    ))
  }
  preloader() {
    return (
      <>
        <div className="preloader__left-side"></div>
        <div className="preloader__right-side"></div>
      </>
    )
  }

  render() {
    const { data } = this.state;
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div className="app">
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={1100} classNames="fade">
                  <Switch>
                    <Route path="/about">
                      {this.preloader()}
                      <About />
                    </Route>
                    {data && data.length
                      ? this.prepareProjects(data)
                      : null}
                    <Route exact path="/">
                      {this.preloader()}
                      <Projects />
                    </Route>
                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Footer />
            </div>
          )} />
      </Router>
    )
  }
}
export default App;
