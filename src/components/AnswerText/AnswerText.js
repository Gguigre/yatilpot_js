import React, { Component } from "react";
import { getAnswer, ANSWER_YES, ANSWER_NO } from "../../lib/getAnswer";

export class AnswerText extends Component {
  render() {
    const answer = getAnswer();
    return (
      <p>
        {answer === ANSWER_YES
          ? "Oui bien sûr"
          : answer === ANSWER_NO
          ? "NON"
          : "Presque..."}
      </p>
    );
  }
}
