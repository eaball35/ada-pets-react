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
      currentPet: undefined,
      filteredPets : pets,
    };
    console.log(pets);
  }
  
  onSelectPet = (id) => {
    this.setState ({
      currentPet: pets[id]
    });
  }

  onRemovePet = (id) => {
    this.state.petList.splice(id, 1);
    let current = this.state.currentPet;
    
    if (this.state.currentPet.id - 1 === id) {
      current = undefined;
    }
    
    this.setState ({
      petList: this.state.petList,
      currentPet: current,
    });
  }
  
  addPetCallback = (pet) => {
    this.state.petList.push(pet)
    this.setState({
      PetList,
    });
  }

  filterPetsCallBack = (search) => {
    // let searchPets = []
    // const s = /search/
    // this.state.petList.forEach( pet => {
    //   if (pet.name )
    // });

    // this.setState({
    //   filteredPets: searchPets
    // });
  }


  render () {
    const { currentPet } = this.state;
    const { petList } = this.state;
    let details 

    if (currentPet) {
      details = < PetDetails currentPet={currentPet} />;
    }

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar filterPetsCallBack={this.filterPetsCallBack}/>
        </section> 
            {details}
        
        <section className="pet-list-wrapper">
          { < PetList pets={petList} onSelectPet={this.onSelectPet} onRemovePet={this.onRemovePet}/> }
        </section>
        <section className="new-pet-form-wrapper">
          { <NewPetForm addPetCallback={this.addPetCallback} /> }
        </section>
      </main>
    );
  }
}

export default App;
