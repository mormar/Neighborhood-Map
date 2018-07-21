import React, { Component } from 'react';
import './index.css';

class Search extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
   this.setState({ query: query })
  }

  render() {
    let searchedPlaces;
    if(this.props.cityPlaces instanceof Array) {
      searchedPlaces = (
        <ol className="places-list">
          {this.props.cityPlaces.map((place) => (
            <li key={place.placeName}>
              {place.placeName}
            </li>
          ))}
        </ol>
      )
    }
    return (
      <div className="search-places">
        <div className="search-places-bar">
          <div className="search-places-input-wrapper">
            <input type="text" placeholder="Search places"
              value={this.state.query}
              onChange={(event) => {
                this.updateQuery(event.target.value)
                }
              }/>
          </div>
        </div>
        <div className="search-places-results">
          {searchedPlaces}
        </div>
      </div>
    );
  }
}

export default Search;
