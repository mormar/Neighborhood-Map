import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { updateQuery, filterPlaces } from './actions.js';

class Search extends Component {

  componentDidMount() {
    this.props.filterPlaces(this.props.places, this.props.query);
  }

  render() {

    return (
      <div className="search-places">
        <div className="search-places-bar">
          <div className="search-places-input-wrapper">
              <input type="text" placeholder="Search places" aria-label="Input search places"
                onChange={(event) => {
                  this.props.updateQuery(event.target.value)
                  this.props.filterPlaces(this.props.places, event.target.value)
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
          query: state.query};
};

// React Redux Method, acces to actions in component
const mapDispatchToProps = dispatch => {
  return {
    updateQuery: query => dispatch(updateQuery(query)),
    filterPlaces: (places, query) => dispatch(filterPlaces(places, query))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
