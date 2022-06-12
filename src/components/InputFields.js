import React, { Component } from 'react';

class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      type: true,
    };
  }

  displayElement(type) {
    if (type) {
      return (
        <input
          onKeyDown={(event) => {
            const text = event.target.value;
            this.setState({ userInput: text });
          }}
          onSubmit={() => this.setState({ type: false })}
          type="text"
        ></input>
      );
    }
    if (!type) {
      return <h5>{this.state.userInput}</h5>;
    }
  }

  render() {
    return <this.displayElement type={this.state.type} />;
  }
}

export default InputFields;
