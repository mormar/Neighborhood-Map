/*global google*/
import React, { Component } from 'react';
import './index.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import {connect} from 'react-redux';
import { onMarkerClick, addMarker, addMap } from './actions.js'

class MyMap extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.props.addMap(this.myRef)
  }

  render() {
    console.log(this.props.markers);
    return (
      <div className="map-view">
        <Map
          google = {this.props.google}
          initialCenter = {{lat: 54.5053387, lng: 18.538661}}
          zoom = {13}>
            {this.props.modifiedPlaces.map(place => (
              <Marker
                onClick={this.props.onMarkerClick}
                key={place.placeName}
                name={place.placeName}
                title={place.placeName}
                position={{lat: place.lat, lng: place.lng}}
                ref={this.myRef}
              />
            ))}
            <InfoWindow
              marker={this.props.activeMarker}
              visible={this.props.showingInfoWindow}>
                <div className="">
                  <div className="">{this.props.selectedPlace.name}</div>
                </div>
            </InfoWindow>
        </Map>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modifiedPlaces: state.modifiedPlaces,
    showingInfoWindow: state.showingInfoWindow,
    activeMarker: state.activeMarker,
    selectedPlace: state.selectedPlace,
    markers: state.markers
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    onMarkerClick: (place, marker, e) => dispatch(onMarkerClick(place, marker, e)),
    addMarker: (marker) => dispatch(addMarker(marker)),
    addMap: (map) => dispatch(addMap(map))
  }
}

const WrappedContainer = GoogleApiWrapper({
 apiKey: ("AIzaSyBlYjX2jC_PyB7Uo1E-lqnffUsySrZv3yY")
})(MyMap)
export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer)
