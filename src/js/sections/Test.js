import React from 'react';
import { Spring } from 'react-spring/renderprops';
export default class Test extends React.Component {
  state = { toggle: false }
  onToggle = () => this.setState(state => ({ toggle: !state.toggle }))
  render() {
    const { toggle } = this.state;
    return (
      <div className="auto-main">
        <button onClick={this.onToggle}>Toggle</button>
        <div className="content">
          <Spring
            native
            force
            config={{ tension: 2000, friction: 100, precision: 1, duration: 100 }}
            from={{ height: toggle ? 0 : 'auto' }}
            to={{ height: toggle ? 'auto' : 0 }}>
            {props => (
              <animated.div className="item" style={props}>
                <section>
                  Hello world
                </section>
              </animated.div>
            )}
          </Spring>
        </div>
      </div>
    )
  }
}