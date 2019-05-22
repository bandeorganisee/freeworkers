import React, { Component } from 'react';

import './assets/variable.css';
import './assets/style.css';
import Header from './components/layout/Header.jsx';
import Sidebar from './components/layout/Sidebar.jsx';

class App extends Component {
    render() {
      return (
        <div>
          <Header />
          <Sidebar />
        </div>
      )
    }
}

export default App;
