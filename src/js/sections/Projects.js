import React, { Component } from "react";
import { Link, } from 'react-router-dom'

// sekcja 2
class Projects extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch("http://localhost:3000/projects")
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    data: data,
                })
            })
    }
    render() {
        const listProjects = this.state.data.map(p => (

            <div className='item' key={p.id}>
                <div className='item__foto'>
                    <Link className='item__link' to={`/projects/${p.id}`}>
                    <img src={p.imagesMin[0]} />
                    </Link>
                </div>
                <div className='item__text'>
                    <Link className='item__link' to={`/projects/${p.id}`}>
                        <ul className='wrapp'>
                        <li className='item__title' >{p.title}</li>
                        <li className='item__description' >{p.description}</li>
                        </ul>
                    </Link>
                </div>
            </div>

        ))
        return (
            <>
                <section className='projects'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='projects__list'>
                                    {listProjects}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Projects;