import React, { Component } from 'react';

class ClientDropdown extends Component {
  render() {

    return (
      <div className="row">
        <div className="col s12 search-bar z-depth-3">
          <div className="row">
            <div className="col m2"></div>
            <form onSubmit={ this.props.fetchData }>
              <div className="input-field col s8 m7">
                <i className="material-icons prefix">input</i>
                <input id="client-name" type='text' ref={(input) => this._client = input}/>
              </div>
              <div className="col s2 m3">
                <a className="waves-effect waves-light btn submit-btn teal accent-4" onClick={this.props.fetchData}>Submit</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ClientDropdown;
