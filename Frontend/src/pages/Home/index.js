import { Link } from 'react-router-dom';
import "./index.css";

function Home() {
  const stats = [
    { number: '90+', text: 'Clients Served' },
    { number: '50+', text: 'Content Creators' },
    { number: '300k', text: 'Revenue Generated' }
  ];

  const testimonials = [
    { name: 'Alex Brown', text: 'ServeStream transformed our online presence. Highly recommended!' },
    { name: 'Sarah Lee', text: "The team's creativity and technical skills are unmatched. Great results!" },
    { name: 'John Taylor', text: 'Our revenue increased by 40% after implementing their marketing strategy.' }
  ];

  const partners = ['Dropbox', 'Shopify', 'Slack', 'Spotify', 'Stripe'];

  const members = [{
    name: "Richard",
    description: "The Life behind of you is not important, Focus what's coming.",
    avatar: ""
  }, {
    name: "Richard",
    description: "The Life behind of you is not important, Focus what's coming.",
    avatar: ""
  }, {
    name: "Richard",
    description: "The Life behind of you is not important, Focus what's coming.",
    avatar: ""
  }, {
    name: "Richard",
    description: "The Life behind of you is not important, Focus what's coming.",
    avatar: ""
  }]

  return (
    <div className="home">
      <section>
        <div className="hero">
          <div className="hero-content">
            <h1>Grow Smarter,<br />Not Harder.</h1>
            <p>Marketing, design, and development — everything your brand needs to thrive.</p>
            <Link to="/contact" className="button-primary">
              Schedule a Free Appointment
            </Link>
          </div>
          <div className="hero-image">
            <img src="" alt="Hero" />
          </div>
        </div>
        <p className="scroll-more">Scroll to Learn More</p>
      </section>

      <section className="stats">
        <h2>All-in-One Marketing.<br />Unlimited Growth.</h2>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <h3>{stat.number}</h3>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="advantage">
        <h2>The ServeStream Advantage</h2>
        <p>Your One-Stop Shop for End-to-End Brand Growth.</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-card-image">
            </div>
            <h3>Sales & Marketing</h3>
            <p>Connect your brand with the right audience through targeted growth, customized sales strategies and data-driven marketing campaigns. </p>
            <Link to="/services" className="button-secondary">Book a Call</Link>
          </div>
          <div className="service-card">
            <div className="service-card-image">
            </div>
            <h3>IT / Web Development</h3>
            <p>Build a strong digital presence with cutting-edge web development and IT solutions built for seamless functionality and user experience</p>
            <Link to="/services" className="button-secondary">Book a Call</Link>
          </div>
          <div className="service-card">
            <div className="service-card-image">
            </div>
            <h3>Creative & Design</h3>
            <p>Bring your brand vision to life with innovative design, content creation, and branding strategies that captivate and engage your audience.</p>
            <Link to="/services" className="button-secondary">Book a Call</Link>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2 className="testimonials-title">Real Feedback, Real Results</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="partners">
        <h2 className="partners-title">Trusted by top companies</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              {partner}
            </div>
          ))}
        </div>
      </section>
      <section className="members">
      <div className="container">
        <h2 className="members-title">Your Partners in Progress</h2>
        
        <div className="members-grid">
          {members.map((member, index) => (
            <div key={index} className="member-item">
              <div className="member-avatar">
                <img src={member.avatar} alt={member.name} />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>

        <button className="cta-button">
          Let's Discuss Your Brand's Future
        </button>
      </div>
    </section>
      <section className="cta">
        <div className="cta-image">
          <img src="" alt="img" />
        </div>
        <div className="cta-content">
          <h2 className="cta-title">Ready to Grow? Schedule a Call with Us Today!</h2>
          <p className="cta-subtitle">Free 15-Minute Strategy Session</p>
          <p className="cta-description">
            By the end of this call, you'll have a clear roadmap for scaling your brand, with actionable insights on how our integrated marketing, design, and development solutions can drive consistent growth for your business.
          </p>
          <p className="cta-description">
            Find a time on our calendar that works best for you, and we look forward to helping your brand thrive!
          </p>
          <button className="button-primary">Schedule a Free Appointment</button>
        </div>
      </section>
    </div>
  );
}

export default Home;