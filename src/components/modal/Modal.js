import '../../styles/Modal.css';
import CustomButton from '../UI/Button';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <CustomButton title={'Close'} onClickCallback={handleClose} />
      </section>
    </div>
  );
};

export default Modal;