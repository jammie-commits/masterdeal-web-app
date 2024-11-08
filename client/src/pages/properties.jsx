import React from 'react';
import styled from 'styled-components';
import property1 from '../assets/image10.jpeg';
import property2 from '../assets/image5.jpeg';
import property3 from '../assets/image14.jpeg';
import property4 from '../assets/image12.jpeg';

export default function Properties() {
    const properties = [
        {
            image: property1,
            title: 'Victory Garden Phase-1',
            price: 'KES 270,000',
            description: 'Serene enviroment with breathtaking views and modern amenities.',
            features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
        },
        {
          image: property2,
          title: 'Victory Garden Phase-2',
          price: 'KES 270,000',
          description: 'Serene enviroment with breathtaking views and modern amenities.',
          features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
      },
      {
        image: property3,
        title: 'Victory Garden Phase-3',
        price: 'KES 270,000',
        description: 'Serene enviroment with breathtaking views and modern amenities.',
        features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
     },
    {
      image: property4,
      title: 'Victory Garden Phase-4',
      price: 'KES 270,000',
      description: 'Serene enviroment with breathtaking views and modern amenities.',
      features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    },
        
    ];

    return (
        <Section id="properties">
            <Header>
                <h2>Our Featured Properties</h2>
                <p>Explore our exclusive properties, handpicked just for you.</p>
            </Header>
            <PropertyGrid>
                {properties.map(({ image, title, price, description, features }, index) => (
                    <PropertyItem key={index}>
                        <ImageContainer>
                            <img src={image} alt={title} />
                        </ImageContainer>
                        <PropertyDetails>
                            <h3>{title}</h3>
                            <Price>{price}</Price>
                            <Description>{description}</Description>
                            <Features>
                                {features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </Features>
                            <Button>View Details</Button>
                        </PropertyDetails>
                    </PropertyItem>
                ))}
            </PropertyGrid>
        </Section>
    );
}

const Section = styled.section`
  padding: 5rem 0;
  background-color: #f4f4f4;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.5;
  }
`;

const PropertyGrid = styled.div`
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

const PropertyItem = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 30px;
  }
`;

const ImageContainer = styled.div`
  height: 250px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const PropertyDetails = styled.div`
  padding: 1.5rem;
  background: #fff;
  text-align: center;

  h3 {
    font-size: 1.6rem;
    margin: 0.5rem 0;
    font-weight: 600;
    color: green;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;
  }
`;

const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: #FF6347;
  margin: 0.5rem 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 1rem;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;

  li {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #FF7F50;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF6347;
  }
`;
