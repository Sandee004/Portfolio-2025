import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mx-auto">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto"
      >
        <div className="bg-green-400 rounded-[100%] w-[150px] h-[150px] mx-auto mb-6"></div>
        <p className="text-xl font-bold text-center">About Me</p>
      </motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto"
      >
        <p className="px-4">
          I'm <span className="text-green-400 font-bold">Oyarekhua Sandra</span>
          , a full-stack web developer based in Nigeria. With over 4 years of
          experience, I specialize in creating engaging web applications using
          technologies like React, TypeScript, and Flask. Currently pursuing a
          degree in Agricultural Economics and Extension at the University of
          Benin, I bring a unique blend of technical skills and analytical
          thinking to my development work. My recent projects include AgroFind,
          an AI-powered plant identification chatbot, and Kidsflix, a movie
          recommendation app for children. These showcase my ability to
          integrate cutting-edge technologies and create user-friendly
          interfaces. I'm passionate about solving problems through code and
          always eager to learn new technologies. When I'm not coding, you can
          find me contributing to open-source projects or participating in
          hackathons.
        </p>

        <p className="text-center text-green-400 font-bold">
          Let's build something great together!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
