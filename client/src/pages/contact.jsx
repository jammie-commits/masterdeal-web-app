import React, { useState } from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    property: '',
    day: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const properties = [
    'Select property',
    'Victory Garden Phase-1',
    'Victory Garden Phase-2',
    'Victory Garden Phase-3',
    'Victory Garden Phase-4',
    'Victory Garden Phase-5',
    'Victory Garden Phase-6',
    'Victory Garden Phase-7',
    'Green Valley Phase-1',
    'Green Valley Phase-2',
    'Sunset Gardens Phase-1',
    'Sunset Gardens Phase-2',
    'Mountain View Estate',
    'Lake View Gardens',
    'Coastal Paradise Phase-1',
    'Coastal Paradise Phase-2',
    'Highland Gardens',
    'Plains View Estate',
    'Kilimambogo Heights',
    'Ruiru Gardens Phase-1',
    'Ruiru Gardens Phase-2'
  ];

  const days = [
    'Select Day',
    'Saturday',
    'Wednesday 18th Nov 2023',
    'Other'
  ];

  return (
    <ContactContainer>
      <HeroSection>
        <h1>CONTACT US</h1>
        <p>Get in touch with us for any inquiries or to schedule a site visit</p>
      </HeroSection>

      <ContactContent>
        <ContactForm>
          <FormTitle>Book a Site Visit</FormTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Select property</Label>
              <Input name="property" value={formData.property} onChange={handleChange} required>
                {properties.map((property, index) => (
                  <option key={index} value={property}>{property}</option>
                ))}
              </Input>
            </FormGroup>
            
            <FormGroup>
              <Label>Select Day</Label>
              <Input name="day" value={formData.day} onChange={handleChange} required>
                {days.map((day, index) => (
                  <option key={index} value={day}>{day}</option>
                ))}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>Full Name</Label>
              <Input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Email Address</Label>
              <Input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Phone Number</Label>
              <Input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Message</Label>
              <TextArea 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                rows="5"
              />
            </FormGroup>

            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </ContactForm>

        <ContactInfo>
          <InfoCard>
            <CardTitle>
              <FaMapMarkerAlt />
              Address
            </CardTitle>
            <ContactItem>
              <FaMapMarkerAlt />
              <div>
                <h4>HQ - MasterDeal Towers 4th Floor, Ruiru.</h4>
                <p>Ruiru, Nairobi</p>
              </div>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <div>
                <h4>Thika Branch - Elica Plaza, 1st Floor.</h4>
                <p>Thika, Kiambu</p>
              </div>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <div>
                <h4>Coastal Branch - Malindi Mall, Suite 17, Malindi.</h4>
                <p>Malindi, Mombasa</p>
              </div>
            </ContactItem>
          </InfoCard>
          
          <InfoCard>
            <CardTitle>
              <FaPhoneAlt />
              Phone
            </CardTitle>
            <ContactItem>
              <FaPhoneAlt />
              <div>
                <h4>+254 707 177 177</h4>
              </div>
            </ContactItem>
            <ContactItem>
              <FaPhoneAlt />
              <div>
                <h4>+254 718 700 900</h4>
              </div>
            </ContactItem>
            <ContactItem>
              <FaPhoneAlt />
              <div>
                <h4>+254 716 556 644</h4>
              </div>
            </ContactItem>
          </InfoCard>
          
          <InfoCard>
            <CardTitle>
              <FaEnvelope />
              Email
            </CardTitle>
            <ContactItem>
              <FaEnvelope />
              <div>
                <h4>info@masterdeal.co.ke</h4>
              </div>
            </ContactItem>
          </InfoCard>

          <InfoCard>
            <CardTitle>
              <FaClock />
              Business Hours
            </CardTitle>
            <ContactItem>
              <FaClock />
              <div>
                <h4>Monday - Friday: 8:00 AM - 6:00 PM</h4>
              </div>
            </ContactItem>
            <ContactItem>
              <FaClock />
              <div>
                <h4>Saturday: 9:00 AM - 4:00 PM</h4>
              </div>
            </ContactItem>
            <ContactItem>
              <FaClock />
              <div>
                <h4>Sunday: Closed</h4>
              </div>
            </ContactItem>
          </InfoCard>
        </ContactInfo>
      </ContactContent>

      <MapSection>
        <h2>Our Locations</h2>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.809057600447!2d36.82522607949217!3d-1.146156099162587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3f5f75555%3A0x4b80547233d4e81!2sMasterDeal%20Towers!5e0!3m2!1sen!2ske!4v1698344444444!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
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

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

const ContactForm = styled.div`
  background: var(--white);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-dark);
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, var(--primary-green), var(--primary-orange));
    border-radius: 2px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: var(--text-dark);
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid var(--gray-medium);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-green);
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid var(--gray-medium);
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-green);
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-orange) 100%);
  color: var(--white);
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, var(--secondary-green) 0%, var(--secondary-orange) 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: var(--white);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-orange);
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--primary-green);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: var(--light-green);
  border-radius: 8px;
  border-left: 4px solid var(--primary-green);
  
  svg {
    color: var(--primary-green);
    font-size: 1.2rem;
  }
  
  div {
    h4 {
      color: var(--text-dark);
      margin-bottom: 0.25rem;
      font-weight: 600;
    }
    
    p {
      color: var(--text-light);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-orange) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }
`;

const MapSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
`;

const MapContainer = styled.div`
  background: var(--white);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  height: 400px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
