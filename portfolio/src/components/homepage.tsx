import { motion } from "framer-motion";
import About from "./about";
import Navbar from "./navbar";
import Work from "./work";

const Homepage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto"
      >
        <Navbar />
        {/* Add padding to compensate for the navbar */}
        <div className="pt-[90px]">
          <About />
          <Work />
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;
