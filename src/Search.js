import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { updateQuery, filterPlaces } from './actions.js';

class Search extends Component {

  componentDidMount() {
    this.props.filterPlaces(this.localFilteredLocations(this.props.query), this.localModifiedPlaces());
  }

  localModifiedPlaces = () => {
    let modifiedPlaces = this.props.places.filter(
      (place) => {
        return place.placeName.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1;
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
            <li key={place.placeName} lat={place.lat} lng={place.lng} aria-label={place.placeName} className="place"
              onClick={(event) => {
                this.props.map.map((marker, index) => {
                  if(place.id === index) {
                    marker.props.onClick({name: marker.props.name}, marker.marker)
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
                  this.props.filterPlaces(this.localFilteredLocations(event.target.value), this.localModifiedPlaces());
                  }
                }/>
          </div>
        </div>
        <div className="search-places-results">
          {this.props.itemList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {places: state.places,
          itemList: state.itemList,
          query: state.query,
          map: state.map};
};

// React Redux Method, acces to actions in component
const mapDispatchToProps = dispatch => {
  return {
    updateQuery: query => dispatch(updateQuery(query)),
    filterPlaces: (places, query) => dispatch(filterPlaces(places, query))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
