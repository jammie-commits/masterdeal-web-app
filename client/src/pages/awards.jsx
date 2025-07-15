import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaMedal, FaStar, FaAward } from 'react-icons/fa';
import Footer from '../components/Footer';
import award1 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM.jpeg';
import award2 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-2.jpeg';
import award3 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-3.jpeg';
import award4 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-4.jpeg';
import award5 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-5.jpeg';
import award6 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-6.jpeg';
import award7 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-7.jpeg';
import award8 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-8.jpeg';
import award9 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-9.jpeg';
import award10 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-10.jpeg';
import award11 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-11.jpeg';
import award12 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-12.jpeg';
import award13 from '../awards/WhatsApp Image 2025-07-15 at 2.19.10 PM-13.jpeg';
import award14 from '../awards/WhatsApp Image 2025-07-15 at 2.19.11 PM.jpeg';

const Awards = () => {
  const awardImages = [
    award1, award2, award3, award4, award5, award6, award7, award8, award9, award10, award11, award12, award13, award14
  ];

  const stats = [
    { number: '5000+', label: 'Happy Clients' },
    { number: '50+', label: 'Projects Completed' },
    { number: '8', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <Container>
      <Header>
        <h1>AWARDS & RECOGNITIONS</h1>
        <p>Celebrating our achievements and the trust our clients place in us</p>
      </Header>

      <StatsSection>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>

      <AwardsSection>
        <SectionTitle>Top Realtors Award 2025</SectionTitle>
        <AwardsGrid>
          <AwardCard>
            <AwardImage src={award1} alt="Top Realtors Award 2025" />
            <AwardContent>
              <AwardTitle>Top Realtors Award 2025</AwardTitle>
              <AwardDescription>
                We are deeply honored to be recognized with the <b>Top Realtors Award 2025</b> by Topspin Brands Ltd. This prestigious accolade is a testament to the unwavering trust and support of our valued clients. Your belief in Masterdeal Properties has empowered us to achieve new heights of excellence and authenticity in the real estate industry.<br /><br />
                This recognition reflects the strong partnerships we have built with you—our esteemed clients. Your loyalty and confidence inspire us to continually raise the bar, deliver outstanding service, and turn dreams into reality. <br /><br />
                Thank you for making this achievement possible. We look forward to reaching even greater milestones together.
              </AwardDescription>
            </AwardContent>
          </AwardCard>
        </AwardsGrid>
        <GalleryTitle>Award Ceremony Gallery</GalleryTitle>
        <GalleryGrid>
          {awardImages.map((img, idx) => (
            <GalleryImg key={idx} src={img} alt={`Award Ceremony ${idx+1}`} />
          ))}
        </GalleryGrid>
      </AwardsSection>

      <RecognitionSection>
        <h2>Industry Recognition</h2>
        <RecognitionContent>
          <RecognitionText>
            <p>
              MasterDeal Properties has been consistently recognized by industry leaders and 
              regulatory bodies for our commitment to excellence, innovation, and customer satisfaction. 
              Our awards reflect our dedication to providing the best real estate solutions in Kenya.
            </p>
            <p>
              We are proud to be among the top real estate developers in Kenya, with a proven track 
              record of delivering quality properties and exceptional service to our clients.
            </p>
          </RecognitionText>
          <RecognitionImage>
            <div style={{ 
              width: '100%', 
              height: '300px', 
              background: 'linear-gradient(135deg, #4CAF50, #45a049)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}>
              Industry Recognition
            </div>
          </RecognitionImage>
        </RecognitionContent>
      </RecognitionSection>
      <Footer />
    </Container>
  );
};

export default Awards;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem 0;
`;

const Header = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  color: white;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const StatsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 4rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #4CAF50;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
`;

const AwardsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 4rem;
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
    background: #4CAF50;
    border-radius: 2px;
  }
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AwardCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AwardIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ category }) => {
    switch (category) {
      case 'Excellence': return '#FFD700';
      case 'Service': return '#4CAF50';
      case 'Trust': return '#2196F3';
      case 'Innovation': return '#9C27B0';
      case 'Affordability': return '#FF9800';
      case 'Development': return '#795548';
      default: return '#4CAF50';
    }
  }};
  flex-shrink: 0;
`;

const AwardContent = styled.div`
  flex: 1;
`;

const AwardTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const AwardOrganization = styled.div`
  font-size: 1rem;
  color: #4CAF50;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const AwardYear = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const AwardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const AwardCategory = styled.span`
  display: inline-block;
  background: #4CAF50;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const AwardImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(44, 62, 80, 0.12);
  margin-bottom: 1.5rem;
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

const GalleryTitle = styled.h3`
  text-align: center;
  font-size: 1.3rem;
  color: #333;
  margin: 2.5rem 0 1.2rem 0;
  font-weight: 600;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto 2.5rem auto;
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
  @media (max-width: 600px) {
    height: 90px;
  }
`;

const RecognitionSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 3rem;
  }
`;

const RecognitionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RecognitionText = styled.div`
  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const RecognitionImage = styled.div`
  width: 100%;
`; 