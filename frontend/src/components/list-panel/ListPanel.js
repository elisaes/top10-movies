import React, { Component } from "react";
import "./ListPanel.css";
import ListItem from "./ListItem";

export default class ListPanel extends Component {
  render() {
    return (
      <div className="col list-container">
        <div className="list">
          {this.props.moviesArr.map((movie) => {
            return (
              <ListItem
                key={movie.movie.title}
                title={movie.movie.title}
                position={movie.position}
                poster={movie.movie.poster_path}
                onclick={this.props.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
