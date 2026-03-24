import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-page section">
            <div className="container">
                <div className="blog-header">
                    <h1 className="section-title">Technical <span className="gradient-text">Brew</span></h1>
                    <p className="section-subtitle">
                        Deep dives into game development, optimization techniques, and tool creation.
                    </p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-card-content">
                                <div className="blog-meta">
                                    <span className="blog-category">{post.category}</span>
                                    <span className="blog-date">{post.date}</span>
                                </div>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-footer">
                                    <span className="read-time">☕ {post.readTime}</span>
                                    <Link to={`/blog/${post.slug}`} className="read-more">Read Article →</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
