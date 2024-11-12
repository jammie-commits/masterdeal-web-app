import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function LoginForm({ closeForm }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password,
            });

            // Assuming the response contains a JWT token
            const { access_token } = response.data;
            localStorage.setItem('access_token', access_token); // Save JWT to localStorage

            // Close the form on successful login
            closeForm();
        } catch (err) {
            setLoading(false);
            setErrorMessage('Invalid email or password.');
        }
    };

    return (
        <FormContainer>
            <FormTitle>Login</FormTitle>
            <Form onSubmit={handleSubmit}>
                <Label>Email</Label>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Label>Password</Label>
                <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <SubmitButton type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </SubmitButton>
                <CloseButton onClick={closeForm}>Close</CloseButton>
            </Form>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const FormTitle = styled.h2`
    margin-bottom: 1rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
`;

const SubmitButton = styled.button`
    padding: 0.5rem;
    background-color: #48cae4;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    margin-bottom: 1rem;

    &:hover {
        background-color: #023e8a;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const CloseButton = styled.button`
    padding: 0.5rem;
    background-color: #ccc;
    color: white;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
        background-color: #999;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
    margin-bottom: 1rem;
`;
