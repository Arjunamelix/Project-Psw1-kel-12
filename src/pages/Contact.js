import React, { useState } from 'react';
import './Contact.css';
import Navbar from "../components/Header";

const Contact = () => {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const timestamp = new Date().toLocaleString();

    setMessages([...messages, { name, email, message, timestamp }]);
    event.target.reset();
  };

  return (
    <div><Navbar />
    <div className="contact-page">
      <div className="contact-form-section">
        <div>
          <h2>Contact Us</h2>
          <p className="contact-description">
            Have any questions or need support? Send us a message, and we'll get back to you as soon as possible!
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
            <button className="send-button" type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="messages-section">
        <h2>Messages</h2>
        <ul className="messages-list">
          {messages.map((msg, index) => (
            <li key={index} className="message-item">
              <strong>{msg.name}</strong>
              <p>{msg.message}</p>
              <span>{msg.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Contact;
