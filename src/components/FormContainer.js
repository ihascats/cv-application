import React, { Component } from 'react';
import InputFields from './InputFields';

class FormContainer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <InputFields />
      </form>
    ); //
  }
}

export default FormContainer;
