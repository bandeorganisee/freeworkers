import React from 'react';
import Brand from './Brand';
import Navbar from './Navbar';

class Header extends React.Component {
  render() {
    return(
      <div className="navbar navbar-expand-md navbar-light">
        <Brand />
        <Navbar />
      </div>
    )
  }
}

export default Header;