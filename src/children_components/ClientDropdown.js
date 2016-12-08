import React, { Component } from 'react';

class ClientDropdown extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 search-bar z-depth-3">
          <div className="row">
            <div className="col m2"></div>
            <div className="input-field col s8 m7">
              <i className="material-icons prefix">input</i>
              <select>
                <option value="" disabled selected>Select Your Client</option>
                <option value="test1">Colin</option>
                <option value="test2">Greg</option>
                <option value="test3">Allie</option>
                <option value="test1">James</option>
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
