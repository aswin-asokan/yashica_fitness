import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./FAQ.module.css";
import { useNavigate } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I get started with Yashica Fitness?",
    answer:
      "Getting started is easy! Simply choose a package that fits your goals, complete the initial assessment, and we'll create a personalized program just for you. You can start immediately after signup.",
  },
  {
    question: "What equipment do I need for the workouts?",
    answer:
      "Our programs are designed to be flexible. You can choose from home workouts with minimal equipment (dumbbells, resistance bands) or gym-based routines. We provide equipment alternatives for every exercise.",
  },
  {
    question: "How often should I work out?",
    answer:
      "This depends on your fitness level and goals. Our programs typically range from 3-6 workouts per week. We'll customize the frequency based on your schedule and recovery needs during your initial consultation.",
  },
  {
    question: "Do you provide meal plans for different dietary restrictions?",
    answer:
      "Absolutely! We create customized meal plans for various dietary needs including vegetarian, vegan, keto, gluten-free, and more. Just let us know your preferences and restrictions during signup.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no long-term commitments. We believe in earning your trust through results, not contracts. You'll have access to your current plan until the end of your billing cycle.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients start seeing improvements in energy and strength within 2-3 weeks. Visible physical changes typically occur within 4-8 weeks, depending on your starting point, consistency, and goals.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.faqContainer}>
      <section className={styles.faqContent}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.faqQuestions}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  onClick={() => toggleAccordion(index)}
                  className={styles.faqQuestionButton}
                >
                  <h3 className={styles.faqQuestionText}>{faq.question}</h3>
                  {activeIndex === index ? (
                    <ChevronUp className={styles.faqQuestionIcon} />
                  ) : (
                    <ChevronDown className={styles.faqQuestionIcon} />
                  )}
                </button>

                <div
                  className={`${styles.faqAnswerWrapper} ${
                    activeIndex === index ? styles.open : ""
                  }`}
                >
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAnswerText}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.faqSupport}>
            <h3 className={styles.faqSupportTitle}>Still have questions?</h3>
            <p className={styles.faqSupportText}>
              Can't find what you're looking for? Our support team is here to
              help!
            </p>
            <button
              className={styles.faqSupportButton}
              onClick={() => navigate("/contact")}
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
