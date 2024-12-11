/*import image from './assets/image.jpg';
import image from "../assets/svg-loaders/tail-spin.svg";

const Loader = () => {
  return (
    <div className="bg-red-400 w-[100%] h-[100vh] flex justify-center items-center mx-auto">
      <img src={image} alt="Image description" className="p-4" />
    </div>
  );
};

export default Loader;
*/

const Loader = () => (
  <div className="fixed inset-0 bg-green-300 bg-opacity-50 flex justify-center items-center z-50">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black"></div>
  </div>
);

export default Loader;
