import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

class Brand extends React.Component {
  render() {
    return(
      <div class="navbar-header navbar-dark d-none d-md-flex align-items-md-center">
        <div className="navbar-brand navbar-brand-md">
          <Link to="/" className="d-inline-block">
            <img src={Logo}  alt="Logo"/>
          </Link>
        </div>
      </div>
    )
  }
}

export default Brand;