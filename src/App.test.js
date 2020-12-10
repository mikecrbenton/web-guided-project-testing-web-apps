import React from "react";
import App from "./App";
import{render, screen} from "@testing-library/react"

test('renders App withour errors', ()=> {
   render(<App/>);
})

test("renders the app header", () => {
   // ARRANGE/SETUP  rtl
   render(<App/>);  //  const {getByText} = render() // can dereference is one way to get elements


   // more functional way than dereferencing
   // ACT   rtl
   const header = screen.getByText(/Add New Animal/i);
   console.log(header)

   //ASSERT  jest
   expect(header).toBeInTheDocument();
   expect(header).toHaveTextContent(/add new animal/i);
   expect(header).toBeTruthy();

   // NEGATIVE ASSERTIONS
   expect(header).not.toBeNull();
   expect(header).not.toBeUndefined();
   expect(header).not.toHaveTextContent(/add animal/i);



})