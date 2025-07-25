import { useState } from "react";
import {
  Apple,
  Dumbbell,
  MessageCircle,
  ChefHat,
  Clock,
  Users,
  HelpingHand,
  ThumbsUp,
  Frown,
  HeartPulse,
} from "lucide-react";
import "./MealPlan.css";

const MealPlan = () => {
  const [activeTab, setActiveTab] = useState("meal");

  const mealFeatures = [
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Custom Meal Plans",
      description:
        "Personalized nutrition plans based on your goals and dietary preferences",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Timing",
      description: "Meal schedules that fit your lifestyle and workout routine",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Guidance",
      description: "Nutritionist-approved plans for optimal results",
    },
  ];

  const trainingFeatures = [
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Personalized Workouts",
      description: "Custom training programs designed for your fitness level",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Schedule",
      description: "Train at your own pace with our adaptable programs",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Coaching",
      description: "Professional guidance every step of the way",
    },
  ];

  const talkSupport = [
    {
      icon: <HelpingHand className="h-8 w-8" />,
      title: "24/7 Hand Holding Support",
      description: "Ask me anything, anytime.",
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Customization Available",
      description: "Want me to exclude some foods in your diet? Done.",
    },
    {
      icon: <Frown className="h-8 w-8" />,
      title: "Not Feeling Great?",
      description:
        "Struggling to follow a meal or do an exercise today? Let me know.",
    },
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: "Injury or Pain?",
      description:
        "I'll suggest better alternatives if you're injured or unwell.",
    },
  ];

  const getImage = () => {
    if (activeTab === "meal")
      return "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800";
    if (activeTab === "training")
      return "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800";
    return "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=800";
  };

  const renderContent = () => {
    if (activeTab === "meal") {
      return (
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
      );
    }

    if (activeTab === "training") {
      return (
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
      );
    }

    return (
      <>
        <h3 className="mealplan-feature-title">Personal Build Support</h3>
        <div className="mealplan-features">
          {talkSupport.map((item, index) => (
            <div key={index} className="mealplan-feature-item">
              <div className="mealplan-feature-icon">{item.icon}</div>
              <div className="mealplan-feature-text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
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

        {/* Tabs */}
        <div className="mealplan-tabs-horizontal">
          <span
            onClick={() => setActiveTab("meal")}
            className={`tab-item ${activeTab === "meal" ? "active" : ""}`}
          >
            <Apple className="h-5 w-5" />
            Meal Plan
          </span>
          <span
            onClick={() => setActiveTab("training")}
            className={`tab-item ${activeTab === "training" ? "active" : ""}`}
          >
            <Dumbbell className="h-5 w-5" />
            Training
          </span>
          <span
            onClick={() => setActiveTab("talk")}
            className={`tab-item ${activeTab === "talk" ? "active" : ""}`}
          >
            <MessageCircle className="h-5 w-5" />
            Talk to Me
          </span>
        </div>

        {/* Single Column Layout for Mobile */}
        <div
          className="mealplan-mobile-overlay"
          style={{ backgroundImage: `url(${getImage()})` }}
        >
          <div className="mealplan-overlay-content">{renderContent()}</div>
        </div>

        {/* Two Column Layout for Desktop (hidden on mobile) */}
        <div className="mealplan-two-column">
          <div
            className="mealplan-column-image"
            style={{ backgroundImage: `url(${getImage()})` }}
          ></div>

          <div className="mealplan-column-content">
            <div className="mealplan-overlay-content">{renderContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlan;
