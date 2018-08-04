/*global google*/
import React, { Component } from 'react';
import './index.css';

class Map extends Component {

  // componentDidUpdate() {
  //     this.props.initMap();
  // }

  render() {

    return (
      <div className="map-view">
        <div id="map"></div>
      </div>
    );
  }
}



export default Map;
