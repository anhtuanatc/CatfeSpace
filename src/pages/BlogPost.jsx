import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostBySlug } from '../data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    if (!post) {
        return (
            <div className="page-wrapper" style={{ paddingTop: '120px', minHeight: '100vh', textAlign: 'center' }}>
                <h2>Post not found</h2>
                <Link to="/blog" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-flex' }}>
                    ← Back to Blog
                </Link>
            </div>
        );
    }

    const paragraphs = post.content.trim().split('\n');

    return (
        <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '100vh' }}>
            <div className="container">
                <div className="post-wrapper">
                    <Link to="/blog" className="back-link">← Back to Blog</Link>

                    <div className="post-meta">
                        <span className="blog-category">{post.category}</span>
                        <span className="blog-date">{post.date}</span>
                        <span className="read-time">☕ {post.readTime}</span>
                    </div>

                    <h1 className="post-title">{post.title}</h1>

                    <div className="post-content">
                        {paragraphs.map((line, i) => {
                            const trimmed = line.trim();
                            if (!trimmed) return null;

                            if (trimmed.startsWith('## ')) {
                                return <h2 key={i}>{trimmed.slice(3)}</h2>;
                            }
                            if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                                return <strong key={i}>{trimmed.slice(2, -2)}</strong>;
                            }
                            if (trimmed.startsWith('- ')) {
                                return <li key={i}>{renderInline(trimmed.slice(2))}</li>;
                            }
                            if (trimmed === '---') {
                                return <hr key={i} />;
                            }
                            if (trimmed.startsWith('```')) {
                                return null;
                            }
                            return <p key={i}>{renderInline(trimmed)}</p>;
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                .post-wrapper {
                    max-width: 740px;
                    margin: 0 auto;
                    padding: 0 0 80px;
                }
                .back-link {
                    display: inline-block;
                    color: var(--text-muted);
                    margin-bottom: 32px;
                    font-size: 0.9rem;
                    transition: color 0.2s;
                }
                .back-link:hover { color: var(--primary); }
                .post-meta {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 16px;
                    flex-wrap: wrap;
                }
                .post-title {
                    font-size: clamp(1.8rem, 4vw, 2.6rem);
                    line-height: 1.2;
                    margin-bottom: 48px;
                    color: var(--text-main);
                }
                .post-content h2 {
                    font-size: 1.4rem;
                    color: var(--primary);
                    margin: 40px 0 16px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid rgba(224, 159, 125, 0.15);
                }
                .post-content p {
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 16px;
                }
                .post-content li {
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin: 6px 0 6px 20px;
                    list-style: disc;
                }
                .post-content strong {
                    color: var(--text-main);
                    font-weight: 600;
                    display: block;
                    margin: 8px 0 2px;
                }
                .post-content hr {
                    border: none;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    margin: 48px 0 32px;
                }
                .post-content pre, .post-content code {
                    background: rgba(45, 35, 30, 0.8);
                    border: 1px solid rgba(224, 159, 125, 0.1);
                    border-radius: var(--radius-sm);
                    padding: 20px;
                    font-family: 'JetBrains Mono', 'Fira Code', monospace;
                    font-size: 0.85rem;
                    color: #a4d4ae;
                    overflow-x: auto;
                    display: block;
                    margin: 20px 0;
                    line-height: 1.7;
                }
            `}</style>
        </div>
    );
};

// Render inline bold: **text**
const renderInline = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    if (parts.length === 1) return text;
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} style={{ color: 'var(--text-main)', fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

export default BlogPost;
