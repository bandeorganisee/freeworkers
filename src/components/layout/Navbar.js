import React from 'react';
import Brand from '../layout/Brand';

import './css/Layout.css';
import './css/Navbar.css';

class Navbar extends React.Component {
    render() {
      return(
        <div className="navbar navbar-expand-md navbar-light">
          <Brand />
          <div className="collapse navbar-collapse content-boxed">
          </div>
        </div>
      );
    }
}

export default Navbar;