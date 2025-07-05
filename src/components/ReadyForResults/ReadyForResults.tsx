import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './ReadyForResults.css';

const ReadyForResults = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('ready-for-results');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="ready-for-results"
      className="results-section"
    >
      <div className="results-container">
        <div className="results-content">
          <h2 
            className={`results-title ${isVisible ? '' : 'results-title-hidden'}`}
          >
            Ready for
            <span 
              className={`results-gradient-text ${isVisible ? '' : 'results-title-hidden'}`}
            >
              Results?
            </span>
          </h2>
          
          <p 
            className={`results-subtitle ${isVisible ? '' : 'results-subtitle-hidden'}`}
          >
            Stop waiting. Start transforming. Your best self is just one click away.
          </p>
          
          <div 
            className={`results-button-container ${isVisible ? '' : 'results-button-container-hidden'}`}
          >
            <button className="results-button">
              <span>Start Now</span>
              <ArrowRight className="results-button-icon" />
            </button>
          </div>
        </div>
        
        <div className="results-stats">
          <div 
            className={`results-stats-grid ${isVisible ? '' : 'results-stats-grid-hidden'}`}
          >
            <div className="results-stat-item">
              <div className="results-stat-number">500+</div>
              <div className="results-stat-label">Transformations</div>
            </div>
            <div className="results-stat-item">
              <div className="results-stat-number">98%</div>
              <div className="results-stat-label">Success Rate</div>
            </div>
            <div className="results-stat-item">
              <div className="results-stat-number">5★</div>
              <div className="results-stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyForResults;