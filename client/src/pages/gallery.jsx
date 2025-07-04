import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';

// Import some images for the gallery
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.jpeg';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/image10.jpeg';
import Footer from '../components/Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: image1, title: 'Property Development', category: 'Properties' },
    { id: 2, src: image2, title: 'Land Survey', category: 'Development' },
    { id: 3, src: image3, title: 'Infrastructure', category: 'Properties' },
    { id: 4, src: image4, title: 'Site Visit', category: 'Events' },
    { id: 5, src: image5, title: 'Property Launch', category: 'Events' },
    { id: 6, src: image6, title: 'Construction Progress', category: 'Development' },
    { id: 7, src: image7, title: 'Customer Meeting', category: 'Events' },
    { id: 8, src: image8, title: 'Property Viewing', category: 'Properties' },
    { id: 9, src: image9, title: 'Team Building', category: 'Events' },
    { id: 10, src: image10, title: 'Award Ceremony', category: 'Events' }
  ];

  const categories = ['All', 'Properties', 'Development', 'Events'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <GalleryContainer>
      <HeroSection>
        <h1>MASTERDEAL GALLERY</h1>
        <p>Explore our properties, developments, and company events</p>
      </HeroSection>

      <FilterSection>
        <FilterButtons>
          {categories.map(category => (
            <FilterButton 
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>
      </FilterSection>

      <GalleryGrid>
        {filteredImages.map((image) => (
          <GalleryItem key={image.id} onClick={() => setSelectedImage(image)}>
            <GalleryImage src={image.src} alt={image.title} />
            <ImageOverlay>
              <FaSearch />
              <ImageTitle>{image.title}</ImageTitle>
            </ImageOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </CloseButton>
            <ModalImage src={selectedImage.src} alt={selectedImage.title} />
            <ModalTitle>{selectedImage.title}</ModalTitle>
            <ModalCategory>{selectedImage.category}</ModalCategory>
          </ModalContent>
        </Modal>
      )}
      <Footer />
    </GalleryContainer>
  );
};

export default Gallery;

const GalleryContainer = styled.div`
  min-height: 100vh;
  padding-top: 90px;
  background: linear-gradient(135deg, var(--gray-light) 0%, var(--gray-medium) 100%);
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-orange) 100%);
  color: var(--white);
  padding: 4rem 2rem;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const FilterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ active }) => active ? 'var(--primary-orange)' : 'var(--gray-medium)'};
  background: ${({ active }) => active ? 'var(--primary-orange)' : 'var(--white)'};
  color: ${({ active }) => active ? 'var(--white)' : 'var(--text-dark)'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary-orange);
    color: var(--white);
    border-color: var(--primary-orange);
    transform: translateY(-2px);
  }
`;

const GalleryGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 0 1rem 2rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    
    img {
      transform: scale(1.1);
    }
    
    .overlay {
      opacity: 1;
    }
  }
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.8) 0%, rgba(255, 107, 53, 0.8) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    svg {
      color: var(--white);
      font-size: 2rem;
    }
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;

  ${GalleryItem}:hover & {
    opacity: 1;
  }

  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const ImageTitle = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: var(--primary-orange);
  color: var(--white);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary-orange);
    transform: scale(1.1);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
`;

const ModalTitle = styled.h3`
  padding: 1rem;
  margin: 0;
  color: #333;
  font-size: 1.3rem;
`;

const ModalCategory = styled.p`
  padding: 0 1rem 1rem;
  margin: 0;
  color: #4CAF50;
  font-weight: 600;
`;
