import React, { Component } from "react";
import "./App.css";
import { getAnswer, ANSWER_YOU_ARE_LATE } from "./lib/getAnswer";
import { AnswerPicto, AnswerText } from "./components";
import { Deglingos } from "./components/Deglingos/Deglingos.component";

class App extends Component {
  state = {
    deglingosMode: false
  };
  componentDidMount() {
    if (getAnswer() === ANSWER_YOU_ARE_LATE) {
      window.location.replace(
        "https://www.google.com/maps/place/C'D%C3%A9Cal%C3%A9/@48.8844574,2.3174386,17z/data=!4m12!1m6!3m5!1s0x47e66fb23363c55b:0xe401d4ced0cb52b9!2zQydEw6lDYWzDqQ!8m2!3d48.8844574!4d2.3196273!3m4!1s0x47e66fb23363c55b:0xe401d4ced0cb52b9!8m2!3d48.8844574!4d2.3196273"
      );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button
            style={{
              position: "absolute",
              right: 16,
              top: 16,
              width: 70,
              height: 30,
              backgroundColor: "transparent",
              borderColor: "transparent"
            }}
            onClick={() =>
              this.setState({ deglingosMode: !this.state.deglingosMode })
            }
          />
          {!this.state.deglingosMode ? (
            <React.Fragment>
              <AnswerPicto />
              <AnswerText />
            </React.Fragment>
          ) : (
            <Deglingos />
          )}
        </header>
      </div>
    );
  }
}

export default App;
