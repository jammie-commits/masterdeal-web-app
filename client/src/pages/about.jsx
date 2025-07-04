import React from 'react';
import styled from 'styled-components';
import ceoImage from '../assets/CEO.jpeg'; // CEO image
import service1 from '../assets/image5.jpeg';
import service2 from '../assets/image7.jpeg';
import service3 from '../assets/image13.jpeg';
import service4 from '../assets/image9.jpeg';
import Footer from '../components/Footer';

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

const AboutContainer = styled.div`
  min-height: 100vh;
  padding-top: 90px;
  background: var(--gray-light);
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-orange) 100%);
  color: var(--white);
  padding: 6rem 2rem;
  text-align: center;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  p {
    font-size: 1.3rem;
    opacity: 0.9;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
    
    h1 {
      font-size: 2.5rem;
    }
    
    p {
      font-size: 1.1rem;
    }
  }
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  background: var(--white);
  border-radius: 15px;
  padding: 3rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-dark);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, var(--primary-green), var(--primary-orange));
    border-radius: 2px;
  }
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  h3 {
    font-size: 1.8rem;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text-light);
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: var(--text-dark);
    font-size: 1.1rem;
    
    svg {
      color: var(--primary-green);
      font-size: 1.2rem;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--light-green);
  border-radius: 15px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-orange);
    transform: translateY(-5px);
  }
  
  h3 {
    font-size: 2.5rem;
    color: var(--primary-orange);
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  
  p {
    color: var(--text-dark);
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const ValuesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--white);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-green);
    transform: translateY(-5px);
  }
  
  .icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-orange) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--white);
    font-size: 2rem;
    transition: transform 0.3s ease;
  }
  
  &:hover .icon {
    transform: scale(1.1);
  }
  
  h3 {
    font-size: 1.5rem;
    color: var(--text-dark);
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text-light);
    line-height: 1.6;
  }
`;

const TeamSection = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  background: var(--white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .member-info {
    padding: 1.5rem;
    
    h4 {
      font-size: 1.3rem;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    p {
      color: var(--primary-orange);
      font-weight: 500;
    }
  }
`;

export default About;
