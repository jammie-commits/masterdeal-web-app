import React from 'react';
import styled from 'styled-components';
import { FaDownload, FaCalendar, FaNewspaper } from 'react-icons/fa';
import Footer from '../components/Footer';

const Newsletter = () => {
  const newsletters = [
    {
      id: 1,
      title: '2024 Q1 Newsletter',
      date: 'March 2024',
      description: 'Quarterly update on our latest developments and market insights.',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: '2024 Q2 Newsletter',
      date: 'June 2024',
      description: 'Summer edition featuring new property launches and investment opportunities.',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: '2024 Q3 Newsletter',
      description: 'Autumn update with market trends and company achievements.',
      date: 'September 2024',
      downloadUrl: '#'
    }
  ];

  return (
    <Container>
      <Header>
        <h1>2024 NEWSLETTER</h1>
        <p>Stay updated with our latest news and developments</p>
      </Header>

      <NewsletterSection>
        <SectionTitle>Latest Newsletters</SectionTitle>
        <NewsletterGrid>
          {newsletters.map((newsletter) => (
            <NewsletterCard key={newsletter.id}>
              <IconContainer>
                <FaNewspaper />
              </IconContainer>
              <NewsletterContent>
                <NewsletterTitle>{newsletter.title}</NewsletterTitle>
                <NewsletterDate>
                  <FaCalendar />
                  {newsletter.date}
                </NewsletterDate>
                <NewsletterDescription>{newsletter.description}</NewsletterDescription>
                <DownloadButton href={newsletter.downloadUrl}>
                  <FaDownload />
                  Download PDF
                </DownloadButton>
              </NewsletterContent>
            </NewsletterCard>
          ))}
        </NewsletterGrid>
      </NewsletterSection>

      <SubscribeSection>
        <h2>Subscribe to Our Newsletter</h2>
        <SubscribeContent>
          <p>Get the latest updates on new properties, market insights, and exclusive offers delivered to your inbox.</p>
          <SubscribeForm>
            <EmailInput type="email" placeholder="Enter your email address" />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </SubscribeForm>
        </SubscribeContent>
      </SubscribeSection>
      <Footer />
    </Container>
  );
};

export default Newsletter;

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

const NewsletterSection = styled.section`
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

const NewsletterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const NewsletterCard = styled.div`
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

const NewsletterContent = styled.div``;

const NewsletterTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const NewsletterDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;

  svg {
    color: #4CAF50;
  }
`;

const NewsletterDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const DownloadButton = styled.a`
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

const SubscribeSection = styled.section`
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

const SubscribeContent = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const SubscribeForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const SubscribeButton = styled.button`
  background: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #45a049;
  }
`;
