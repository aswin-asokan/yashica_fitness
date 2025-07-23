import { useState } from 'react';
import { Apple, Dumbbell, MessageCircle, ChefHat, Clock, Users } from 'lucide-react';
import './MealPlan.css';

const MealPlan = () => {
  const [activeTab, setActiveTab] = useState('meal');

  const mealFeatures = [
    { icon: <ChefHat className="h-8 w-8" />, title: 'Custom Meal Plans', description: 'Personalized nutrition plans based on your goals and dietary preferences' },
    { icon: <Clock className="h-8 w-8" />, title: 'Flexible Timing', description: 'Meal schedules that fit your lifestyle and workout routine' },
    { icon: <Users className="h-8 w-8" />, title: 'Expert Guidance', description: 'Nutritionist-approved plans for optimal results' }
  ];

  const trainingFeatures = [
    { icon: <Dumbbell className="h-8 w-8" />, title: 'Personalized Workouts', description: 'Custom training programs designed for your fitness level' },
    { icon: <Clock className="h-8 w-8" />, title: 'Flexible Schedule', description: 'Train at your own pace with our adaptable programs' },
    { icon: <Users className="h-8 w-8" />, title: 'Expert Coaching', description: 'Professional guidance every step of the way' }
  ];

  const getImage = () => {
    if (activeTab === 'meal') return "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800";
    if (activeTab === 'training') return "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800";
    return "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=800";
  };

  return (
    <section className="mealplan-section">
      <div className="mealplan-container">
        <div className="mealplan-header">
          <h2 className="mealplan-title">Complete Fitness Solution</h2>
          <p className="mealplan-subtitle">
            Everything you need for your fitness journey in one place
          </p>
        </div>

        <div className="mealplan-tabs-horizontal">
          <span
            onClick={() => setActiveTab('meal')}
            className={`tab-item ${activeTab === 'meal' ? 'active' : ''}`}
          >
            <Apple className="h-5 w-5" />
            Meal Plan
          </span>
          <span
            onClick={() => setActiveTab('training')}
            className={`tab-item ${activeTab === 'training' ? 'active' : ''}`}
          >
            <Dumbbell className="h-5 w-5" />
            Training
          </span>
          <span
            onClick={() => setActiveTab('talk')}
            className={`tab-item ${activeTab === 'talk' ? 'active' : ''}`}
          >
            <MessageCircle className="h-5 w-5" />
            Talk to Me
          </span>
        </div>

        <div
          className="mealplan-mobile-overlay"
          style={{ backgroundImage: `url(${getImage()})` }}
          key={activeTab}
        >
          <div className="mealplan-overlay-content">
            {activeTab === 'meal' && (
              <>
                <h3 className="mealplan-feature-title">Nutrition That Works</h3>
                
                <div className="mealplan-features">
                  {mealFeatures.map((feature, index) => (
                    <div key={index} className="mealplan-feature-item">
                      <div className="mealplan-feature-icon">{feature.icon}</div>
                      <div className="mealplan-feature-text">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'training' && (
              <>
                <h3 className="mealplan-feature-title">Smart Training Programs</h3>
               
                <div className="mealplan-features">
                  {trainingFeatures.map((feature, index) => (
                    <div key={index} className="mealplan-feature-item">
                      <div className="mealplan-feature-icon">{feature.icon}</div>
                      <div className="mealplan-feature-text">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'talk' && (
              <>
                <h3 className="mealplan-feature-title">Personal Build Support  </h3>
                
                <div className="mealplan-form-container">
                  <form className="mealplan-form">
                    <div>
                      <label className="mealplan-form-label">Name</label>
                      <input type="text" className="mealplan-form-input" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="mealplan-form-label">Email</label>
                      <input type="email" className="mealplan-form-input" placeholder="Your email" />
                    </div>
                    <div>
                      <label className="mealplan-form-label">Message</label>
                      <textarea rows={4} className="mealplan-form-textarea" placeholder="How can we help you?" />
                    </div>
                    <button className="mealplan-form-button">Send Message</button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlan;
