import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
        <PacmanLoader
              color="#306cce"
              size={25}
        />
    </div>
  );
};

export default Loader;

