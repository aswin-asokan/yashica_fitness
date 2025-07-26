import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newPrograms } from "../../components/data/programs"; // Ensure this path is correct
import { useCart } from "../../context/CartContext";
import styles from "./Programs.module.css";

type SortOption = "alphabet" | "price-asc" | "price-desc";

const AllPrograms = () => {
  const [sortBy, setSortBy] = useState<SortOption>("alphabet");
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const cleanPrice = (price: string): number =>
    parseFloat(price.replace(/Rs\.\s?/, "").replace(/,/g, ""));

  const sortedPrograms = [...newPrograms].sort((a, b) => {
    const nameA = a.title.toLowerCase();
    const nameB = b.title.toLowerCase();
    const priceA = cleanPrice(a.packages[0].price);
    const priceB = cleanPrice(b.packages[0].price);

    switch (sortBy) {
      case "alphabet":
        return nameA.localeCompare(nameB);
      case "price-asc":
        return priceA - priceB;
      case "price-desc":
        return priceB - priceA;
      default:
        return 0;
    }
  });

  return (
    <section className={styles.pageContent}>
      <h2 className={styles.heading}>ALL PROGRAMS</h2>
      <hr className="my-4" />
      {/* Count & Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 w-full">
        <p className="text-sm font-medium text-gray-700">
          Total Items: {newPrograms.length}
        </p>
        <div className={styles.sortRow}>
          <span className={styles.sortLabel}>Sort by:</span>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className={styles.sortSelect}
          >
            <option value="alphabet">Alphabetical</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <hr className="mb-10" />
      {/* Grid View */}
      <div className={styles.programGrid}>
        {sortedPrograms.map((program) => {
          const hasMultiplePackages = program.packages.length > 1;
          const basePrice = program.packages[0].price;

          return (
            <div key={program.id} className={styles.programBlock}>
              <div
                className={styles.card}
                // --- UPDATE 1: Navigate using program.slug ---
                onClick={() => navigate(`/program/${program.slug}`)}
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
                <img
                  src={`/${program.image}`}
                  alt={program.title}
                  className={styles.image}
                />
              </div>

              {/* Meta Section */}
              <div className={styles.cardMeta}>
                <div className={styles.metaInner}>
                  <p className={styles.metaTitle}>{program.title}</p>
                  <p className={styles.metaPrice}>
                    {hasMultiplePackages
                      ? `${program.packages[0].price} - ${
                          program.packages[program.packages.length - 1].price
                        }`
                      : basePrice}
                  </p>
                </div>

                {/* Cart Controls */}
                <div className="mt-2">
                  {hasMultiplePackages ? (
                    <button
                      // --- UPDATE 2: Navigate using program.slug ---
                      onClick={() => navigate(`/program/${program.slug}`)}
                      className={`${styles.buttonStyle} ${styles.cardButton}`}
                    >
                      Select Options
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        addToCart({
                          id: program.id, // Keep using program.id for cart logic if your CartContext expects it
                          name: program.title,
                          price: cleanPrice(basePrice),
                          image: program.image,
                          description: program.features.card.join(", "),
                          duration: program.packages[0].duration,
                          quantity: 1,
                        })
                      }
                      className={`${styles.buttonStyle} ${styles.cardButton}`}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllPrograms;
