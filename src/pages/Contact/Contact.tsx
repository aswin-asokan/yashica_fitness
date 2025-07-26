import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import styles from "./Contact.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.contactContainer}>
      <section className={styles.contactContent}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.contactGrid}>
            <div>
              <h2 className={styles.contactInfoTitle}>Contact Information</h2>

              <div className={styles.contactInfoItems}>
                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIcon}>
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className={styles.contactInfoContent}>
                    <h3>Email</h3>
                    <p>yashicafitness@gmail.com</p>
                    <p>support@yashicafitness.com</p>
                  </div>
                </div>

                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIcon}>
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className={styles.contactInfoContent}>
                    <h3>Phone</h3>
                    <p>+91 6238116742</p>
                    <p>+91 7381923449</p>
                  </div>
                </div>

                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIcon}>
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className={styles.contactInfoContent}>
                    <h3>Address</h3>
                    <p>Fitness Street</p>
                    <p>Health City, P O 682101</p>
                  </div>
                </div>

                <div className={styles.contactInfoItem}>
                  <div className={styles.contactInfoIcon}>
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className={styles.contactInfoContent}>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactFormContainer}>
              <h2 className={styles.contactFormTitle}>Send us a Message</h2>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div>
                  <label htmlFor="name" className={styles.contactFormLabel}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.contactFormInput}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={styles.contactFormLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.contactFormInput}
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={styles.contactFormLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={styles.contactFormTextarea}
                    placeholder="Tell us about your fitness goals or any questions you have..."
                  ></textarea>
                </div>

                <button type="submit" className={styles.contactFormButton}>
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
