import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    //Arrange:render our app
    render( <CheckoutForm />)
    //Act: Find our elements
    const firstNameInput = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstNameInput, "Jared");
    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastNameInput, "Hall");
    const addressInput = screen.getByLabelText(/Address:/i);
    userEvent.type(addressInput, "1234 test Address");
    const cityInput = screen.getByLabelText(/City:/i);
    userEvent.type(cityInput, "Orem");
    const stateInput = screen.getByLabelText(/State:/i);
    userEvent.type(stateInput, "Utah");
    const zipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(zipInput, "84057");
    const checkoutBtn = screen.getByRole(/button/i);
    userEvent.click(checkoutBtn);


    const successMsg = await screen.findByTestId(/successMessage/i)

    //Assert
    expect(successMsg).toBeInTheDocument();
});
