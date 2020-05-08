import React from "react";
import { render, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />)
    getByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText } = render(<CheckoutForm />);
  
    const firstNameInput = getByLabelText(/First Name:/i);
    const lastNameInput = getByLabelText(/Last Name:/i);
    const addressInput = getByLabelText(/Address:/i);
    const cityInput = getByLabelText(/City:/i);
    const stateInput = getByLabelText(/State:/i);
    const zipInput = getByLabelText(/Zip:/i);

    fireEvent.change(firstNameInput, {
      target: { name: 'firstName', value: 'devo' },
    });
    fireEvent.change(lastNameInput, {
      target: { name: 'lastName', value: 'hall' },
    });
    fireEvent.change(addressInput, {
      target: { name: 'address', value: '1111 grove st' },
    });
    fireEvent.change(cityInput, {
      target: { name: 'city', value: 'NY' },
    });
    fireEvent.change(stateInput, {
        target: { name: 'state', value: 'NY' },
      });
      fireEvent.change(zipInput, {
        target: { name: 'Zip', value: '11111' },
      });
    
  
    fireEvent.click(document.getElementById('submit'));
    
    getByText(/Your new green friends will be shipped to:/i)
});
