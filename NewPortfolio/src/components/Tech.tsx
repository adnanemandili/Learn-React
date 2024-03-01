import React from "react";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
}

const Tech: React.FC = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText} text-center`}>
          What I know to do
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className='mt-16 flex '>
        <div className='flex flex-wrap gap-12'>
          {technologies.map((skill: Technology) => (
            <div className='block-container w-20 h-20 text-center justify-center items-center' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default SectionWrapper(Tech, "");
