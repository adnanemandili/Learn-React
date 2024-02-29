import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../style";
import { Programmer } from ".";


const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 -translate-y-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-8 h-8 rounded-full bg-[#12769E]' />
          <div className="w-2 sm:h-80 h-44 blue-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&rsquo;m <span className='text-[#12769E]'>Adnane</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate software engineering student ,<br className='sm:block hidden' />  constantly driven to delve deeper into the field,<br className='sm:block hidden' /> always eager to learn more. 
          </p>
        </div>
      </div>

      <Programmer/>

      <div className={`absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ${isMobile ? 'translate-y-20' : 'translate-y-19'}`}>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Home
