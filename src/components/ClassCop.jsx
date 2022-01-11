import React, { Component } from "react";

export default class ClassCop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keadaan: false,
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            if (!this.state.keadaan) {
              this.setState({ keadaan: true });
            } else {
              this.setState({ keadaan: false });
            }
          }}
        >
          Press Me To Show A phone Number
        </a>
        {this.state.keadaan && <p>12093810928</p>}
      </div>
    );
  }
}
