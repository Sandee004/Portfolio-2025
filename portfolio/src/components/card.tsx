/*import { motion, MotionValue } from "framer-motion";

// Define types for Card component props
type CardProps = {
  title: string;
  description: string;
  bgColor: string;
  isRight: boolean;
  translateY: MotionValue<number>;
  zIndex: MotionValue<number>;
};

const Card = ({
  title,
  description,
  bgColor,
  isRight,
  translateY,
  zIndex,
}: CardProps) => {
  return (
    <motion.div
      className={`relative px-6 py-8 border-2 border-black rounded-lg overflow-hidden ${bgColor}`}
      style={{
        translateY: translateY,
        zIndex: zIndex, // Apply z-index for stacking
      }}
    >
      {/* Image Section (Optional) *}
      <div
        className={`w-full h-48 bg-cover bg-center ${
          isRight ? "rotate-3" : "-rotate-3"
        }`}
        style={{
          backgroundImage: "url('/example-image.png')", // Replace with actual image
        }}
      ></div>

      {/* Text Content *}
      <div className="mt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
*/

// Card Component
import { motion, MotionValue } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  bgColor: string;
  translateY: MotionValue<number>;
  zIndex: MotionValue<number>;
  isRight: boolean;
};

const Card = ({
  title,
  description,
  bgColor,
  translateY,
  zIndex,
  isRight,
}: CardProps) => {
  return (
    <motion.div
      className={`px-6 py-8 border-2 border-black rounded-lg sticky top-0 ${bgColor} relative w-[70%] mx-auto`}
      style={{ translateY, zIndex }}
      // Apply rotation to the card based on `isRight`
      initial={false}
      animate={{ rotate: isRight ? 3 : -3 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Section (Optional) */}
      <div
        className="w-full h-48 bg-cover bg-center"
        style={{
          backgroundImage: "url('/example-image.png')", // Replace with actual image
        }}
      ></div>

      {/* Text Content */}
      <div className="mt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
