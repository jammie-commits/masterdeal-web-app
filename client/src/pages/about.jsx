import React from 'react';
import styled from 'styled-components';
import ceoImage from '../assets/CEO.jpeg'; // Path to CEO's image
import service1 from '../assets/image5.jpeg';
import service2 from '../assets/image7.jpeg';
import service3 from '../assets/image13.jpeg';
import service4 from '../assets/image9.jpeg';

export default function About() {
    const data = [
        {
            icon: service1,
            title: 'Get Best Prices',
            subTitle: 'Value for your money',
        },
        {
            icon: service2,
            title: 'Policy Control',
            subTitle: 'Regulated under the Lands Act.',
        },
        {
            icon: service3,
            title: 'Flexible Payment',
            subTitle: 'Enjoy flexible payment through our app.',
        },
        {
            icon: service4,
            title: 'Find The Best Properties',
            subTitle: 'Find the best properties near you in a single click.',
        },
    ];

    return (
        <MainSection id="about">
            <Header>
                <h2>Welcome to Masterdeal Properties</h2>
                <p>Our mission is to provide the best properties and services to our clients with integrity and innovation.</p>
            </Header>

            <CEOSection>
                <CEOImageContainer>
                    <CEOImage src={ceoImage} alt="Dennis Wamatu" />
                </CEOImageContainer>
                <CEODetails>
                    <h3>Dennis Wamatu</h3>
                    <h4>CEO - MASTERDEAL PROPERTIES LTD</h4>
                    <VisionMission>
                        <h5>Our Vision</h5>
                        <p>
                            To be the most trusted and innovative real estate company, providing exceptional service and creating value for our clients and stakeholders.
                        </p>
                        <h5>Our Mission</h5>
                        <p>
                            To offer our clients world-class properties and investment opportunities through integrity, innovation, and a customer-first approach.
                        </p>
                    </VisionMission>
                </CEODetails>
            </CEOSection>

            <ServiceSection>
                <h2>Our Services</h2>
                <p>We are dedicated to offering you the best services in the real estate industry.</p>
                <ServiceGrid>
                    {data.map(({ icon, title, subTitle }, index) => (
                        <ServiceItem key={index}>
                            <Icon>
                                <img src={icon} alt={title} />
                            </Icon>
                            <h3>{title}</h3>
                            <p>{subTitle}</p>
                        </ServiceItem>
                    ))}
                </ServiceGrid>
            </ServiceSection>
        </MainSection>
    );
}

// Main Section Styling
const MainSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #00b140, #009900); /* Green gradient background */
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #009900, #66cc66);
  padding: 3rem 0;
  color: white;
  border-radius: 10px;
  
  h2 {
    font-size: 3.5rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #fff;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const CEOSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #e6f7e6, #b3e0b3); /* Soft green gradient */
  padding: 3rem;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const CEOImageContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #66cc66; /* Lighter green */
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px;
`;

const CEOImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CEODetails = styled.div`
  flex: 1;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.5rem;
    color: #66cc66;
    margin-bottom: 1rem;
  }
`;

const VisionMission = styled.div`
  text-align: left;
  margin-top: 2rem;

  h5 {
    font-size: 1.5rem;
    color: #333;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ServiceSection = styled.section`
  margin-top: 4rem;
  text-align: center;

  h2 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 2rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceItem = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s ease-in-out;
  text-align: center;
  background: linear-gradient(135deg, #e0e0e0, #ffffff);

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 30px;
  }

  h3 {
    font-size: 1.6rem;
    color: #333;
    margin: 1rem 0;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }

  &:nth-child(odd) {
    background: linear-gradient(135deg, #f9f9f9, #ffffff); /* Light Green */
  }

  &:nth-child(even) {
    background: linear-gradient(135deg, #d4f0d1, #ffffff); /* Soft Green */
  }

  img {
    height: 4rem;
    margin-bottom: 1rem;
    border-radius: 50%;
  }
`;

const Icon = styled.div`
  img {
    height: 4rem;
    margin-bottom: 1rem;
  }
`;
