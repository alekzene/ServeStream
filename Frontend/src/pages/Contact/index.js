import { useState } from 'react';
import "./index.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>{"Let's Talk About It"}</h1>
        <p>Your brand is one call away from immense growth.</p>
      </section>

      <section className="book-call">
        <iframe src='https://calendly.com/servestreamofficial/30min' title="book a call"></iframe>
      </section>

      <section className="contact-form-section">
        <div className="form-container">
          <h2>Connect With Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder='First Name*'
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Last Name*'
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email Address*'
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='Your Message'
                rows="6"
              />
            </div>

            <button type="submit" className="button-primary btn-gradient">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;