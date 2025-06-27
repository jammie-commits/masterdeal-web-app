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

// Restored original properties and added more based on MasterDeal portfolio
const properties = [
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
    image: property8,
    title: 'Green Valley Phase-1',
    price: 'KES 180,000',
    description: 'Prime location with excellent amenities and infrastructure.',
    availability: 'Available',
    size: '50X100',
    location: 'Thika',
    deposit: 'Kshs 40K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 9,
    image: property9,
    title: 'Green Valley Phase-2',
    price: 'KES 200,000',
    description: 'Modern development with all essential amenities.',
    availability: 'Available',
    size: '50X100',
    location: 'Thika',
    deposit: 'Kshs 50K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 10,
    image: property10,
    title: 'Sunset Gardens Phase-1',
    price: 'KES 150,000',
    description: 'Beautiful location with great potential for investment.',
    availability: 'Available',
    size: '50X100',
    location: 'Nakuru',
    deposit: 'Kshs 30K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 11,
    image: property11,
    title: 'Sunset Gardens Phase-2',
    price: 'KES 170,000',
    description: 'Premium development with excellent amenities.',
    availability: 'Available',
    size: '50X100',
    location: 'Nakuru',
    deposit: 'Kshs 40K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 12,
    image: property12,
    title: 'Mountain View Estate',
    price: 'KES 350,000',
    description: 'Premium location with stunning mountain views.',
    availability: 'Available',
    size: '50X100',
    location: 'Nanyuki',
    deposit: 'Kshs 70K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 13,
    image: property13,
    title: 'Lake View Gardens',
    price: 'KES 280,000',
    description: 'Serene environment with lake views and modern amenities.',
    availability: 'Available',
    size: '50X100',
    location: 'Naivasha',
    deposit: 'Kshs 60K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 14,
    image: property14,
    title: 'Coastal Paradise Phase-1',
    price: 'KES 120,000',
    description: 'Beautiful coastal location with great investment potential.',
    availability: 'Available',
    size: '50X100',
    location: 'Malindi',
    deposit: 'Kshs 25K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 15,
    image: property15,
    title: 'Coastal Paradise Phase-2',
    price: 'KES 140,000',
    description: 'Premium coastal development with excellent amenities.',
    availability: 'Available',
    size: '50X100',
    location: 'Malindi',
    deposit: 'Kshs 30K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 16,
    image: property16,
    title: 'Highland Gardens',
    price: 'KES 220,000',
    description: 'Highland location with cool climate and beautiful scenery.',
    availability: 'Available',
    size: '50X100',
    location: 'Narumoru',
    deposit: 'Kshs 45K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 17,
    image: property17,
    title: 'Plains View Estate',
    price: 'KES 190,000',
    description: 'Spacious plains location with great development potential.',
    availability: 'Available',
    size: '50X100',
    location: 'Makutano',
    deposit: 'Kshs 40K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 18,
    image: property18,
    title: 'Kilimambogo Heights',
    price: 'KES 160,000',
    description: 'Elevated location with panoramic views and modern amenities.',
    availability: 'Available',
    size: '50X100',
    location: 'Kilimambogo',
    deposit: 'Kshs 35K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 19,
    image: property19,
    title: 'Ruiru Gardens Phase-1',
    price: 'KES 320,000',
    description: 'Prime location near Nairobi with excellent connectivity.',
    availability: 'Available',
    size: '50X100',
    location: 'Ruiru',
    deposit: 'Kshs 65K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  },
  {
    id: 20,
    image: property20,
    title: 'Ruiru Gardens Phase-2',
    price: 'KES 340,000',
    description: 'Premium development with excellent amenities and connectivity.',
    availability: 'Available',
    size: '50X100',
    location: 'Ruiru',
    deposit: 'Kshs 70K',
    balancePeriod: '6 months',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole']
  }
];

const locations = ['All', 'Matuu', 'Thika', 'Nakuru', 'Nanyuki', 'Naivasha', 'Malindi', 'Narumoru', 'Makutano', 'Kilimambogo', 'Ruiru'];

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
          <FilterButton active={selectedLocation === 'Thika'} onClick={() => setSelectedLocation('Thika')}>Thika</FilterButton>
          <FilterButton active={selectedLocation === 'Nakuru'} onClick={() => setSelectedLocation('Nakuru')}>Nakuru</FilterButton>
          <FilterButton active={selectedLocation === 'Nanyuki'} onClick={() => setSelectedLocation('Nanyuki')}>Nanyuki</FilterButton>
          <FilterButton active={selectedLocation === 'Naivasha'} onClick={() => setSelectedLocation('Naivasha')}>Naivasha</FilterButton>
          <FilterButton active={selectedLocation === 'Malindi'} onClick={() => setSelectedLocation('Malindi')}>Malindi</FilterButton>
          <FilterButton active={selectedLocation === 'Narumoru'} onClick={() => setSelectedLocation('Narumoru')}>Narumoru</FilterButton>
          <FilterButton active={selectedLocation === 'Makutano'} onClick={() => setSelectedLocation('Makutano')}>Makutano</FilterButton>
          <FilterButton active={selectedLocation === 'Kilimambogo'} onClick={() => setSelectedLocation('Kilimambogo')}>Kilimambogo</FilterButton>
          <FilterButton active={selectedLocation === 'Ruiru'} onClick={() => setSelectedLocation('Ruiru')}>Ruiru</FilterButton>
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
  border: 2px solid ${({ active }) => active ? 'var(--primary-orange)' : 'var(--gray-medium)'};
  background: ${({ active }) => active ? 'var(--primary-orange)' : 'var(--white)'};
  color: ${({ active }) => active ? 'var(--white)' : 'var(--text-dark)'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-orange);
    color: var(--white);
    border-color: var(--primary-orange);
    transform: translateY(-2px);
  }
`;

const PropertiesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const PropertyCard = styled(Link)`
  background: var(--white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-orange);
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
  transition: transform 0.3s ease;
  
  ${PropertyCard}:hover & {
    transform: scale(1.1);
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({ isAvailable }) => isAvailable ? 'var(--primary-green)' : 'var(--primary-orange)'};
  color: var(--white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const CardBody = styled.div`
  padding: 2rem;
  
  h3 {
    font-size: 1.5rem;
    color: var(--text-dark);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
`;

const Price = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const PropertyDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const PropertyItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  font-size: 0.9rem;
  
  svg {
    color: var(--primary-green);
  }
`;

const LocationTag = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--light-green);
  color: var(--primary-green);
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 1rem;
`;

const NoProperties = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-light);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-dark);
  }
  
  p {
    font-size: 1.1rem;
  }
`;
