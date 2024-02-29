
// import React from "react";
// import {styles} from "../style";
// import { textVariant } from "../utils/motion";
// import { techHolder } from "./techHolder";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
// import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className='mt-16 flex flex-wrap gap-12 ccenter'>
          {technologies.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
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
  );
};

export default SectionWrapper(Tech, "");