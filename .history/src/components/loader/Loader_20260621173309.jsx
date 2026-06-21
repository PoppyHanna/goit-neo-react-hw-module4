import { PacmanLoader } from "react-spinners";
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
        <PacmanLoader
            color="#023491"
            loading={true}
            size={25}
        />
    </div>
  );
};

export default Loader;

