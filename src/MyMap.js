/*global google*/
import React, { Component } from 'react';
import './index.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MyMap extends Component {

  // componentDidUpdate() {
  //     this.props.initMap();
  // }

  render() {

    return (
      <div className="map-view">
        <Map
          google = {this.props.google}
          initialCenter = {{lat: 54.5053387, lng: 18.538661}}
          zoom = {13}>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
 apiKey: ("AIzaSyBlYjX2jC_PyB7Uo1E-lqnffUsySrZv3yY")
})(MyMap)
