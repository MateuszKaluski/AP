import React, { Component, Fragment } from "react";
import './app.scss'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Components
import { Footer } from './components/Footer'
import NavTest from './components/NavTest'
// Sections
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
        this.setState({
          data: data,
        })
      })
  }
  render() {
    const { data } = this.state;
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
export default App;

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