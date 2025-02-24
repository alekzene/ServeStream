import { Link } from 'react-router-dom';
import "./index.css";

function Home() {
  function onScrollMore() {
    document.getElementById('section-stats').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="home">
      <section className='section-hero'>
        <div className="hero">
          <div className="hero-content">
            <h1>Grow Smarter,<br />Not Harder.</h1>
            <p className='mb-[40px]'>Marketing, design, and development — <br/>everything your brand needs to thrive.</p>
            <Link to="/contact" className="button-primary btn-gradient">
              Schedule a Free Appointment
            </Link>
          </div>
          <div className="hero-image">
            <img src="images/home_graph.png" alt="Hero" />
          </div>
        </div>
        <div className="scroll-more">
          <img src="images/arrow_down.png" alt="scroll down" width="50" onClick={onScrollMore} />
        </div>
      </section>

      <section className="stats" id="section-stats">
        <h2>All-in-One Marketing.<br />Unlimited Growth.</h2>
        <div className="stats-container">
          <div className="stat-box">
            <img src="images/growth1.png" alt="" />
            <p>Measurable<br/><span>results</span> and <br/>lasting <span>impact.</span></p>
          </div>
          <div className="stat-box">
          <img src="images/growth2.png" alt="" />
            <p><span>Strategic<br/></span> campaigns <span>tailored</span> to your brand.</p>
          </div>
          <div className="stat-box">
          <img src="images/growth3.png" alt="" />
            <p>Backed by <span>experienced agents.</span></p>
          </div>
        </div>
      </section>

      <section className="advantage">
        <h2 className="font-lexend">The ServeStream Advantage</h2>
        <p className="font-lexend">Your One-Stop Shop for End-to-End Brand Growth.</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-card-image"><img src="images/growth1.png" alt='' /></div>
            <h3 className="font-lexend">Sales & Marketing</h3>
            <p>Connect your brand with the right audience through targeted growth, customized sales strategies and data-driven marketing campaigns. </p>
            <Link to="/services" className="button-primary btn-gradient">Book a Call</Link>
          </div>
          <div className="service-card">
            <div className="service-card-image"><img src="images/growth2.png" alt='' /></div>
            <h3 className="font-lexend">IT / Web Development</h3>
            <p>Build a strong digital presence with cutting-edge web development and IT solutions built for seamless functionality and user experience</p>
            <Link to="/services" className="button-primary btn-gradient">Book a Call</Link>
          </div>
          <div className="service-card">
            <div className="service-card-image"><img src="images/growth3.png" alt='' /></div>
            <h3 className="font-lexend">Creative & Design</h3>
            <p>Bring your brand vision to life with innovative design, content creation, and branding strategies that captivate and engage your audience.</p>
            <Link to="/services" className="button-primary btn-gradient">Book a Call</Link>
          </div>
        </div>
      </section>
      <section className="partners">
        <h1 className='font-lexend font-bold text-center pb-[30px]'>Your Partners in Progress</h1>
        <div className='partners-grid mb-[50px]'>
          <div className='partner-card text-center'>
            <img src='images/circle.png' alt='' width='160' className='pb-[30px] m-auto' />
            <h3 className='font-lexend font-bold'>Farhan</h3>
            <div>CEO, Co-Founder</div>
          </div>
          <div className='partner-card text-center'>
            <img src='images/circle.png' alt='' width='160' className='pb-[30px] m-auto' />
            <h3 className='font-lexend font-bold'>Alexene</h3>
            <div>Co-Founder</div>
          </div>
        </div>
        <div className='text-center'><Link to="/services" className="button-primary btn-gradient">Let’s Discuss Your Brand’s Future</Link></div>
      </section>
      <section className="schedule">
        <div className='schedule_grid'>
          <div className='schedule_left'>

          </div>
          <div className='schedule_right'>
            <h3 className='font-lexend font-bold'>Ready to Grow?<br/>Schedule a Call with Us Today!</h3>
            <h4>Free 15-Minute Strategy Session</h4>
            <p>By the end of this call, you'll have a clear roadmap for scaling your brand, with actionable insights on how our integrated marketing, design, and development solutions can drive consistent growth for your business.</p>
            <p>Find a time on our calendar that works best for you, and we look forward to helping your brand thrive!</p>
          </div>
        </div>
      </section>
      <section className="elevate text-center">
        <h1 className='font-lexend font-bold'>Elevate your Brand with ServeStream</h1>
        <div className='text-center'><Link to="/services" className="button-primary btn-gradient">Schedule a Free Appointment</Link></div>
      </section>
    </div>
  );
}

export default Home;