import React, { Component } from 'react';

class FeatureCard extends Component {
  render() {
    return (
        <div className='container'>
          <div className="row">
            <div className="col s12 feature-card">
              <div className="feature-card-header">Bazaarvoice API Call</div>
              <div className="feature-card-content">
                <div className="feature-card-content-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="feature-card-content-right">
                  <span className='tag stag-prod'>Production/Staging</span>
                  <span className='tag present'>Present/Missing</span>
                  <span className='tag instance-name'>Instance Name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default FeatureCard;
