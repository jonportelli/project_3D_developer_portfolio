import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
// import { ComputersCanvas } from "./canvas";
import { EarthCanvas } from "./canvas";
// import { VillaCanvas } from "./canvas";
const Hero = () => {
  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#404040]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}
        
        <div>
          <h1 className={`${styles.heroHeadText} text-primary @apply bg-[linear-gradient(90deg,#000,#adadad)] bg-clip-text text-transparent`}>
            IS YOUR BUSINESS EVOLVING?
          </h1>
          <p className={`${styles.heroSubText} mt-2  @apply bg-[linear-gradient(180deg,#000,#adadad)] bg-clip-text text-transparent`}>
            Artificial Intelligence is already being used by your competition. <br className='sm:block hidden' /> 
          </p>
          <p className={`${styles.heroSubText2} mt-2  @apply bg-[linear-gradient(180deg,#000,#adadad)] bg-clip-text text-transparent`}>
            We can give you the automation edge. <br className='sm:block hidden' /> 
          </p>
         
         
          
          <div class="flex flex-col space-y-7 py-10 sm:flex-row sm:space-y-0 sm:space-x-8 zIndex:10">
                 <a href="#" class="z-10 inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border-[1px] border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-0 focus:ring-gray-100 dark:text-indigo dark:border-gray-600 dark:hover:bg-gray-300 dark:focus:ring-gray-600">
                    <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    Show Me How
                </a>  
                <a href="#contact" class="z-10 cursor-pointer inline-flex items-center justify-center bg-transparent px-4 py-2.5 text-base font-medium text-center text-indigo border-[1px] border-gray-300 rounded-lg hover:bg-white focus:ring-1 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                </a>
                
            </div>
               
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <EarthCanvas />
      {/* <VillaCanvas /> */}
      <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
            > 
          <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
            />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      </div>
    </section>
  );
};

export default Hero;
