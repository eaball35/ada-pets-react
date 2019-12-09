import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
// const pets = importData.pets;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: pets[0],
    };
    console.log(pets);
  }
  
  onSelectPet = (id) => {
    this.setState ({
      currentPet: pets[id]
    })
  }
  
  addPetCallback = (pet) => {
    this.state.petList.push(pet)
    this.setState({
      PetList,
    }
    )
  }

  render () {
    const { currentPet } = this.state;
    const { petList } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>
          
          { < PetDetails currentPet={currentPet} /> }
        
        <section className="pet-list-wrapper">
          { < PetList pets={petList} onSelectPet={this.onSelectPet} /> }
        </section>
        <section className="new-pet-form-wrapper">
          { <NewPetForm addPetCallback={this.addPetCallback} /> }
        </section>
      </main>
    );
  }
}

export default App;
