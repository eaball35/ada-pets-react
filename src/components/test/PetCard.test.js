import React from 'react';
import { render, cleanup } from '@testing-library/react'
import PetCard from '../PetCard';

const petCard = <PetCard
  id= ''
  name='Denali'
  species=''
  about=''
  location='Seattle, WA'
  onSelectPet={() => { }}
  onRemovePet={() => { }}
/>

describe('NewPetForm', () => {  
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      petCard
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  test('that it shows the dogs name & location', () => {
    // Arrange-Act
    const result = render(
      petCard
    );
    // Assert
    expect(result.getByText(/Denali/)).toBeDefined();
    expect(result.getByText(/Seattle, WA/)).toBeDefined();
    // Add test for location display
  });


  // src/components/test/PetCard.test.js
  test('The "selectPetCallback" function is called when the `select` button is clicked on', () => {

    // Arrange
    // Create a mock callback function
    const selectPet = jest.fn();

    // Render a PetCard
    const container = render(<PetCard
      id={1}
      name={"Samson"}
      species={"Cat"}
      about={"A very awesome cat!  Dont' touch the hair"}
      location={"Seattle, WA"}
      onRemovePet={() => { }}
      onSelectPet={selectPet}
    />);

    // Act
    // Find the "Select" button
    const selectButton = container.getByText(/Select/);
    // Trigger a 'click' event
    selectButton.click();

    // Assert
    // Verify that the callback function was called.
    expect(selectPet).toHaveBeenCalled();
  });

  test('The "removePetCallback" function is called when the `remove` button is clicked on', () => {

    // Arrange
    // Create a mock callback function
    const removePet = jest.fn();

    // Render a PetCard
    const container = render(<PetCard
      id={1}
      name={"Samson"}
      species={"Cat"}
      about={"A very awesome cat!  Dont' touch the hair"}
      location={"Seattle, WA"}
      onRemovePet={removePet}
      onSelectPet={() => { }}
    />);

    // Act
    // Find the "Select" button
    const selectButton = container.getByText(/Remove/);
    // Trigger a 'click' event
    selectButton.click();

    // Assert
    // Verify that the callback function was called.
    expect(removePet).toHaveBeenCalled();
  });
  // afterEach(cleanup());
});