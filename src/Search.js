import React, { Component } from 'react';
import './index.css';

class Search extends Component {

  render() {

    return (
      <div className="search-places">
        <div className="search-places-bar">
          <div className="search-places-input-wrapper">
              <input type="text" placeholder="Search places" aria-label="Input search places"
                value={this.props.searchQuery}
                onChange={(event) => {
                  this.props.updateQuery(event.target.value)
                  }
                }/>
          </div>
        </div>
        <div className="search-places-results">
          {this.props.searchedPlaces(this.props.cityPlaces, this.props.searchQuery)}
          {console.log(this.props.searchedPlaces(this.props.cityPlaces, this.props.searchQuery))}
          {console.log(this.props.searchQuery)}
        </div>
      </div>
    );
  }
}

export default Search;
