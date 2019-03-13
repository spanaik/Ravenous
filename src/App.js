import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/BusinessList/BusinessList';
import BusinessList from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar />
          <BusinessList /> 
        </div>
      );
  }
}

export default App;
