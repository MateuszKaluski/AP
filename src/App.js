import React, { Component } from "react";
import './app.scss'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Components
import { Nav } from "./components/Nav";
import { Footer } from './components/Footer';
import { NotFound } from './sections/NotFound';
import Projects from './sections/Projects';
import About from './sections/About';
import Project from './sections/Project'
class App extends Component {
  state = {
    data: [],
    navColor: ''
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
        <Project {...project} />
      </Route>
    ))
  }
  getNavColor = (color) => {

  }
  render() {
    const { data, navColor } = this.state;
    return (
      <HashRouter>
        <Route
          render={({ location }) => (
            <div className="app">
              <Nav color={navColor} />
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={1100} classNames="fade">
                  <Switch>
                    <Route path="/about">
                      <About />
                    </Route>
                    {data && data.length ? this.prepareProjects(data) : null}
                    <Route exact path="/">
                      <Projects />
                    </Route>
                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Footer />

            </div>
          )} />
      </HashRouter>
    )
  }
}
export default App;
