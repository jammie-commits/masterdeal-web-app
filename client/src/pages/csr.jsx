import React from 'react';
import styled from 'styled-components';
import { FaHandsHelping, FaGraduationCap, FaTree, FaHeart } from 'react-icons/fa';
import Footer from '../components/Footer';
import csr1 from '../CSR/SHI_3516.jpg';
import csr2 from '../CSR/SHI_3513.jpg';
import csr3 from '../CSR/SHI_3514.jpg';
import csr4 from '../CSR/SHI_3510.jpg';
import csr5 from '../CSR/SHI_3502.jpg';
import csr6 from '../CSR/SHI_3506.jpg';
import csr7 from '../CSR/SHI_3500.jpg';
import csr8 from '../CSR/SHI_3498.jpg';
import csr9 from '../CSR/SHI_3499.jpg';
import csr10 from '../CSR/SHI_3496.jpg';
import csr11 from '../CSR/SHI_3493.jpg';
import csr12 from '../CSR/SHI_3495.jpg';
import csr13 from '../CSR/SHI_3491.jpg';
import csr14 from '../CSR/SHI_3490.jpg';
import csr15 from '../CSR/SHI_3489.jpg';
import csr16 from '../CSR/SHI_3486.jpg';
import csr17 from '../CSR/SHI_3488.jpg';
import csr18 from '../CSR/SHI_3484.jpg';

const CSR = () => {
  const csrInitiatives = [
    {
      id: 1,
      title: 'Education Support',
      description: 'We support local schools and educational programs to ensure children in our communities have access to quality education.',
      icon: <FaGraduationCap />,
      category: 'Education'
    },
    {
      id: 2,
      title: 'Environmental Conservation',
      description: 'We are committed to environmental sustainability through tree planting initiatives and eco-friendly development practices.',
      icon: <FaTree />,
      category: 'Environment'
    },
    {
      id: 3,
      title: 'Community Development',
      description: 'We invest in community infrastructure and development projects to improve the quality of life for local residents.',
      icon: <FaHandsHelping />,
      category: 'Community'
    },
    {
      id: 4,
      title: 'Healthcare Support',
      description: 'We support healthcare initiatives and medical facilities in the communities where we operate.',
      icon: <FaHeart />,
      category: 'Healthcare'
    }
  ];

  return (
    <Container>
      <Header>
        <h1>CORPORATE SOCIAL RESPONSIBILITY</h1>
        <p>Making a positive impact in the communities we serve</p>
      </Header>

      <CSRSection>
        <SectionTitle>Our CSR Initiatives</SectionTitle>
        <CSRGrid>
          {csrInitiatives.map((initiative) => (
            <CSRCard key={initiative.id}>
              <IconContainer>
                {initiative.icon}
              </IconContainer>
              <CSRContent>
                <CSRTitle>{initiative.title}</CSRTitle>
                <CSRDescription>{initiative.description}</CSRDescription>
                <CSRCategory>{initiative.category}</CSRCategory>
              </CSRContent>
            </CSRCard>
          ))}
        </CSRGrid>
      </CSRSection>

      <GallerySection>
        <GalleryTitle>CSR Activities Gallery</GalleryTitle>
        <GalleryGrid>
          {[csr1, csr2, csr3, csr4, csr5, csr6, csr7, csr8, csr9, csr10, csr11, csr12, csr13, csr14, csr15, csr16, csr17, csr18].map((img, idx) => (
            <GalleryImg key={idx} src={img} alt={`CSR Activity ${idx+1}`} />
          ))}
        </GalleryGrid>
      </GallerySection>

      <MissionSection>
        <h2>Our Mission</h2>
        <MissionContent>
          <p>
            At MasterDeal Properties, we believe in giving back to the communities that have trusted us with their investments. 
            Our Corporate Social Responsibility initiatives focus on education, environmental conservation, community development, 
            and healthcare support.
          </p>
          <p>
            We are committed to sustainable development practices and ensuring that our business operations create positive 
            social and environmental impacts for future generations.
          </p>
        </MissionContent>
      </MissionSection>
      <Footer />
    </Container>
  );
};

export default CSR;

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

const CSRSection = styled.section`
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

const CSRGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CSRCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4CAF50, #45a049);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: white;
  font-size: 1.5rem;
`;

const CSRContent = styled.div``;

const CSRTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const CSRDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const CSRCategory = styled.span`
  display: inline-block;
  background: #4CAF50;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const MissionSection = styled.section`
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

const MissionContent = styled.div`
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

const GallerySection = styled.section`
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  padding: 0 2rem;
`;

const GalleryTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  width: 100%;
  align-items: center;
  justify-items: center;
`;

const GalleryImg = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05) rotate(-2deg);
    box-shadow: 0 8px 24px rgba(44, 62, 80, 0.18);
    z-index: 2;
  }
`;
