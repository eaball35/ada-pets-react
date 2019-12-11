import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PetCard.css';

import speciesEmoji from '../speciesEmoji';

class PetCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="card pet-card">

        <section className="pet-card--header">

          {speciesEmoji(this.props.species)} {this.props.id} - {this.props.name}
          <button
            className="btn btn-primary pet-card--select-pet-btn"
            onClick={this.props.onSelectPet}
          >
            Select
          </button>
          <button
            type="button"
            className="btn btn-danger pet-card--remove-btn"
            aria-label="Remove"
            onClick={this.props.onRemovePet}
          >
            Remove
          </button>
        </section>
        <section className="pet-card--body">
          {this.props.about.length > 128 ? `${ this.props.about.substring(0, 128) }...` : this.props.about}
        </section>
        <section className="pet-card--footer text-muted">
          {this.props.location}
        </section>
      </div>
    );
  };
};

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  about: PropTypes.string,
  location: PropTypes.string,
  onRemovePet: PropTypes.func.isRequired,
  onSelectPet: PropTypes.func.isRequired,
}

export default PetCard;