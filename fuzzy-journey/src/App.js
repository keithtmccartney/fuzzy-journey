import React, { Component } from 'react';
import Blockchain from './Blockchain';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main flex column center">
          <Blockchain />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
