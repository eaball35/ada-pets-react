import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  onSearch = (event) => {
    const search = event.target.value;
    this.setState ({
      search,
    });
    this.props.filterPetsCallBack(search)
  }

  render() {
    return (
      <section>
        <form  
          className="new-pet-form"
          onSubmit={this.onSubmitStudent}
        >
        <h3>Search Pets</h3>
        <div> 
          <label htmlFor="search"> Search: </label>
          <input name="search" type="text" onChange={this.onSearch} value={this.state.search} ></input>
          <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Search" />
        </div>

      </form>
      </section>
    );
  }
};

SearchBar.propTypes = {
  filterPetsCallBack: PropTypes.func.isRequired,
};

export default SearchBar;
