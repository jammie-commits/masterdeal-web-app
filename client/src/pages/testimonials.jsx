import React from "react";
import styled from "styled-components";
import testimonial1 from "../assets/testimonial1.jpeg"; // Replace with actual image paths
import testimonial2 from "../assets/testimonial2.jpeg";
import testimonial3 from "../assets/testimonial3.jpeg";
import testimonial4 from "../assets/testimonial4.jpeg";
import Footer from '../components/Footer';

export default function Testimonials() {
  const testimonialsData = [
    {
      image: testimonial1,
      text: `"Masterdeal Properties Limited made the investment process seamless, guiding me every step of the way until I received my title deed on time. I'm holding it in my hand, putting it in the envelope, and I'm so proud indeed. It's a genuine company to invest with, and I'm excited to invest more with them. Highly recommend!"`,
      name: "Pauline Waweru",
    },
    {
      image: testimonial2,
      text: `"I'm happy with my experience with Masterdeal Properties Limited. The team guided me smoothly through each step, and I'm now a proud owner with my title deed in hand. Their professionalism and transparency earned my trust, and I highly recommend them to anyone seeking reliable property investment."`,
      name: "MaryAnn Gathirwa",
    },
    {
      image: testimonial3,
      text: `"At first, I had many doubts, but I've realized that Masterdeal Properties Limited is the only company I can truly rely on. They are humble and silent in their approach, but their work speaks volumes. The process was smooth, and I received my title deed on time. Am deeply proud of the trust I've placed on them for they have made my dream a reality."`,
      name: "James Njoroge",
    },
    {
      image: testimonial4,
      text: `"Investing in Kenya from abroad seemed like a challenge, but Masterdeal Properties Ltd made the entire process smooth and hassle-free. Their team provided clear guidance, kept us informed at every step, and ensured all our investments were handled with care and professionalism. The returns have been impressive, and we've felt confident and secure throughout. If you're an investor abroad looking to enter the Kenyan market, MasterDeal Properties Ltd is a trusted partner that delivers both transparency and strong results."`,
      name: "Wangari Kamau, Sweden",
    },
  ];

  return (
    <TestimonialsContainer>
      <Header>
        <h1>What Our Customers Say</h1>
        <p>Real stories from our satisfied customers</p>
      </Header>
      <TestimonialsGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <TestimonialImage>
              <img src={testimonial.image} alt={testimonial.name} />
            </TestimonialImage>
            <TestimonialContent>{testimonial.text}</TestimonialContent>
            <AuthorName>- {testimonial.name}</AuthorName>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
      <Footer />
    </TestimonialsContainer>
  );
}

// Styled Components
const TestimonialsContainer = styled.div`
  min-height: 100vh;
  padding-top: 90px;
  background: linear-gradient(135deg, var(--gray-light) 0%, var(--gray-medium) 100%);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.8rem;
    color: #4caf50;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const TestimonialsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
`;

const TestimonialCard = styled.div`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-orange);
  }
  
  &::before {
    content: '"';
    position: absolute;
    top: 1rem;
    left: 2rem;
    font-size: 4rem;
    color: var(--primary-orange);
    opacity: 0.3;
    font-family: serif;
  }
`;

const TestimonialImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary-green);
    transition: all 0.3s ease;
    
    ${TestimonialCard}:hover & {
      transform: scale(1.1);
      border-color: var(--primary-orange);
    }
  }
`;

const TestimonialContent = styled.div`
  position: relative;
  margin-bottom: 2rem;
  
  p {
    color: var(--text-light);
    line-height: 1.8;
    font-style: italic;
    font-size: 1.1rem;
    text-align: center;
  }
`;

const TestimonialAuthor = styled.div`
  text-align: center;
`;

const AuthorName = styled.h4`
  font-size: 1.3rem;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const AuthorRole = styled.p`
  color: var(--primary-green);
  font-weight: 500;
  font-size: 1rem;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
  
  svg {
    color: #FFD700;
    font-size: 1.2rem;
  }
`;

const StatsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: var(--white);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-green);
    transform: translateY(-5px);
  }
  
  h3 {
    font-size: 2.5rem;
    color: var(--primary-orange);
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  
  p {
    color: var(--text-dark);
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

