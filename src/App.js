import React, { Component } from 'react';
import './App.css';
import MyMap from './MyMap.js';
import Search from './Search.js';
import {connect} from 'react-redux';
import {initPlaces, onApiError, filterPlaces} from './actions.js';
import $ from 'jquery';

class App extends Component {

  componentDidMount(){
    this.initPlaces();
  }

  initPlaces = () => {
    let clientID = 'HMIBTFKLEUOI3BDXJJ3WNVKUYPNOWOLOYNVGS1G0IAGUCIY3'
    let clientSecret = 'DJH0CIZU1Y5I52OHT0ZT14VOX3Y5JMB0E45TNVHEHSPNMK11'
    const myInstance = this

    let url = `https://api.foursquare.com/v2/venues/explore?client_id=${clientID}&client_secret=${clientSecret}&v=20180323&near=Gdynia&limit=7&query=tourist`
    $.ajax({
      url: url,
      dataType: 'json',
      xhrFields: {
        withCredentials: false
      },
      success: function(data) {
        const places = data.response.groups[0].items.map((place, index) => {
          return {placeName: place.venue.name, lat: place.venue.location.lat, lng: place.venue.location.lng, id: place.venue.id, categories: place.venue.categories[0].name, address: place.venue.location.address }
        })
        myInstance.props.initPlaces(places);
        myInstance.props.filterPlaces(myInstance.localFilteredLocations(myInstance.props.query), myInstance.localModifiedPlaces(myInstance.props.query));
      },
      error: () => {
        this.props.onApiError();
      }
    })
  }

  localModifiedPlaces = (query) => {
    let modifiedPlaces = this.props.places.filter(
      (place) => {
        return place.placeName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    );
    return modifiedPlaces
  }

  localFilteredLocations = (query) => {
    let filteredLocations = this.props.places.filter(
      (place) => {
        return place.placeName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }
    );

    if(this.props.places instanceof Array) {
      filteredLocations = (
        <ol className="places-list">
          {filteredLocations.map((place) => (
            <li key={place.placeName} lat={place.lat} lng={place.lng} aria-label={place.placeName} className="place" tabIndex={0} role="button" aria-pressed="false"
              onKeyPress={(event) => {
                if(event.key === 'Enter'){
                  this.props.map.forEach((marker) => {
                    if(marker){
                      if(place.placeName === marker.props.title) {
                        marker.props.onClick({name: marker.props.name}, marker.marker)
                      }
                    }
                  })
                }
              }}

              onClick={(event) => {
                this.props.map.forEach((marker) => {
                  if(marker){
                    if(place.placeName === marker.props.title) {
                      marker.props.onClick({name: marker.props.name}, marker.marker)
                    }
                  }
                })
              }}>
              {place.placeName}
            </li>
          ))}
        </ol>
      )
    }
    return filteredLocations
  }

  render() {
    return (
      <div>
        <h1 id="main-title" aria-label="Gdynia awesome places" tabIndex={0} >Gdynia awesome places</h1>
        <div className="display-one-line ">
          <Search>
          </Search>
          <MyMap>
          </MyMap>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.query,
    places: state.places,
    map: state.map
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initPlaces: places => dispatch(initPlaces(places)),
    onApiError: () => dispatch(onApiError()),
    filterPlaces: (places, query) => dispatch(filterPlaces(places, query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
