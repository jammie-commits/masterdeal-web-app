// Testimonials.js
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import avatarImage2 from "../assets/PHOTO14.jpeg";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Fetch testimonials from the backend
        fetch('http://127.0.0.1:5555/testimonials')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setTestimonials(data);
            })
            .catch(error => {
                console.error("There was an error fetching the testimonials!", error);
            });
    }, []);

    return (
        <StyledSection id="testimonials">
            <Title>
                <h2>What Our Clients Say</h2>
            </Title>
            <TestimonialContainer>
                {testimonials.map((testimonial) => (
                    <Testimonial key={testimonial.id}>
                        <Rating>Rating: {testimonial.rating} ★</Rating>
                        <p>{testimonial.comments}</p>
                        <Info>
                            <img src={avatarImage2} alt={testimonial.user_name} />
                            <Details>
                                <h4>{testimonial.user_name}</h4>  {/* Display user name */}
                                <span>{testimonial.destination_title}</span>  {/* Display destination title */}
                            </Details>
                        </Info>
                    </Testimonial>
                ))}
            </TestimonialContainer>
        </StyledSection>
    );
}

const StyledSection = styled.section`
  margin: 5rem 0;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: #4CAF50;
  }
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 0 2rem;
`;

const Testimonial = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s ease-in-out;
  width: 100%;
  max-width: 600px;

  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Rating = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ff9900;  /* Star color */
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  img {
    border-radius: 50%;
    height: 3rem;
  }
`;

const Details = styled.div`
  h4 {
    margin: 0;
    font-size: 1.1rem;
    color: #333;
  }

  span {
    font-size: 0.9rem;
    color: #777;
  }
`;
