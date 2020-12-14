import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header sticky-top">
        <h1 className="center">Top 10 movies of 2020</h1>
        <hr className="my-4"></hr>
      </div>
    );
  }
}
