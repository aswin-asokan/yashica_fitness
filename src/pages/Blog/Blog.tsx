// src/pages/Blog/Blog.tsx

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Blog.module.css";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../../components/data/blogPosts"; // Adjust path if needed

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const categories = [
    "All",
    "Training",
    "Nutrition",
    "Motivation",
    "Science",
    "Lifestyle",
    "Recovery",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  // CHANGE 5: Accept slug as parameter
  const handlePostClick = (postSlug: string) => {
    navigate(`/blog/${postSlug}`);
  };

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogPageHeader}>
        <h1 className={styles.blogPageTitle}>Fitness Blog</h1>
        <p className={styles.blogPageSubtitle}>
          Expert insights, tips, and guides to help you on your fitness journey.
        </p>
      </div>

      <section className={styles.blogContent}>
        <div className={styles.blogCategories}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? styles.blogCategoryButtonActive
                  : styles.blogCategoryButtonInactive
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.blogPosts}>
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              // CHANGE 6: Pass post.slug to handlePostClick
              onClick={() => handlePostClick(post.slug)}
              className={styles.blogPost}
            >
              <div className={styles.blogPostImage}>
                <img src={post.image} alt={post.title} />
                <div className={styles.blogPostCategory}>{post.category}</div>
              </div>

              <div className={styles.blogPostContent}>
                <h3 className={styles.blogPostTitle}>{post.title}</h3>
                <p className={styles.blogPostExcerpt}>{post.excerpt}</p>

                <button className={styles.blogPostReadMore}>
                  <span>Read More</span>
                  <ArrowRight className={styles.blogPostReadMoreIcon} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
