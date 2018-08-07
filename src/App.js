import React, { Component } from 'react';
import './App.css';
import MyMap from './MyMap.js';
import Search from './Search.js';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        <h1 id="main-title" aria-label="Gdynia awesome places" tabIndex={0} >Gdynia awesome places</h1>
        <div className="display-one-line ">
          <Search>
          </Search>
          <MyMap>
          </MyMap>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.query,
    places: state.places
  }
}

export default connect(mapStateToProps, null)(App);
