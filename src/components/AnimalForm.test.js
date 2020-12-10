
// CYPRESS.IO IS END-TO-END TESTING
// REACT-TESTING-LIBRAY IS INTEGRATION
// JEST IS TESTING FUNCTIONALITY TOOLS 

import React from 'react'
import {render,screen} from '@testing-library/react'
// USED IN PLACE OF FIRE EVENT
import userEvent from '@testing-library/user-event'
import AnimalForm from './AnimalForm'

//HELLO WORLD TYPE TEST
test('renders AnimalForm without errors', () => {
   render(<AnimalForm/>)
})

// rtl for arrange, act  jest for assert

test('user can fill out and submit form', ()=> {

   //ARRANGE
   render(<AnimalForm/>)

   //ACT -> USE RTL MATCHERS TO ACCESS FORM FIELDS
   //       ADD TEXT TO FIELD {use labelText and userEvent}
   //       CLICK BUTTON

   //QUERY FOR EACH INPUT
   const speciesInput = screen.getByLabelText(/species/i)
   const ageInput = screen.getByLabelText(/age/i)
   const notesInput = screen.getByLabelText(/notes/i)
   const button = screen.getByRole("button", { name: /submit/i})

   //ADD TEXT TO THE FIELDS
   userEvent.type(speciesInput, "Grizzly Bear");
   userEvent.type(ageInput, "6");
   userEvent.type(notesInput, "Notes for grizzly bear")

   //CLICK THE BUTTON
   userEvent.click(button)

   //ASSERT -> MAKE SURE ADDED ANIMAL IS DISPLAYED ON THE PAGE
   const grizzlyBear = screen.getByText(/grizzly bear/i) // no quotes
   expect(grizzlyBear).toBeInTheDocument 
})