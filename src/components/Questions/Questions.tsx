import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Questions.css';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I get started with Yashica Fitness?',
      answer: 'Getting started is easy! Simply choose a package that fits your goals, complete the initial assessment, and we\'ll create a personalized program just for you. You can start immediately after signup.'
    },
    {
      question: 'What equipment do I need for the workouts?',
      answer: 'Our programs are designed to be flexible. You can choose from home workouts with minimal equipment (dumbbells, resistance bands) or gym-based routines. We provide equipment alternatives for every exercise.'
    },
    {
      question: 'How often should I work out?',
      answer: 'This depends on your fitness level and goals. Our programs typically range from 3-6 workouts per week. We\'ll customize the frequency based on your schedule and recovery needs during your initial consultation.'
    },
    {
      question: 'Do you provide meal plans for different dietary restrictions?',
      answer: 'Absolutely! We create customized meal plans for various dietary needs including vegetarian, vegan, keto, gluten-free, and more. Just let us know your preferences and restrictions during signup.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no long-term commitments. We believe in earning your trust through results, not contracts. You\'ll have access to your current plan until the end of your billing cycle.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients start seeing improvements in energy and strength within 2-3 weeks. Visible physical changes typically occur within 4-8 weeks, depending on your starting point, consistency, and goals.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="questions-section">
      <div className="questions-container">
        <div className="questions-header">
          <h2 className="questions-title">
            Frequently Asked Questions
          </h2>
          <p className="questions-subtitle">
            Got questions? We've got answers. Find everything you need to know about our programs.
          </p>
        </div>

        <div className="questions-accordion">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="questions-item"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="questions-button"
              >
                <h3 className="questions-question">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="questions-icon" />
                ) : (
                  <ChevronDown className="questions-icon" />
                )}
              </button>
              
              {activeIndex === index && (
                <div className="questions-answer">
                  <p className="questions-answer-text">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="questions-footer">
          <p className="questions-footer-text">
            Still have questions? We're here to help!
          </p>
          <button className="questions-contact-button">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;