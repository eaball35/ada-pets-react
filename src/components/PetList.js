import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {

  const petList = props.pets.map((pet, i) => {
    return (
      <PetCard
        key={i}
        {...pet}
        id={i}
        onSelectPet={() => props.onSelectPet(i)}
        onRemovePet={() => props.onRemovePet(i)}
      />
    );
  });

  return (
    <div className="card-group">
      {petList}
    </div>
  );
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
  onRemovePet: PropTypes.func,
};

export default PetList;
