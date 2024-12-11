//import { motion } from "framer-motion";

const Project1 = () => {
  return (
    <div className="px-2 py-4 border-b-2 border-black mb-3">
      <div className="bg-green-400 rounded-md mx-auto w-full h-[150px] my-2"></div>
      <p className="font-bold text-xl my-2">AgroFind</p>
      <p className="text-sm">
        AgroFind is an AI incorporated chat bot created to aid in the
        identification of plants, noticable disease and/or pest infestation.
        Built with Gemini AI, it takes the user input with has to be a picture
        with jpg, jpeg or png extension/format. It then gives the user the
        summary of noticable features about the plant.
      </p>
    </div>
  );
};

export default Project1;
