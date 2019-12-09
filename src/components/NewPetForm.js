import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      location: '',
      image: '',
      about: '',
    };
  }

  onNameChange = (event) => {
    const name = event.target.value;
    this.setState ({
      name,
    });
  };

  onSpeciesChange = (event) => {
    const species = event.target.value;
    this.setState ({
      species,
    });
  };

  onLocationChange = (event) => {
    const location = event.target.value;
    this.setState ({
      location,
    });
  };

  onImageChange = (event) => {
    const image = event.target.value;
    this.setState ({
      image,
    });
  };

  onAboutChange = (event) => {
    const about = event.target.value;
    this.setState ({
      about,
    });
  };

  onSubmitStudent = (event) => {
    event.preventDefault();
    
    const pet = {
      name: this.state.name,
      species: this.state.species,
      location: this.state.location,
      image: this.state.image,
      about: this.state.about,
    };

    this.props.addPetCallback(pet);

    this.setState ({
      name: '',
      species: '',
      location: '',
      image: '',
      about: '',
    });
  };

  
  render() {
    return (
      <form  
        className="new-pet-form"
        onSubmit={this.onSubmitStudent}
      >
        <h3>Add a Pet</h3>
        { /* A form should go here! */ }
        <div> 
          <label htmlFor="name"> Name: </label>
          <input name="name" id="name" type="text" onChange={this.onNameChange} value={this.state.name} ></input>
        </div>
        <div> 
          <label htmlFor="species"> Species: </label>
          <input name="species" type="text" onChange={this.onSpeciesChange} value={this.state.species} ></input>
        </div>
        <div> 
          <label htmlFor="location"> Location: </label>
          <input name="location" type="text" onChange={this.onLocationChange} value={this.state.location} ></input>
        </div>
        <div> 
          <label htmlFor="image"> Image: </label>
          <input name="image" type="text" onChange={this.onImageChange} value={this.state.image} ></input>
        </div>
        <div> 
          <label htmlFor="about"> About: </label>
          <input name="about" type="text" onChange={this.onAboutChange} value={this.state.about} ></input>
        </div>
        
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;