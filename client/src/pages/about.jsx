import React from 'react';
import styled from 'styled-components';
import ceoImage from '../assets/CEO.jpeg'; // CEO image
import service1 from '../assets/image5.jpeg';
import service2 from '../assets/image7.jpeg';
import service3 from '../assets/image13.jpeg';
import service4 from '../assets/image9.jpeg';

const servicesData = [
  {
    // icon: service1,
    title: 'Get Best Prices',
    subTitle: 'Pay a deposit of 50k and complete the rest on 6-12 months.',
  },
  {
    // icon: service2,
    title: 'Policy Control',
    subTitle: 'Regulated under the Lands Act of Kenya, making us very reliable and trustworthy.',
  },
  {
    // icon: service3,
    title: 'Flexible Payment',
    subTitle: 'Enjoy flexible payment options to suit your needs.',
  },
  {
    // icon: service4,
    title: 'Find The Best Properties',
    subTitle: 'Find the best serviced properties in a developing community.',
  },
];

const About = () => {
  return (
    <MainWrapper id="about">
      <Header />
      <CEOSection />
      <Services />
      <Footer />
    </MainWrapper>
  );
};

// Header Component
const Header = () => (
  <HeaderWrapper>
    <h2>Welcome to Masterdeal Properties</h2>
    <p>
      Our mission is to provide the best properties and services to our clients
      with integrity and innovation.
    </p>
  </HeaderWrapper>
);

// CEO Section
const CEOSection = () => (
  <CEOWrapper>
    <CEOImageWrapper>
      <CEOImage src={ceoImage} alt="Dennis Wamatu, CEO" />
    </CEOImageWrapper>
    <CEOInfo>
      <h3>Dennis Wamatu</h3>
      <h4>CEO - MASTERDEAL PROPERTIES LTD</h4>
      <VisionMission>
        <h5>Our Vision</h5>
        <p>
          To be the most trusted and innovative real estate company, providing
          exceptional service and creating value for our clients and
          stakeholders.
        </p>
        <h5>Our Mission</h5>
        <p>
          To offer our clients world-class properties and investment
          opportunities through integrity, innovation, and a customer-first
          approach.
        </p>
      </VisionMission>
    </CEOInfo>
  </CEOWrapper>
);

// Services Section
const Services = () => (
  <ServiceWrapper>
    <h2>Our Services</h2>
    <p>
      We are dedicated to offering you the best services in the real estate
      industry.
    </p>
    <ServiceGrid>
      {servicesData.map(({ title, subTitle }, index) => (
        <ServiceCard key={index} title={title} subTitle={subTitle} />
      ))}
    </ServiceGrid>
  </ServiceWrapper>
);

// Service Card Component
const ServiceCard = ({ title, subTitle }) => (
  <ServiceItem>
    <h3>{title}</h3>
    <p>{subTitle}</p>
  </ServiceItem>
);

// Footer Component
const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <p>&copy; {new Date().getFullYear()} Masterdeal Properties. All rights reserved.</p>
      <FooterLinks>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Terms of Service</FooterLink>
      </FooterLinks>
    </FooterContent>
  </FooterWrapper>
);

// Styled Components
const MainWrapper = styled.section`
  font-family: 'Roboto', sans-serif;
  padding: 5rem 1rem;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const HeaderWrapper = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #4caf50, #388e3c);
  padding: 3rem 2rem;
  color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
  max-width: 1100px;
  margin: 0 auto;

  h2 {
    font-size: 3.5rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.1rem;
    font-weight: 600;

    @media screen and (max-width: 720px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.3rem;
    color: #eaeaea;
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto;

    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;

const CEOWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: #fff;
  padding: 4rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 30px;
  margin-bottom: 4rem;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
  }
`;

const CEOImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  border-radius: 50%;
  border: 5px solid #66cc66;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px;
`;

const CEOImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CEOInfo = styled.div`
  flex: 1;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;

    @media screen and (max-width: 720px) {
      font-size: 2rem;
    }
  }

  h4 {
    font-size: 1.8rem;
    color: #66cc66;
    margin-bottom: 2rem;

    @media screen and (max-width: 720px) {
      font-size: 1.5rem;
    }
  }
`;

const VisionMission = styled.div`
  text-align: left;
  margin-top: 2rem;

  h5 {
    font-size: 1.6rem;
    color: #333;
    font-weight: 500;
    margin-bottom: 1.2rem;

    @media screen and (max-width: 720px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.7;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;

const ServiceWrapper = styled.section`
  text-align: center;
  margin-top: 5rem;
  max-width: 1100px;
  margin: 0 auto;

  h2 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 1rem;

    @media screen and (max-width: 720px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 3rem;

    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceItem = styled.article`
  background-color: #fff;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 40px;
  }

  h3 {
    font-size: 1.6rem;
    color: #333;
    margin-top: 1.2rem;

    @media screen and (max-width: 720px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #555;
    margin-top: 0.8rem;

    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;



const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #4caf50, #ff5722);
  color: white;
  padding: 3rem 0;
  text-align: center;
  margin-top: 4rem;

  @media screen and (max-width: 720px) {
    padding: 2rem;
  }
`;

const FooterContent = styled.div`
  p {
    font-size: 1rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 720px) {
      font-size: 0.9rem;
    }
  }
`;

const FooterLinks = styled.div`
  margin-top: 1rem;

  a {
    color: white;
    margin: 0 0.5rem;
    font-size: 0.9rem;

    @media screen and (max-width: 720px) {
      display: block;
      margin: 0.5rem 0;
    }
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffccbc;
  }
`;

export default About;
