import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
        <PacmanLoader
              color="#306cce"
              loading={true}
              size={25}
        />
    </div>
  );
};

export default Loader;

