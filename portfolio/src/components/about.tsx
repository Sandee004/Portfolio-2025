import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-center gap-6 px-6 md:px-16 py-12">
      {/* Content Section */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <p className="text-2xl font-bold mb-4">About Me</p>
        <p className="text-lg leading-relaxed">
          I’m a <span className="text-green-600">Fullstack Developer</span>{" "}
          passionate about creating seamless and efficient web solutions. With a
          strong foundation in both front-end and back-end technologies, I
          specialize in building scalable applications that blend functionality
          with intuitive design.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Fueled by a curiosity for innovation and technical excellence, I
          thrive on solving complex problems and crafting solutions that leave a
          lasting impact. Whether working on dynamic user interfaces or robust
          server-side systems, I aim to deliver code that is clean, efficient,
          and impactful.
        </p>
        <p className="text-lg text-green-400 mt-6">
          Let's build something great together!
        </p>
      </motion.div>

      {/* Visual Section */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 flex justify-center md:justify-end"
      >
        <div className="relative">
          <div className="bg-green-400 rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px]"></div>
          <div className="absolute top-8 left-8 md:top-10 md:left-10 w-[130px] h-[130px] md:w-[160px] md:h-[160px] bg-white rounded-full border-4 border-green-400 shadow-lg"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
