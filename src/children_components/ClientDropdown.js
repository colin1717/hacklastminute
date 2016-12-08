import React, { Component } from 'react';

class ClientDropdown extends Component {
  render() {
    let clients = this.props.clients;
    return (
      <div className="row">
        <div className="col s12 search-bar z-depth-3">
          <div className="row">
            <div className="col m2"></div>
            <div className="input-field col s8 m7">
              <i className="material-icons prefix">input</i>
              <select defaultValue='default'>
                <option value="default" disabled>Select Your Client</option>
                { clients.map((client) => { return <option key={client} value={client}>{client}</option> }) }
              </select>
            </div>
            <div className="col s2 m3">
              <a className="waves-effect waves-light btn submit-btn teal accent-4">Submit</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ClientDropdown;
