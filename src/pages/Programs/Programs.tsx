import { Check, Star, Clock, Users, Target, Zap } from "lucide-react";
import { useCart } from "../../context/CartContext";
import styles from "./Programs.module.css";

const Programs = () => {
  const { addToCart } = useCart();

  const programs = [
    {
      id: 1,
      name: "Strength & Muscle Building",
      description:
        "Build lean muscle mass and increase your overall strength with our progressive resistance training program.",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12 weeks",
      level: "Intermediate",
      participants: "2.5k+",
      rating: 4.9,
      price: 99,
      features: [
        "Progressive overload training",
        "Compound movement focus",
        "Detailed exercise videos",
        "Nutrition guidelines",
        "Progress tracking tools",
      ],
    },
    {
      id: 2,
      name: "Weight Loss Transformation",
      description:
        "Lose weight effectively with our comprehensive program combining cardio, strength training, and nutrition.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "16 weeks",
      level: "Beginner",
      participants: "3.2k+",
      rating: 4.8,
      price: 129,
      features: [
        "HIIT workout sessions",
        "Calorie deficit meal plans",
        "Weekly progress check-ins",
        "Metabolic training",
        "Support community access",
      ],
    },
    {
      id: 3,
      name: "Athletic Performance",
      description:
        "Enhance your athletic performance with sport-specific training protocols and advanced techniques.",
      image:
        "https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "20 weeks",
      level: "Advanced",
      participants: "1.8k+",
      rating: 4.9,
      price: 199,
      features: [
        "Sport-specific training",
        "Plyometric exercises",
        "Speed & agility drills",
        "Recovery protocols",
        "Performance analytics",
      ],
    },
    {
      id: 4,
      name: "Home Workout Essentials",
      description:
        "Get fit at home with minimal equipment. Perfect for busy schedules and beginners.",
      image:
        "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8 weeks",
      level: "Beginner",
      participants: "4.1k+",
      rating: 4.7,
      price: 69,
      features: [
        "No gym required",
        "Minimal equipment needed",
        "Flexible scheduling",
        "Quick 30-min workouts",
        "Beginner-friendly",
      ],
    },
    {
      id: 5,
      name: "Core & Flexibility",
      description:
        "Strengthen your core and improve flexibility with yoga-inspired movements and targeted exercises.",
      image:
        "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "10 weeks",
      level: "All Levels",
      participants: "2.9k+",
      rating: 4.8,
      price: 79,
      features: [
        "Core strengthening",
        "Flexibility improvement",
        "Yoga-inspired movements",
        "Stress reduction",
        "Mindfulness techniques",
      ],
    },
    {
      id: 6,
      name: "Senior Fitness",
      description:
        "Safe and effective fitness program designed specifically for active adults 55+.",
      image:
        "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "12 weeks",
      level: "Beginner",
      participants: "1.5k+",
      rating: 4.9,
      price: 89,
      features: [
        "Low-impact exercises",
        "Balance training",
        "Joint mobility work",
        "Safety modifications",
        "Health monitoring",
      ],
    },
  ];

  const handleAddToCart = (program: any) => {
    addToCart({
      id: program.id,
      name: program.name,
      price: program.price,
      image: program.image,
      description: program.description,
      duration: program.duration,
      level: program.level,
      quantity: 1,
    });
  };

  return (
    <div className={styles.programsContainer}>
      <section className={styles.programsHero}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={styles.programsHeroTitle}>Fitness Programs</h1>
          <p className={styles.programsHeroSubtitle}>
            Choose from our scientifically-designed programs to achieve your
            specific fitness goals.
          </p>
        </div>
      </section>

      <section className={styles.programsContent}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.programsGrid}>
            {programs.map((program) => (
              <div key={program.id} className={styles.programCard}>
                <div className={styles.programImageContainer}>
                  <img
                    src={program.image}
                    alt={program.name}
                    className={styles.programImage}
                  />
                  <div className={styles.programPrice}>${program.price}</div>
                </div>

                <div className={styles.programDetails}>
                  <h3 className={styles.programName}>{program.name}</h3>
                  <p className={styles.programDescription}>
                    {program.description}
                  </p>

                  <div className={styles.programMeta}>
                    <div className={styles.programMetaGroup}>
                      <div className={styles.programMetaItem}>
                        <Clock className="h-4 w-4" />
                        <span>{program.duration}</span>
                      </div>
                      <div className={styles.programMetaItem}>
                        <Target className="h-4 w-4" />
                        <span>{program.level}</span>
                      </div>
                    </div>
                    <div className={styles.programRating}>
                      <Star className={`${styles.programRatingIcon} h-4 w-4`} />
                      <span>{program.rating}</span>
                    </div>
                  </div>

                  <div className={styles.programParticipants}>
                    <Users className="h-4 w-4" />
                    <span>{program.participants} participants</span>
                  </div>

                  <ul className={styles.programFeatures}>
                    {program.features.map((feature, index) => (
                      <li key={index} className={styles.programFeature}>
                        <Check
                          className={`${styles.programFeatureIcon} h-4 w-4`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleAddToCart(program)}
                    className={styles.programButton}
                  >
                    <Zap className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.programsCta}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={styles.programsCtaTitle}>
            Can't Find the Right Program?
          </h2>
          <p className={styles.programsCtaText}>
            Our fitness experts can create a custom program tailored
            specifically to your goals, lifestyle, and fitness level.
          </p>
          <button className={styles.programsCtaButton}>
            Request Custom Program
          </button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
