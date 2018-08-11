import React, { Component } from 'react';
import './App.css';
import MyMap from './MyMap.js';
import Search from './Search.js';
import {connect} from 'react-redux';
import {initPlaces, onApiError} from './actions.js';
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
          return {placeName: place.venue.name, lat: place.venue.location.lat, lng: place.venue.location.lng, id: place.venue.id, categories: place.venue.categories[0].name}
        })
        myInstance.props.initPlaces(places);
      },
      error: () => {
        this.props.onApiError();
      }
    })
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
    places: state.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initPlaces: places => dispatch(initPlaces(places)),
    onApiError: () => dispatch(onApiError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
