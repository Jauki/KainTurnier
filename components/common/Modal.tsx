
export interface ModalProperties{
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ handleClose,  children}: ModalProperties) => {
  return <div onClick={handleClose} className="bg-black fixed inset-0 z-50 overflow-hidden w-screen h-full flex justify-center items-center top-0 left-0 bg-opacity-20">
    <div onClick={(e) => e.stopPropagation()} className="w-1/3">
      {children}
    </div>
  </div>
}

export default Modal;
