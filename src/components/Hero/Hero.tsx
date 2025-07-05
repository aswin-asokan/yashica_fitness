import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/programs');
  };

  return (
    <section className="hero-section">
      <div 
        className="hero-background"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      ></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your
          <span className="hero-gradient-text">
            Body & Mind
          </span>
        </h1>
        
        <p className="hero-subtitle">
          Achieve your fitness goals with personalized training programs designed just for you
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={handleStartJourney}
            className="hero-button"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="hero-button-icon" />
          </button>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-circle">
          <div className="hero-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;