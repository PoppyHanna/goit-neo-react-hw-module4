import Modal from 'react-modal';
import styles from './ImageModal.module.css'
  
const ImageModal = ({ isOpen, image, onClose }) => {
 const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
      className={styles.modal} 
      overlayClassName={styles.overlay} 
      onClick={handleCloseModal} 
    >
      {image && (
        <>
          <div className={styles.cont}>
            <img src={image.urls.full} alt={image.alt_description} className={`${styles.cont} ${styles.imп} `} />

            <div className={styles.info}>
              <p className={styles.clause}><span className={styles.text}>Author:</span>  {image.user.name}</p>
              <p className={styles.clause}><span className={styles.text}>Likes:</span>  {image.likes}</p>
              <p className={styles.clause}><span className={styles.text}>Description:</span> {image.description || 'No description available'}</p>
            </div>
          </div>
          </>
      )}
    </Modal>
  );
};

export default ImageModal;
