import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaBars, FaMapMarkerAlt, FaBuilding, FaMoneyCheckAlt, FaClock, FaShieldAlt, FaHome, FaHandshake, FaAward, FaRegFileAlt } from 'react-icons/fa';

import property1 from '../assets/p1.jpeg';
import property2 from '../assets/p-1.jpeg';
import property3 from '../assets/3-1.jpeg';
import property4 from '../assets/p3.jpeg';
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
import banner1 from '../assets/banner1.svg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/banner3.svg';
import banner4 from '../assets/banner4.svg';
import testimonial1 from '../assets/testimonial1.jpeg';
import testimonial2 from '../assets/testimonial2.jpeg';
import testimonial3 from '../assets/testimonial3.jpeg';
import testimonial4 from '../assets/testimonial4.jpeg';

import Footer from '../components/Footer';

// Property Data
const properties = [
  { id: 1, image: property1, title: 'Victory Garden Phase-1', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6 months' },
  { id: 2, image: property2, title: 'Victory Garden Phase-2', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6 months' },
  { id: 3, image: property3, title: 'Victory Garden Phase-3', price: 'KES 270,000', description: 'Opposite Msingini Sports Resort near Msingini primary/secondary school.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6 months' },
  { id: 4, image: property4, title: 'Victory Garden Phase-4', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6 months' },
  { id: 5, image: property5, title: 'Victory Garden Phase-5', price: 'KES 270,000', description: 'Serene environment with breathtaking views and modern amenities.', availability: 'Sold Out', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6 months' },
  { id: 6, image: property6, title: 'Victory Garden Phase-6', price: 'KES 250,000', description: 'Good investment project for development and settlement.', availability: 'Available', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6 months' },
  { id: 7, image: property7, title: 'Victory Garden Phase-7', price: 'KES 250,000', description: 'Good investment project for development and settlement.', availability: 'Available', size: '50x100', location: 'Matuu', deposit: '50K', balancePeriod: '6 months' },
  { id: 8, image: property8, title: 'Juja Prime Plots', price: 'KES 400,000', description: 'Prime serviced plots in Juja, ideal for residential and investment.', availability: 'Available', size: '50x100', location: 'Juja', deposit: '80K', balancePeriod: '6 months' }
];

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: 'Pauline Waweru',
    role: 'Satisfied Customer',
    content: 'Masterdeal Properties Limited made the investment process seamless, guiding me every step of the way until I received my title deed on time. I\'m holding it in my hand, putting it in the envelope, and I\'m so proud indeed. It\'s a genuine company to invest with, and I\'m excited to invest more with them. Highly recommend!',
    image: testimonial1
  },
  {
    id: 2,
    name: 'MaryAnn Gathirwa',
    role: 'Property Owner',
    content: 'I\'m happy with my experience with Masterdeal Properties Limited. The team guided me smoothly through each step, and I\'m now a proud owner with my title deed in hand. Their professionalism and transparency earned my trust, and I highly recommend them to anyone seeking reliable property investment.',
    image: testimonial2
  },
  {
    id: 3,
    name: 'James Njoroge',
    role: 'Trusted Client',
    content: 'At first, I had many doubts, but I\'ve realized that Masterdeal Properties Limited is the only company I can truly rely on. They are humble and silent in their approach, but their work speaks volumes. The process was smooth, and I received my title deed on time. Am deeply proud of the trust I\'ve placed on them for they have made my dream a reality.',
    image: testimonial3
  },
  {
    id: 4,
    name: 'Wangari Kamau, Sweden',
    role: 'International Investor',
    content: 'Investing in Kenya from abroad seemed like a challenge, but Masterdeal Properties Ltd made the entire process smooth and hassle-free. Their team provided clear guidance, kept us informed at every step, and ensured all our investments were handled with care and professionalism. The returns have been impressive, and we\'ve felt confident and secure throughout. If you\'re an investor abroad looking to enter the Kenyan market, MasterDeal Properties Ltd is a trusted partner that delivers both transparency and strong results.',
    image: testimonial4
  }
];

// Trust badges/awards data
const trustBadges = [
  { icon: <FaAward size={40} />, label: 'Top Real Estate Company 2023' },
  { icon: <FaShieldAlt size={40} />, label: 'Trusted by 1,000+ Clients' },
  { icon: <FaRegFileAlt size={40} />, label: 'Title Deeds Guaranteed' },
];

const HomePage = () => {
  const availableProperties = properties.filter((property) => property.availability === 'Available');
  const soldOutProperties = properties.filter((property) => property.availability === 'Sold Out');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = () => setMenuOpen(false);

  const [bookVisitForm, setBookVisitForm] = useState({ property: '', day: '', name: '', email: '', message: '' });
  const handleBookVisitChange = (e) => { setBookVisitForm({ ...bookVisitForm, [e.target.name]: e.target.value }); };
  const handleBookVisitSubmit = (e) => { e.preventDefault(); const message = `Hello, I would like to book a site visit.\nProperty: ${bookVisitForm.property}\nDay: ${bookVisitForm.day}\nName: ${bookVisitForm.name}\nEmail: ${bookVisitForm.email}\nMessage: ${bookVisitForm.message}`; const encodedMessage = encodeURIComponent(message); window.open(`https://wa.me/+254743979766?text=${encodedMessage}`, '_blank'); };

  return (
    <>
      <Container>
        {/* Main Image Slider */}
        <MainSlider>
          <SwiperComponent
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
          </SwiperComponent>
        </MainSlider>

        {/* Hero CTA Section */}
        <HeroCTASection>
          <HeroCTATitle>Invest in Your Future with MasterDeal Properties</HeroCTATitle>
          <HeroCTAButtons>
            <CTAButton to="/contact">Get a Free Consultation</CTAButton>
            <CTAButton to="/newsletter">Download Brochure</CTAButton>
          </HeroCTAButtons>
        </HeroCTASection>

        {/* Trust Badges Section */}
        <TrustBadgesSection>
          <TrustBadgesGrid>
            {trustBadges.map((badge, idx) => (
              <TrustBadge key={idx}>
                {badge.icon}
                <span>{badge.label}</span>
              </TrustBadge>
            ))}
          </TrustBadgesGrid>
        </TrustBadgesSection>

        {/* Featured Properties */}
        <FeaturedSection>
          <h2>
            <VerticalLine />
            FEATURED PROPERTIES
          </h2>
          <PropertyGrid>
            {availableProperties.slice(0, 6).map((property) => (
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

        {/* Why Choose Us Section */}
        <WhyChooseUsSection>
          <SectionTitle>Why choose us</SectionTitle>
          <WhyChooseUsGrid>
            <WhyChooseUsCard>
              <IconContainer>
                <FaHome size={40} />
              </IconContainer>
              <h3>Our plots</h3>
              <p>All our projects are value added with graded access roads, electric fence, entrance/exit gates and water borehole. All our plots have ready title deeds.</p>
            </WhyChooseUsCard>
            
            <WhyChooseUsCard>
              <IconContainer>
                <FaClock size={40} />
              </IconContainer>
              <h3>Delivery period</h3>
              <p>Our delivery Period for the Title deed presentation is unmatched since after we are done with all the paper work and payment it only takes 30 days for you to have the Title deed in your name.</p>
            </WhyChooseUsCard>
            
            <WhyChooseUsCard>
              <IconContainer>
                <FaShieldAlt size={40} />
              </IconContainer>
              <h3>Suitable properties</h3>
              <p>We have projects in developed areas suitable for immediate development with title deeds.</p>
            </WhyChooseUsCard>
            
            <WhyChooseUsCard>
              <IconContainer>
                <FaHandshake size={40} />
              </IconContainer>
              <h3>Customer experience</h3>
              <p>We offer outstanding customer service and a flexible installment payment plan of up to 10 months</p>
            </WhyChooseUsCard>
            
            <WhyChooseUsCard>
              <IconContainer>
                <FaHome size={40} />
              </IconContainer>
              <h3>Freehold</h3>
              <p>All our plots are free hold and have a title fee that varies as per county charges. Kindly note that the title fee is not inclusive of any of our plot price. There are no further hidden charges.</p>
            </WhyChooseUsCard>
          </WhyChooseUsGrid>
        </WhyChooseUsSection>

        {/* Testimonials Section */}
        <TestimonialsSection>
          <SectionTitle>What our client says?</SectionTitle>
          <SwiperComponent
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard>
                  <TestimonialImage>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </TestimonialImage>
                  <TestimonialContent>
                    <QuoteIcon>"</QuoteIcon>
                    <p>{testimonial.content}</p>
                  </TestimonialContent>
                  <TestimonialAuthor>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </TestimonialAuthor>
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </TestimonialsSection>
        <BookVisitSection>
          <BookVisitTitle>Book a Site Visit</BookVisitTitle>
          <BookVisitForm onSubmit={handleBookVisitSubmit}>
            <BookVisitRow>
              <BookVisitLabel>Select property</BookVisitLabel>
              <BookVisitSelect name="property" value={bookVisitForm.property} onChange={handleBookVisitChange} required>
                {properties.map((property, index) => (
                  <option key={index} value={property.title}>{property.title}</option>
                ))}
              </BookVisitSelect>
            </BookVisitRow>
            <BookVisitRow>
              <BookVisitLabel>Select Day</BookVisitLabel>
              <BookVisitSelect name="day" value={bookVisitForm.day} onChange={handleBookVisitChange} required>
                <option value="">Select Day</option>
                <option value="Saturday">Saturday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Other">Other</option>
              </BookVisitSelect>
            </BookVisitRow>
            <BookVisitRow>
              <BookVisitLabel>Full Name</BookVisitLabel>
              <BookVisitInput type="text" name="name" value={bookVisitForm.name} onChange={handleBookVisitChange} placeholder="Enter your full name" required />
            </BookVisitRow>
            <BookVisitRow>
              <BookVisitLabel>Email Address</BookVisitLabel>
              <BookVisitInput type="email" name="email" value={bookVisitForm.email} onChange={handleBookVisitChange} placeholder="Enter your email address" required />
            </BookVisitRow>
            <BookVisitRow>
              <BookVisitLabel>Message</BookVisitLabel>
              <BookVisitTextArea name="message" value={bookVisitForm.message} onChange={handleBookVisitChange} placeholder="Tell us about your requirements..." rows="4" />
            </BookVisitRow>
            <BookVisitButton type="submit">Submit</BookVisitButton>
          </BookVisitForm>
        </BookVisitSection>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
`;

const MainSlider = styled.div`
  height: 60vh;
  position: relative;
  margin-bottom: 2rem;
  
  .swiper {
    height: 100%;
  }
  
  .swiper-slide {
    height: 100%;
  }
  
  .swiper-pagination-bullet {
    background: #FF6B35;
  }
  
  .swiper-pagination-bullet-active {
    background: #4CAF50;
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #FF6B35;
  }
  
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const BannerContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4CAF50 0%, #FF6B35 100%);
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;

const FeaturedSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  
  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

const VerticalLine = styled.div`
  width: 4px;
  height: 50px;
  background: linear-gradient(to bottom, #4CAF50, #FF6B35);
  border-radius: 2px;
`;

const PropertyGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PropertyCard = styled(Link)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: #FF6B35;
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
  background: ${({ isAvailable }) => isAvailable ? '#4CAF50' : '#FF6B35'};
  color: white;
`;

const CardBody = styled.div`
  padding: 2rem;
  
  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
`;

const Price = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #FF6B35;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
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
  color: #333;
  font-size: 0.9rem;
  
  svg {
    color: #4CAF50;
  }
`;

const WhyChooseUsSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #4CAF50, #FF6B35);
    border-radius: 2px;
  }
`;

const WhyChooseUsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const WhyChooseUsCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
  background: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-color: #4CAF50;
  }
  
  h3 {
    font-size: 1.5rem;
    color: #333;
    margin: 1rem 0;
    font-weight: 600;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4CAF50 0%, #FF6B35 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  transition: transform 0.3s ease;
  
  ${WhyChooseUsCard}:hover & {
    transform: scale(1.1);
  }
`;

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    border-color: #FF6B35;
  }
`;

const TestimonialImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #4CAF50;
    transition: transform 0.3s ease;
    
    ${TestimonialCard}:hover & {
      transform: scale(1.1);
      border-color: #FF6B35;
    }
  }
`;

const TestimonialContent = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  
  p {
    color: #666;
    line-height: 1.6;
    font-style: italic;
  }
`;

const QuoteIcon = styled.span`
  font-size: 3rem;
  color: #FF6B35;
  position: absolute;
  top: -1rem;
  left: -1rem;
`;

const TestimonialAuthor = styled.div`
  text-align: center;
`;

const AuthorName = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const AuthorRole = styled.p`
  color: #4CAF50;
  font-weight: 500;
`;

const HeroCTASection = styled.section`
  text-align: center;
  padding: 2.5rem 1rem 1.5rem 1rem;
  background: linear-gradient(90deg, #FF6B35 0%, #4CAF50 100%);
  color: white;
`;
const HeroCTATitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;
const HeroCTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;
const CTAButton = styled(Link)`
  background: #fff;
  color: #FF6B35;
  font-weight: 700;
  padding: 0.9rem 2.2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #FF6B35;
    color: #fff;
  }
`;
const TrustBadgesSection = styled.section`
  background: #f8f9fa;
  padding: 2.5rem 1rem 1.5rem 1rem;
  text-align: center;
`;
const TrustBadgesGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;
const TrustBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  padding: 1.2rem 2rem;
  min-width: 180px;
  font-weight: 600;
  color: #333;
`;

const BookVisitSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  text-align: center;
`;

const BookVisitTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #4CAF50, #FF6B35);
    border-radius: 2px;
  }
`;

const BookVisitForm = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const BookVisitRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BookVisitLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
`;

const BookVisitSelect = styled.select`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  color: #333;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #FF6B35;
  }
`;

const BookVisitInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  color: #333;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #FF6B35;
  }
`;

const BookVisitTextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  color: #333;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #FF6B35;
  }
`;

const BookVisitButton = styled.button`
  background: #FF6B35;
  color: white;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-size: 1.1rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: background 0.2s, color 0.2s;
  border: none;
  cursor: pointer;
  &:hover {
    background: #4CAF50;
    color: white;
  }
`;
