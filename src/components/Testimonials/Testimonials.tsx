import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Executive',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Yashica Fitness completely transformed my approach to health. The personalized meal plans and training programs fit perfectly into my busy schedule. I\'ve never felt stronger or more confident!'
    },
    {
      name: 'Mike Chen',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The community support and expert guidance made all the difference. I lost 30 pounds and gained so much muscle definition. This program actually works!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'As a busy teacher, I thought I\'d never have time for fitness. Yashica Fitness proved me wrong with flexible programs that work around my schedule. Amazing results in just 3 months!'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What Our Clients Say
          </h2>
          <p className="testimonials-subtitle">
            Real stories from real people who transformed their lives with Yashica Fitness
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
            >
              <div className="testimonial-rating">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="testimonial-star" />
                  ))}
                </div>
                <Quote className="testimonial-quote" />
              </div>
              
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>
              
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;