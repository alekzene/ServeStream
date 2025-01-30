import "./index.css";

function About() {
  const teamMembers = [
    {
      name: 'Name B. Surname',
      role: 'Co-Founder',
      description: 'We offer professional web development services to create engaging websites that drive results for your business.',
      image: '/placeholder.svg'
    },
    {
      name: 'Name B. Surname',
      role: 'Co-Founder',
      description: 'We offer professional web development services to create engaging websites that drive results for your business.',
      image: '/placeholder.svg'
    },
    {
      name: 'Name B. Surname',
      role: 'Founding Developer',
      description: 'We offer professional web development services to create engaging websites that drive results for your business.',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Who We Are</h1>
        <p>A team dedicated to your brand's growth</p>
        <div className="hero-buttons">
          <button className="button-primary">Meet the Team Today!</button>
          <button className="button-secondary">Learn more</button>
        </div>
      </section>

      <section className="approach-section">
        <h2>The ServeStream Approach</h2>
        <p>
          At ServeStream, we drive business growth with innovative marketing solutions, 
          blending sales strategies, creative design, and IT/web development. Our end-to-end 
          services help brands reach their full potential, creating lasting success through 
          seamless digital experiences and strategic innovation. We aim to be the all-in-one 
          agency that transforms businesses into industry leaders, ensuring both immediate 
          impact and long-term growth.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet The Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image || "/placeholder.svg"} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
                <div className="social-links">
                  <div className="social-icon"></div>
                  <div className="social-icon"></div>
                  <div className="social-icon"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="button-primary">Let's Make It Happen — Book A Call Now!</button>
      </section>
    </div>
  );
}

export default About;