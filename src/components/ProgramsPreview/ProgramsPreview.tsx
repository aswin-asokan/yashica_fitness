import { useNavigate } from "react-router-dom";
import styles from "./ProgramsPreview.module.css";

const newPrograms = [
  {
    id: 1,
    title: "Fat to Fit Program",
    duration: "3 MONTHS",
    features: [
      "individualised meal plans",
      "reduce tummy fat",
      "workout regime/ program",
      "supplement guidance",
      "Increase metabolism",
      "increase Health & longevity",
      "achieve better shape",
    ],
    price: "Rs. 2,400.00 - Rs. 4,0000.00",
    image: "src/assets/images/pngwing.com.png",
  },
  {
    id: 2,
    title: "Muscle Hypertrophy Program",
    duration: "3 MONTHS",
    features: [
      "1-1 coaching",
      "personal transformation prep",
      "achieve sharp six pack abs",
      "increase lifting strength",
      "break plateau",
      "posing guidance",
      "fix muscle in-balances",
    ],
    price: "Rs. 3,999.00",
    image: "src/assets/images/kindpng_1797704.png",
  },
  {
    id: 3,
    title: "Athletic Performance",
    duration: "3 MONTHS",
    features: [
      "spot & improve weak areas",
      "increase speed and strength",
      "breaking personal records",
      "personal notes do & Don’t s",
      "injury rehab",
      "footwork analysis",
      "prepare for competitions",
    ],
    price: "Rs. 7,499.00",
    image: "src/assets/images/Yoichi_Isagi_S2_anime_design_2 (2).png",
  },
  {
    id: 4,
    title: "Women Specialisation Program",
    duration: "3 MONTHS",
    features: [
      "optimise mood",
      "diet plan (veg/non-veg)",
      "personalised workout plan",
      "gut health & issues",
      "built laser focus",
      "hair health and regrowth",
      "better sleep quality",
    ],
    price: "Rs. 7,499.00",
    image: "src/assets/images/pngwing.com (3) (1) (1).png",
  },
];

const ProgramsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>OUR PROGRAMS</h2>
      <div className={styles.scrollContainer}>
        <div className={styles.cardRow}>
          {newPrograms.map((program) => (
            <div key={program.id} className={styles.programBlock}>
              <div
                className={styles.card}
                onClick={() => navigate(`/program/${program.id}`)}
              >
                <h3 className={styles.duration}>{program.duration}</h3>
                <ul className={styles.features}>
                  {program.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      {feature}
                      {i !== program.features.length - 1 && (
                        <div className={styles.featureDivider}></div>
                      )}
                    </li>
                  ))}
                </ul>
                <img src={program.image} alt="" className={styles.image} />
              </div>
              <div className={styles.cardMeta}>
                <div className={styles.metaInner}>
                  <p className={styles.metaTitle}>{program.title}</p>
                  <p className={styles.metaPrice}>{program.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.viewAllButton}
          onClick={() => navigate("/programs")}
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default ProgramsPreview;
