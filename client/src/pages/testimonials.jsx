import React from "react";
import styled from "styled-components";

export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <h1>Customer Testimonials</h1>
      <p>Read what our customers have to say about their experiences with us.</p>
      {/* Replace these divs with dynamic testimonial content */}
      <Testimonial>
        <p>"Masterdeal Properties made buying land so easy! Highly recommended!"</p>
        <span>- Mercy Wacuka</span>
      </Testimonial>
      <Testimonial>
        <p>"A seamless experience from start to finish. Exceptional service."</p>
        <span>- Jacob Nzilani</span>
      </Testimonial>
    </TestimonialsContainer>
  );
}

const TestimonialsContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h1 {
    color: #4CAF50;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

const Testimonial = styled.div`
  margin: 1.5rem 0;
  font-style: italic;

  span {
    display: block;
    margin-top: 0.5rem;
    color: #888;
  }
`;
