import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// Import images
import property1 from '../assets/p1.jpeg';
import property2 from '../assets/p2.jpeg';
import property3 from '../assets/p3.jpeg';
import property4 from '../assets/image12.jpeg';
import property5 from '../assets/2-1.jpeg';
import property6 from '../assets/ph2.jpeg';
import property7 from '../assets/2-2.jpeg';
import property8 from '../assets/6-3.jpeg';
import property9 from '../assets/6-4.jpeg';
import property10 from '../assets/6-5.jpeg';
import property11 from '../assets/6-6.jpeg';
import property12 from '../assets/image7.jpeg';
import property13 from '../assets/image4.jpeg';
import property14 from '../assets/image1.jpeg';
import property15 from '../assets/3-1.jpeg';
import property16 from '../assets/3-2.jpeg';
import property17 from '../assets/3-3.jpeg';
import property18 from '../assets/2-3.jpeg';
import property19 from '../assets/p-1.jpeg';
import property20 from '../assets/p-2.jpeg';
import property21 from '../assets/p-3.jpeg';
import property22 from '../assets/p-4.jpeg';
import property23 from '../assets/5-1.jpeg';
import property24 from '../assets/5-2.jpeg';
import property25 from '../assets/5-3.jpeg';
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
    amenitiesGallery: [
      { image: property1, description: 'Well tarmacked roads' },
      { image: property2, description: 'surrounding neighbours and developments' },
      { image: property3, description: 'serene environment ripe for growth and settlement' },
    ],
  },
  {
    id: 2,
    image: property5,
    title: 'Victory Garden Phase-2',
    price: 'KES 270,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [
      { image: property5, description: 'Development catchment area ' },
      { image: property18, description: 'well serviced plots' },
      { image: property7, description: 'good soils for farming & agriculture' },
    ],
  },
  {
    id: 3,
    image: property3,
    title: 'Victory Garden Phase-3',
    price: 'KES 270,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Opposite Msingini Sports Resort near Msingini primary/secondary school',
    features: ['600 mtrs from Tarmac road', '7km from Matuu town', 'Water supply', 'Schools'],
    amenitiesGallery: [
      { image: property3, description: 'fertile & productive land suitable for farming and agriculture' },
      { image: property16, description: 'fast growing development area' },
      { image: property17, description: 'Well tarmacked roads making the area easily accessible' },
    ],
  },
  {
    id: 4,
    image: property4,
    title: 'Victory Garden Phase-4',
    price: 'KES 270,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [
      { image: property4, description: 'Rich fertile soils capable for agricultural produce ' },
      { image: property20, description: 'surrounding neighborhoods and development sites' },
      { image: property21, description: 'located in matuu afew metres from matuu town' },
      { image: property22, description: 'available governemnt offices and social amenities' },
    ],
  },
  {
    id: 5,
    image: property5,
    title: 'Victory Garden Phase-5',
    price: 'KES 270,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Serene environment with breathtaking views and modern amenities.',
    features: ['Tarmac roads', 'Electricity', 'Water supply', 'Schools'],
    amenitiesGallery: [
      { image: property5, description: 'serene environment ripe for growth and settlement  ' },
      { image: property24, description: 'good soils ready for farming and agriculture' },
      { image: property25, description: 'well serviced plots' },
    ],
  },
  {
    id: 6,
    image: property6,
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
      { image: property14, description: 'Located next to Msingini Sports Resort' },
    ],
  },
  {
    id: 7,
    image: property7,
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
      { image: property14, description: 'Located next toMsingini Sports Resort' },
    ],
  },
  {
    id: 8,
    image: property8,
    title: 'Green Valley Phase-1',
    price: 'KES 180,000',
    paymentPlan: 'Deposit KES 40,000 and pay the balance in 6 months.',
    description: 'Prime location with excellent amenities and infrastructure.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property8, description: 'Well graded access roads' },
      { image: property9, description: 'Secure electric fence perimeter' },
      { image: property10, description: 'Controlled entrance and exit gates' },
      { image: property11, description: 'Reliable water borehole supply' },
    ],
  },
  {
    id: 9,
    image: property9,
    title: 'Green Valley Phase-2',
    price: 'KES 200,000',
    paymentPlan: 'Deposit KES 50,000 and pay the balance in 6 months.',
    description: 'Modern development with all essential amenities.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property9, description: 'Modern development infrastructure' },
      { image: property10, description: 'Essential amenities included' },
      { image: property11, description: 'Secure and well-maintained environment' },
      { image: property12, description: 'Ready for immediate development' },
    ],
  },
  {
    id: 10,
    image: property10,
    title: 'Sunset Gardens Phase-1',
    price: 'KES 150,000',
    paymentPlan: 'Deposit KES 30,000 and pay the balance in 6 months.',
    description: 'Beautiful location with great potential for investment.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property10, description: 'Beautiful sunset views' },
      { image: property11, description: 'Great investment potential' },
      { image: property12, description: 'Well-planned development' },
      { image: property13, description: 'Excellent location advantages' },
    ],
  },
  {
    id: 11,
    image: property11,
    title: 'Sunset Gardens Phase-2',
    price: 'KES 170,000',
    paymentPlan: 'Deposit KES 40,000 and pay the balance in 6 months.',
    description: 'Premium development with excellent amenities.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property11, description: 'Premium development features' },
      { image: property12, description: 'Excellent amenities included' },
      { image: property13, description: 'High-quality infrastructure' },
      { image: property14, description: 'Investment-ready properties' },
    ],
  },
  {
    id: 12,
    image: property12,
    title: 'Mountain View Estate',
    price: 'KES 350,000',
    paymentPlan: 'Deposit KES 70,000 and pay the balance in 6 months.',
    description: 'Premium location with stunning mountain views.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property12, description: 'Stunning mountain views' },
      { image: property13, description: 'Premium location advantages' },
      { image: property14, description: 'Exclusive development' },
      { image: property15, description: 'High-end amenities' },
    ],
  },
  {
    id: 13,
    image: property13,
    title: 'Lake View Gardens',
    price: 'KES 280,000',
    paymentPlan: 'Deposit KES 60,000 and pay the balance in 6 months.',
    description: 'Serene environment with lake views and modern amenities.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property13, description: 'Serene lake views' },
      { image: property14, description: 'Modern amenities included' },
      { image: property15, description: 'Peaceful environment' },
      { image: property16, description: 'Perfect for relaxation' },
    ],
  },
  {
    id: 14,
    image: property14,
    title: 'Coastal Paradise Phase-1',
    price: 'KES 120,000',
    paymentPlan: 'Deposit KES 25,000 and pay the balance in 6 months.',
    description: 'Beautiful coastal location with great investment potential.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property14, description: 'Beautiful coastal location' },
      { image: property15, description: 'Great investment potential' },
      { image: property16, description: 'Coastal climate advantages' },
      { image: property17, description: 'Tourism-friendly area' },
    ],
  },
  {
    id: 15,
    image: property15,
    title: 'Coastal Paradise Phase-2',
    price: 'KES 140,000',
    paymentPlan: 'Deposit KES 30,000 and pay the balance in 6 months.',
    description: 'Premium coastal development with excellent amenities.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property15, description: 'Premium coastal development' },
      { image: property16, description: 'Excellent amenities included' },
      { image: property17, description: 'High-quality coastal living' },
      { image: property18, description: 'Investment opportunities' },
    ],
  },
  {
    id: 16,
    image: property16,
    title: 'Highland Gardens',
    price: 'KES 220,000',
    paymentPlan: 'Deposit KES 45,000 and pay the balance in 6 months.',
    description: 'Highland location with cool climate and beautiful scenery.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property16, description: 'Cool highland climate' },
      { image: property17, description: 'Beautiful scenery' },
      { image: property18, description: 'Perfect for farming' },
      { image: property19, description: 'Healthy living environment' },
    ],
  },
  {
    id: 17,
    image: property17,
    title: 'Plains View Estate',
    price: 'KES 190,000',
    paymentPlan: 'Deposit KES 40,000 and pay the balance in 6 months.',
    description: 'Spacious plains location with great development potential.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property17, description: 'Spacious plains location' },
      { image: property18, description: 'Great development potential' },
      { image: property19, description: 'Open space advantages' },
      { image: property20, description: 'Agricultural opportunities' },
    ],
  },
  {
    id: 18,
    image: property18,
    title: 'Kilimambogo Heights',
    price: 'KES 160,000',
    paymentPlan: 'Deposit KES 35,000 and pay the balance in 6 months.',
    description: 'Elevated location with panoramic views and modern amenities.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property18, description: 'Elevated panoramic views' },
      { image: property19, description: 'Modern amenities included' },
      { image: property20, description: 'Strategic elevated location' },
      { image: property21, description: 'Excellent visibility' },
    ],
  },
  {
    id: 19,
    image: property19,
    title: 'Ruiru Gardens Phase-1',
    price: 'KES 320,000',
    paymentPlan: 'Deposit KES 65,000 and pay the balance in 6 months.',
    description: 'Prime location near Nairobi with excellent connectivity.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property19, description: 'Prime location near Nairobi' },
      { image: property20, description: 'Excellent connectivity' },
      { image: property21, description: 'Urban development advantages' },
      { image: property22, description: 'High demand area' },
    ],
  },
  {
    id: 20,
    image: property20,
    title: 'Ruiru Gardens Phase-2',
    price: 'KES 340,000',
    paymentPlan: 'Deposit KES 70,000 and pay the balance in 6 months.',
    description: 'Premium development with excellent amenities and connectivity.',
    features: ['Graded access roads', 'Electric fence', 'Entrance/exit gates', 'Water borehole'],
    amenitiesGallery: [
      { image: property20, description: 'Premium development features' },
      { image: property21, description: 'Excellent amenities included' },
      { image: property22, description: 'Superior connectivity' },
      { image: property23, description: 'High-end urban living' },
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
    <Container>
      <ImageSlider>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          style={{ borderRadius: '16px', overflow: 'hidden' }}
        >
          <SwiperSlide>
            <SlideImage src={property.image} alt={property.title} />
          </SwiperSlide>
          {property.amenitiesGallery && property.amenitiesGallery.map((amenity, idx) => (
            <SwiperSlide key={idx+1}>
              <SlideImage src={amenity.image} alt={amenity.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageSlider>

      <ContentContainer>
        <MainContent>
          <InfoCard>
            <Title>{property.title}</Title>
            <Price>{property.price}</Price>
            <PaymentPlan>{property.paymentPlan}</PaymentPlan>
            <Description>{property.description}</Description>
          </InfoCard>

          <FeaturesGrid>
            {property.features.map((feature, idx) => (
              <FeatureItem key={idx}>{feature}</FeatureItem>
            ))}
          </FeaturesGrid>

          <BookingSection>
            <h3>Book a Site Visit</h3>
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
                Schedule Visit via WhatsApp
              </Button>
            </BookingForm>
          </BookingSection>

          {property.amenitiesGallery && property.amenitiesGallery.length > 0 && (
            <GallerySection>
              <h3>Gallery</h3>
              <GalleryGrid>
                {property.amenitiesGallery.map((amenity, idx) => (
                  <GalleryCard key={idx}>
                    <GalleryImage src={amenity.image} alt={amenity.description} />
                    <GalleryDesc>{amenity.description}</GalleryDesc>
                  </GalleryCard>
                ))}
              </GalleryGrid>
            </GallerySection>
          )}

          <ContactSection>
            <h3>Contact & Enquiries</h3>
            <ContactInfo>
              <ContactButton href="https://wa.me/+254743979766" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> WhatsApp Us
              </ContactButton>
              <ContactButton as="a" href="tel:+254743979766">Call: +254 743 979 766</ContactButton>
            </ContactInfo>
          </ContactSection>
        </MainContent>
      </ContentContainer>
    </Container>
  );
};

export default PropertyDetails;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  padding-top: 90px;
  background: var(--gray-light);
`;

const ImageSlider = styled.div`
  height: 60vh;
  position: relative;
  margin-bottom: 3rem;
  
  .swiper {
    height: 100%;
  }
  
  .swiper-slide {
    height: 100%;
  }
  
  .swiper-pagination-bullet {
    background: var(--primary-orange);
  }
  
  .swiper-pagination-bullet-active {
    background: var(--primary-green);
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary-orange);
  }
  
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;

const MainContent = styled.div`
  background: var(--white);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const InfoCard = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 0.5rem;
`;

const PaymentPlan = styled.div`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--light-green);
  border-radius: 10px;
  border-left: 4px solid var(--primary-green);
  
  svg {
    color: var(--primary-green);
    font-size: 1.2rem;
  }
  
  span {
    font-weight: 600;
    color: var(--text-dark);
  }
`;

const BookingSection = styled.div`
  margin: 2rem 0;
  background: #e8f5e9;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
`;

const BookingForm = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const DateInput = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  outline: none;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #4CAF50;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: #388e3c;
  }
`;

const GallerySection = styled.div`
  margin: 2rem 0;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const GalleryCard = styled.div`
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  overflow: hidden;
  text-align: center;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const GalleryDesc = styled.div`
  padding: 0.75rem 1rem;
  color: #555;
  font-size: 1rem;
`;

const ContactSection = styled.div`
  margin: 2rem 0 0 0;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: #25d366;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    background: #128c7e;
  }
`;

const WhatsAppIcon = styled.div`
  width: 25px;
  height: 25px;
  background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png') no-repeat center center;
  background-size: contain;
`;
