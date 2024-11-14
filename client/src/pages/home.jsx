import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";



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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <HeroSection id="hero">
      <ImageSlider>
        <SlideContainer currentImageIndex={currentImageIndex}>
          {images.map((image, index) => (
            <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </SlideContainer>
      </ImageSlider>
      <Content>
        <Title>
          <GradientBackground>
            <h1>MASTERDEAL PROPERTIES</h1>
            <p>Beyond the Sale</p>
          </GradientBackground>
        </Title>
        
      </Content>
      
    </HeroSection>
  );
}

// Sliding animation keyframe
const slideLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
`;

const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;
`;

const SlideContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  animation: ${slideLeft} 15s linear infinite;
  transform: translateX(${({ currentImageIndex }) => -currentImageIndex * 100}%);
`;

const Slide = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(60%);
  transition: opacity 1s ease-in-out;
  opacity: ${({ currentImageIndex }) => (currentImageIndex ? 0 : 1)};
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: white;
  padding: 0 2rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 0 1rem; // Reduce padding on smaller screens
  }

  @media (min-width: 768px) {
    padding: 0 4rem; // Increase padding on larger screens for better spacing
  }
`;

const Title = styled.div`
  display: inline-block;
`;

const GradientBackground = styled.div`
  display: inline-block;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  border-radius: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  h1 {
    font-size: 4rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    padding: 0 20vw;
    font-size: 1.4rem;
    margin-top: 1rem;
    font-weight: 500;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 2rem; // Reduce padding on mobile
    h1 {
      font-size: 2rem; // Adjust header size on mobile
    }
    p {
      font-size: 1.2rem; // Adjust paragraph size on mobile
      padding: 0 10vw; // Reduce padding for better readability
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem; // Keep large font size for desktop
    }
    p {
      font-size: 1.4rem; // Adjust paragraph size for desktop
      padding: 0 15vw; // Increase padding on desktop for better readability
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem; // Stack buttons vertically on smaller screens
  }

  @media (min-width: 768px) {
    gap: 2rem; // Increase gap on larger screens
  }
`;

const buttonBase = `
  padding: 0.8rem 2rem;
  cursor: pointer;
  border-radius: 2rem;
  border: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;



const FormWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 5;
`;


