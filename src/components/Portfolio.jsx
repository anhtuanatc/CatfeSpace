import React from 'react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: "Neon Racer",
        category: "Game Development",
        desc: "A high-speed cyberpunk racing game built with Unity URP.",
        gradient: "linear-gradient(135deg, #3e2723 0%, #5d4037 100%)"
    },
    {
        id: 2,
        title: "Space Miner API",
        category: "Backend Services",
        desc: "Robust backend system for a multiplayer space mining simulation.",
        gradient: "linear-gradient(135deg, #1a1510 0%, #3e2723 100%)"
    },
    {
        id: 3,
        title: "Dungeon Architect",
        category: "Level Design Tool",
        desc: "Procedural dungeon generation tool used in 5+ shipped titles.",
        gradient: "linear-gradient(135deg, #e09f7d 0%, #fcf4ec 100%)"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div className="tools-header">
                    <h2 className="section-title">Selected <span className="gradient-text">Works</span></h2>
                    <p className="section-subtitle">
                        A showcase of our games, tools, and technical demonstrations.
                    </p>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-img-wrapper">
                                <div
                                    className="project-img"
                                    style={{ background: project.gradient }}
                                ></div>
                                <div className="project-overlay">
                                    <a href="#" className="btn btn-primary btn-sm">View Project</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
