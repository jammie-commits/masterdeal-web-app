import React from "react";
import styled from "styled-components";
import testimonial1 from "../assets/testimonial1.jpeg"; // Replace with actual image paths
import testimonial2 from "../assets/testimonial2.jpeg";
import testimonial3 from "../assets/testimonial3.jpeg";
import testimonial4 from "../assets/testimonial4.jpeg";

export default function Testimonials() {
  const testimonialsData = [
    {
      image: testimonial1,
      text: `"Masterdeal Properties Limited made the investment process seamless, guiding me every step of the way until I received my title deed on time. I'm holding it in my hand, putting it in the envelope, and I’m so proud indeed. It’s a genuine company to invest with, and I’m excited to invest more with them. Highly recommend!"`,
      name: "Pauline Waweru",
    },
    {
      image: testimonial2,
      text: `"I’m happy with my experience with Masterdeal Properties Limited. The team guided me smoothly through each step, and I’m now a proud owner with my title deed in hand. Their professionalism and transparency earned my trust, and I highly recommend them to anyone seeking reliable property investment."`,
      name: "MaryAnn Gathirwa",
    },
    {
      image: testimonial3,
      text: `"At first, I had many doubts, but I've realized that Masterdeal Properties Limited is the only company I can truly rely on. They are humble and silent in their approach, but their work speaks volumes. The process was smooth, and I received my title deed on time. Am deeply proud of the trust I've placed on them for they have made my dream a reality."`,
      name: "James Njoroge",
    },
    {
      image: testimonial4,
      text: `"Investing in Kenya from abroad seemed like a challenge, but Masterdeal Properties Ltd made the entire process smooth and hassle-free. Their team provided clear guidance, kept us informed at every step, and ensured all our investments were handled with care and professionalism. The returns have been impressive, and we’ve felt confident and secure throughout. If you're an investor abroad looking to enter the Kenyan market, MasterDeal Properties Ltd is a trusted partner that delivers both transparency and strong results."`,
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
          <Testimonial key={index}>
            <ImageContainer>
              <img src={testimonial.image} alt={testimonial.name} />
            </ImageContainer>
            <Text>{testimonial.text}</Text>
            <Name>- {testimonial.name}</Name>
          </Testimonial>
        ))}
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
}

// Styled Components
const TestimonialsContainer = styled.section`
  background: linear-gradient(to bottom, #f9f9f9, #ffffff);
  padding: 4rem 2rem;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
`;

const Testimonial = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #4caf50;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const Name = styled.span`
  font-size: 1rem;
  color: #4caf50;
  font-weight: bold;
  text-align: right;
  display: block;
`;

