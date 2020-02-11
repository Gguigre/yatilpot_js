import React, { Component } from "react";
import depardieu from "../../assets/depardieu.jpeg";

export class EasterEgg extends Component {
  render() {
    return (
      <div>
        <img src={depardieu} alt="easter off of gerard depardieu" />
      </div>
    );
  }
}
