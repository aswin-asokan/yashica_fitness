// src/components/ProgramsPreview/ProgramsPreview.tsx

import { useNavigate } from "react-router-dom";
import styles from "./ProgramsPreview.module.css";
import { newPrograms } from "../data/programs"; // Assuming newPrograms is imported from here

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
                // --- CHANGE THIS LINE ---
                onClick={() => navigate(`/program/${program.slug}`)} // Use program.slug
              >
                <h3 className={styles.duration}>
                  {program.packages[0].duration}
                </h3>
                <ul className={styles.features}>
                  {program.features.card.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      {feature}
                      {i !== program.features.card.length - 1 && (
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
                  <p className={styles.metaPrice}>
                    {program.packages.length > 1
                      ? `${program.packages[0].price} - ${
                          program.packages[program.packages.length - 1].price
                        }`
                      : program.packages[0].price}
                  </p>
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
          VIEW ALL
        </button>
      </div>
    </section>
  );
};

export default ProgramsPreview;
