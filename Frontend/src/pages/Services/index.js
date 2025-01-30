import "./index.css";

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Solutions:<br />Tailored to Your Success</h1>
        <p>Everything you need at your fingertips</p>
        <div className="hero-buttons">
          <button className="button-primary">Unlock Your Brand's Potential</button>
          <button className="button-secondary">Learn more</button>
        </div>
      </section>

      <section className="expertise-section">
        <div className="expertise-container">
          <h2>Your Growth,<br />Our Expertise.</h2>
          
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon purple"></div>
              <h3>Sales & Marketing</h3>
              <p>Our expert team provides tailored sales and marketing strategies to help your business grow and reach its full potential.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon purple"></div>
              <h3>IT / Web Development</h3>
              <p>We offer professional web development services to create engaging websites that drive results for your business.</p>
            </div>

            <div className="expertise-card">
              <div className="expertise-icon purple"></div>
              <h3>Creative Services</h3>
              <p>Our creative team delivers innovative designs and content that captivate your audience and elevate your brand.</p>
            </div>
          </div>

          <button className="button-primary">Schedule Your Free Call Now!</button>
        </div>
      </section>
    </div>
  );
}

export default Services;