import React, { Component } from "react";
import "./ListItem.css";
import Poster from "./Poster";

class ListItem extends Component {
  displayDetails = (e) => {
    // console.log(e.target.)
  };
  render() {
    return (
      <div
        className="container"
        onClick={() => this.props.onclick(this.props.position)}
      >
        <div className="row list-item">
          <div className="col-sm-1 my-auto ranking">{this.props.position + 1}</div>
          <div className="col-sm-5 col-md-4">
            <Poster url={this.props.poster} />
          </div>
          <div className="list-item-title col-sm-6 col-md-7  my-auto">
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
