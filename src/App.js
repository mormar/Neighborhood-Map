/*global google*/
import React, { Component } from 'react';
import './App.css';
import MyMap from './MyMap.js';
import Search from './Search.js';
import {connect} from 'react-redux';

class App extends Component {

  // onListClick = (event) => {
  //
  //   if(this.state.clickFlag === false) {
  //     console.log("Work");
  //     event.currentTarget.style.backgroundColor = '#3A89B2';
  //     this.setState({clickFlag: true});
  //   }
  //   else {
  //     event.currentTarget.style.backgroundColor = '#fff';
  //     this.setState({clickFlag: false});
  //   }
  // }

  render() {
    return (
      <div>
        <h1 id="main-taitel" aria-label="Gdynia awesome places" >Gdynia awesome places</h1>
        <div className="display-one-line ">
          <Search
             createListItems={this.createListItems}>
          </Search>
          <MyMap>
          </MyMap>
        </div>
      </div>
    );
  }
}

function loadJsMap(src) {
    let ref = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}


const mapStateToProps = state => {
  return {
    query: state.query,
    places: state.places
  }
}

export default connect(mapStateToProps, null)(App);
