import React from 'react';
import styled from 'styled-components';
import { FaTrophy, FaMedal, FaStar, FaAward } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: 'Best Real Estate Developer 2023',
      organization: 'Kenya Real Estate Awards',
      year: '2023',
      description: 'Recognized for excellence in property development and customer satisfaction.',
      icon: <FaTrophy />,
      category: 'Excellence'
    },
    {
      id: 2,
      title: 'Customer Service Excellence',
      organization: 'Kenya Chamber of Commerce',
      year: '2023',
      description: 'Awarded for outstanding customer service and support throughout the buying process.',
      icon: <FaMedal />,
      category: 'Service'
    },
    {
      id: 3,
      title: 'Most Trusted Property Developer',
      organization: 'Consumer Choice Awards',
      year: '2022',
      description: 'Voted as the most trusted property developer by Kenyan consumers.',
      icon: <FaStar />,
      category: 'Trust'
    },
    {
      id: 4,
      title: 'Innovation in Real Estate',
      organization: 'East Africa Property Summit',
      year: '2022',
      description: 'Recognized for innovative approaches to property development and marketing.',
      icon: <FaAward />,
      category: 'Innovation'
    },
    {
      id: 5,
      title: 'Best Affordable Housing Provider',
      organization: 'Housing Finance Awards',
      year: '2021',
      description: 'Awarded for providing quality affordable housing solutions to Kenyans.',
      icon: <FaTrophy />,
      category: 'Affordability'
    },
    {
      id: 6,
      title: 'Excellence in Land Development',
      organization: 'Kenya Property Awards',
      year: '2021',
      description: 'Recognized for excellence in land development and infrastructure provision.',
      icon: <FaMedal />,
      category: 'Development'
    }
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
        <SectionTitle>Our Awards & Achievements</SectionTitle>
        <AwardsGrid>
          {awards.map((award) => (
            <AwardCard key={award.id}>
              <AwardIcon category={award.category}>
                {award.icon}
              </AwardIcon>
              <AwardContent>
                <AwardTitle>{award.title}</AwardTitle>
                <AwardOrganization>{award.organization}</AwardOrganization>
                <AwardYear>{award.year}</AwardYear>
                <AwardDescription>{award.description}</AwardDescription>
                <AwardCategory>{award.category}</AwardCategory>
              </AwardContent>
            </AwardCard>
          ))}
        </AwardsGrid>
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