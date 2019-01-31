import React, { Component } from 'react';
import './App.css';

import ReactOuput from './components/ReactOutput'
import DisplayerUntilList from './DisplayUntilList'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {DisplayerUntilList([1, 2, 3, 4, 5], {max: 3}).display(ReactOuput())}

      </div>
    );
  }
}

export default App;
