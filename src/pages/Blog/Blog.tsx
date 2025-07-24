import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import BackButton from '../../components/BackButton/BackButton';
import BlogModal from '../../components/BlogModal/BlogModal';
import styles from './Blog.module.css';
const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Exercises for Building Core Strength',
      excerpt: 'Discover the most effective exercises to build a strong, stable core that will improve your overall fitness performance.',
      image: 'https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Yashica Trainer',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Training'
    },
    {
      id: 2,
      title: 'The Complete Guide to Post Workout Nutrition',
      excerpt: 'Learn what to eat before and after your workouts to maximize performance and recovery.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Nutrition Expert',
      date: '2025-01-12',
      readTime: '8 min read',
      category: 'Nutrition'
    },
    {
      id: 3,
      title: 'How to Stay Motivated During Your Fitness Journey',
      excerpt: 'Practical tips and strategies to maintain motivation and consistency in your fitness routine.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Fitness Coach',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Motivation'
    },
    {
      id: 4,
      title: 'The Science Behind HIIT Training',
      excerpt: 'Understanding the physiological benefits of High-Intensity Interval Training and how to implement it effectively.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Exercise Scientist',
      date: '2025-01-08',
      readTime: '7 min read',
      category: 'Science'
    },
    {
      id: 5,
      title: 'Building Healthy Habits That Last',
      excerpt: 'Learn how to create sustainable lifestyle changes that will support your long-term health and fitness goals.',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Behavior Expert',
      date: '2025-01-05',
      readTime: '4 min read',
      category: 'Lifestyle'
    },
    {
      id: 6,
      title: 'Recovery: The Missing Piece of Your Fitness Puzzle',
      excerpt: 'Why recovery is just as important as training and how to optimize your rest days for better results.',
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Recovery Specialist',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Recovery'
    }
  ];

  const categories = ['All', 'Training', 'Nutrition', 'Motivation', 'Science', 'Lifestyle', 'Recovery'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handlePostClick = (post: any) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className={styles.blogContainer}>
      <BackButton />
      
      <section className={styles.blogHero}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={styles.blogHeroTitle}>Fitness Blog</h1>
          <p className={styles.blogHeroSubtitle}>
            Expert insights, tips, and guides to help you on your fitness journey.
          </p>
        </div>
      </section>

      <section className={styles.blogContent}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                onClick={() => handlePostClick(post)}
                className={styles.blogPost}
              >
                <div className={styles.blogPostImage}>
                  <img
                    src={post.image}
                    alt={post.title}
                  />
                  <div className={styles.blogPostCategory}>
                    {post.category}
                  </div>
                </div>
                
                <div className={styles.blogPostContent}>
                  <h3 className={styles.blogPostTitle}>
                    {post.title}
                  </h3>
                  <p className={styles.blogPostExcerpt}>
                    {post.excerpt}
                  </p>
                  
                  <div className={styles.blogPostMeta}>
                    <div className={styles.blogPostAuthor}>
                      <div className={styles.blogPostAuthorGroup}>
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className={styles.blogPostAuthorGroup}>
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className={styles.blogPostReadTime}>
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <button className={styles.blogPostReadMore}>
                    <span>Read More</span>
                    <ArrowRight className={`${styles.blogPostReadMoreIcon} h-4 w-4`} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.blogLoadMore}>
            <button className={styles.blogLoadMoreButton}>
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className={styles.blogNewsletter}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={styles.blogNewsletterTitle}>
            Stay Updated with Our Latest Posts
          </h2>
          <p className={styles.blogNewsletterText}>
            Subscribe to our newsletter and never miss out on expert fitness tips and insights.
          </p>
          <div className={styles.blogNewsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.blogNewsletterInput}
            />
            <button className={styles.blogNewsletterButton}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {selectedPost && (
        <BlogModal
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Blog;