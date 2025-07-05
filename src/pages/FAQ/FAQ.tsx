import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import BackButton from '../../components/BackButton/BackButton';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

   const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I get started with Yashica Fitness?',
          answer: 'Getting started is easy! Simply choose a package that fits your goals, complete the initial assessment, and we\'ll create a personalized program just for you. You can start immediately after signup.'
        },
        {
          question: 'What equipment do I need for the workouts?',
          answer: 'Our programs are designed to be flexible. You can choose from home workouts with minimal equipment (dumbbells, resistance bands) or gym-based routines. We provide equipment alternatives for every exercise.'
        },  {
          question: 'Do I need any prior fitness experience?',
          answer: 'Not at all! Our programs are designed for all fitness levels, from complete beginners to advanced athletes. We\'ll assess your current fitness level and create a program that\'s perfect for you.'
        }
      ]
    },
    {
      category: 'Programs & Training',
      questions: [
        {
            question: 'How often should I work out?',
          answer: 'This depends on your fitness level and goals. Our programs typically range from 3-6 workouts per week. We\'ll customize the frequency based on your schedule and recovery needs during your initial consultation.'
        },
        {
          question: 'Can I modify workouts if I have injuries?',
          answer: 'Absolutely! We provide modifications for common injuries and conditions. If you have specific medical concerns, we recommend consulting with your healthcare provider before starting any new fitness program.'
        },
        {
          question: 'How long are the workout sessions?',
          answer: 'Our workout sessions typically range from 30-60 minutes, depending on your program and goals. We also offer express 20-minute sessions for busy schedules.'
        }
           ]
    },
    {
      category: 'Nutrition & Diet',
      questions: [
        {
          question: 'Do you provide meal plans for different dietary restrictions?',
          answer: 'Absolutely! We create customized meal plans for various dietary needs including vegetarian, vegan, keto, gluten-free, and more. Just let us know your preferences and restrictions during signup.'
        },
        {
          question: 'Are supplements included in the programs?',
          answer: 'Basic supplement recommendations are included in our Pro and Elite packages. We focus on whole foods first, but can suggest quality supplements to support your goals when needed.'
           },
        {
          question: 'Can I eat out while following the meal plan?',
          answer: 'Yes! We provide guidelines for making healthy choices when dining out, including restaurant recommendations and menu navigation tips to keep you on track.'
        }
      ]
    },
    {
      category: 'Results & Progress',
      questions: [
        {
             question: 'How quickly will I see results?',
          answer: 'Most clients start seeing improvements in energy and strength within 2-3 weeks. Visible physical changes typically occur within 4-8 weeks, depending on your starting point, consistency, and goals.'
        },
        {
          question: 'How do you track progress?',
          answer: 'We use multiple methods including progress photos, body measurements, strength benchmarks, and fitness assessments. Our app makes it easy to log your workouts and track your improvements.'
        },
        {
          question: 'What if I\'m not seeing the results I want?',
          answer: 'We\'re committed to your success! If you\'re not seeing the results you want, we\'ll review your program and make adjustments. Our coaching team is always available to help troubleshoot and optimize your plan.'
            }
      ]
    },
    {
      category: 'Billing & Support',
      questions: [
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Yes, you can cancel your subscription at any time with no long-term commitments. We believe in earning your trust through results, not contracts. You\'ll have access to your current plan until the end of your billing cycle.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.'
           },
        {
          question: 'How can I get support if I have questions?',
          answer: 'You can reach our support team through the app, email, or phone. Pro and Elite members get priority support with faster response times. We typically respond within 24 hours.'
        }
      ]
    }
  ];



  const toggleAccordion = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 1000 + questionIndex;
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className={styles.faqContainer}>
      <BackButton />
      
      <section className={styles.faqHero}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={styles.faqHeroTitle}>Frequently Asked Questions</h1>
          <p className={styles.faqHeroSubtitle}>
            Find answers to common questions about our programs, training, and support.
          </p>
        </div>
      </section>

      <section className={styles.faqContent}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.faqSearchContainer}>
            <div className={styles.faqSearch}>
              <Search className={styles.faqSearchIcon} />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.faqSearchInput}
              />
            </div>
          </div>

          {filteredFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.faqCategory}>
              <h2 className={styles.faqCategoryTitle}>{category.category}</h2>
              <div className={styles.faqQuestions}>
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 1000 + questionIndex;
                  return (
                    <div
                      key={questionIndex}
                      className={styles.faqItem}
                    >
                      <button
                        onClick={() => toggleAccordion(categoryIndex, questionIndex)}
                        className={styles.faqQuestionButton}
                      >
                        <h3 className={styles.faqQuestionText}>
                          {faq.question}
                        </h3>
                        {activeIndex === index ? (
                          <ChevronUp className={styles.faqQuestionIcon} />
                        ) : (
                          <ChevronDown className={styles.faqQuestionIcon} />
                        )}
                      </button>
                      
                      {activeIndex === index && (
                        <div className={styles.faqAnswer}>
                          <p className={styles.faqAnswerText}>
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className={styles.faqNoResults}>
              <p className={styles.faqNoResultsText}>
                No questions found matching your search.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className={styles.faqClearSearch}
              >
                Clear search
              </button>
            </div>
          )}

          <div className={styles.faqSupport}>
            <h3 className={styles.faqSupportTitle}>
              Still have questions?
            </h3>
            <p className={styles.faqSupportText}>
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <button className={styles.faqSupportButton}>
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;