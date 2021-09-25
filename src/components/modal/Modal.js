import { Typography } from '@material-ui/core';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react/cjs/react.development';
import CustomButton from '../UI/Button';

import '../../styles/Modal.css';

const WARNING_MESSAGE = 'Warning!'

const modalRoot = document.getElementById('modal-placeholder')

const Modal = ({ handleClose, show, children  }) => {
    const elementRef = useRef(null);
    if(!elementRef.current){
      elementRef.current = document.createElement('div')
    }

    useEffect(()=>{
        modalRoot.appendChild(elementRef.current)
        return ()=>modalRoot.removeChild(elementRef.current)  
    }, [])

    return createPortal(<PopupModal handleClose={handleClose} show={show}>{children}</PopupModal>, elementRef.current)
};

const PopupModal = ({handleClose, children, show}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (<div className={showHideClassName}>
    <section className="modal-main">
        <h4 className={'warning-message'}>
          {WARNING_MESSAGE}
        </h4>
      {children}
      <CustomButton title={'Close'} onClickCallback={handleClose} />
    </section>
</div>)
}

export default Modal;