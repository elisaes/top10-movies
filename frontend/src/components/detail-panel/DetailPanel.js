import React, { Component } from "react";
import Cast from "./Cast";
import "./DetailPanel.css";

class DetailPanel extends Component {
  render() {

    if (!this.props.movie) {
      return (
        <div className="col detail">
          <div className="msg center">
            Welcome to Top 10 movies. Click on one movie to see the details
          </div>
        </div>
      );
    }

    let { overview, cast, popularity, backdrop_path, title } = this.props.movie;
    return (
      <div className="col detail">
        <div className="container">
          <div className="card detail-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
              className="card-img-top"
              alt="movie-poster"
            ></img>
            <div className="card-body">
              <h5 className="card-title center detail-subtitle">{title}</h5>
              <div className="card-text">
                <div className="detail-subtitle">Overview:</div>
                <div className="overview">{overview}</div>
                <div className="detail-subtitle">Cast:</div>
                <Cast cast={cast} />

                <div className="detail-subtitle">Popularity:</div>
                <div>{popularity}</div>
                <div className="center">
                  <a href="https://gv.com.sg" className="btn btn-primary book">
                    Book this movie
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPanel;
