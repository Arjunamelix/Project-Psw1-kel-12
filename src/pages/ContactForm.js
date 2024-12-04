import React, { useState } from "react";
import "./ContactForm.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const currentTime = new Date().toLocaleString();
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...formData, time: currentTime },
      ]);

      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-page">
      <div className="form-section">
        <h2 className="form-heading">Send a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            list="name-suggestions"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            list="email-suggestions"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="message-section">
        <h2>Message List</h2>
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="message-card">
              <p>
                <strong>Name:</strong> {msg.name}
              </p>
              <p>
                <strong>Message:</strong> {msg.message}
              </p>
              <p>
                <strong>Time:</strong> {msg.time}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactPage;
