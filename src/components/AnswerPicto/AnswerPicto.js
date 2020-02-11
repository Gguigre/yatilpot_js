import React, { Component } from "react";
import beer from "../../assets/beer.svg";
import sad from "../../assets/sad.svg";
import { getAnswer, ANSWER_YES, ANSWER_NO } from "../../lib/getAnswer";
import { EasterEgg } from "../EasterEgg";

export class AnswerPicto extends Component {
  state = {
    isEasterEgg: false
  };

  toggleImage = () => {
    this.setState(state => ({
      isEasterEgg: !state.isEasterEgg
    }));
    console.warn("toggle");
  };

  render() {
    const answer = getAnswer();
    return (
      <div onClick={this.toggleImage}>
        {this.state.isEasterEgg ? (
          <EasterEgg />
        ) : (
          <img
            src={
              answer === ANSWER_YES ? beer : answer === ANSWER_NO ? sad : beer
            }
            className={`App-logo ${answer === ANSWER_YES ? "Wiggle" : ""}`}
            alt="logo"
          />
        )}
      </div>
    );
  }
}
