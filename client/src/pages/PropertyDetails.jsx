import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// Import images
import property1 from '../assets/image10.jpeg';
import property2 from '../assets/image5.jpeg';
import property3 from '../assets/image14.jpeg';
import property4 from '../assets/image12.jpeg';
import property5 from '../assets/5-1.jpeg';
import property6 from '../assets/6-1.jpeg';
import property7 from '../assets/6-2.jpeg';
import property8 from '../assets/6-3.jpeg';
import property9 from '../assets/6-4.jpeg';
import property10 from '../assets/6-5.jpeg';
import property11 from '../assets/6-6.jpeg';
import property12 from '../assets/image7.jpeg';
import property13 from '../assets/image4.jpeg';
import property14 from '../assets/image1.jpeg';
import banner1 from '../assets/banner1.svg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/banner3.svg';
import banner4 from '../assets/banner4.svg';

const properties = [
  {
    id: 1,
    image: property1,
    title: 'Victory Garden Phase-1',
    price: 'KES 270,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property2, property3, property4], // Add images for gallery
  },
  {
    id: 2,
    image: property2,
    title: 'Victory Garden Phase-2',
    price: 'KES 270,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property1, property4, property5],
  },
  {
    id: 3,
    image: property3,
    title: 'Victory Garden Phase-3',
    price: 'KES 220,000 (cash) or KES 270,000 (installment)',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Opposite Msingini Sports Resort near Msingini primary/secondary school',
    features: ['600 mtrs from Tarmac road', '7km from Matuu town', 'Water supply', 'Schools'],
    amenitiesGallery: [property6, property7, property5],
  },
  {
    id: 4,
    image: property4,
    title: 'Victory Garden Phase-4',
    price: 'KES 270,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property1, property4, property5],
  },
  {
    id: 5,
    image: property5,
    title: 'Victory Garden Phase-5',
    price: 'KES 270,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property1, property4, property5],
  },
  {
    id: 6,
    image: banner2,
    title: 'Victory Garden Phase-6',
    price: 'KES 250,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Good investment project for development and settlement.',
    features: ['Afew metres from Tarmac road', 'Good Electricity connection', 'Good Water supply favourable for agriculture ', 'Near Musingini Secondary School'],
    amenitiesGallery: [
      { image: property8, description: 'Fully serviced Plots' },
      { image: property9, description: 'Close proximity to Electric connectivity' },
      { image: property10, description: 'Good Water supply is available' },
      { image: property11, description: 'Surrounding neighbours' },
      { image: property12, description: 'Close proximity to health care facility ' },
      { image: property13, description: 'Located near Musingini Secondary School' },
      { image: property14, description: 'Available Social amenity: Msingini Sports Resort' },
    ],
  },
  {
    id: 7,
    image: banner3,
    title: 'Victory Garden Phase-7',
    price: 'KES 250,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Good investment project for development and settlement.',
    features: ['Afew metres from Tarmac road', 'Good Electricity connection', 'Good Water supply favourable for agriculture ', 'Near Musingini Secondary School'],
    amenitiesGallery: [
      { image: property8, description: 'Fully serviced Plots' },
      { image: property9, description: 'Close proximity to Electric connectivity' },
      { image: property10, description: 'Good Water supply is available' },
      { image: property11, description: 'Surrounding neighbours' },
      { image: property12, description: 'Close proximity to health care facility ' },
      { image: property13, description: 'Located near Musingini Secondary School' },
      { image: property14, description: 'Available Social amenity: Msingini Sports Resort' },
    ],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  const [visitDate, setVisitDate] = useState('');

  if (!property) {
    return <div>Property not found</div>;
  }

  const generateWhatsAppLink = () => {
    const message = `Hi, I want to book a site visit on ${visitDate} for the property: ${property.title}.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/+254743979766?text=${encodedMessage}`;
  };

  return (
    <Section>
      <Container>
        <Header>
          <h2>{property.title}</h2>
          <Price>{property.price}</Price>
          <PaymentPlan>{property.paymentPlan}</PaymentPlan>
          <Description>{property.description}</Description>
        </Header>

        <ImageContainer>
          <img src={property.image} alt={property.title} />
        </ImageContainer>

        <Features>
          <h3>Features:</h3>
          <ul>
            {property.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Features>

        <GallerySection>
  <h3>Amenities Gallery:</h3>
  <GalleryGrid>
    {property.amenitiesGallery.map((amenity, index) => (
      <AmenityCard key={index}>
        <GalleryImage src={amenity.image} alt={`Amenity ${index + 1}`} />
        <AmenityDescription>{amenity.description}</AmenityDescription>
      </AmenityCard>
    ))}
  </GalleryGrid>
</GallerySection>


        <BookingSection>
          <h3>Book a Site Visit</h3>
          <p>Choose a date and schedule your visit.</p>
          <BookingForm>
            <DateInput
              type="date"
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
            />
            <Button
              onClick={() => {
                if (visitDate) {
                  window.open(generateWhatsAppLink(), '_blank');
                } else {
                  alert('Please select a date.');
                }
              }}
            >
              Schedule Visit
            </Button>
          </BookingForm>
        </BookingSection>

        <ContactSection>
          <h3>Contact Us</h3>
          <p>Have any questions? Reach out to us on WhatsApp for quick assistance.</p>
          <WhatsAppLink href="https://wa.me/+254743979766" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Contact via WhatsApp
          </WhatsAppLink>
        </ContactSection>
      </Container>
    </Section>
  );
};

export default PropertyDetails;

// Styled Components
const Section = styled.section`
  padding: 3rem 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 30px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    color: #333;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6347;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-top: 3rem;

  img {
    width: 100%;
    max-width: 900px;
    height: auto;
    border-radius: 8px;
  }
`;

const Features = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 1.6rem;
    color: #333;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 1rem;
      color: #555;
      margin-bottom: 0.8rem;
      padding-left: 1rem;
      position: relative;

      &::before {
        content: '✔';
        color: green;
        position: absolute;
        left: 0;
        top: 0;
        font-size: 1.2rem;
      }
    }
  }
`;

const PaymentPlan = styled.div`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const AmenityCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GallerySection = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 1.6rem;
    color: #333;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AmenityDescription = styled.p`
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  color: #555;
  background-color: #f9f9f9;
`;

const BookingSection = styled.div`
  margin-top: 3rem;
  background-color: #f0f8ff;
  padding: 2rem;
  border-radius: 10px;
`;

const BookingForm = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
`;

const DateInput = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #ff7f50;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
`;

const ContactSection = styled.div`
  margin-top: 3rem;
  text-align: center;
  background-color: #eef2f3;
  padding: 2rem;
  border-radius: 10px;
`;

const WhatsAppLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #25d366;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
`;

const WhatsAppIcon = styled.div`
  width: 25px;
  height: 25px;
  background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png') no-repeat center center;
  background-size: contain;
`;
