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

const properties = [
  {
    id: 1,
    image: property1,
    title: 'Victory Garden Phase-1',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property2, property3, property4], // Add images for gallery
  },
  {
    id: 2,
    image: property2,
    title: 'Victory Garden Phase-2',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property1, property4, property5],
  },
  {
    id: 3,
    image: property3,
    title: 'Victory Garden Phase-3',
    price: 'KES 220,000 (cash) or KES 270,000 (installment)',
    description: 'Opposite Msingini Sports Resort near Msingini primary/secondary school',
    features: ['600 mtrs from Tarmac road', '7km from Matuu town', 'Water supply', 'Schools'],
    amenitiesGallery: [property6, property7, property5],
  },
  {
    id: 4,
    image: property4,
    title: 'Victory Garden Phase-4',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property1, property4, property5],
  },
  {
    id: 5,
    image: property5,
    title: 'Victory Garden Phase-5',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property1, property4, property5],
  },
  {
    id: 6,
    image: property6,
    title: 'Victory Garden Phase-6',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property1, property4, property5],
  },
  {
    id: 7,
    image: property7,
    title: 'Victory Garden Phase-7',
    price: 'KES 270,000',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [property1, property4, property5],
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
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
          >
            {property.amenitiesGallery.map((image, index) => (
              <SwiperSlide key={index}>
                <GalleryImage src={image} alt={`Amenity ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
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

const GallerySection = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 1.6rem;
    color: #333;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
  border-radius: 8px;
  margin: 0 auto;
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