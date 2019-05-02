import React from 'react';

import Logo from '../../assets/img/logo.png';
import './css/Layout.css';
import './css/Brand.css';

class Brand extends React.Component {
  render() {
    return(
      <div className="navbar-header navbar-dark d-none d-md-flex align-items-md-center">
        <div className="navbar-brand navbar-brand-md">
          <a href="/" className="d-inline-block">
            <img src={Logo}  alt="Logo"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Brand;
