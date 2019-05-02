import React from 'react';
import { Brand } from '../layout';

class Navbar extends React.Component {
    render() {
      return(
        <div className="navbar navbar-expand-md navbar-light">
          <Brand />
        </div>
      );
    }
}

export default Navbar;