import { motion } from "framer-motion";
import About from "./about";
import Navbar from "./navbar";
import Work from "./work";
//

const Homepage = () => {
  //
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto"
      >
        <Navbar />
        <About />
        <Work />
      </motion.div>
    </>
  );
};

export default Homepage;

/*
<motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }} // Start slightly off-screen and below
        animate={{ opacity: inView ? 1 : 0, y: 0 }} // Slide in and fade in
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mx-auto"
      >
        <Work />
      </motion.div>
      */
