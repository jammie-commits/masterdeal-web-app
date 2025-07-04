import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import appreciationImg from '../assets/image1.jpeg'; 
import lowMaintenanceImg from '../assets/image2.jpeg'; 
import flexibilityImg from '../assets/image3.jpeg';
import kenyaLandImg from '../assets/image4.jpeg'; 
import Footer from '../components/Footer';

const blogArticles = [
  {
    id: 1,
    title: '1. Steady Appreciation in Value',
    image: appreciationImg,
    alt: 'Land appreciation',
    content: `Kenya’s land market has shown remarkable growth, with properties appreciating annually. Urban areas, especially Matuu have seen high demand for land, driving prices up consistently. Even rural plots are seeing appreciation due to infrastructure developments and expanding cities.`
  },
  {
    id: 2,
    title: '2. Low Maintenance Costs',
    image: lowMaintenanceImg,
    alt: 'Low maintenance land',
    content: `Land investment in Kenya comes with low maintenance compared to built properties. With no need for regular repairs or tenant management, landowners can hold their property without significant ongoing expenses, allowing for hassle-free value growth.`
  },
  {
    id: 3,
    title: '3. High Flexibility and Potential for Development',
    image: flexibilityImg,
    alt: 'Flexible land use',
    content: `Kenyan land offers flexibility: you can lease it for agricultural use, build residential or commercial structures, or simply hold onto it as it appreciates. This versatility allows land investors to adapt their strategy to evolving markets.`
  },
  {
    id: 4,
    title: '4. Economic Growth and Development in Kenya',
    image: kenyaLandImg,
    alt: 'Investment in Kenya',
    content: `Kenya’s growing economy and investment in infrastructure are driving demand for land. The development of roads, schools, and utilities in previously rural areas creates new investment opportunities. Investing early in these regions can yield significant returns as these areas develop.`
  }
];

const Blog = () => {
  // Refs for each article
  const articleRefs = useRef([]);

  const handleDownload = async (idx, title) => {
    const input = articleRefs.current[idx];
    if (!input) return;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'p', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth - 40;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 20, 20, pdfWidth, pdfHeight);
    pdf.save(`${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
  };

  return (
    <BlogSection>
      <Header>
        <h1>Why Investing in Land in Kenya is a Smart Move</h1>
        <p>
          Kenya’s real estate market is booming, and land investment provides stability, growth,
          and a chance to participate in the country's ongoing development. Let’s dive into why
          investing in Kenyan land is one of the best financial moves you can make.
        </p>
      </Header>
      <Content>
        {blogArticles.map((article, idx) => (
          <Article key={article.id} ref={el => (articleRefs.current[idx] = el)}>
            <DownloadButton onClick={() => handleDownload(idx, article.title)}>
              Download as PDF
            </DownloadButton>
            <ImageContainer>
              <img src={article.image} alt={article.alt} />
            </ImageContainer>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </Article>
        ))}
        <CallToAction>
          <h2>Ready to Invest in Kenya’s Thriving Land Market?</h2>
          <p>
            Discover our selection of land properties in prime locations across Kenya, offering
            accessible amenities, growth potential, and stunning landscapes. Begin your journey to a
            profitable land investment today.
          </p>
          <Button to="/properties">Explore Properties</Button>
        </CallToAction>
      </Content>
      <Footer />
    </BlogSection>
  );
};

export default Blog;

// Styled Components

const BlogSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9fafb;
  color: #333;
  line-height: 1.6;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    color: #2c3e50;
  }

  p {
    font-size: 1.2rem;
    color: #7f8c8d;
    max-width: 700px;
    margin: 1rem auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 800px;
  margin: auto;
`;

const Article = styled.article`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px;
  position: relative;

  h2 {
    font-size: 2rem;
    color: #34495e;
  }

  p {
    font-size: 1rem;
    color: #7f8c8d;
    margin-top: 1rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const CallToAction = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background-color: #2ecc71;
  color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 20px;

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 1.5rem auto;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
  background-color: #27ae60;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e8449;
  }
`;

const DownloadButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #ff6b35;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  z-index: 2;
  &:hover {
    background: #e55a24;
  }
`;
