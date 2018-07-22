import React, { Component } from 'react';
import './index.css';

class Search extends Component {

  render() {
    // let searchedPlaces = this.props.cityPlaces.filter(
    //   (place) => {
    //     return place.placeName.toLowerCase().indexOf(this.props.searchQuery.toLowerCase()) !== -1;
    //   }
    // );
    // if(this.props.cityPlaces instanceof Array) {
    //   searchedPlaces = (
    //     <ol className="places-list">
    //       {searchedPlaces.map((place) => (
    //         <li key={place.placeName}>
    //           {place.placeName}
    //         </li>
    //       ))}
    //     </ol>
    //   )
    // }
    return (
      <div className="search-places">
        <div className="search-places-bar">
          <div className="search-places-input-wrapper">
              <input type="text" placeholder="Search places"
                value={this.props.searchQuery}
                onChange={(event) => {
                  this.props.updateQuery(event.target.value)
                  }
                }/>
          </div>
        </div>
        <div className="search-places-results">
          {this.props.searchedPlaces()}
        </div>
      </div>
    );
  }
}

export default Search;
