import { useNavigate } from 'react-router-dom';
import { Check, Star, Clock, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion'; // <-- import framer-motion
import styles from './ProgramsPreview.module.css';

const programs = [
  {
    id: 1,
    name: 'Strength & Muscle Building',
    description: 'Build lean muscle mass and increase your strength.',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '12 weeks',
    level: 'Intermediate',
    participants: '2.5k+',
    rating: 4.9,
    features: ['Progressive overload', 'Compound lifts', 'Nutrition guidance']
  },
  {
    id: 2,
    name: 'Weight Loss Transformation',
    description: 'Lose weight with cardio, strength & meal plans.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '16 weeks',
    level: 'Beginner',
    participants: '3.2k+',
    rating: 4.8,
    features: ['HIIT workouts', 'Meal plans', 'Progress tracking']
  },
  {
    id: 3,
    name: 'Athletic Performance',
    description: 'Enhance performance with sports-specific training.',
    image: 'https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '20 weeks',
    level: 'Advanced',
    participants: '1.8k+',
    rating: 4.9,
    features: ['Speed & agility', 'Recovery protocols', 'Performance drills']
  }
];

const ProgramsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.previewSection}>
      <h2 className={styles.previewHeading}>Popular Programs</h2>

      <div className={styles.previewScroll}>
        {programs.map((program) => (
          <motion.div
            key={program.id}
            className={styles.previewCard}
            whileTap={{ scale: 1.05 }} // pop-up effect
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={program.image} alt={program.name} className={styles.previewImage} />

            <div className={styles.previewInfo}>
              <h3>{program.name}</h3>
              <p>{program.description}</p>

              <div className={styles.metaRow}>
                <div className={styles.metaItem}><Clock size={14} /> {program.duration}</div>
                <div className={styles.metaItem}><Target size={14} /> {program.level}</div>
              </div>

              <div className={styles.metaRow}>
                <div className={styles.metaItem}><Users size={14} /> {program.participants}</div>
                <div className={styles.metaItem}><Star size={14} /> {program.rating}</div>
              </div>

              <ul className={styles.featureList}>
                {program.features.map((feature, index) => (
                  <li key={index}><Check size={12} /> {feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button onClick={() => navigate('/programs')} className={styles.blackButton}>
          View All
        </button>
      </div>
    </section>
  );
};

export default ProgramsPreview;
