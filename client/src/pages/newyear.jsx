import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaCalendar, FaUser } from 'react-icons/fa';

const NewYear = () => {
  const addresses = [
    {
      id: 1,
      title: '2025 New Year Address from CEO',
      speaker: 'Mr. Peter Kamau',
      date: 'January 1, 2025',
      description: 'A message of hope and vision for the new year from our CEO.',
      videoUrl: '#'
    },
    {
      id: 2,
      title: '2025 Chairman\'s New Year Message',
      speaker: 'Mr. Joseph Chege',
      date: 'January 1, 2025',
      description: 'Reflections on the past year and plans for the future.',
      videoUrl: '#'
    }
  ];

  return (
    <Container>
      <Header>
        <h1>2025 NEW YEAR'S ADDRESSES</h1>
        <p>Messages from our leadership team for the new year</p>
      </Header>

      <AddressesSection>
        <SectionTitle>New Year Messages</SectionTitle>
        <AddressesGrid>
          {addresses.map((address) => (
            <AddressCard key={address.id}>
              <VideoContainer>
                <VideoPlaceholder>
                  <PlayButton>
                    <FaPlay />
                  </PlayButton>
                </VideoPlaceholder>
              </VideoContainer>
              <AddressContent>
                <AddressTitle>{address.title}</AddressTitle>
                <AddressMeta>
                  <MetaItem>
                    <FaUser />
                    {address.speaker}
                  </MetaItem>
                  <MetaItem>
                    <FaCalendar />
                    {address.date}
                  </MetaItem>
                </AddressMeta>
                <AddressDescription>{address.description}</AddressDescription>
                <WatchButton href={address.videoUrl}>
                  <FaPlay />
                  Watch Video
                </WatchButton>
              </AddressContent>
            </AddressCard>
          ))}
        </AddressesGrid>
      </AddressesSection>

      <MessageSection>
        <h2>Looking Forward to 2025</h2>
        <MessageContent>
          <p>
            As we welcome 2025, MasterDeal Properties is excited to continue our journey of providing 
            exceptional real estate solutions to our valued clients. We remain committed to innovation, 
            quality, and customer satisfaction in everything we do.
          </p>
          <p>
            Thank you for your trust and support throughout 2024. We look forward to serving you 
            with even greater dedication in the coming year.
          </p>
        </MessageContent>
      </MessageSection>
    </Container>
  );
};

export default NewYear;

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

const AddressesSection = styled.section`
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

const AddressesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
`;

const AddressCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const VideoContainer = styled.div`
  height: 250px;
  background: #f0f0f0;
  position: relative;
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4CAF50;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: white;
  }
`;

const AddressContent = styled.div`
  padding: 2rem;
`;

const AddressTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const AddressMeta = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;

  svg {
    color: #4CAF50;
  }
`;

const AddressDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const WatchButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #4CAF50;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #45a049;
  }
`;

const MessageSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
  }
`;

const MessageContent = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
