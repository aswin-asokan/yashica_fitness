import { Link } from "react-router-dom";
import {
  Dumbbell,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Dumbbell className="footer-logo-icon" />
              <span className="footer-logo-text">Yashica Fitness</span>
            </div>
            <p className="footer-description">
              Transform your body and mind with our personalized training
              programs. Your fitness journey starts here.
            </p>
            <div className="footer-socials">
              <Facebook className="social-icon" />
              <Instagram className="social-icon" />
              <Twitter className="social-icon" />
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="footer-link">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Info</h3>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>info@yashicafitness.com</span>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <span>123 Fitness St, Health City</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Yashica Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
