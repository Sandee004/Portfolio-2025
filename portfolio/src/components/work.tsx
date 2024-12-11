/*import Project1 from "./project1";
import Project2 from "./project2";
import { motion } from "framer-motion";
import { useInView as useIntersectionInView } from "react-intersection-observer";

const Work = () => {
  const [ref, inView] = useIntersectionInView();
  return (
    <>
      <p className="font-bold text-xl mt-5 mb-2">Projects I've done</p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }} // Start slightly off-screen and below
        animate={{ opacity: inView ? 1 : 0, y: 0 }} // Slide in and fade in
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mx-auto"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }} // Delay the second project's animation
          className="mx-auto "
        >
          <Project1 />
        </motion.div>

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          {" "}
          <Project2 />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Work;
*/

import Project1 from "./project1";
import Project2 from "./project2";
import { motion } from "framer-motion";
import { useInView as useIntersectionInView } from "react-intersection-observer";

const Work = () => {
  const [ref1, inView1] = useIntersectionInView();
  const [ref2, inView2] = useIntersectionInView();

  return (
    <>
      <p className="font-bold text-xl mt-5 mb-2">Projects I've done</p>
      <motion.div
        ref={ref1}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: inView1 ? 0 : "100%", opacity: inView1 ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mx-auto px-2"
      >
        <Project1 />
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: inView2 ? 0 : "-100%", opacity: inView2 ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        className="mx-auto px-2"
      >
        <Project2 />
      </motion.div>
    </>
  );
};

export default Work;
