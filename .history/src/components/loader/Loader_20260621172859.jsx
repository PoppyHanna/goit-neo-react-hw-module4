import { PacmanLoader } from "react-spinners";
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className="styles.loader-container">
        <PacmanLoader
            color="#6495ed"
            loading={true}
            size={25}
        />
    </div>
  );
};

export default Loader;

