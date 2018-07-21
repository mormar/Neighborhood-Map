/*global google*/
import React, { Component } from 'react';
import './index.css';

class Map extends Component {
  state = {
    map: {}
  }

  componentDidMount() {
      window.initMap = this.initMap;
      window.props = this.props;
      loadJsMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyBlYjX2jC_PyB7Uo1E-lqnffUsySrZv3yY&callback=initMap');
  }

  initMap = function() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 54.5053387, lng: 18.538661},
      zoom: 13
    });

    for (let allPlaces = 0; allPlaces < window.props.cityPlaces.length; allPlaces++) {
          let place = window.props.cityPlaces[allPlaces];

          let infowindow = new google.maps.InfoWindow({
          content: place.placeName,
          });

          let marker = new google.maps.Marker({
            position: {lat: place.lat, lng: place.lng},
            map: map,
          });

          marker.addListener('click', function() {
                infowindow.open(map, marker);
          });
    }
  }

  render() {
    console.log(this.props.cityPlaces);

    return (
      <div className="map-view">
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
