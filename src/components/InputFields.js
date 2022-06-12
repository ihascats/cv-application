import React, { Component } from 'react';
import './componentCss/InputFields.css';

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
    this.setState({ type: !this.state.type });
  }

  render() {
    if (this.state.type) {
      return (
        <div>
          <label>{this.props.label}</label>
          <input
            onInput={(event) => {
              const text = event.target.value;
              this.userInputState(text);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && event.target.value) this.typeState();
            }}
            onBlur={(event) => {
              if (event.target.value) this.typeState();
            }}
            type={this.props.typeName}
            value={this.state.userInput}
          ></input>
        </div>
      );
    }
    if (!this.state.type) {
      return (
        <div>
          <label>{this.props.label}</label>
          <p>
            {this.state.userInput}
            <button
              onClick={() => {
                this.typeState();
              }}
            >
              Edit
            </button>
          </p>
        </div>
      );
    }
  }
}

export default InputFields;
