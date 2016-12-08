import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UrlInputForm from './children_components/UrlInputForm.js';

class App extends Component {
  render() {
    return (
      <div>
        <UrlInputForm />
      </div>
    );
  }
}

export default App;
