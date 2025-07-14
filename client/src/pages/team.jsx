import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import CEO from '../assets/CEO.jpeg';
import Footer from '../components/Footer';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'MR. DENNIS WAMATU',
      position: 'C.E.0/MD MASTERDEAL PROPERTIES',
      image: CEO,
      description: 'Mr. Dennis Wamatu is the Founder, member of board of Directors and Chairman in MasterDeal Properties Limited. As the Chairman he ensures a smooth running in the Management & Leadership enhancing a smooth flow in business operations and strategy. With a wealth of experience in business.',
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  ];

  return (
    <Container>
      <Header>
        <h1>MANAGEMENT TEAM</h1>
        <p>Meet the leadership team driving MasterDeal Properties to success</p>
      </Header>

      <TeamSection>
        <SectionTitle>Senior Management</SectionTitle>
        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamCard key={member.id}>
              <ImageContainer>
                <MemberImage src={member.image} alt={member.name} />
              </ImageContainer>
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
                <MemberDescription>{member.description}</MemberDescription>
                <SocialLinks>
                  <SocialLink href={member.linkedin} target="_blank" aria-label="LinkedIn">
                    <FaLinkedin />
                  </SocialLink>
                  <SocialLink href={member.twitter} target="_blank" aria-label="Twitter">
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href={`mailto:${member.email}`} aria-label="Email">
                    <FaEnvelope />
                  </SocialLink>
                </SocialLinks>
              </MemberInfo>
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamSection>

      <ValuesSection>
        <h2>Our Core Values</h2>
        <ValuesGrid>
          <ValueCard>
            <ValueIcon>🏆</ValueIcon>
            <ValueTitle>Excellence</ValueTitle>
            <ValueDescription>We strive for excellence in everything we do, from property development to customer service.</ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>🤝</ValueIcon>
            <ValueTitle>Integrity</ValueTitle>
            <ValueDescription>We conduct our business with the highest standards of integrity and transparency.</ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>💡</ValueIcon>
            <ValueTitle>Innovation</ValueTitle>
            <ValueDescription>We continuously innovate to provide the best real estate solutions for our clients.</ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon>👥</ValueIcon>
            <ValueTitle>Customer Focus</ValueTitle>
            <ValueDescription>Our customers are at the heart of everything we do, and we prioritize their satisfaction.</ValueDescription>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>
      <Footer />
    </Container>
  );
};

export default Team;

const Container = styled.div`
  min-height: 100vh;
  background: #f5f7fa;
  padding: 2rem 0;
`;

const Header = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #4CAF50;
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

const TeamSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  width: 220px;
  height: 220px;
  margin: 2rem auto 1.5rem auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(44, 62, 80, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MemberInfo = styled.div`
  padding: 2rem;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const MemberPosition = styled.h4`
  font-size: 1.1rem;
  color: #4CAF50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const MemberDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #45a049;
    transform: translateY(-3px);
  }
`;

const ValuesSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
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

const ValueIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ValueDescription = styled.p`
  color: #666;
  line-height: 1.6;
`; 