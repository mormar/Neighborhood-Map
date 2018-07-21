import React, { Component } from 'react';

class Search extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
   this.setState({ query: query })
  }

  render() {
    return (
      <div>
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

          </div>
        </div>
      </div>
    );
  }
}

export default Search;
