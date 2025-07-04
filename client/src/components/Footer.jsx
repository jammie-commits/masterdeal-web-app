import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <FooterGrid>
        {/* Address Section */}
        <FooterSection>
          <SectionTitle>Address</SectionTitle>
          <FooterList>
            <FooterListItem><FaMapMarkerAlt /> HQ - MasterDeal Towers 4th Floor, Ruiru.</FooterListItem>
            <FooterListItem><FaMapMarkerAlt /> Thika Branch - Elica Plaza, 1st Floor.</FooterListItem>
            <FooterListItem><FaMapMarkerAlt /> Coastal Branch - Malindi Mall, Suite 17, Malindi.</FooterListItem>
          </FooterList>
        </FooterSection>
        {/* Contact Section */}
        <FooterSection>
          <SectionTitle>Contact</SectionTitle>
          <FooterList>
            <FooterListItem>
              <FaPhoneAlt />
              <span style={{marginLeft: 8}}>
                <a href="https://wa.me/+254743979766" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', textDecoration: 'none', fontWeight: 'bold', marginRight: '1.2rem' }}>WhatsApp</a>
                <a href="tel:+254743979766" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: 'bold' }}>+254 743 979 766</a>
              </span>
            </FooterListItem>
            <FooterListItem><FaEnvelope /> <a href="mailto:info@masterdealproperties.com" style={{ color: '#fff', textDecoration: 'none', marginLeft: 8 }}>info@masterdealproperties.com</a></FooterListItem>
          </FooterList>
        </FooterSection>
        {/* Quick Links Section */}
        <FooterSection>
          <SectionTitle>Quick Links</SectionTitle>
          <FooterLinks>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/properties">Properties</FooterLink>
            <FooterLink href="/blog">Blogs</FooterLink>
            <FooterLink href="/">Home</FooterLink>
          </FooterLinks>
        </FooterSection>
        {/* Social Section */}
        <FooterSection>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialLinks>
            <SocialLink href="https://www.facebook.com/MasterDealPropertiesltd" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={28} />
            </SocialLink>
          </SocialLinks>
          <FollowText>@masterdealproperties</FollowText>
        </FooterSection>
      </FooterGrid>
      <FooterBottom>
        <FooterLinks>
          <FooterLink href="/">Privacy Policy</FooterLink>
          <FooterLink href="/">Terms of Service</FooterLink>
        </FooterLinks>
        <Copyright>
          &copy; {new Date().getFullYear()} Masterdeal Properties. All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #4caf50, #ff5722);
  color: white;
  padding: 3rem 0 1.5rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #ffccbc;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 0.5rem;
  a {
    color: white;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: #ffccbc;
    }
  }
`;

const FooterLink = styled.a``;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const SocialLink = styled.a`
  color: #1877f3;
  background: #fff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(24,119,243,0.08);
  font-size: 1.5rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #1877f3;
    color: #fff;
  }
`;

const FollowText = styled.div`
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255,255,255,0.18);
  padding-top: 1.2rem;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    text-align: center;
  }
`;

const Copyright = styled.div`
  font-size: 1rem;
  color: #fff;
`; 