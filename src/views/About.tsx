// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import codeforces from "../assets/Codeforces-colored.svg";
import codechef from "../assets/codechef.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary">
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              My name is Ganga Sagar, currently in the final year of my bachelor's program at the Institute of Engineering and Technology in Lucknow.
              <br />
              <br /> I am a Problem Setter Intern at iMocha Company, where i create various problems based on DSA. <br />
              <br /> I've dedicated myself to competitive programming in C++, solving over 1000 DSA problems on platforms like Codeforces, Codechef,
              LeetCode, GFG, and CSES. <br />
              <br /> I am also a Frontend developer where I have worked with many technologies like HTML / CSS / JS / ReactJs / TypeScript / Bootstrap
              / TailwindCss. <br />
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6 slg:gap-4">
            <SocialMediaIcon imgSrc={linkedin} title="LinkedIn" link="https://www.linkedin.com/in/ganga-sagar-456a3a245/" />
            <SocialMediaIcon imgSrc={codeforces} title="Codeforces" link="https://codeforces.com/profile/HRN_Harshit" />
            <SocialMediaIcon imgSrc={codechef} title="Codechef" link="https://www.codechef.com/users/hars_02" />
            <SocialMediaIcon imgSrc={github} title="Github" link="https://github.com/GangSagar/" />
            <SocialMediaIcon imgSrc={email} title="Email" link="mailto:hrnharshit@gmail.com" />
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
