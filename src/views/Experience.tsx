// assets
import expImg from "../assets/projects-page.svg";

// components
import { ExperienceCard, Reveal } from "../components";

// data
import { experience } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          background: `url(${expImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
          <div className="flex-1 flex flex-col gap-4">
            <Reveal>
              <h2
                className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary">
                My <span className="text-secondary"> Experience</span>
              </h2>
            </Reveal>

            <motion.div
              variants={fadeIn("up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex gap-20 mt-12 flex-wrap justify-center">
              {experience.map((item) => (
                <ExperienceCard imgSrc={item.img} title={item.title} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
