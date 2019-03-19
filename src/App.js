import React, { Component } from "react";
import beer from "./assets/beer.svg";
import sad from "./assets/sad.svg";
import "./App.css";
import { getAnswer, ANSWER_YES, ANSWER_NO } from "./lib/getAnswer";
import { AnswerPicto, AnswerText } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AnswerPicto />
          <AnswerText />
        </header>
      </div>
    );
  }
}

export default App;
