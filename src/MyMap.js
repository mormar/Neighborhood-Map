import React, { Component } from 'react';
import './index.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import {connect} from 'react-redux';
import { onMarkerClick, addMarker, addMap, onError } from './actions.js'

class MyMap extends Component {

  constructor(props) {
    super(props);
    this.myRef = [];
  }

  componentDidMount() {
    this.props.addMap(this.myRef)
  }

  componentDidCatch(error, info) {
    this.props.onError();
  }

  render() {

    const style = {
      width: '100%',
      height: '100%',
      position: 'relative'
    }

    return (
      <div className="map-view" role="application">
        {this.props.hasError === false  ? (
        <Map
          google = {this.props.google}
          initialCenter = {{lat: 54.5053387, lng: 18.538661}}
          zoom = {13}
          style = {style}
          className = {'map-size'}>
            {this.props.modifiedPlaces.map((place, index) => (
              <Marker
                onClick={this.props.onMarkerClick}
                key={place.placeName}
                name={place.placeName}
                title={place.placeName}
                position={{lat: place.lat, lng: place.lng}}
                ref={(ref) => this.myRef[index] = ref}
                aria-label={place.placeName}
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
      ): (<h1 id="error-title">Something went wrong please try reloading.</h1>)}
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
    markers: state.markers,
    hasError: state.hasError
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    onMarkerClick: (place, marker, e) => dispatch(onMarkerClick(place, marker, e)),
    addMarker: (marker) => dispatch(addMarker(marker)),
    addMap: (map) => dispatch(addMap(map)),
    onError: () => dispatch(onError())
  }
}

const WrappedContainer = GoogleApiWrapper({
 apiKey: ("AIzaSyBlYjX2jC_PyB7Uo1E-lqnffUsySrZv3yY")
})(MyMap)
export default connect(mapStateToProps, mapDispatchToProps)(WrappedContainer)
