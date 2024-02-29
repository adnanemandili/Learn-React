
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { graduations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ graduation }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={
            <div>
                {graduation.date}
                <br className='sm:block hidden' />
                <span>
                    {graduation.address}
                </span>
            </div>
        }
        
        iconStyle={{ background: graduation.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={graduation.icon}
              alt={graduation.college_name}
              className='w-[100%] h-[100%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{graduation.diploma}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {graduation.college_name}
          </p>
          {/* <p
            className='text-secondary text-[16px] font-semibold text-right'
            style={{ margin: 0 }}
          >
            {graduation.address}
          </p> */}
        </div>
  
        {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul> */}
      </VerticalTimelineElement>
    );
  };

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Where and What I learned
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education and Diplomas
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {graduations.map((graduation, index) => (
            <EducationCard
              key={`graduation-${index}`}
              graduation={graduation}
            />
          ))}
        </VerticalTimeline>
      </div>

    </>
  );
};

export default SectionWrapper(Education, "formtion");