import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 style={{textAlign: 'center'}}>
          Turn this app into one which does NOT use local state (in components) but instead uses Redux
        </h3>
        <hr/>
        <Persons />
      </div>
    );
  }
}

export default App;
