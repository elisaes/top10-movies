import React, { Component } from "react";

import httpService from "./services/httpService";

import DetailPanel from "./components/detail-panel";
import Header from "./components/header/Header";
import ListPanel from "./components/list-panel";

import "./App.css";

class App extends Component {
  state = {
    moviesArr: [],
    currentSelection: null,
  };
  componentDidMount = async () => {
    console.log(process.env)
    const result = await httpService.get(`${process.env.REACT_APP_BACKEND_URL}/movies/top10`);
    const movies = result.data;
    this.setState({ moviesArr: movies });
  };
  handleClick = (data) => {
    this.setState({ currentSelection: data });
  };
  render() {
    const selectedMovie =
      this.state.currentSelection != null
        ? this.state.moviesArr[this.state.currentSelection].movie
        : null;

    return (
      <div className="container-app row theme">
        <Header />
        <ListPanel
          handleClick={this.handleClick}
          moviesArr={this.state.moviesArr}
        />
        <DetailPanel movie={selectedMovie} />
      </div>
    );
  }
}

export default App;
