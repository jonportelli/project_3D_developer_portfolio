import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { link } from "../assets";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import '../index.css'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      > */}
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px] '>
          <img
            src={image}
            alt='project_image'
            className='object-cover w-full h-full rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='flex items-center justify-center w-6 h-6 rounded-full cursor-pointer target-blank white-gradient bg-white'
            >
              <img
                src={link}
                alt='source code'
                className='object-contain w-1/2 h-1/2'
              />
            </div>
          </div>
        </div>
        
        <div className='mt-5'>
        <motion.button 
            whileHover={{
              scale: 1.1,
              
            }}>
             <h3 onClick={() => window.open(source_code_link, "_blank")} className="text-black font-bold text-[24px]" id="navlink">{name}</h3>
            
              </motion.button>
         
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='flex flex-wrap gap-2 mt-4'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Our work</p>
        <h2 className={`${styles.sectionHeadTextRev}`}>Projects.</h2>
      </motion.div>

      <div className='flex w-full'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Some recent projects showcasing our skills and experience. Each project links to the live demos.
        </motion.p>
      </div>

      <div className='flex flex-wrap mt-20 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
