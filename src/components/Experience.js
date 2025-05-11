import React from 'react';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import image from '../assets/file.png';


const Experience = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section my-5 md:my-20" id="experience" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-10 lg:gap-x-20 h-screen">
          {/* Image Section */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-contain bg-no-repeat mix-blend-lighten bg-top"
          >
            {/* Replace `img` with your actual image */}
            <img 
              src={image} 
              alt="About Me" 
              className="max-w-[320px] lg:max-w-[482px] object-cover rounded-lg opacity-45"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mb-4">Experience</h2>
            <h3>Mern Stack Intern</h3>
            <a href="https://mindriserstech.com/" target="_blank" rel="noreferrer"><span className='underline text-blue-400'>Mindrisers</span> Technology, Putalisadak, Kathmandu</a>
            <h3 className="h3 mb-6">February 13,2025 - May 14, 2025</h3>
            <ul className="mb-8 text-gray-600 leading-relaxed list-disc px-2 md:px-0">
              <li>Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>
              <li>Built responsive user interfaces and implemented state management using Redux API.</li>
              <li>Integrated RESTful APIs and handled backend operations including CRUD functionalities and authentication.</li>
              <li>Collaborated with cross-functional teams in an Agile environment to deliver features on time.</li>
              <li>Gained hands-on experience in version control using Git and deployment with platforms like Vercel/Heroku</li>
            </ul>
          </motion.div>
        </div>
      </div>
     
    </section>
  );
};

export default Experience;
