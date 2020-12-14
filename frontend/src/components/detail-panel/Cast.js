import React, { Component } from "react";

class Cast extends Component {
  displayCast = () => {
    const elements = [];
    for (let i = 0; i < 5 && i < this.props.cast.length; i++) {
      elements.push(<div key={this.props.cast[i].name}>{this.props.cast[i].name}</div>);
    }
    return elements;
  };
  render() {
    return <div>{this.displayCast()}</div>;
  }
}

export default Cast;
