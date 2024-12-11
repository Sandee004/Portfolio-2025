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
          I’m a <span className="text-green-500">Fullstack Developer</span>{" "}
          passionate about creating seamless and efficient web solutions. With a
          strong foundation in both front-end and back-end technologies, I
          specialize in building scalable applications that blend functionality
          with intuitive design. Fueled by a curiosity for innovation and
          technical excellence, I thrive on solving complex problems and
          crafting solutions that leave a lasting impact. Whether working on
          dynamic user interfaces or robust server-side systems, I aim to
          deliver code that is clean, efficient, and impactful.
          <span className="text-center text-green-500 font-bold">
            Let's build something great together!
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default About;
