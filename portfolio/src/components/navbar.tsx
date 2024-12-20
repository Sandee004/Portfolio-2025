import { motion } from "framer-motion";
import { LucideMenu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = ["About", "Featured Projects", "Let's connect"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b-2 border-black z-50">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-5 py-3">
        <p className="text-xl font-bold">Sandee</p>

        {/* Options for large screens */}
        <div className="hidden md:flex space-x-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:font-bold hover:text-green-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Menu button for smaller screens */}
        <LucideMenu onClick={toggleMenu} className="md:hidden cursor-pointer" />
      </div>

      {/* Collapsible menu for small screens */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`bg-gray-300 flex flex-col pl-8 py-1 md:hidden overflow-hidden`}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="py-2 hover:font-bold hover:text-green-500 transition-colors"
            onClick={closeMenu}
          >
            {item}
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
