// Diaspora.js
import React from "react";
import styled from "styled-components";

export default function Diaspora() {
  return (
    <DiasporaContainer>
      <h1>Buying Land in Kenya - Diaspora Guide</h1>
      <p>If you’re interested in buying land in Kenya from abroad, here’s a simple guide to get you started.</p>
      
      <h2>Process for Buying Land in Kenya:</h2>
      <ul>
        <li>Identify and confirm the land of interest with a trusted agent.</li>
        <li>Request and review the title deed to confirm ownership.</li>
        <li>Conduct a search with the Ministry of Lands to verify authenticity.</li>
        <li>Negotiate the terms and price, and draft the sale agreement.</li>
        <li>Pay a deposit to secure the land (usually 10%).</li>
        <li>Complete the land survey and other due diligence steps.</li>
        <li>Finalize the transaction with full payment and receive the transfer documents.</li>
        <li>Register the land under your name at the Ministry of Lands.</li>
      </ul>

      <ContactSection>
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please feel free to reach out:</p>
        <ContactInfo>
          <p>Email: <a href="mailto:info@masterdealproperties.com">info@masterdealproperties.com</a></p>
          <p>Phone: +254 700 123 456</p>
          <p>WhatsApp: +254 700 123 456</p>
        </ContactInfo>
      </ContactSection>
    </DiasporaContainer>
  );
}

const DiasporaContainer = styled.div`
  padding: 2rem;
  text-align: left;

  h1 {
    color: #4CAF50;
    font-size: 2.5rem;
    text-align: center;
  }

  h2 {
    color: #4CAF50;
    margin-top: 2rem;
    font-size: 1.8rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    color: #555;
    font-size: 1.1rem;
  }

  li {
    margin: 0.5rem 0;
  }
`;

const ContactSection = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  p {
    font-size: 1rem;
    color: #333;
    
    a {
      color: #4CAF50;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
