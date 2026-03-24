import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        // Optional: You could use a toast notification here instead of alert for a smoother experience
        alert(`Email copied: ${text}`);
    };

    const contacts = [
        {
            role: "General Inquiries",
            email: "admin@catfe.space"
        },
        {
            role: "Tuan Kieu Anh",
            email: "tuanka1904@gmail.com"
        }
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-container">
                    <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
                    <p className="section-subtitle">
                        Have a question about our tools or want to collaborate?
                    </p>

                    <div className="contact-content">
                        {contacts.map((contact, index) => (
                            <div
                                key={index}
                                className="email-box"
                                onClick={() => copyToClipboard(contact.email)}
                                style={{ cursor: 'pointer' }}
                                title="Click to copy"
                            >
                                <span className="contact-label">{contact.role}</span>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="contact-value"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {contact.email}
                                </a>
                                <span className="copy-hint">(Click to copy)</span>
                            </div>
                        ))}

                        <p className="support-text">
                            We usually respond within 24 hours.<br />
                            Support Hours: Mon - Fri, 9am - 6pm (GMT+7)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
