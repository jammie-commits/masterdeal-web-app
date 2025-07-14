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
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.svg';
import banner3 from '../assets/banner3.svg';
import banner4 from '../assets/banner4.svg';
import jujaMasterview from '../assets/juja-masterview.jpg';
import juja1 from '../juja/SHI_4453.jpg';
import juja2 from '../juja/SHI_4454.jpg';
import juja3 from '../juja/SHI_4455.jpg';
import juja4 from '../juja/SHI_4456.jpg';
import juja5 from '../juja/SHI_4457.jpg';
import juja6 from '../juja/SHI_4458.jpg';
import juja7 from '../juja/SHI_4459.jpg';
import juja8 from '../juja/SHI_4460.jpg';
import juja9 from '../juja/SHI_4461.jpg';

// Add react-icons for features and highlights
import { FaRoad, FaBolt, FaTint, FaSchool, FaShieldAlt, FaHome, FaMoneyCheckAlt, FaCheckCircle, FaTools, FaMapMarkerAlt, FaChartLine, FaRegFileAlt, FaClock, FaAward, FaCamera, FaWallet, FaCalendarAlt } from 'react-icons/fa';
import Footer from '../components/Footer';

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
    location: 'Matuu',
    category: 'Residential',
    status: 'Completed',
    highlights: ['ROI: 15% p.a. (est.)', 'Flexible payment plans', 'Title deed in 30 days', 'Prime location'],
    floorPlan: null,
    breakdown: [
      { label: 'Plot Size', value: '50x100' },
      { label: 'Deposit', value: 'KES 50,000' },
      { label: 'Balance Period', value: '6 months' },
      { label: 'Status', value: 'Completed' },
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
    location: 'Matuu',
    category: 'Residential',
    status: 'Ongoing',
    highlights: ['ROI: 18% p.a. (est.)', 'Flexible payment plans', 'Title deed in 30 days', 'Prime location', 'Immediate construction allowed'],
    floorPlan: null, // Placeholder for future image
    breakdown: [
      { label: 'Plot Size', value: '40x80' },
      { label: 'Deposit', value: 'KES 300,000' },
      { label: 'Balance Period', value: '3 months' },
      { label: 'Status', value: 'Ongoing' },
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
    location: 'Matuu',
    category: 'Commercial',
    status: 'Upcoming',
    highlights: ['Prime location', 'High ROI potential', 'Secure investment'],
    floorPlan: null,
    breakdown: [
      { label: 'Plot Size', value: '100x200' },
      { label: 'Deposit', value: 'KES 1,000,000' },
      { label: 'Balance Period', value: '12 months' },
      { label: 'Status', value: 'Upcoming' },
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
    amenitiesGallery: [],
    location: 'Matuu',
    category: 'Residential',
    status: 'Completed',
    highlights: ['Prime location', 'Good connectivity', 'Secure investment'],
    floorPlan: null,
    breakdown: [
      { label: 'Plot Size', value: '60x120' },
      { label: 'Deposit', value: 'KES 150,000' },
      { label: 'Balance Period', value: '6 months' },
      { label: 'Status', value: 'Completed' },
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
    amenitiesGallery: [],
    location: 'Matuu',
    category: 'Commercial',
    status: 'Ongoing',
    highlights: ['Prime location', 'High ROI potential', 'Immediate construction'],
    floorPlan: null,
    breakdown: [
      { label: 'Plot Size', value: '80x160' },
      { label: 'Deposit', value: 'KES 800,000' },
      { label: 'Balance Period', value: '12 months' },
      { label: 'Status', value: 'Ongoing' },
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
    location: 'Matuu',
    category: 'Residential',
    status: 'Completed',
    highlights: ['Prime location', 'Good connectivity', 'Secure investment'],
    floorPlan: null,
    breakdown: [
      { label: 'Plot Size', value: '50x100' },
      { label: 'Deposit', value: 'KES 125,000' },
      { label: 'Balance Period', value: '6 months' },
      { label: 'Status', value: 'Completed' },
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
    location: 'Matuu',
    category: 'Residential',
    status: 'Completed',
    highlights: ['Prime location', 'Good connectivity', 'Secure investment'],
    floorPlan: null,
    breakdown: [
      { label: 'Plot Size', value: '50x100' },
      { label: 'Deposit', value: 'KES 125,000' },
      { label: 'Balance Period', value: '6 months' },
      { label: 'Status', value: 'Completed' },
    ],
  },
  {
    id: 8,
    image: jujaMasterview,
    title: 'MasterView Estate Phase 1 – Juja Farm Athi',
    price: 'KES 599,000 (Cash) / KES 650,000 (3 months installment)',
    paymentPlan: 'Cash price: KES 599,000. Deposit: KES 300,000. 3 months installment plan: KES 650,000. Start building as soon as you pay a deposit!',
    description: '40×80 Plots – Perfect for Residential Development! Prime Location: Situated in Juja Farm, Athi River, a fast-growing area with excellent connectivity. Fully Developed Estate: Water supply, Electricity, Security. Ready for immediate construction – No delays! Affordable & Flexible Payment Options: Cash price 599K, deposit 300K, or 3 months installment plan 650K. Quick Ownership: Individual titles ready – Secure your investment hassle-free! Start building as soon as you pay a deposit of 300K! FREE SITE VISITS DAILY! Location: MasterView Estate Phase 1, Juja Farm, Athi River.',
    features: [
      'Water supply',
      'Electricity',
      'Security',
      'Ready for immediate construction',
      'Individual titles ready',
      'Flexible payment options',
      'Prime location in Juja Farm, Athi River'
    ],
    amenitiesGallery: [
      { image: juja1, description: 'Juja project site view 1' },
      { image: juja2, description: 'Juja project site view 2' },
      { image: juja3, description: 'Juja project site view 3' },
      { image: juja4, description: 'Juja project site view 4' },
      { image: juja5, description: 'Juja project site view 5' },
      { image: juja6, description: 'Juja project site view 6' },
      { image: juja7, description: 'Juja project site view 7' },
      { image: juja8, description: 'Juja project site view 8' },
      { image: juja9, description: 'Juja project site view 9' }
    ],
    location: 'Juja',
    category: 'Residential',
    status: 'Ongoing',
    highlights: ['ROI: 18% p.a. (est.)', 'Flexible payment plans', 'Title deed in 30 days', 'Prime location', 'Immediate construction allowed'],
    floorPlan: null, // Placeholder for future image
    breakdown: [
      { label: 'Plot Size', value: '40x80' },
      { label: 'Deposit', value: 'KES 300,000' },
      { label: 'Balance Period', value: '3 months' },
      { label: 'Status', value: 'Ongoing' },
    ],
  }
];

const tabSections = [
  { key: 'description', label: 'Description' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'breakdown', label: 'Project Breakdown' },
  { key: 'features', label: 'Amenities & Features' },
  { key: 'floorplan', label: 'Floor Plan' },
  { key: 'gallery', label: 'Gallery' },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));
  const [visitDate, setVisitDate] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  // Add state and handlers for the Book a Site Visit form
  const [bookVisitForm, setBookVisitForm] = useState({ day: '', name: '', email: '', message: '' });
  const handleBookVisitChange = (e) => { setBookVisitForm({ ...bookVisitForm, [e.target.name]: e.target.value }); };
  const handleBookVisitSubmit = (e) => { e.preventDefault(); const message = `Hello, I would like to book a site visit.\nProperty: ${property.title}\nDay: ${bookVisitForm.day}\nName: ${bookVisitForm.name}\nEmail: ${bookVisitForm.email}\nMessage: ${bookVisitForm.message}`; const encodedMessage = encodeURIComponent(message); window.open(`https://wa.me/+254743979766?text=${encodedMessage}`, '_blank'); };

  if (!property) {
    return <div>Property not found</div>;
  }

  const generateWhatsAppLink = () => {
    const message = `Hi, I want to book a site visit on ${visitDate} for the property: ${property.title}.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/+254743979766?text=${encodedMessage}`;
  };

  return (
    <>
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
          <InfoHeader>
            <Title>{property.title}</Title>
            <StatusBadge status={property.status}>{property.status}</StatusBadge>
            <Price>{property.price}</Price>
          </InfoHeader>
          <InfoBar>
            <span><FaMapMarkerAlt /> {property.location}</span>
            {property.highlights && property.highlights.map((highlight, idx) => {
              const key = Object.keys(highlightIcons).find(k => highlight.includes(k));
              return (
                <span key={idx} style={{display:'flex',alignItems:'center',gap:'0.4rem'}}>
                  {highlightIcons[key] || <FaAward />} {highlight}
                </span>
              );
            })}
          </InfoBar>
          <TabsBar>
            {tabSections.map(tab => (
              <TabButton
                key={tab.key}
                active={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </TabButton>
            ))}
          </TabsBar>
          <MainContent>
            {activeTab === 'description' && (
              <Section>
                <SectionTitle>About this Project</SectionTitle>
                <SectionText>{property.description}</SectionText>
              </Section>
            )}
            {activeTab === 'pricing' && (
              <Section>
                <SectionTitle>Pricing</SectionTitle>
                <PaymentPlanList>
                  {property.paymentPlan.split('.').filter(Boolean).map((plan, idx) => {
                    let icon = <FaMoneyCheckAlt style={{ color: 'var(--primary-green)' }} />;
                    let label = plan;
                    if (/cash/i.test(plan)) icon = <FaMoneyCheckAlt style={{ color: 'var(--primary-green)' }} />;
                    else if (/deposit/i.test(plan)) icon = <FaWallet style={{ color: 'var(--primary-orange)' }} />;
                    else if (/installment|balance|month/i.test(plan)) icon = <FaCalendarAlt style={{ color: 'var(--primary-blue)' }} />;
                    // Highlight price in bold
                    label = label.replace(/(KES\s?\d{1,3}(,\d{3})*|\d{1,3}(,\d{3})*\s?K)/gi, match => `<strong>${match}</strong>`);
                    return (
                      <PaymentPlanItem key={idx}>
                        {icon}
                        <span dangerouslySetInnerHTML={{ __html: label.trim() }} />
                      </PaymentPlanItem>
                    );
                  })}
                </PaymentPlanList>
              </Section>
            )}
            {activeTab === 'breakdown' && (
              <Section>
                <SectionTitle>Project Breakdown</SectionTitle>
                <BreakdownTable>
                  <tbody>
                    {property.breakdown && property.breakdown.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.label}</td>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </BreakdownTable>
              </Section>
            )}
            {activeTab === 'features' && (
              <Section>
                <SectionTitle>Amenities & Features</SectionTitle>
                <FeaturesGrid>
                  {property.features.map((feature, idx) => (
                    <FeatureItem key={idx}>
                      {featureIcons[feature] || <FaTools title={feature} />}<span>{feature}</span>
                    </FeatureItem>
                  ))}
                </FeaturesGrid>
              </Section>
            )}
            {activeTab === 'floorplan' && (
              <Section>
                <SectionTitle>Floor Plan</SectionTitle>
                <FloorPlanPlaceholder>
                  <FaRegFileAlt size={40} />
                  <span>Floor plan coming soon</span>
                </FloorPlanPlaceholder>
              </Section>
            )}
            {activeTab === 'gallery' && property.amenitiesGallery && property.amenitiesGallery.length > 0 && (
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
            {/* Contact/Booking always visible at the bottom */}
            <ContactSection>
              <h3>Contact & Enquiries</h3>
              <ContactInfo>
                <ContactButton href="https://wa.me/+254743979766" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> WhatsApp Us
                </ContactButton>
                <ContactButton as="a" href="tel:+254743979766">Call: +254 743 979 766</ContactButton>
              </ContactInfo>
            </ContactSection>
            {/* Book a Site Visit section for ongoing projects */}
            {property.status === 'Ongoing' && (
              <BookVisitSection>
                <BookVisitTitle>Book a Site Visit</BookVisitTitle>
                <BookVisitForm onSubmit={handleBookVisitSubmit}>
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
            )}
          </MainContent>
        </ContentContainer>
      </Container>
      <Footer />
    </>
  );
};

export default PropertyDetails;

// Add styled components for new sections
const StatusBadge = styled.span`
  display: inline-block;
  background: ${({ status }) =>
    status === 'Ongoing' ? 'var(--primary-orange)' :
    status === 'Completed' ? 'var(--primary-green)' :
    status === 'Upcoming' ? 'var(--primary-blue)' : 'var(--gray-medium)'};
  color: var(--white);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.3rem 1rem;
  margin-bottom: 1rem;
`;
const Section = styled.section`
  margin-bottom: 2.5rem;
`;
const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--primary-orange);
  margin-bottom: 1rem;
`;
const SectionText = styled.p`
  font-size: 1.1rem;
  color: #555;
`;
const HighlightsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--light-green);
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-weight: 600;
  color: var(--primary-green);
`;
const FloorPlanPlaceholder = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--gray-light);
  border-radius: 8px;
  padding: 1.5rem;
  color: var(--primary-orange);
  font-weight: 600;
`;
const BreakdownTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  td {
    padding: 0.7rem 1rem;
    border-bottom: 1px solid #eee;
    font-size: 1.05rem;
  }
  td:first-child {
    font-weight: 600;
    color: var(--primary-green);
  }
`;
const VirtualTourPlaceholder = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--gray-light);
  border-radius: 8px;
  padding: 1.5rem;
  color: var(--primary-orange);
  font-weight: 600;
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  padding-top: 90px;
  background: var(--gray-light);
`;

const ImageSlider = styled.div`
  max-width: 900px;
  height: 60vh;
  margin: 0 auto 3rem auto;
  position: relative;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.10);
  background: #fff;
  overflow: hidden;
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
  @media (max-width: 900px) {
    height: 40vh;
    max-width: 100vw;
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
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media (max-width: 900px) {
    padding: 0 0.5rem;
  }
`;

const MainContent = styled.div`
  background: #fff;
  border-radius: 18px;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  margin: 0 auto 2rem auto;
  padding: 2rem 1rem 1.2rem 1rem;
  max-width: 900px;
  text-align: center;
`;

const InfoBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  padding: 1.2rem 1rem;
  margin: 0 auto 2rem auto;
  max-width: 900px;
  font-size: 1.1rem;
`;

const InfoCard = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  padding: 2rem 1rem;
  background: linear-gradient(90deg, var(--primary-green) 0%, var(--primary-orange) 100%);
  color: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
`;

const Title = styled.h2`
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const PaymentPlan = styled.div`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1.7;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  margin-bottom: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: #e8f5e9;
  border-radius: 10px;
  border-left: 4px solid var(--primary-green);
  box-shadow: 0 1px 4px rgba(0,0,0,0.03);
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

const BookingForm = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;
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
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
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

const TabsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem auto 1.5rem auto;
  max-width: 900px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  padding: 0.5rem 0.5rem;
  flex-wrap: wrap;
`;
const TabButton = styled.button`
  background: ${({ active }) => active ? 'var(--primary-orange)' : 'transparent'};
  color: ${({ active }) => active ? '#fff' : 'var(--primary-orange)'};
  border: none;
  border-radius: 6px;
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  box-shadow: ${({ active }) => active ? '0 2px 8px rgba(255,107,53,0.08)' : 'none'};
  &:hover {
    background: var(--primary-orange);
    color: #fff;
  }
`;

const featureIcons = {
  'Tarmac roads': <FaRoad title="Tarmac roads" />, 'Electricity': <FaBolt title="Electricity" />, 'Water supply': <FaTint title="Water supply" />, 'Schools': <FaSchool title="Schools" />, 'Security': <FaShieldAlt title="Security" />, 'Ready for immediate construction': <FaHome title="Ready for construction" />, 'Flexible payment options': <FaMoneyCheckAlt title="Flexible payment" />, 'Good Electricity connection': <FaBolt title="Electricity" />, 'Good Water supply': <FaTint title="Water supply" />, 'Near Musingini Secondary School': <FaSchool title="Schools" />, 'Afew metres from Tarmac road': <FaRoad title="Tarmac road" />, 'Individual titles ready': <FaCheckCircle title="Titles ready" />, 'Prime location in Juja Farm, Athi River': <FaMapMarkerAlt title="Prime location" />, '600 mtrs from Tarmac road': <FaRoad title="Tarmac road" />, '7km from Matuu town': <FaMapMarkerAlt title="Near Matuu" />
};
const highlightIcons = {
  'ROI': <FaChartLine title="ROI" />, 'Flexible payment plans': <FaMoneyCheckAlt title="Flexible payment" />, 'Title deed in 30 days': <FaRegFileAlt title="Title deed" />, 'Prime location': <FaMapMarkerAlt title="Prime location" />, 'Immediate construction allowed': <FaHome title="Immediate construction" />
};

// Add styled-components for BookVisitSection, BookVisitTitle, BookVisitForm, BookVisitRow, BookVisitLabel, BookVisitSelect, BookVisitInput, BookVisitTextArea, BookVisitButton (reuse from home.jsx for consistency).
const BookVisitSection = styled.div`
  margin: 2.5rem 0;
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 18px;
  text-align: left;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
`;

const BookVisitTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-green);
  margin-bottom: 1.2rem;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: 700;
`;

const BookVisitForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 420px;
  margin: 0 auto;
`;

const BookVisitRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const BookVisitLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-orange);
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
`;

const BookVisitSelect = styled.select`
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 7px;
  background-color: #f9f9f9;
  color: #222;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  transition: border-color 0.2s;
  &:focus {
    outline: none;
    border-color: var(--primary-green);
  }
`;

const BookVisitInput = styled.input`
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 7px;
  background-color: #f9f9f9;
  color: #222;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  transition: border-color 0.2s;
  &:focus {
    outline: none;
    border-color: var(--primary-green);
  }
`;

const BookVisitTextArea = styled.textarea`
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 7px;
  background-color: #f9f9f9;
  color: #222;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  resize: vertical;
  min-height: 90px;
  transition: border-color 0.2s;
  &:focus {
    outline: none;
    border-color: var(--primary-green);
  }
`;

const BookVisitButton = styled.button`
  background: linear-gradient(90deg, var(--primary-green) 0%, var(--primary-orange) 100%);
  color: #fff;
  font-weight: 700;
  padding: 0.9rem 2.2rem;
  border-radius: 24px;
  font-size: 1.08rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  letter-spacing: 0.01em;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: linear-gradient(90deg, var(--primary-orange) 0%, var(--primary-green) 100%);
    color: #fff;
  }
`;

// Add styled components for PaymentPlanList and PaymentPlanItem
const PaymentPlanList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
`;
const PaymentPlanItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 0.7rem;
  strong {
    font-weight: bold;
    color: var(--primary-orange);
    margin-left: 0.2rem;
  }
`;
