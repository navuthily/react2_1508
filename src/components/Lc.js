import React, { Component } from "react";
export default class Lc extends Component {
  constructor(props) {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({}));
    }, 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <>Hello nana</>;
  }
}
