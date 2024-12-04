import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaBars, FaMapMarkerAlt, FaBuilding, FaMoneyCheckAlt } from 'react-icons/fa';



import property1 from '../assets/p1.jpeg';
import property2 from '../assets/p-1.jpeg';
import property3 from '../assets/3-1.jpeg';
import property4 from '../assets/p3.jpeg';
import property5 from '../assets/5-1.jpeg';
import property6 from '../assets/phase 6.jpeg';
import property7 from '../assets/image1.jpeg';
import banner1 from '../assets/banner1.svg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/banner3.svg';
import banner4 from '../assets/banner4.svg';

// Property Data
const properties = [
  { id: 1, image: property1, title: 'Victory Garden Phase-1', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6-12 months' },
  { id: 2, image: property2, title: 'Victory Garden Phase-2', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6-12 months' },
  { id: 3, image: property3, title: 'Victory Garden Phase-3', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6-12 months' },
  { id: 4, image: property4, title: 'Victory Garden Phase-4', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6-12 months' },
  { id: 5, image: property5, title: 'Victory Garden Phase-5', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6-12 months' },
  { id: 6, image: property6, title: 'Victory Garden Phase-6', price: 'KES 250,000', description: 'New phase with better amenities and breathtaking views.', availability: 'Available', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6-12 months' },
  { id: 7, image: property7, title: 'Victory Garden Phase-7', price: 'KES 250,000', description: 'Prime location, new development with great potential.', availability: 'Available', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6-12 months' },
];

const HomePage = () => {
  const availableProperties = properties.filter((property) => property.availability === 'Available');
  const soldOutProperties = properties.filter((property) => property.availability === 'Sold Out');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      {/* Header */}
      <Header>
  <HeaderContent>
    <Logo>Invest now...</Logo>
    <NavMenu>
      <NavItem>
        <FaPhoneAlt size={16} />
        <span>+254 743 979 766</span>
      </NavItem>
      <NavItem>
        <FaEnvelope size={16} />
        <span>info@masterdeal.co.ke</span>
      </NavItem>
    </NavMenu>
  </HeaderContent>
</Header>

      {/* Main Image Slider */}
      <MainSlider>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          modules={[Autoplay, EffectFade]}
        >
          {[banner1, banner2, banner3, banner4].map((banner, index) => (
            <SwiperSlide key={index}>
              <BannerContainer>
                <SlideImage src={banner} alt={`Banner ${index + 1}`} />
              </BannerContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </MainSlider>

      {/* Featured Properties */}
      <FeaturedSection>
        <h2>
          <VerticalLine />
          FEATURED PROJECTS
        </h2>
        <PropertyGrid>
          {availableProperties.map((property) => (
            <PropertyCard key={property.id} to={`/property/${property.id}`}>
              <CardImageContainer>
                <PropertyImage src={property.image} alt={property.title} />
                <StatusBadge isAvailable={property.availability === 'Available'}>
                  {property.availability}
                </StatusBadge>
              </CardImageContainer>
              <CardBody>
                <h3>{property.title}</h3>
                <Price>{property.price}</Price>
                <Description>{property.description}</Description>
                <PropertyDetails>
                  <PropertyItem>
                    <FaBuilding size={20} />
                    <span>{property.size} Plots</span>
                  </PropertyItem>
                  <PropertyItem>
                    <FaMapMarkerAlt size={20} />
                    <span>{property.location}</span>
                  </PropertyItem>
                  <PropertyItem>
                    <FaMoneyCheckAlt size={20} />
                    <span>Deposit: {property.deposit}</span>
                  </PropertyItem>
                  <PropertyItem>
                    <FaMoneyCheckAlt size={20} />
                    <span>Balance: {property.balancePeriod}</span>
                  </PropertyItem>
                </PropertyDetails>
              </CardBody>
            </PropertyCard>
          ))}
        </PropertyGrid>
      </FeaturedSection>

      {/* Sold Out Projects */}
      <SoldOutProjects>
        <h2>
          <VerticalLine />
          SOLD OUT PROJECTS
        </h2>
        <PropertyGrid>
          {soldOutProperties.map((property) => (
            <PropertyCard key={property.id} to={`/property/${property.id}`}>
              <CardImageContainer>
                <PropertyImage src={property.image} alt={property.title} />
                <StatusBadge isAvailable={property.availability === 'Available'}>
                  {property.availability}
                </StatusBadge>
              </CardImageContainer>
              <CardBody>
                <h3>{property.title}</h3>
                <Price>{property.price}</Price>
                <Description>{property.description}</Description>
                <PropertyDetails>
                  <PropertyItem>
                    <FaBuilding size={20} />
                    <span>{property.size} Plots</span>
                  </PropertyItem>
                  <PropertyItem>
                    <FaMapMarkerAlt size={20} />
                    <span>{property.location}</span>
                  </PropertyItem>
                  <PropertyItem>
                    <FaMoneyCheckAlt size={20} />
                    <span>Deposit: {property.deposit}</span>
                  </PropertyItem>
                  <PropertyItem>
                    <FaMoneyCheckAlt size={20} />
                    <span>Balance: {property.balancePeriod}</span>
                  </PropertyItem>
                </PropertyDetails>
              </CardBody>
            </PropertyCard>
          ))}
        </PropertyGrid>
      </SoldOutProjects>

      {/* Footer */}
      <Footer>
  <FooterContent>
    <p>&copy; {new Date().getFullYear()} Masterdeal Properties. All rights reserved.</p>
    <SocialLinks>
      <SocialLink href="https://facebook.com" target="_blank" aria-label="Facebook">
        <FaFacebook size={20} />
      </SocialLink>
      <SocialLink href="https://twitter.com" target="_blank" aria-label="Twitter">
        <FaTwitter size={20} />
      </SocialLink>
      <SocialLink href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
        <FaLinkedin size={20} />
      </SocialLink>
    </SocialLinks>
    <FooterLinks>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Terms of Service</FooterLink>
    </FooterLinks>
  </FooterContent>
</Footer>

    </Container>
  );
};

export default HomePage;

// Styled Components

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
`;

const Header = styled.header`
  background: linear-gradient(to right, #4caf50, #ff5722);
  padding: 1.5rem 2rem;
  color: white;
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on mobile */
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// const MenuToggle = styled.div`
//   display: none;
//   @media (max-width: 768px) {
//     display: block;
//     cursor: pointer;
//   }
// `;

const NavMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center; /* Center-align items horizontally */
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: row; /* Ensure horizontal layout */
    background-color: transparent;
    position: static; /* Remove dropdown menu behavior on mobile */
    width: 100%; /* Use full width */
    padding: 0; /* Remove extra padding */
    box-shadow: none; /* Remove shadow */
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Spacing between icon and text */
  font-size: 1rem;
  font-weight: bold;
  color: white; /* Default text color */
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722; /* Highlight color on hover */
  }

  span {
    font-size: 0.9rem; /* Slightly smaller text for better fit */
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Adjust text size for small screens */
    gap: 0.25rem; /* Reduce spacing */
  }
`;

// const SocialLinks = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   padding: 1rem 0; /* Add spacing around social icons */
//   background-color: #f9f9f9; /* Light background for contrast */
//   border-radius: 0 0 10px 10px; /* Match the menu's rounded corners */

//   @media (max-width: 768px) {
//     justify-content: space-around; /* Even spacing for smaller screens */
//   }
// `;

const SocialLink = styled.a`
  color: #333; /* Default icon color */
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff5722; /* Highlight color on hover */
    transform: scale(1.2); /* Slightly enlarge icon on hover */
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust icon size for mobile */
  }
`;

const MainSlider = styled.div`
  position: relative;
  width: 100%;
  // height: vh;
  background: #fff;
`;

const BannerContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeaturedSection = styled.section`
  padding: 0rem 2rem;
  text-align: left;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    display: flex; /* Use flexbox to align the line and title horizontally */
    align-items: center; /* Vertically center the content */

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const VerticalLine = styled.div`
  width: 5px;
  height: 1.5rem;
  background-color: #4caf50;
  margin-right: 1rem; /* Adjust margin to properly space the title from the line */
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PropertyCard = styled(Link)`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to right, orange, white);
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ isAvailable }) => (isAvailable ? '#4caf50' : '#ff5722')};
  color: white;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-radius: 5px;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const PropertyDetails = styled.div`
  margin-top: 1rem;
`;

const PropertyItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const SoldOutProjects = styled.section`
  padding: 0rem 2rem;
  text-align: left;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    display: flex; /* Use flexbox to align the line and title horizontally */
    align-items: center; /* Vertically center the content */

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Footer = styled.footer`
  background: linear-gradient(to right, #4caf50, #ff5722);
  color: white;
  padding: 1.5rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  margin-top: 1rem;
`;

const FooterLink = styled.a`
  color: white;
  margin: 0 0.5rem;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;

  a {
    color: white; /* White color for icons in footer */
    font-size: 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #ff5722; /* Highlight color on hover */
      transform: scale(1.2);
    }
  }
`;
