import './Modal.css'
import Portal from "../Portal/Portal";
import {useEffect} from "react";

const Modal = ({modalConfig, onClose, isOpened}) => {

  const {message = 'ой', type = 'ok'} = modalConfig;

  let styleAlert = {}

  switch (type) {
    case 'ok':
      styleAlert = {
        color: '#155724',
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb',
      }
      break;
    case 'error':
      styleAlert = {
        color: '#721c24',
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb',
      }
  }

  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <>
      {(isOpened)
        ? <Portal>
          <div className='modal__container'>
            <div
              style={styleAlert}
              className="modal__body"
            >
              <button className='modal__close-btn btn-hover' onClick={onClose}>x</button>
              <h2 className='modal__message'>{message}</h2>
            </div>
            <div
              className='modal__overlay'
              onClick={onClose}
            />
          </div>
        </Portal>
        : null
      }
    </>
  )
}

export default Modal;
