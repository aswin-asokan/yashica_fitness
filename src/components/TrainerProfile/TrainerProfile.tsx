import { User, Award, Target } from 'lucide-react';
import './TrainerProfile.css';

const TrainerProfile = () => {
  return (
    <section className="trainer-section">
      <div className="trainer-container">
        <div className="trainer-grid">
          <div className="trainer-image-container">
            <div className="trainer-image">
              <img
                src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Yashica - Fitness Trainer"
              />
            </div>
            <div className="trainer-experience-badge">
              <div className="trainer-experience-number">8+</div>
              <div className="trainer-experience-text">Years Experience</div>
            </div>
          </div>

          <div>
            <div className="trainer-header">
              <User className="trainer-icon" />
              <h2 className="trainer-title">THE APPROACH</h2>
            </div>
            
            <div className="trainer-content">
              <p>
                I started my fitness journey at the age of 16, I had already been exercising and developing an understanding of body movement through my passion for dancing since the age of 10.
              </p>
              
              <p>
                As I progressed, I realized I needed to build strength to reach my full potential in the mastery of my body and my passions. The road wasn't easy—I spent years learning, failing, and focusing on muscle gain and fat loss. But with each challenge, I gained more insight.
              </p>
              
              <p>
                Over the years, I've lost and rebuilt my body multiple times, whether it was for fat loss or muscle gain. After living this lifestyle for 8 years it has given me a deep understanding of the process.
              </p>
              
              <p>
                I know that everyone's journey is unique, which is why I create custom programs that align with your specific goals, preferences, and needs.
              </p>
              
              <p className="trainer-highlight">
                I'll guide you with the knowledge I've gained to help you save time, make the journey simpler, and achieve lasting results—faster and more effectively than if you were to navigate this path alone.
              </p>
            </div>

            <div className="trainer-stats">
              <div className="trainer-stat">
                <Award className="trainer-stat-icon" />
                <div className="trainer-stat-number">500+</div>
                <div className="trainer-stat-text">Clients Transformed</div>
              </div>
              <div className="trainer-stat">
                <Target className="trainer-stat-icon" />
                <div className="trainer-stat-number">98%</div>
                <div className="trainer-stat-text">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;