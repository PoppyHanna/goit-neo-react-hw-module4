import { PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader-container">
     <PacmanLoader
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
    </div>
  );
};

export default Loader;

