import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Homepage from "./components/homepage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timerId);
  }, []);

  return <>{isLoading ? <Loader /> : <Homepage />}</>;
};

export default App;
