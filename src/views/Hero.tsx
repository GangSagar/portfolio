// assets
import homePageImg from "../assets/home-page.svg";
import homePageIllustation from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div
        className="max-w-screen-2xl flex flex-col 
          xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-5xl lg:text-7xl
              font-bolt text-textPrimary capitalize">
            I am
            <br />
            <span className="text-secondary">
              <Typewriter words={["Competitive Programmer", "Frontend Developer"]} cursor cursorStyle="_" typeSpeed={100} deleteSpeed={75} loop />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Link to="about" smooth>
              <Button secondary>About Me</Button>
            </Link>

            <a target="_blank" href="https://drive.google.com/file/d/1V6AEZzaX7hX-RVriYVQ6k0EPA_tMvMJV/view?usp=sharing">
              <Button icon={downloadIcon}>Resume</Button>
            </a>
          </motion.div>
        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homePageIllustation}
          alt=""
          className="max-w-full sm:max-w-[401px]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
