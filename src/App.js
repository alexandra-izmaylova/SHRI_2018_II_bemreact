import React, { Component } from 'react';
import './Page.css';
import {Header} from './Header/Header.js';
import { CentralPart } from './CentralPart/CentralPart';




class App extends Component {
  render() {
    return (
    <React.Fragment>
			<Header />
      <CentralPart />
    </React.Fragment>
    )
  }
}

export default App;
