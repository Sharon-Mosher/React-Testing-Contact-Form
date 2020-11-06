import React from 'react';
import{ fireEvent, render, screen } from '@testing-library/react';

import ContactForm from './ContactForm';

test('renders ContactForm', () => {
    render(<ContactForm/>)
});

test('user can fill out and submit the form', () => {
    render( <ContactForm/>);

    const firstNameInput = screen.getByPlaceholderText(/edd/i);
    const lastNameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    //fill out form (toptobottom)
    fireEvent.change(firstNameInput, { target: { value: 'sharon'} });
    fireEvent.change(lastNameInput, { target: { value: 'mosher'} });
    fireEvent.change(emailInput, { target: { value: 'anyone@anywhere.com'} });
    fireEvent.change(messageInput, { target: { value: ''} });

    //submit the form - click button -
    const button = screen.getByRole("button", {name: /submit/i });
    fireEvent.click(button);

   
})