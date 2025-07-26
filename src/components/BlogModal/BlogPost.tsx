// src/components/BlogModal/BlogPost.tsx (your BlogDetails component)

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts"; // Import BlogPost interface too
import styles from "./BlogPostPage.module.css";

const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const navigate = useNavigate();

  if (!post) {
    return (
      <div className={styles.notFound}>
        Post not found.
        <button className={styles.backButton} onClick={() => navigate("/blog")}>
          Back to Blog
        </button>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <div className={styles.blogDetails}>
      {/* Blog Content Section */}
      <div className={styles.blogContentContainer}>
        <div className={styles.blogMeta}>
          <span className={styles.blogDate}>
            {new Date(post.date).toDateString()}
          </span>
        </div>

        <h1 className={styles.blogTitle}>{post.title}</h1>
        <p className={styles.blogExcerpt}>{post.excerpt}</p>

        <div className={styles.blogHeader}>
          <img src={post.image} alt={post.title} className={styles.blogImage} />
        </div>

        <div className={styles.blogBody}>
          {/* --- DYNAMICALLY RENDERED CONTENT --- */}
          {post.content &&
            post.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index} className={styles.blogContentParagraph}>
                      {block.text}
                    </p>
                  );
                case "heading":
                  if (block.level === 2) {
                    return (
                      <h2 key={index} className={styles.blogContentHeading2}>
                        {block.text}
                      </h2>
                    );
                  } else if (block.level === 3) {
                    return (
                      <h3 key={index} className={styles.blogContentHeading3}>
                        {block.text}
                      </h3>
                    );
                  } else if (block.level === 4) {
                    return (
                      <h4 key={index} className={styles.blogContentHeading4}>
                        {block.text}
                      </h4>
                    );
                  }
                  return null;
                case "list":
                  return (
                    <ul key={index} className={styles.blogContentList}>
                      {block.items?.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  );
                case "exercise":
                  return (
                    <div key={index} className={styles.exerciseSection}>
                      {block.exerciseDetails?.map((ex, exIndex) => (
                        <div key={exIndex} className={styles.exerciseBlock}>
                          <h3 className={styles.exerciseName}>
                            {exIndex + 1}. {ex.name}
                          </h3>
                          <p className={styles.exerciseDetail}>
                            <strong>How to Perform:</strong> {ex.howToPerform}
                          </p>
                          <p className={styles.exerciseDetail}>
                            <strong>Benefits:</strong> {ex.benefits}
                          </p>
                        </div>
                      ))}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          {/* --- END DYNAMICALLY RENDERED CONTENT --- */}

          <div className={styles.blogAuthor}>Written by {post.author}</div>
        </div>
      </div>

      {/* Read More Section (already full width) */}
      <div className={styles.readMoreSection}>
        <h2 className={styles.readMoreTitle}>Read More</h2>
        <div className={styles.readMoreGrid}>
          {relatedPosts.map((item) => (
            <div
              key={item.id}
              className={styles.readMoreCard}
              onClick={() => navigate(`/blog/${item.slug}`)} // Use slug here
            >
              <img
                src={item.image}
                alt={item.title}
                className={styles.readMoreImage}
              />
              <div className={styles.readMoreContent}>
                <div className={styles.readMoreCategory}>{item.category}</div>
                <h3 className={styles.readMoreCardTitle}>{item.title}</h3>
                <p className={styles.readMoreCardExcerpt}>{item.excerpt}</p>
                <button className={styles.readMoreButton}>Read Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
