import React, { Component } from 'react'
import './Poster.css'

 class Poster extends Component {
    render() {
        return (
            <div>
                <img className="poster" src={`https://image.tmdb.org/t/p/w500${this.props.url}`}></img>
            </div>
        )
    }
}

export default Poster