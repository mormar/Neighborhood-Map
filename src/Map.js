/*global google*/
import React, { Component } from 'react';
import './index.css';

class Map extends Component {
  state = {
    map: {}
  }

  componentDidMount() {
      window.initMap = this.initMap;
      loadJsMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyBlYjX2jC_PyB7Uo1E-lqnffUsySrZv3yY&callback=initMap');
  }

  initMap = function() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 54.5053387, lng: 18.538661},
      zoom: 13
    });

    // for (let allPlaces = 0; allPlaces < this.props.places.length; allPlaces++) {
    //       let place = this.props.places[allPlaces];
    //
    //       let infowindow = new google.maps.InfoWindow({
    //       content: place[0],
    //       });
    //
    //       let marker = new google.maps.Marker({
    //         position: {lat: place[1], lng: place[2]},
    //         map: map,
    //       });
    //
    //       marker.addListener('click', function() {
    //             infowindow.open(map, marker);
    //       });

    // }
  }

  render() {
    console.log(this.props.cityPlaces);
    
    return (
      <div>
        <h1 id="main-taitel">Gdynia awesome places</h1>
        <div id="map"></div>
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

export default Map;