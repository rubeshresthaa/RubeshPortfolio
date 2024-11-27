import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import Img1 from '../assets/portfolio-img1.png'
import { Link } from 'react-scroll';
const Work = () => {
  return (
    <section className='section my-72' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:justify-center lg:items-center gap-x-10'>
          <motion.div 
          variants={fadeIn('right',0.5)} initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3 }}  className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest Work.</h2>
              <p className='max-w-sm mb-16'>You can check all my project given down the link </p>
              <Link to='services'><button className='btn btn-sm'>View All Projects</button></Link>
            </div>
            {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img src={Image} alt="" className='group-hover:scale-125 transition-all duration-500' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Front End</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
               <span className='text-3xl tex-white'>Project Title</span> 
              </div>
            </div> */}
          </motion.div>
          {/* <motion.div
          variants={fadeIn('left',0.2)} initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3 }}  className='flex-1 flex flex-col gap-y-10'>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img src={Image} alt="" className='group-hover:scale-125 transition-all duration-500' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Front End</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
               <span className='text-3xl tex-white'>Project Title</span> 
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img src={Image} alt="" className='group-hover:scale-125 transition-all duration-500' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Front End</span></div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-50'>
               <span className='text-3xl tex-white'>Project Title</span> 
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  ) 
};

export default Work;
