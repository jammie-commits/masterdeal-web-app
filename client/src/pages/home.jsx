import React, { useState } from "react";
import styled from "styled-components";

// Import images from assets folder
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/image12.jpeg";
import image13 from "../assets/image13.jpeg";
import image14 from "../assets/image14.jpeg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];

export default function Home() {
  return (
    <HeroSection>
      <ImageWave>
        {images.map((image, index) => (
          <WaveImage
            key={index}
            src={image}
            alt={`Wave ${index + 1}`}
          />
        ))}
      </ImageWave>
      <Content>
        <Title>MASTER DEAL PROPERTIES</Title>
        <Subtitle>Beyond the Sale</Subtitle>
      </Content>
    </HeroSection>
  );
}

// Hero Section Styling
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222; /* fallback color */
  font-family: 'Poppins', sans-serif;
`;

// Wave Effect for Images
const ImageWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 1;
`;

const WaveImage = styled.img`
  width: 15vw;
  height: 60vh;
  object-fit: cover;
  filter: brightness(60%);
  transition: transform 0.3s ease, filter 0.3s ease;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);

  &:hover {
    filter: brightness(80%);
    transform: scale(1.1) translateY(-20px);
  }
`;

// Content Layer Styling
const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin: 0;
  padding: 0.5rem 2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
