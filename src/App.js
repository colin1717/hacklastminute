import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UrlInputForm from './children_components/UrlInputForm';
import ClientDropdown from './children_components/ClientDropdown';

class App extends Component {
  render() {
    return (
      <div>
        <ClientDropdown />
        <UrlInputForm />
      </div>
    );
  }
}

export default App;
