/*import Project1 from "./project1";
import Project2 from "./project2";
import { motion } from "framer-motion";
import { useInView as useIntersectionInView } from "react-intersection-observer";
import Project3 from "./project3";

const Work = () => {
  const [ref1, inView1] = useIntersectionInView();
  const [ref2, inView2] = useIntersectionInView();
  const [ref3, inView3] = useIntersectionInView();

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

      <motion.div
        ref={ref3}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: inView3 ? 0 : "100%", opacity: inView3 ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        className="mx-auto px-2"
      >
        <Project3 />
      </motion.div>
    </>
  );
};

export default Work;*/

import Project1 from "./project1";
import Project2 from "./project2";
import Project3 from "./project3";
import { motion } from "framer-motion";
import { useInView as useIntersectionInView } from "react-intersection-observer";

const Work = () => {
  const [ref1, inView1] = useIntersectionInView();
  const [ref2, inView2] = useIntersectionInView();
  const [ref3, inView3] = useIntersectionInView();

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

      <motion.div
        ref={ref3}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: inView3 ? 0 : "100%", opacity: inView3 ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        className="mx-auto px-2"
      >
        <Project3 />
      </motion.div>
    </>
  );
};

export default Work;
