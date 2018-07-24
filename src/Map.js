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

    let searchedPlacesMap = window.props.searchedPlaces(window.props.cityPlaces, window.props.searchQuery);
    // console.log(searchedPlacesMap);
    // console.log(window.props.cityPlaces);
    // console.log(window.props.searchQuery);

    for (let allPlaces = 0; allPlaces < searchedPlacesMap.props.children.length; allPlaces++) {
          let place = searchedPlacesMap.props.children[allPlaces];
          console.log(searchedPlacesMap.props.children);
          console.log(place);

          let infowindow = new google.maps.InfoWindow({
          content: place.props.children.placeName,
          });

          let marker = new google.maps.Marker({
            position: {lat: place.props.lat, lng: place.props.lng},
            map: map,
          });

          marker.addListener('click', function() {
                infowindow.open(map, marker);
          });
    }
  }

  render() {
    // console.log(this.props.cityPlaces);
    // console.log(this.props.searchedPlaces)

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
