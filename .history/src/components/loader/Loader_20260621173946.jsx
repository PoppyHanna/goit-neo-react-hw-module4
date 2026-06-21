import { PacmanLoader } from "react-spinners";
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <PacmanLoader
            color="currentColor"
            loading={true}
            size={25}
        />
      </div>
    </div>
  );
};

export default Loader;

