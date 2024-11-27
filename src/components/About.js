import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import image from '../assets/file.png';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section my-20" id="about" ref={ref}>
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
            <h2 className="h2 text-accent mb-4">About Me</h2>
            <h3 className="h3 mb-6">I'm a Front-End Developer & Mern-Stack Developer.</h3>
            <p className="mb-8 text-gray-600 leading-relaxed">
              Passionate about crafting intuitive and dynamic user interfaces, I specialize in creating efficient, scalable, and visually appealing web applications.
            </p>

            {/* Stats Section */}
            <div className="flex gap-x-8 lg:gap-x-12 mb-12">
              {/*Years of Experience */}
              {/* <div className="text-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>

              {/* Projects Completed */}
              <div className="text-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>

              {/* Satisfied Clients */}
              {/* <div className="text-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div> */}
            </div>

            {/* Call-to-Actions */}
            <div className="flex gap-x-6 items-center">
             <Link to='contact'><button className="btn btn-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                Contact Me
              </button></Link>
              
            </div>
          </motion.div>
        </div>
      </div>
     
    </section>
  );
};

export default About;
