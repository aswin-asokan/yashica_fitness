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

  const faqs: FAQCategory[] = [
    // ... (keep your existing faqs array exactly the same)
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