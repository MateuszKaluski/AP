import React, { Component } from "react";
import "./app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// Components
import { Footer } from "./components/Footer";
import { NotFound } from "./sections/NotFound";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Project from "./sections/Project";
import Video from "./videos/start.mp4";
class App extends Component {
  state = {
    data: [],
    isEndAnimation: false,
  };

  componentDidMount() {
    window.innerWidth < 800 && this.setState({ isEndAnimation: true });
    fetch("https://api.nice-studio.pl/projects/")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ data: data });
      });
    setTimeout(() => this.setState({ isEndAnimation: true }), 10000);
  }
  prepareProjects(projects) {
    return projects.map((project, index) => (
      <Route key={index} path={`/projects/${project.id}`}>
        {this.preloader()}
        <Project {...project} />
      </Route>
    ));
  }

  preloader() {
    return (
      <>
        <div className="preloader__left-side"></div>
        <div className="preloader__right-side"></div>
      </>
    );
  }
  handleEnd = () => {
    this.setState({ isEndAnimation: true });
  };
  render() {
    const { data, isEndAnimation } = this.state;

    return (
      <Router>
        <Route
          render={({ location }) => (
            <div className="app">
              {!isEndAnimation ? (
                <div className="startVideo">
                  <video onEnded={this.handleEnd} autoPlay src={Video}></video>
                </div>
              ) : (
                <>
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={1100}
                      classNames="fade"
                    >
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
                </>
              )}
            </div>
          )}
        />
      </Router>
    );
  }
}
export default App;
