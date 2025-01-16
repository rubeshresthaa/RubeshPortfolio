import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import img from '../assets/file.png';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text Section */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 text-center font-secondary lg:text-left"
          >
            <motion.h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Rubesh <span>Shrestha</span>
            </motion.h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={['Frontend', 1000,'&',1000,'Mern Stack',1000,'Developer',1000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
              
            </div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I’m a web developer who loves blending creativity with code. From sleek front-end designs to powerful MERN stack solutions, I build websites that look great and work even better. Let’s create something awesome together!
            </motion.p>
            <motion.div
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to='contact'><button className="btn btn-lg outline-none">Contact me</button></Link>
              
              <a
    href="/RubeshCV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gradient btn-link"
  >
    My Resume
  </a>
               <a
                  href="/RubeshCV.pdf"
                  download="RubeshCV.pdf"
                  className="text-gradient btn-link"
                >
                Download Resume
              </a>
             
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/rubeshresthaa" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rubesh-shrestha-2417b9208/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={img} alt="Banner" className='opacity-40 h-[500px] mb-32' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
