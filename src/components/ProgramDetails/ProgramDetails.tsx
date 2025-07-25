import { useParams } from "react-router-dom";
import { useState } from "react";
import { Check } from "lucide-react";
import styles from "./ProgramDetails.module.css";
import { newPrograms } from "../data/programs";
import Questions from "../Questions/Questions";

const ProgramDetails = () => {
  const { id } = useParams();
  const program = newPrograms.find((p) => p.id === Number(id));

  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);

  if (!program) return <div>Program not found</div>;

  const selectedPackage = program.packages[selectedPackageIndex];

  return (
    <>
      <div className="pt-[180px] px-4">
        <section className={styles.container}>
          {/* CARD SECTION */}
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3 className={styles.duration}>{selectedPackage.duration}</h3>

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

              <img src={`/${program.image}`} className={styles.image} />
            </div>
          </div>

          {/* DETAILS SECTION */}
          <div className={styles.detailsWrapper}>
            <h2 className={styles.title}>{program.title}</h2>

            {/* Duration Selector */}
            {program.packages.length > 1 && (
              <div className={styles.packageSelector}>
                <div className={styles.selectorRow}>
                  <label htmlFor="package">Choose Duration:</label>
                  <select
                    id="package"
                    value={selectedPackageIndex}
                    onChange={(e) =>
                      setSelectedPackageIndex(Number(e.target.value))
                    }
                  >
                    {program.packages.map((pkg, index) => (
                      <option key={index} value={index}>
                        {pkg.duration}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <p className={styles.price}>{selectedPackage.price}</p>
            <hr className={styles.divider} />

            <h3 className={styles.subheading}>
              What does this program include?
            </h3>
            <ul className={styles.includedList}>
              {[...program.features.card, ...program.features.details].map(
                (feature, index) => (
                  <li key={index}>
                    <Check size={16} /> {feature}
                  </li>
                )
              )}
            </ul>

            <h4 className={styles.noteHeading}>Please note:</h4>
            <p className={styles.notes}>
              This is a one-time transformation program designed by Yashica
              Fitness. Includes nutritional + workout guidance. Results may
              vary.
            </p>

            <div className={styles.buttonGroup}>
              <button className={styles.addToCart}>Add to Cart</button>
              <button className={styles.buyNow}>Buy it Now</button>
            </div>
          </div>
        </section>
      </div>
      <hr className="mt-12"></hr>
      <Questions />
    </>
  );
};

export default ProgramDetails;
