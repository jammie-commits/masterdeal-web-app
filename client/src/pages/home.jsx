import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules'; // Corrected import path
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import property1 from '../assets/image10.jpeg';
import property2 from '../assets/image5.jpeg';
import property3 from '../assets/image14.jpeg';
import property4 from '../assets/image12.jpeg';

const properties = [
  { id: 1, image: property1, title: 'Victory Garden Phase-1', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out' },
  { id: 2, image: property2, title: 'Victory Garden Phase-2', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out' },
  { id: 3, image: property3, title: 'Victory Garden Phase-3', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out' },
  { id: 4, image: property4, title: 'Victory Garden Phase-4', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out' },
  { id: 5, image: property1, title: 'Victory Garden Phase-6', price: 'KES 300,000', description: 'New phase with better amenities and breathtaking views.', availability: 'Available' },
  { id: 6, image: property2, title: 'Victory Garden Phase-7', price: 'KES 310,000', description: 'Prime location, new development with great potential.', availability: 'Available' },
];

const HomePage = () => {
  const availableProperties = properties.filter((property) => property.availability === 'Available');

  return (
    <HomeContainer>
      {/* Main Image Slider */}
      <MainSlider>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          modules={[Autoplay, EffectFade]} // Pass modules correctly
        >
          {availableProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <SlideImage src={property.image} alt={property.title} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderContent>
          <h1>Victory Garden</h1>
          <p>Explore the best property deals in serene and secure environments.</p>
        </SliderContent>
      </MainSlider>

      {/* Featured Properties */}
      <FeaturedSection>
        <h2>Our Featured Properties</h2>
        <PropertyGrid>
          {properties.map((property) => (
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
    </HomeContainer>
  );
};

export default HomePage;

/* Styled Components */
const HomeContainer = styled.div`
  background: #f4f4f4;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const MainSlider = styled.div`
  position: relative;
  height: 65vh;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SliderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 10px;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

const FeaturedSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;

  h2 {
    font-size: 2.5rem;
    color: #222;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
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
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 5px;
`;

const CardBody = styled.div`
  padding: 1.5rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: #222;
    margin: 0.5rem 0;
  }
`;

const Price = styled.div`
  font-size: 1.2rem;
  color: #e63946;
  font-weight: bold;
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;
