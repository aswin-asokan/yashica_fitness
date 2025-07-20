import React from 'react';
import { X, Calendar, User, Clock } from 'lucide-react';
import './BlogModal.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content?: string;
}

interface BlogModalProps {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, isOpen, onClose }) => {
  if (!isOpen) return null;

  const fullContent = `
    ${post.excerpt}
    
    This comprehensive guide explores the essential aspects of ${post.title.toLowerCase()}. Our expert team has compiled years of research and practical experience to bring you actionable insights that will transform your fitness journey.
    
    Whether you're a beginner just starting out or an experienced athlete looking to optimize your performance, this article provides valuable information that you can implement immediately.
    
    Key takeaways from this article:
    • Understanding the fundamental principles
    • Practical implementation strategies
    • Common mistakes to avoid
    • Advanced techniques for better results
    • Long-term sustainability approaches
    
    Remember, consistency is key to achieving lasting results. Start with small, manageable changes and gradually build upon them as you develop confidence and see progress.
    
    For personalized guidance and support on your fitness journey, consider joining one of our comprehensive programs designed to help you achieve your specific goals.
  `;

  return (
    <div className="blog-modal-overlay">
      <div className="blog-modal-container">
        <div className="blog-modal-image-container">
          <img
            src={post.image}
            alt={post.title}
            className="blog-modal-image"
          />
          <button
            onClick={onClose}
            className="blog-modal-close-button"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="blog-modal-category-badge">
            {post.category}
          </div>
        </div>
        
        <div className="blog-modal-content">
          <h1 className="blog-modal-title">{post.title}</h1>
          
          <div className="blog-modal-meta">
            <div className="blog-modal-meta-item">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="blog-modal-meta-item">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="blog-modal-meta-item">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="blog-modal-body">
            {fullContent}
          </div>
          
          <div className="blog-modal-author-section">
            <div className="blog-modal-author-container">
              <div className="blog-modal-author-avatar">
                <User className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h4 className="blog-modal-author-info">About {post.author}</h4>
                <p className="blog-modal-author-info">
                  Expert fitness trainer with years of experience helping clients achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;