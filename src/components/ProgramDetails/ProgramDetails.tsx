import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Check } from "lucide-react";
import styles from "./ProgramDetails.module.css";
import { newPrograms } from "../../components/data/programs"; // Ensure this path is correct based on your project structure
import Questions from "../Questions/Questions"; // Adjust path if needed
import { useCart } from "../../context/CartContext";

const ProgramDetails = () => {
  // 1. CHANGE: Get 'slug' from useParams instead of 'id'
  const { slug } = useParams<{ slug: string }>(); // Specify type for TypeScript
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // 2. CHANGE: Find the program using 'slug' instead of 'id'
  const program = newPrograms.find((p) => p.slug === slug);

  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);

  if (!program) {
    // Handle case where program is not found (e.g., redirect to 404 or programs list)
    return (
      <div className="pt-[180px] px-4 text-center">
        <p className="text-xl text-red-500 mb-4">Program not found.</p>
        <button
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          onClick={() => navigate("/programs")}
        >
          Browse All Programs
        </button>
      </div>
    );
  }

  const selectedPackage = program.packages[selectedPackageIndex];

  // ✅ Defined cleanPrice globally in the component
  const cleanPrice = parseFloat(
    selectedPackage.price.replace(/Rs\.\s?/, "").replace(/,/g, "")
  );

  const handleAddToCart = () => {
    if (!program || !selectedPackage) return;

    addToCart({
      id: program.id, // Keep using program.id for cart management if your CartContext expects it
      name: program.title,
      price: cleanPrice,
      image: program.image,
      description: program.features.card.join(", "),
      duration: selectedPackage.duration,
      quantity: 1,
    });
  };

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

              {/* Ensure image path is correct. If 'src/assets/images/' is public,
                  it should be accessed directly or via import if using a bundler.
                  `/${program.image}` assumes it's relative to the public root.
                  If 'program.image' already includes 'src/assets/images/', you might need to adjust.
                  Given your provided `newPrograms` has `src/assets/images/pngwing.com.png`,
                  it's likely a relative path from the project root after bundling.
                  Let's assume the previous `src/assets/images/` was an example and it resolves correctly.
              */}
              <img
                src={`/${program.image}`}
                className={styles.image}
                alt={program.title}
              />
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
              {/* Combine card features and details features */}
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
              <button className={styles.addToCart} onClick={handleAddToCart}>
                Add to Cart
              </button>

              <button
                className={styles.buyNow}
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      item: {
                        id: program.id, // Keep using program.id for checkout state if needed
                        title: program.title,
                        price: cleanPrice,
                        duration: selectedPackage.duration,
                      },
                    },
                  })
                }
              >
                Buy it Now
              </button>
            </div>
          </div>
        </section>
      </div>

      <hr className="mt-12" />
      <Questions />
    </>
  );
};

export default ProgramDetails;
