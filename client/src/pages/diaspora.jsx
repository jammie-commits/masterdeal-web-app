import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaFileAlt, FaSearch, FaHandshake, FaMoneyBillWave, FaRulerCombined, FaFileSignature, FaCheckCircle } from "react-icons/fa";
import Footer from '../components/Footer';

export default function Diaspora() {
  const steps = [
    { icon: <FaMapMarkerAlt />, text: "Identify and confirm the land of interest with a trusted agent." },
    { icon: <FaFileAlt />, text: "Request and review the title deed to confirm ownership." },
    { icon: <FaSearch />, text: "Conduct a search with the Ministry of Lands to verify authenticity." },
    { icon: <FaHandshake />, text: "Negotiate the terms and price, and draft the sale agreement." },
    { icon: <FaMoneyBillWave />, text: "Pay a deposit to secure the land (usually 10%)." },
    { icon: <FaRulerCombined />, text: "Complete the land survey and other due diligence steps." },
    { icon: <FaFileSignature />, text: "Finalize the transaction with full payment and receive the transfer documents." },
    { icon: <FaCheckCircle />, text: "Register the land under your name at the Ministry of Lands." },
  ];

  return (
    <DiasporaContainer>
      <h1>Buying Land in Kenya - Diaspora Guide</h1>
      <p>If you’re interested in buying land in Kenya from abroad, here’s a simple guide to get you started.</p>

      <h2>Process for Buying Land in Kenya:</h2>
      <SlideContainer>
        {steps.map((step, index) => (
          <Slide key={index}>
            <IconContainer>{step.icon}</IconContainer>
            <SlideText>{step.text}</SlideText>
          </Slide>
        ))}
      </SlideContainer>

      <ContactSection>
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please feel free to reach out:</p>
        <ContactInfo>
          <p>Email: <a href="mailto:info@masterdealproperties.com">info@masterdealproperties.com</a></p>
          <p>
            WhatsApp or Call: 
            <a href="https://wa.me/+254743979766" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', textDecoration: 'none', fontWeight: 'bold', marginRight: '1.2rem' }}>WhatsApp</a>
            <a href="tel:+254743979766" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: 'bold' }}>+254 743 979 766</a>
          </p>
        </ContactInfo>
      </ContactSection>
      <Footer />
    </DiasporaContainer>
  );
}

const DiasporaContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    color: #000;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    color: #000;
    margin-top: 2rem;
    font-size: 1.8rem;
  }

  p {
    color: #555;
    max-width: 600px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Slide = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 2rem;
  width: 280px;
  height: 220px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 15px rgba(255, 165, 0, 0.5);
    background: rgba(255, 165, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  font-size: 2.5rem;
  color: #FFA500; /* Orange color for the icons */
  margin-bottom: 1rem;
`;

const SlideText = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ContactSection = styled.div`
  margin-top: 3rem;
  text-align: center;
  padding: 2rem;
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
