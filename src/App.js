/*global google*/
import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'
import Search from './Search.js'

class App extends Component {

  state = {
    places: [
      {placeName:'Gdynia City Museum', lat:54.5160757, lng:18.5448994, id:1},
      {placeName:'Emigration Museum', lat:54.5331856, lng:18.5476213, id:2},
      {placeName:'Pier in Orłowo', lat:54.4835609, lng:18.567609, id:3},
      {placeName:'Gdynia Aquarium', lat:54.5194669, lng:18.5532754, id:4},
      {placeName:'ORP Błyskawica', lat:54.5194669, lng:18.5528247, id:5},
      {placeName:'Marina Gdynia', lat:54.518265, lng:18.5523634, id:6},
      {placeName:'Fountain in square Kościuszki', lat:54.5190304, lng:18.5482533, id:7},
      {placeName:'Overlook on the port', lat:54.531942, lng:18.5443668, id:8},
      {placeName:'Antoni Abraham monument ', lat:54.5217105, lng:18.5394693, id:9},
      {placeName:'Overlook Kamienna Góra ', lat:54.517844, lng:18.5406696, id:10},
      {placeName:'Cliff in Orłowo', lat:54.4870384, lng:18.5631346, id:11},
      {placeName:'Gdynia InfoBox', lat:54.5206806, lng:18.5450387, id:12},
      {placeName:'Józef Piłsudski monument', lat:54.5091416, lng:18.5391822, id:13},
      {placeName:'Boulevard', lat:54.5088721, lng:18.5438534, id:14},
      {placeName:'Gdynia City Beach', lat:54.5146755, lng:18.5490399, id:15},
      {placeName:'Gdynia Seafront Promenade', lat:54.5175618, lng:18.5556129, id:16},
      {placeName:'Gdynia Film Center', lat:54.5164517, lng:18.5428894, id:17}
    ],
    query: '',
    findplaces: [],
    clickFlag: false,
    markersArray : [],
    activeMarker : {},
    recentLocalMarkersFlag : true
  }

  componentDidMount() {
      window.initMap = this.initMap;
      window.props = this.props;
      window.state = this.state;
      window.app = this;
      loadJsMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyBlYjX2jC_PyB7Uo1E-lqnffUsySrZv3yY&callback=initMap');
  }

  updateQuery = (query) => {
   this.setState({ query: query })
  //  this.setState({markersArray: this.initMap()})
  }

  initMap = function(query) {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 54.5053387, lng: 18.538661},
      zoom: 13
    });

    let searchedPlacesMap = window.app.searchedPlaces(window.state.places, window.app.state.query);

    let localMarkers = [];

    for (let allPlaces = 0; allPlaces < searchedPlacesMap.props.children.length; allPlaces++) {
          let place = searchedPlacesMap.props.children[allPlaces];

          let infowindow = new google.maps.InfoWindow({
          content: place.props.children,
          });

          let marker = new google.maps.Marker({
            position: {lat: place.props.lat, lng: place.props.lng},
            map: map,
          });

          marker.addListener('click', function() {
                infowindow.open(map, marker);
          });

          localMarkers.push(marker);

    }
    console.log(localMarkers);
    console.log(this);
    console.log(window.app);

    //window.app.setState({markersArray: localMarkers});
    return localMarkers;

  }


  onListClick = (event) => {

    // this.setState({markersArray: this.initMap()})
    console.log(this.initMap());

    console.log(this.state.markersArray);

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

  searchedPlaces = function(placesLocation, query) {

    let searchedLocation = placesLocation.filter(
      (place) => {
        return place.placeName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    );
    if(placesLocation instanceof Array) {
      searchedLocation = (
        <ol className="places-list">
          {searchedLocation.map((place) => (
            <li key={place.placeName} lat={place.lat} lng={place.lng} aria-label={place.placeName} className="place"
              onClick={this.onListClick} id={place.placeName}>
              {place.placeName}
            </li>
          ))}
        </ol>
      )
    }

    return searchedLocation

  }

  render() {
    return (
      <div>
        <h1 id="main-taitel" aria-label="Gdynia awesome places" >Gdynia awesome places</h1>
        <div className="display-one-line ">
          <Search
            cityPlaces={this.state.places}
            searchQuery={this.state.query}
            updateQuery={this.updateQuery}
            searchedPlaces={this.searchedPlaces}
            onListClick={this.onListClick}>
          </Search>
          <Map
            cityPlaces={this.state.places}
            searchedPlaces={this.searchedPlaces}
            searchQuery={this.state.query}
            onListClick={this.onListClick}
            initMap={this.initMap}>
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

export default App;
