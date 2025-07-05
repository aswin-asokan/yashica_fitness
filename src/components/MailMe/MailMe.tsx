import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import './MailMe.css';

const MailMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="mailme-section">
      <div className="mailme-container">
        <div className="mailme-inner">
          <div className="mailme-header">
            <Mail className="mailme-icon" />
            <h2 className="mailme-title">
              Get in Touch
            </h2>
            <p className="mailme-subtitle">
              Have questions about our programs? Ready to start your fitness journey? 
              Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="mailme-form-container">
            <form onSubmit={handleSubmit} className="mailme-form">
              <div className="mailme-form-grid">
                <div className="mailme-form-group">
                  <label htmlFor="name" className="mailme-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mailme-input"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mailme-form-group">
                  <label htmlFor="email" className="mailme-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mailme-input"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mailme-form-group">
                <label htmlFor="subject" className="mailme-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mailme-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mailme-form-group">
                <label htmlFor="message" className="mailme-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mailme-textarea"
                  placeholder="Tell us about your fitness goals or any questions you have..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="mailme-button"
                >
                  <Send className="mailme-button-icon" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailMe;