import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Clone Of Codepen',
    description: 'Built a CodePen clone using ReactJS, enabling users to write and preview HTML, CSS, and JavaScript code in real time. Implemented features like syntax highlighting, live preview, and separate code editors, and efficient state management.',
    link: 'Project Link',
    href:' https://codepen-teal.vercel.app/'
  },
  {
    name: 'Blog CRUD Project ',
    description: '•	Developed a CRUD Blog project using NextJS and MongoDB',
    link: 'Project Link',
    href:'https://next-js-six-roan.vercel.app/'
  },
  {
    name: 'Todo List',
    description: 'Developed a TodoList using ReactJS where we can add the task and check and delete the task after completion',
    link: 'Project Link',
    href:'https://todo-list-kappa-lake.vercel.app/'
  },
  {
    name: 'Project based on Redux',
    description: 'Developed a responsive website using Redux for state management and Material Tailwind for modern UI design. Focused on seamless data flow, component reusability, and creating an intuitive user interface with optimized performance. I used ReactJs for frontend and ExpressJS and MongoDB for backend.',
    link: 'Github Link',
    href:'https://github.com/rubeshresthaa/RTK '
  },
  {
    name: 'Pawstore using RTK Query',
    description: 'Developed a website using RTK query and tailwind CSS for UI design. Focused on seamless data flow, component reusability, and creating an intuitive user interface with optimized performance. I used ReactJs for frontend and ExpressJS and MongoDB for backend.',
    link: 'Github Link',
    href:' https://github.com/rubeshresthaa/ProjectFront'
  },
  {
    name: 'Website For Express Tech',
    description: 'Developed a responsive website using RTK query and tailwind CSS for Ui design. Focused on seamless data flow, component reusability, and creating an intuitive user interface with optimized performance. I used ReactJs for frontend and ExpressJS and MongoDB for backend.',
    link: 'Project Link',
    href:' https://express-t-ech.vercel.app/'
  },
  
];

const Services = () => {
  return (
    <section className="section mt-96" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text Section */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-8">I'm a Front-End Developer.</h3>
            <button className="btn btn-sm">My Projects</button>
          </motion.div>

          {/* Services Section */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link,href } = service;
                return (
                  <div
                    className="border-b border-white/20 py-6 flex justify-between items-start"
                    key={index}
                  >
                    {/* Service Content */}
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-4">
                        {name}
                      </h4>
                      <p className="font-secondary leading-relaxed text-gray-300">
                        {description}
                      </p>
                    </div>

                    {/* Call-to-Action */}
                    <div className="flex flex-col items-center">
                      <a
                        href="#"
                        className="btn w-10 h-10 mb-4 flex justify-center items-center text-accent bg-gray-800 rounded-full hover:bg-accent hover:text-white transition-all"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={href}
                        className="text-gradient text-sm font-medium"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
