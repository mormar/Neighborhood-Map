/*global google*/
import React, { Component } from 'react';
import './index.css';

class Map extends Component {

  componentDidMount() {
      window.initMap = this.initMap;
      loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBlYjX2jC_PyB7Uo1E-lqnffUsySrZv3yY&callback=initMap');
  }

  initMap = function() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 54.5053387, lng: 18.538661},
      zoom: 12
    });
  }

  render() {

    return (
      <div>
        <h1 id="main-taitel">Gdynia awesome places</h1>
        <div id="map"></div>
      </div>
    );
  }
}

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}

export default Map;
