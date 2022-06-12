import React, { Component } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return <FormContainer />;
  }
}

export default App;
