import { Target, Users, TrendingUp, Award } from 'lucide-react';
import './Approach.css';

const Approach = () => {
  const approaches = [
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Goal-Oriented',
      description: 'We focus on your specific fitness goals and create a roadmap to achieve them efficiently.'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Community Support',
      description: 'Join a supportive community of like-minded individuals on their fitness journey.'
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Progressive Training',
      description: 'Our programs adapt and evolve with your progress, ensuring continuous improvement.'
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: 'Proven Results',
      description: 'Our evidence-based approach has helped thousands achieve their fitness goals.'
    }
  ];

  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <h2 className="approach-title">
            Our Approach to Fitness
          </h2>
          <p className="approach-subtitle">
            We believe in a holistic approach that combines science, personalization, and community support
          </p>
        </div>

        <div className="approach-grid">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="approach-card"
            >
              <div className="approach-icon-container">
                {approach.icon}
              </div>
              <h3 className="approach-card-title">{approach.title}</h3>
              <p className="approach-card-description">{approach.description}</p>
            </div>
          ))}
        </div>

        <div className="approach-cta">
          <h3 className="approach-cta-title">Ready to Start Your Transformation?</h3>
          <p className="approach-cta-subtitle">
            Take the first step towards a healthier, stronger you with our proven approach.
          </p>
          <button className="approach-button">
            Book For Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Approach;