import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import './Packages.css';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(1); // Default to Pro package (middle one)

  const packages = [
    {
      id: 0,
      name: 'Starter',
      price: '$49',
      period: '/month',
      features: [
        '3 Workouts per week',
        'Basic nutrition plan',
        'Email support',
        'Progress tracking',
        'Mobile app access'
      ],
      popular: false
    },
    {
      id: 1,
      name: 'Pro',
      price: '$99',
      period: '/month',
      features: [
        '5 Workouts per week',
        'Custom nutrition plan',
        'Priority support',
        'Advanced analytics',
        'Video consultations',
        'Meal prep guide'
      ],
      popular: true
    },
    {
      id: 2,
      name: 'Elite',
      price: '$199',
      period: '/month',
      features: [
        'Unlimited workouts',
        'Personalized meal plans',
        '24/7 support',
        'One-on-one coaching',
        'Custom supplements',
        'Recovery protocols',
        'Exclusive content'
      ],
      popular: false
    }
  ];

  return (
    <section className="packages-section">
      <div className="packages-container">
        <div className="packages-header">
          <h2 className="packages-title">
            Choose Your Fitness Package
          </h2>
          <p className="packages-subtitle">
            Select the perfect plan that fits your goals and lifestyle
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`package-card ${pkg.popular ? 'package-popular' : ''} ${
                selectedPackage === pkg.id ? 'package-card-selected' : ''
              }`}
            >
              {pkg.popular && (
                <div className="package-popular-badge">
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className="package-content">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">
                  <span className="package-price-amount">{pkg.price}</span>
                  <span className="package-price-period">{pkg.period}</span>
                </div>
                
                <ul className="package-features">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="package-feature">
                      <Check className="package-feature-icon" />
                      <span className="package-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`package-button ${
                    selectedPackage === pkg.id
                      ? 'package-button-selected'
                      : 'package-button-unselected'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;