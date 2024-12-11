import { motion } from "framer-motion";
import { LucideMenu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [items] = useState(["About", "Featured Projects", "Let's connect"]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center border-b-2 px-5 py-3 border-black">
        <p>Sandee</p>

        <LucideMenu onClick={toggleMenu} />
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="bg-gray-300 flex flex-col pl-8 py-4"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="py-1 hover:font-bold w-[80%]"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Navbar;
