import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className="py-12 lg:py-16 mt-10" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2"
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="mb-8">
              <h4 className="text-lg text-accent font-bold uppercase mb-2">
                Get in Touch
              </h4>
              <h2 className="text-4xl lg:text-6xl font-bold">
                Let's Work <br /> Together
              </h2>
            </div>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            className="lg:w-1/2 bg-site p-8 rounded-lg shadow-lg"
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-400">Name</h3>
                <p className="text-gray-300">Rubesh Shrestha</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-400">Address</h3>
                <p className="text-gray-300">Sukedhara, Kathmandu, Nepal</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-400">Email</h3>
                <p className="text-gray-300">rubesh.shrestha619@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-400">Phone Number</h3>
                <p className="text-gray-300">+977 9840437941</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
