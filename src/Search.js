import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class Search extends Component {

  // This is function which creates object with fields
  constructor(markers) {
    super();
    this.markers = markers;
  }

  render() {

    console.log(this.markers);
    return (
      <div className="search-places">
        <div className="search-places-bar">
          <div className="search-places-input-wrapper">
              <input type="text" placeholder="Search places" aria-label="Input search places"
                // value={this.props.searchQuery}
                onChange={(event) => {
                  // this.props.updateQuery(event.target.value)
                  }
                }/>
          </div>
        </div>
        <div className="search-places-results">
          {/* {this.props.searchedPlaces(this.props.cityPlaces, this.props.searchQuery)} */}
          {/* {this.props.searchedPlaces(this.props.placeName, this.props.searchQuery)} */}
          {/* {console.log(this.props.cityPlaces)} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {markers: state.markers };
};

export default connect(mapStateToProps)(Search);
