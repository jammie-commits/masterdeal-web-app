import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaBars } from 'react-icons/fa';

import property1 from '../assets/image10.jpeg';
import property2 from '../assets/image5.jpeg';
import property3 from '../assets/image14.jpeg';
import property4 from '../assets/image12.jpeg';
import banner1 from '../assets/banner1.svg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/banner3.svg';
import banner4 from '../assets/banner4.svg';

// Property Data
const properties = [
  { id: 1, image: property1, title: 'Victory Garden Phase-1', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out' },
  { id: 2, image: property2, title: 'Victory Garden Phase-2', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out' },
  { id: 3, image: property3, title: 'Victory Garden Phase-3', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out' },
  { id: 4, image: property4, title: 'Victory Garden Phase-4', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out' },
  { id: 5, image: property1, title: 'Victory Garden Phase-5', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out' },
  { id: 6, image: property2, title: 'Victory Garden Phase-6', price: 'KES 250,000', description: 'New phase with better amenities and breathtaking views.', availability: 'Available' },
  { id: 7, image: property3, title: 'Victory Garden Phase-7', price: 'KES 250,000', description: 'Prime location, new development with great potential.', availability: 'Available' },
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
          <Logo>Masterdeal Properties</Logo>
          <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={30} />
          </MenuToggle>
          <NavMenu open={menuOpen}>
            <NavItem>
              <FaPhoneAlt size={18} />
              <span>+254 700 000 000</span>
            </NavItem>
            <NavItem>
              <FaEnvelope size={18} />
              <span>info@masterdeal.com</span>
            </NavItem>
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
        <h2>Our Featured Properties</h2>
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
              </CardBody>
            </PropertyCard>
          ))}
        </PropertyGrid>
      </FeaturedSection>

      {/* Sold Out Projects */}
      <SoldOutProjects>
        <h2>Sold Out Projects</h2>
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
              </CardBody>
            </PropertyCard>
          ))}
        </PropertyGrid>
      </SoldOutProjects>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <p>&copy; {new Date().getFullYear()} Masterdeal Properties. All rights reserved.</p>
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
  text-align: center;
  color: white;
  position: relative;

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
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const MenuToggle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #4caf50;
    width: 100%;
    padding: 1rem;
    position: absolute;
    top: 80px;
    left: 0;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  span {
    margin-left: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722;
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
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const CardImageContainer = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PropertyCard}:hover & {
    transform: scale(1.1);
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${({ isAvailable }) => (isAvailable ? '#4CAF50' : '#FF0000')};
  color: white;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Price = styled.h3`
  font-size: 1.3rem;
  color: #4caf50;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SoldOutProjects = styled.section`
  background: #f4f4f4;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Footer = styled.footer`
  background: linear-gradient(to right, #4caf50, #ff5722);
  color: white;
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterLink = styled.a`
  margin: 0 1rem;
  color: white;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: #ff5722;
  }
`;

