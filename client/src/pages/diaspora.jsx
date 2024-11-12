import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";  // Use axios for the API request

export default function Diaspora() {
  const [diasporaData, setDiasporaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the Diaspora guide data from the backend when the component mounts
  useEffect(() => {
    const fetchDiasporaData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/diaspora'); // Replace with your backend URL
        setDiasporaData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchDiasporaData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      content: event.target.content.value,
      contact_email: event.target.contact_email.value,
      contact_phone: event.target.contact_phone.value,
      contact_whatsapp: event.target.contact_whatsapp.value,
    };

    try {
      await axios.post('/api/diaspora', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}` // Assuming JWT is stored in localStorage
        }
      });
      alert('Diaspora page updated successfully.');
    } catch (err) {
      alert('Failed to update Diaspora page.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <DiasporaContainer>
      <h1>{diasporaData.title}</h1>
      <p>{diasporaData.content}</p>
      
      <h2>Process for Buying Land in Kenya:</h2>
      <ul>
        <li>Identify and confirm the land of interest with a trusted agent.</li>
        <li>Request and review the title deed to confirm ownership.</li>
        <li>Conduct a search with the Ministry of Lands to verify authenticity.</li>
        <li>Negotiate the terms and price, and draft the sale agreement.</li>
        <li>Pay a deposit to secure the land (usually 10%).</li>
        <li>Complete the land survey and other due diligence steps.</li>
        <li>Finalize the transaction with full payment and receive the transfer documents.</li>
        <li>Register the land under your name at the Ministry of Lands.</li>
      </ul>

      <ContactSection>
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please feel free to reach out:</p>
        <ContactInfo>
          <p>Email: <a href={`mailto:${diasporaData.contact_email}`}>{diasporaData.contact_email}</a></p>
          <p>Phone: {diasporaData.contact_phone}</p>
          <p>WhatsApp: {diasporaData.contact_whatsapp}</p>
        </ContactInfo>
      </ContactSection>

      {/* Admin Update Form */}
      <h2>Update Diaspora Guide</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" defaultValue={diasporaData.title} placeholder="Title" />
        <textarea name="content" defaultValue={diasporaData.content} placeholder="Content"></textarea>
        <input type="email" name="contact_email" defaultValue={diasporaData.contact_email} placeholder="Contact Email" />
        <input type="text" name="contact_phone" defaultValue={diasporaData.contact_phone} placeholder="Contact Phone" />
        <input type="text" name="contact_whatsapp" defaultValue={diasporaData.contact_whatsapp} placeholder="Contact WhatsApp" />
        <button type="submit">Update Diaspora Guide</button>
      </form>
    </DiasporaContainer>
  );
}

const DiasporaContainer = styled.div`
  padding: 20px;
`;

const ContactSection = styled.section`
  margin-top: 20px;
`;

const ContactInfo = styled.div`
  margin-top: 10px;
`;

