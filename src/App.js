import React, { Component } from "react";
import beer from "./assets/beer.svg";
import sad from "./assets/sad.svg";
import "./App.css";
import { getAnswer, ANSWER_YES, ANSWER_NO } from "./lib/getAnswer";

class App extends Component {
  renderAnswerText = () => {
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
  };

  renderAnswerPicto = () => {
    const answer = getAnswer();
    return (
      <img
        src={answer === ANSWER_YES ? beer : answer === ANSWER_NO ? sad : beer}
        className={`App-logo ${answer === ANSWER_YES ? "Wiggle" : ""}`}
        alt="logo"
      />
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.renderAnswerPicto()}
          {this.renderAnswerText()}
        </header>
      </div>
    );
  }
}

export default App;
