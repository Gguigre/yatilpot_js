import React, { Component } from "react";
import beer from "../../assets/beer.svg";
import sad from "../../assets/sad.svg";
import { getAnswer, ANSWER_YES, ANSWER_NO } from "../../lib/getAnswer";

export class AnswerPicto extends Component {
  render() {
    const answer = getAnswer();
    return (
      <img
        src={answer === ANSWER_YES ? beer : answer === ANSWER_NO ? sad : beer}
        className={`App-logo ${answer === ANSWER_YES ? "Wiggle" : ""}`}
        alt="logo"
      />
    );
  }
}
