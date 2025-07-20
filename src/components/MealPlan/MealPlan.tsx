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

  return (
    <section className="mealplan-section">
      <div className="mealplan-container">
        <div className="mealplan-header">
          <h2 className="mealplan-title">
            Complete Fitness Solution
          </h2>
          <p className="mealplan-subtitle">
            Everything you need for your fitness journey in one place
          </p>
        </div>

        <div className="mealplan-tabs">
          <button
            onClick={() => setActiveTab('meal')}
            className={`mealplan-tab ${activeTab === 'meal' ? 'mealplan-tab-active' : 'mealplan-tab-inactive'}`}
          >
            <Apple className="h-5 w-5" />
            <span>Meal Plan</span>
          </button>
          
          <button
            onClick={() => setActiveTab('training')}
            className={`mealplan-tab ${activeTab === 'training' ? 'mealplan-tab-active' : 'mealplan-tab-inactive'}`}
          >
            <Dumbbell className="h-5 w-5" />
            <span>Training</span>
          </button>
          
          <button
            onClick={() => setActiveTab('talk')}
            className={`mealplan-tab ${activeTab === 'talk' ? 'mealplan-tab-active' : 'mealplan-tab-inactive'}`}
          >
            <MessageCircle className="h-5 w-5" />
            <span>Talk to Me</span>
          </button>
        </div>

        <div className="mealplan-content">
          <div>
            {activeTab === 'meal' && (
              <div>
                <h3 className="mealplan-feature-title">Nutrition That Works</h3>
                <p className="mealplan-feature-description">
                  Fuel your body with scientifically-backed meal plans designed to support your fitness goals and lifestyle.
                </p>
                <div className="mealplan-features">
                  {mealFeatures.map((feature, index) => (
                    <div key={index} className="mealplan-feature-item">
                      <div className="mealplan-feature-icon">
                        {feature.icon}
                      </div>
                      <div className="mealplan-feature-text">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'training' && (
              <div>
                <h3 className="mealplan-feature-title">Smart Training Programs</h3>
                <p className="mealplan-feature-description">
                  Experience workouts that adapt to your progress and keep you motivated every step of the way.
                </p>
                <div className="mealplan-features">
                  {trainingFeatures.map((feature, index) => (
                    <div key={index} className="mealplan-feature-item">
                      <div className="mealplan-feature-icon">
                        {feature.icon}
                      </div>
                      <div className="mealplan-feature-text">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'talk' && (
              <div>
                <h3 className="mealplan-feature-title">Personal Support</h3>
                <p className="mealplan-feature-description">
                  Get direct access to expert guidance and support whenever you need it most.
                </p>
                <div className="mealplan-form-container">
                  <form className="mealplan-form">
                    <div>
                      <label className="mealplan-form-label">Name</label>
                      <input
                        type="text"
                        className="mealplan-form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="mealplan-form-label">Email</label>
                      <input
                        type="email"
                        className="mealplan-form-input"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label className="mealplan-form-label">Message</label>
                      <textarea
                        rows={4}
                        className="mealplan-form-textarea"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button className="mealplan-form-button">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          <div className="mealplan-image-container">
            <div className="mealplan-image">
              <img
                src={
                  activeTab === 'meal' 
                    ? "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    : activeTab === 'training'
                    ? "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800"
                    : "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                alt="Fitness"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlan;