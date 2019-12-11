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

  isEmailValid = () => {
    return this.state.name.match(/\S+@\S+/)
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitPet = (event) => {
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
        onSubmit={this.onSubmitPet}
      >
        <h3>Add a Pet</h3>
        { /* A form should go here! */ }
        <div> 
          <label htmlFor="name"> Name: </label>
          <input 
            name="name" 
            id="name" 
            type="text" 
            onChange={this.onInputChange} 
            value={this.state.name}
            className={this.isEmailValid() ? "valid-email" : "invalid-email"}>
          </input>
        </div>
        <div> 
          <label htmlFor="species"> Species: </label>
          <input name="species" type="text" onChange={this.onInputChange} value={this.state.species} ></input>
        </div>
        <div> 
          <label htmlFor="location"> Location: </label>
          <input name="location" type="text" onChange={this.onInputChange} value={this.state.location} ></input>
        </div>
        <div> 
          <label htmlFor="image"> Image: </label>
          <input name="image" type="text" onChange={this.onInputChange} value={this.state.image} ></input>
        </div>
        <div> 
          <label htmlFor="about"> About: </label>
          <input name="about" type="text" onChange={this.onInputChange} value={this.state.about} ></input>
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