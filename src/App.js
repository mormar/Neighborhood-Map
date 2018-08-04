/*global google*/
import React, { Component } from 'react';
import './App.css';
import Map from './Map.js';
import Search from './Search.js';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {selectPlace} from './SelectPlace.js'

class App extends Component {

  // state = {
  //   query: '',
  //   clickFlag: false
  // }

  componentDidMount() {
      window.initMap = this.initMap;
      window.props = this.props;
      window.state = this.state;
      window.app = this;
      loadJsMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyBlYjX2jC_PyB7Uo1E-lqnffUsySrZv3yY&callback=initMap');
  }

  updateQuery = (query) => {
   this.setState({ query: query })
  }

  onListClick = (event) => {

    if(this.state.clickFlag === false) {
      console.log("Work");
      event.currentTarget.style.backgroundColor = '#3A89B2';
      this.setState({clickFlag: true});
    }
    else {
      event.currentTarget.style.backgroundColor = '#fff';
      this.setState({clickFlag: false});
    }
  }

  initMap = function(query) {
  //   let map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: 54.5053387, lng: 18.538661},
  //     zoom: 13
  //   });

    // {console.log(this.props.data.placeName)}


    // let searchedPlacesMap = window.app.searchedPlaces(window.props.data, window.app.state.query);

    // for (let allPlaces = 0; allPlaces < searchedPlacesMap.props.children.length; allPlaces++) {
    //       let place = searchedPlacesMap.props.children[allPlaces];
    //
    //       let infowindow = new google.maps.InfoWindow({
    //       content: place.props.children,
    //       });
    //
    //       let marker = new google.maps.Marker({
    //         position: {lat: place.props.lat, lng: place.props.lng},
    //         map: map,
    //       });
    //
    //       marker.addListener('click', function() {
    //             infowindow.open(map, marker);
    //       });
    //
    // }
  }

  render() {
    return (
      <div>
        <h1 id="main-taitel" aria-label="Gdynia awesome places" >Gdynia awesome places</h1>
        <div className="display-one-line ">
          <Search
            // cityPlaces={this.props.data}
            // searchQuery={this.state.query}
            // updateQuery={this.updateQuery}
            // searchedPlaces={this.searchedPlaces}
            // onListClick={this.onListClick}
             createListItems={this.createListItems}>
          </Search>
          <Map
            // cityPlaces={this.state.places}
            // searchedPlaces={this.searchedPlaces}
            // searchQuery={this.state.query}
            // onListClick={this.onListClick}
            // initMap={this.initMap}
            >
          </Map>
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
