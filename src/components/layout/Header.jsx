import React from 'react';
import Brand from './Brand';
import Navbar from './Navbar';

class Header extends React.Component {
  render() {
    return(
      <div className="navbar navbar-expand-md navbar-light">
        <Brand
          brandLogo="https://i.goopics.net/92K7V.png"
          brandDescription="Your logo here"
        />
        <Navbar />
      </div>
    )
  }
}

export default Header;