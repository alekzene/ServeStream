import "./index.css";

function About() {
  const teamMembers = [
    {
      name: 'Name B. Surname',
      role: 'Co-Founder',
      description: [
        'Short Bio here',
        'Short Bio here',
        'Short Bio here'
      ],
      image: '/placeholder.svg'
    },
    {
      name: 'Name B. Surname',
      role: 'Co-Founder',
      description: [
        'Short Bio here',
        'Short Bio here',
        'Short Bio here'
      ],
      image: '/placeholder.svg'
    },
    {
      name: 'Mahenoor Salat',
      role: 'Front-End Developer | UIUX Designer',
      description: [
        'Expert in modern web technologies, animations, and UI/UX.' ,
        'A problem solver with an eye for detail and aesthetics.',
        'Believes in innovation and creativity in code & design.'
      ],
      image: '/placeholder.svg'
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="font-extrabold">Who We Are</h1>
        <p className="text-black">A team dedicated to your brand's growth</p>
        <div className="hero-buttons">
          <button className="h-12 p-3  font-bold rounded-full bg-gradient-to-r from-[#CBA3FF] to-[#700DCC]  w-full">Meet the Team Today!</button>
          <button className="whitespace-nowrap">Learn more</button>
        </div>
      </section>

      <section className="approach-section flex">
        <div>
          <h2 className="font-extrabold">The ServeStream Approach</h2>
          <p className="pr-40 ">
            At ServeStream, we drive business growth with innovative marketing solutions,
            blending sales strategies, creative design, and IT/web development. Our end-to-end
            services help brands reach their full potential, creating lasting success through
            seamless digital experiences and strategic innovation. We aim to be the all-in-one
            agency that transforms businesses into industry leaders, ensuring both immediate
            impact and long-term growth.
          </p>
        </div>
        <div>
          <img height={1300} width={1300} alt="decoration" src="./2circle.png" />
        </div>
      </section>

      <section className="text-left max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold">Meet The Team</h2>
        <p className=" text-lg">Creators, Innovators, and Brand Builders</p>

        <div className=" p-6 rounded-lg shadow-md mt-4 mb-7">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center gap-12 py-4">
              <div className="">
                <img height={200} width={200} alt="decoration" src="./1circle.png" />

              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-purple-700">{member.name}</h3>
                <h4 className="text-purple-500 text-2xl  font-semibold">{member.role}</h4>
                <ul className="mt-1 text-gray-700 text-lg list-disc pl-4">
                  {member.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="h-12 p-3 mb-12 mt-12 text-white font-bold rounded-full bg-gradient-to-r from-[#CBA3FF] to-[#700DCC] w-fit">
            Let’s Make It Happen — Book A Call Now!
          </button>
        </div></section>

    </div>
  );
}

export default About;