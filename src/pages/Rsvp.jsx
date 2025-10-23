import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigate } from "react-router-dom";



const RSVPForm = () => {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: 0,
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Send email via EmailJS
      await emailjs.send(
        'service_gh6sk2g',
        'template_vtjfmuq',
        formData,
        'MM6p8KA2Pwk1dL_Bg'
      );

      // Save RSVP data to Firestore
      await addDoc(collection(db, "rsvps"), {
        name: formData.name,
        email: formData.email,
        attendance: formData.attending, // Use 'attending' from formData
        message: formData.message,
        timestamp: Timestamp.now(),
      });
      

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        attending: '',
        guests: 0,
        message: '',
      });
      setTimeout(() => {
        navigate("/thank-you");
      }, 2000);
      
    } catch (err) {
      setError('Failed to submit RSVP. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rsvp-container">
      <h2>RSVP</h2>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <select
          name="attending"
          value={formData.attending}
          onChange={handleChange}
          required
        >
          <option value="">Will you attend?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <input
          name="guests"
          type="number"
          min={0}
          value={formData.guests}
          onChange={handleChange}
          placeholder="Number of Guests"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Additional message (optional)"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit RSVP'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && (
          <div className="success-message">
            ✅ Your message has been sent successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default RSVPForm;