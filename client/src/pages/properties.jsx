import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaBuilding, FaMoneyCheckAlt, FaCheckCircle } from 'react-icons/fa';

// Import property images
import property1 from '../assets/p1.jpeg';
import property2 from '../assets/p2.jpeg';
import property3 from '../assets/3-1.jpeg';
import property4 from '../assets/p-1.jpeg';
import property5 from '../assets/5-1.jpeg';
import property6 from '../assets/phase 6.jpeg';
import property7 from '../assets/image1.jpeg';
import property8 from '../assets/image2.jpeg';
import property9 from '../assets/image3.jpeg';
import property10 from '../assets/image4.jpeg';
import property11 from '../assets/image5.jpeg';
import property12 from '../assets/image6.jpeg';
import property13 from '../assets/image7.jpeg';
import property14 from '../assets/image8.jpeg';
import property15 from '../assets/image9.jpeg';
import property16 from '../assets/image10.jpeg';
import property17 from '../assets/image11.jpeg';
import property18 from '../assets/image12.jpeg';
import property19 from '../assets/image13.jpeg';
import property20 from '../assets/image14.jpeg';
import jujaMasterview from '../assets/juja-masterview.jpg';

// Restored original properties and added more based on MasterDeal portfolio
const properties = [
  // Matuu projects
  {
    id: 1,
    image: property1,
    title: 'Victory Garden Phase-1',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    availability: 'Sold Out',
    size: '50X100',
    location: 'Matuu',
    deposit: 'Kshs 50K',
    balancePeriod: '6 months',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools']
  },
  {
    id: 2,
    image: property2,
    title: 'Victory Garden Phase-2',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    availability: 'Sold Out',
    size: '50X100',
    location: 'Matuu',
    deposit: 'Kshs 50K',
    balancePeriod: '6 months',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools']
  },
  {
    id: 3,
    image: property3,
    title: 'Victory Garden Phase-3',
    price: 'KES 270,000',
    description: 'Opposite Msingini Sports Resort near Msingini primary/secondary school.',
    availability: 'Sold Out',
    size: '50X100',
    location: 'Matuu',
    deposit: 'Kshs 50K',
    balancePeriod: '6 months',
    features: ['600 mtrs from Tarmac road', '7km from Matuu town', 'Water supply', 'Schools']
  },
  {
    id: 4,
    image: property4,
    title: 'Victory Garden Phase-4',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    availability: 'Sold Out',
    size: '50X100',
    location: 'Matuu',
    deposit: 'Kshs 50K',
    balancePeriod: '6 months',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools']
  },
  {
    id: 5,
    image: property5,
    title: 'Victory Garden Phase-5',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    availability: 'Sold Out',
    size: '50X100',
    location: 'Matuu',
    deposit: 'Kshs 50K',
    balancePeriod: '6 months',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools']
  },
  {
    id: 6,
    image: property6,
    title: 'Victory Garden Phase-6',
    price: 'KES 250,000',
    description: 'Good investment project for development and settlement.',
    availability: 'Available',
    size: '50X100',
    location: 'Matuu',
    deposit: 'Kshs 50K',
    balancePeriod: '6 months',
    features: ['Afew metres from Tarmac road', 'Good Electricity connection', 'Good Water supply', 'Near Musingini Secondary School']
  },
  {
    id: 7,
    image: property7,
    title: 'Victory Garden Phase-7',
    price: 'KES 250,000',
    description: 'Good investment project for development and settlement.',
    availability: 'Available',
    size: '50X100',
    location: 'Matuu',
    deposit: 'Kshs 50K',
    balancePeriod: '6 months',
    features: ['Afew metres from Tarmac road', 'Good Electricity connection', 'Good Water supply', 'Near Musingini Secondary School']
  },
  {
    id: 8,
    image: jujaMasterview,
    title: 'MasterView Estate Phase 1 – Juja Farm Athi',
    price: 'KES 599,000',
    description: '40×80 plots in a prime, fully serviced estate. Water, electricity, security. Cash price 599K, deposit 300K, 3 months installment plan 650K.',
    availability: 'Available',
    size: '40X80',
    location: 'Juja',
    deposit: 'KES 300K',
    balancePeriod: '3 months',
    features: ['Water supply', 'Electricity', 'Security', 'Ready for immediate construction', 'Flexible payment options']
  }
];

const locations = ['All', 'Matuu', 'Juja'];

const Properties = () => {
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');

  const filteredProperties = properties.filter(property => {
    const locationMatch = selectedLocation === 'All' || property.location === selectedLocation;
    const availabilityMatch = selectedAvailability === 'All' || property.availability === selectedAvailability;
    return locationMatch && availabilityMatch;
  });

  return (
    <PropertiesContainer>
      <HeroSection>
        <h1>FEATURED PROPERTIES</h1>
        <p>Explore our exclusive properties, handpicked just for you.</p>
      </HeroSection>

      <FilterSection>
        <FilterTitle>Filter Properties</FilterTitle>
        <FilterButtons>
          <FilterButton active={selectedLocation === 'All'} onClick={() => setSelectedLocation('All')}>All</FilterButton>
          <FilterButton active={selectedLocation === 'Matuu'} onClick={() => setSelectedLocation('Matuu')}>Matuu</FilterButton>
          <FilterButton active={selectedLocation === 'Juja'} onClick={() => setSelectedLocation('Juja')}>Juja</FilterButton>
        </FilterButtons>
      </FilterSection>

      <PropertiesGrid>
        {filteredProperties.map((property) => (
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
                  <FaBuilding />
                  <span>{property.size} Plots</span>
                </PropertyItem>
                <PropertyItem>
                  <FaMoneyCheckAlt />
                  <span>Deposit {property.deposit}</span>
                </PropertyItem>
                <PropertyItem>
                  <FaMoneyCheckAlt />
                  <span>Balance in {property.balancePeriod}</span>
                </PropertyItem>
              </PropertyDetails>
              <LocationTag>{property.location}</LocationTag>
            </CardBody>
          </PropertyCard>
        ))}
      </PropertiesGrid>

      {filteredProperties.length === 0 && (
        <NoProperties>
          <h3>No properties found</h3>
          <p>Try adjusting your filters to see more properties.</p>
        </NoProperties>
      )}
    </PropertiesContainer>
  );
};

export default Properties;

const PropertiesContainer = styled.div`
  min-height: 100vh;
  padding-top: 90px;
  background: linear-gradient(135deg, var(--gray-light) 0%, var(--gray-medium) 100%);
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-orange) 100%);
  color: var(--white);
  padding: 4rem 2rem;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const FilterSection = styled.div`
  background: var(--white);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FilterTitle = styled.h2`
  text-align: center;
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-size: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, var(--primary-green), var(--primary-orange));
    border-radius: 2px;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--primary-orange);
  background: var(--white);
  color: var(--primary-orange);
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover, &[active] {
    background: var(--primary-orange);
    color: var(--white);
  }
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const PropertyCard = styled(Link)`
  display: block;
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImageContainer = styled.div`
  position: relative;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StatusBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.25rem 0.5rem;
  background: ${props => props.isAvailable ? 'var(--primary-green)' : 'var(--primary-red)'};
  color: var(--white);
  border-radius: 5px;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const Price = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const PropertyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const PropertyItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LocationTag = styled.span`
  font-size: 0.8rem;
  color: var(--text-light);
`;

const NoProperties = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 600px;
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;