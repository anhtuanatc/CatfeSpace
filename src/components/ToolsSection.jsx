import React from 'react';
import './ToolsSection.css';

const tools = [
    {
        id: 1,
        title: "Assets Validator",
        desc: "AI-powered editor tool that scans assets on your scene, provides smart feedback on issues, and automatically fixes them — naming, import settings, and more.",
        status: "In Development",
        icon: "🤖",
        tags: ["Editor Tool", "AI", "QA"]
    },
    {
        id: 2,
        title: "Inventory Pro",
        desc: "A complete inventory framework for Unity. Create items, manage inventory slots, build crafting recipes, and set up equipment systems — all with a clean API.",
        status: "In Development",
        icon: "🎒",
        tags: ["Gameplay", "System", "Crafting"]
    },
    {
        id: 3,
        title: "Scene Manager",
        desc: "Full-featured scene management toolkit. Quick-switch between scenes, track dependencies, visualize asset graphs in-scene, and manage additive loading with ease.",
        status: "In Development",
        icon: "🗺️",
        tags: ["Productivity", "Editor Tool", "Utility"]
    }
];

const ToolsSection = () => {
    return (
        <section id="tools" className="section">
            <div className="container">
                <div className="tools-header">
                    <h2 className="section-title">Premium <span className="gradient-text">Tools</span></h2>
                    <p className="section-subtitle">
                        Enhance your development pipeline with our battle-tested Unity assets.
                    </p>
                </div>

                <div className="tools-grid">
                    {tools.map((tool) => (
                        <div key={tool.id} className="card tool-card">
                            <div className="tool-card-content">
                                <div className="tool-icon-wrapper">{tool.icon}</div>
                                <h3 className="tool-title">{tool.title}</h3>
                                <div className="tool-tags">
                                    {tool.tags.map(tag => (
                                        <span key={tag} className="tool-tag">{tag}</span>
                                    ))}
                                </div>
                                <p className="tool-desc">{tool.desc}</p>
                                <div className="tool-footer">
                                    <span className="tool-status">{tool.status}</span>
                                    <button className="btn btn-secondary btn-disabled" disabled style={{ padding: '8px 20px', opacity: 0.6, cursor: 'not-allowed' }}>
                                        Coming Soon
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
