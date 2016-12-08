import React, { Component } from 'react';
import Header from './children_components/Header';
import UrlInputForm from './children_components/UrlInputForm';
import ClientDropdown from './children_components/ClientDropdown';
import FeatureCard from './children_components/FeatureCard';
import DownLow from './children_components/DownLow';

class App extends Component {
  render() {

    let clientList = ['Colin', 'Greg', 'Allie', 'James'];
    let featureList = ['Product Feed', 'Bazaarvoice API Call', 'Container Page', 'BVRR Div', 'BVRRSummary Div', "Schema.org Markup", "BV SEO"];

    return (
      <div>
        <Header />
        <ClientDropdown clients={clientList} />
        <UrlInputForm />
        { featureList.map( (feature) => { return <FeatureCard key={feature} title={feature} /> } ) }
      </div>
    );
  }
}

export default App;
