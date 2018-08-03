import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { addMarker, updateQuery } from './actions.js';

class Search extends Component {

  render() {

    return (
      <div className="search-places">
        <div className="search-places-bar">
          <div className="search-places-input-wrapper">
              <input type="text" placeholder="Search places" aria-label="Input search places"
                onChange={(event) => {
                  this.props.updateQuery(event.target.value)
                  }
                }/>
          </div>
        </div>
        <div className="search-places-results">
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {markers: state.markers };
};

// React Redux Method, acces to actions in component
const mapDispatchToProps = dispatch => {
  return {
    addMarker: marker => dispatch(addMarker(marker)),
    updateQuery: query => dispatch(updateQuery(query))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
