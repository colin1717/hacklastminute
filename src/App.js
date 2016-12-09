import React, { Component } from 'react';
import Header from './children_components/Header';
import UrlInputForm from './children_components/UrlInputForm';
import ClientDropdown from './children_components/ClientDropdown';
import FeatureCard from './children_components/FeatureCard';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();

    this.state = {
      siteData: ''
    }
  }

  render() {

    let clientList = ['Colin', 'Greg', 'Allie', 'James'];
    let featureList = ['Product Feed', 'Bazaarvoice API Call', 'Container Page', 'BVRR Div', 'BVRRSummary Div', "Schema.org Markup", "BV SEO"];

    return (
      <div>
        <Header />
        <ClientDropdown clients={clientList} fetchData={this._fetchData.bind(this)} />
        <UrlInputForm />
        { featureList.map( (feature) => { return <FeatureCard key={feature} title={feature} /> } ) }
      </div>
    );
  }
  _fetchData() {
    $.ajax({
      method: 'GET',
      url: "http://127.0.0.1:8000/clients/craftsy/get/",
      success: function(data){
        console.log(data);
      }
    })
  }
}

export default App;
