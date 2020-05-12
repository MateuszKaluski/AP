import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Nav } from "../components/Nav";
class Projects extends Component {
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
    prepareProjects() {
        return this
            .state
            .data
            .map(p => (
                <div className='projects__project' key={p.id}>
                    <Link className='projects__linkWrapper' to={`/projects/${p.id}`}>
                        <div className='projects__foto'>
                            <img alt={p.title} src={p.imagesMin[0]} />
                        </div>
                        <div className='projects__projectHeader'>
                            <div className='projects__header--container'>
                                <h2 className='projects__header'>{p.title}</h2>
                            </div>
                            <div className='projects__header--container'>
                                <p className='projects__description'>{p.description}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))
    }
    render() {

        return (
            <Fragment>
                <Nav src="projects" />
                <section className='projects'>
                    <div className='projects__container'>
                        {this.prepareProjects()}
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Projects;