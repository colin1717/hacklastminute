import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UrlInputForm from './children_components/UrlInputForm';
import ClientDropdown from './children_components/ClientDropdown';
import FeatureCard from './children_components/FeatureCard';

class App extends Component {
  render() {
    return (
      <div>
        <ClientDropdown />
        <UrlInputForm />
        <FeatureCard />
      </div>
    );
  }
}

export default App;
