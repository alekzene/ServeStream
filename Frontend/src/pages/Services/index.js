import "./index.css";

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1 className="text-6xl font-extrabold">Solutions:<br />Tailored to Your Success</h1>
        <p className='text-black text-xl'>Everything you need at your fingertips</p>
        <div className="hero-buttons">
          <button className="h-12 p-2 text-white font-bold rounded-full bg-gradient-to-r from-[#CBA3FF] to-[#700DCC]  w-full">Unlock Your Brand's Potential</button>
          <button className="whitespace-nowrap ">Learn more</button>
        </div>
      </section>

      <div className="services-page">
      {/* Expertise Section */}
      <section className=" text-center py-16">
        <h2 className="text-6xl font-extrabold mb-8">Your Growth, Our Expertise</h2>

        <div className=" h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-20 max-w-lg mx-auto">
          {/* Sales & Marketing */}
          <div className="expertise-card p-6 bg-white shadow-lg rounded-lg text-left">
  <div className="flex space-x-3 items-center">
    <div className="expertise-icon purple"><img src='/icon1.png' className=" justify-center text-center p-2"/> </div>
    <div>

    <h3 className="text-2xl font-bold text-purple-700">Sales & Marketing</h3>
    <p className="text-gray-600">Drive Sales, Maximize Impact</p>


    </div>
  </div>
  <h3 className="mt-6 text-xl  font-extrabold text-purple-700">Ads Management</h3>
  <ul className="text-gray-700 mt-2 space-y-4">
    <li>• Creation and management of ad campaigns on platforms like Facebook, Instagram, and Google.</li>
    <li>• Audience research and targeting to maximize ROI. A/B testing to optimize ad performance.</li>
    <li>• Analytics and reporting to track / improve results.</li>
  </ul>
  <h3 className="mt-6 text-xl  font-extrabold text-purple-700">Copywriting Services</h3>
  <ul className="text-gray-700 mt-2 space-y-4">
    <li>• Crafting persuasive and engaging ad copy. </li>
    <li>• Website content creation to boost conversions. </li>
    <li>• SEO-driven blog writing and email marketing..</li>
  </ul>
  <button className="mt-4 px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-[#CBA3FF] to-[#700DCC]">
    Book a Call
  </button>
</div>


          {/* IT / Web Development */}
          <div className="expertise-card p-6 bg-white shadow-lg rounded-lg text-left">
  <div className="flex space-x-3 items-center">
    <div className="expertise-icon purple"><img src='/icon2.png' className=" justify-center text-center p-2"/> </div>
    <div>
    <h3 className="text-2xl font-bold text-purple-700">IT / Web Development</h3>
    <p className="text-gray-600">Streamlined Tech for Modern Businesses</p>


    </div>
  </div>
  <h3 className="mt-6 text-xl  font-extrabold text-purple-700">Web Development and Design </h3>
  <ul className="text-gray-700 mt-2 space-y-4">
    <li>• Custom websites for e-commerce, SaaS, and local businesses.</li>
    <li>• Responsive, mobile-friendly designs tailored to your brand.</li>
    <li>• Optimized for fast load times and high SEO rankings.</li>
    <li>• Ongoing website maintenance and support.</li>

  </ul>
 
  <button className="mt-4 px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-[#CBA3FF] to-[#700DCC]">
    Book a Call
  </button>
</div>

          {/* Social Media Strategy */}
          <div className="expertise-card p-8 bg-white shadow-lg rounded-lg text-left">
  <div className="flex space-x-3 items-center">
    <div className="expertise-icon purple"><img src='/icon3.png' className=" justify-center text-center p-2"/> </div>
    <div>

    <h3 className="text-2xl font-bold text-purple-700">Social Media Strategy</h3>
    <p className="text-gray-600">Engage, Grow, and Inspire
    </p>
    </div>
  </div>

  <h3 className="mt-6 text-xl  font-extrabold text-purple-700">Content Creation & Scheduling 
  </h3>
  <ul className="text-gray-700 mt-2 space-y-4">
    <li>• Custom graphics, captions, and content tailored to your audience. </li>
    <li>• Consistent posting schedules to keep your brand top of mind. </li>
  </ul>
  <h3 className="mt-6 text-xl  font-extrabold text-purple-700">Community Engagement</h3>
  <ul className="text-gray-700 mt-2 space-y-4">
    <li>• Responding to comments, messages, and engaging with your audience to build brand loyalty.  </li>
   
  </ul>
  <h3 className="mt-6 text-xl  font-extrabold text-purple-700">Growth Strategies</h3>
  <ul className="text-gray-700 mt-2 space-y-4">
    <li>• Researching trends and using analytics to grow your followers and reach. Strategic campaigns to attract and retain a larger audience.  </li>
   
  </ul>
  <button className="mt-4 px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-[#CBA3FF] to-[#700DCC]">
    Book a Call
  </button>
</div>

          {/* Discord Services */}
          <div className="expertise-card p-8 bg-white shadow-lg rounded-lg text-left">
  <div className="flex space-x-3 items-center">
    <div className="expertise-icon purple"><img src='/icon4.png' className=" justify-center text-center p-2"/> </div>
<div>
<h3 className="text-2xl font-bold text-purple-700">Custom Discord Services</h3> 
<p className="text-gray-600">Grow and Manage Your Community
  </p>
</div>
  </div>
 
  <h3 className="mt-6 text-xl  font-extrabold text-purple-700">Discord Server Creation 
  </h3>
  <ul className="text-gray-700 mt-2 space-y-4">
    <li>• Custom-built servers for gaming, streaming, businesses, and niche communities.  </li>
    <li>• Full setup, including roles, permissions, and categories.  </li>
  </ul>
  <h3 className="mt-6 text-xl  font-extrabold text-purple-700">Custom Bots Development</h3>
  <ul className="text-gray-700 mt-2 space-y-4">
    <li>• Unique bots tailored to automate tasks, moderate channels, or enhance user engagement.  </li>
    <li>• Integration with other platforms for seamless workflows.   </li>

   
  </ul>
  <h3 className="mt-6 text-xl  font-extrabold text-purple-700">Moderator Training & Support </h3>
  <ul className="text-gray-700 mt-2 space-y-4">
    <li>• Training moderators to maintain server standards and ensure smooth management.  </li>
   
  </ul>
  <button className="mt-4 px-6 py-2 text-white font-bold rounded-full bg-gradient-to-r from-[#CBA3FF] to-[#700DCC]">
    Book a Call
  </button>
</div>
        </div>
      </section>


    </div>   
       {/* Elevate Your Brand Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">Elevate your Brand with ServeStream</h2>
        <button className="mt-6 px-6 py-3 text-white font-bold rounded-full bg-gradient-to-r from-[#CBA3FF] to-[#700DCC]">
          Schedule a Free Appointment
        </button>
      </section>
    </div>
  );
}

export default Services;