import "./index.css";

function Portfolio() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <h1>From Concept To Creation</h1>
        <p>Discover how we've helped businesses grow through seamless design, development, and marketing.</p>
        <div className="hero-buttons">
          <button className="button-primary">Let's Build Something Great!</button>
          <button className="button-secondary">Get Inspired</button>
        </div>
      </section>

      <section className="case-study-section">
        <div className="case-study-container">
          <h2>Creative Solutions.<br />Real Results.</h2>

          <div className="case-study">
            <div className="case-study-content">
              <h3 className="purple-text">Case Study 1:</h3>
              <h4 className="purple-text">Hiraya - Elevating Their Online Presence</h4>
              
              <p>
                Hiraya, a fast-growing e-commerce brand, faced challenges in increasing 
                their online visibility and improving conversion rates. Their existing 
                website lacked engagement, and their marketing efforts weren't effectively 
                reaching their target audience.
              </p>

              <div className="solution">
                <h5>Solution</h5>
                <p>
                  We designed and developed a new, user-friendly website optimized for 
                  conversions. Our sales and marketing team crafted a tailored SEO strategy, 
                  and we launched targeted social media campaigns to boost traffic. Additionally, 
                  we revamped their branding to align with their target audience's needs.
                </p>
              </div>

              <div className="results">
                <h5>Results</h5>
                <ul>
                  <li>Increased website traffic by 45% in the first quarter.</li>
                  <li>Conversion rates improved by 30%.</li>
                  <li>50% growth in social media engagement.</li>
                  <li>A more cohesive and visually appealing brand identity.</li>
                </ul>
              </div>

              <div className="services-provided">
                <h5>What We Did</h5>
                <ul>
                  <li>Web Design & Development</li>
                  <li>SEO & Content Strategy</li>
                  <li>Social Media Marketing</li>
                  <li>Branding & Creative Direction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let's Build Something Great.</h2>
        <button className="button-primary">Schedule Your Free Call Now!</button>
      </section>
    </div>
  );
}

export default Portfolio;