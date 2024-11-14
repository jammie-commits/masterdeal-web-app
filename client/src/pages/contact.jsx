import React, { useState } from "react";
import styled from "styled-components";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Generate the WhatsApp message
    const message = `Hi, I am ${formState.name}. I would like to reach out regarding the following message:\n\nEmail: ${formState.email}\nMessage: ${formState.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/+254743979766?text=${encodedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, "_blank");

    // Clear form after sending the message
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <p>We’re here to help! Reach out with any questions or concerns.</p>

      <ContactForm onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
        </InputWrapper>

        <button type="submit">Send Message</button>
      </ContactForm>

      <ContactInfo>
        <h2>Our Contact Information</h2>
        <p>Email: <a href="mailto:info@masterdealproperties.com">info@masterdealproperties.com</a></p>
        <p>Phone: +254 743 979 766</p>
        <p>WhatsApp: +254 743 979 766</p>
      </ContactInfo>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    color: #4CAF50;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;

  button {
    background-color: #4CAF50;
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;

  label {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  input, textarea {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    max-width: 100%;
  }

  textarea {
    resize: vertical;
    height: 100px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  font-size: 1rem;
  color: #333;

  a {
    color: #4CAF50;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
