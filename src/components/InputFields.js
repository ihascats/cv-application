import React, { Component } from 'react';

class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      type: true,
    };
  }

  userInputState(text) {
    this.setState({ userInput: text });
  }

  typeState() {
    this.setState({ type: false });
  }

  render() {
    if (this.state.type) {
      return (
        <input
          onInput={(event) => {
            const text = event.target.value;
            this.userInputState(text);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') this.typeState();
          }}
          type="text"
        ></input>
      );
    }
    if (!this.state.type) {
      return <h5>{this.state.userInput}</h5>;
    }
  }
}

export default InputFields;
