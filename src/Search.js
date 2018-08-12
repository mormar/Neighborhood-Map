import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { updateQuery, filterPlaces } from './actions.js';

class Search extends Component {

  componentDidMount() {
    this.props.filterPlaces(this.localFilteredLocations(this.props.query), this.localModifiedPlaces(this.props.query));
  }

  componentDidCatch() {
    this.props.onError();
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
            <li key={place.placeName} lat={place.lat} lng={place.lng} aria-label={place.placeName} className="place" tabIndex={0} role="button"
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
      <div className="search-places">
        <div className="search-places-bar">
          <div className="search-places-input-wrapper">
              <input type="text" placeholder="Search places" aria-label="Input search places"
                onChange={(event) => {
                  this.props.updateQuery(event.target.value)
                  this.props.filterPlaces(this.localFilteredLocations(event.target.value), this.localModifiedPlaces(event.target.value));
                  }
                }/>
          </div>
        </div>
        <div className="search-places-results">
          {(this.props.onApiError === false) ? this.props.itemList : (<h6 className="places-list">Something went wrong please try reloading.</h6>)}
          <h6 className="places-list">Developed with usage of Foursquare</h6>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {places: state.places,
          itemList: state.itemList,
          query: state.query,
          map: state.map,
          onApiError: state.onApiError};
};

// React Redux Method, acces to actions in component
const mapDispatchToProps = dispatch => {
  return {
    updateQuery: query => dispatch(updateQuery(query)),
    filterPlaces: (places, query) => dispatch(filterPlaces(places, query))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
