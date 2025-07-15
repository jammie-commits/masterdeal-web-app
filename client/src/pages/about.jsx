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
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  padding: 3rem 0.5rem;
  background-color: #f4f4f4;
  min-height: 100vh;
  @media (max-width: 600px) {
    padding: 1.2rem 0.1rem;
  }
`;

const HeaderWrapper = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  background: #4caf50;
  padding: 2.2rem 1rem;
  color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
  max-width: 1100px;
  margin: 0 auto 2rem auto;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.05rem;
    font-weight: 600;
    @media (max-width: 900px) {
      font-size: 1.7rem;
    }
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #eaeaea;
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
    @media (max-width: 600px) {
      font-size: 0.95rem;
    }
  }
`;

const CEOWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: #fff;
  padding: 2.5rem 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 18px;
  margin-bottom: 2.5rem;
  max-width: 1100px;
  margin: 0 auto 2.5rem auto;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1.2rem 0.5rem;
    gap: 1.2rem;
  }
`;

const CEOImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid #4caf50;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 18px;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
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
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
    color: #333;
    @media (max-width: 900px) {
      font-size: 1.2rem;
    }
    @media (max-width: 600px) {
      font-size: 1.05rem;
    }
  }
  h4 {
    font-size: 1.1rem;
    color: #4caf50;
    margin-bottom: 1rem;
    font-weight: 600;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
    @media (max-width: 600px) {
      font-size: 0.95rem;
    }
  }
`;

const VisionMission = styled.div`
  margin-top: 1.2rem;
  h5 {
    font-size: 1.1rem;
    color: #388e3c;
    margin-bottom: 0.3rem;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.7rem;
    @media (max-width: 600px) {
      font-size: 0.93rem;
    }
  }
`;

const ServiceWrapper = styled.section`
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 14px;
  padding: 2.2rem 1rem;
  max-width: 1100px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
  @media (max-width: 900px) {
    padding: 1.2rem 0.5rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  margin-top: 2rem;
  @media (max-width: 900px) {
    gap: 0.7rem;
    margin-top: 1.2rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const ServiceItem = styled.div`
  background: #f4f4f4;
  border-radius: 8px;
  padding: 1.2rem 0.7rem;
  box-shadow: 0 2px 8px rgba(44,62,80,0.04);
  h3 {
    font-size: 1.1rem;
    color: #4caf50;
    margin-bottom: 0.5rem;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  p {
    font-size: 0.98rem;
    color: #555;
    @media (max-width: 600px) {
      font-size: 0.93rem;
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
