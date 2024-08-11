import React from 'react';

const Modal = ({ isOpen, onClose, src }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'>
      <div className='relative max-w-screen-lg w-full'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-white text-2xl bg-gray-700 p-2 rounded-full hover:bg-gray-600'
        >
          &times;
        </button>
        <img src={src} alt="Certificate" className='w-full h-auto' />
      </div>
    </div>
  );
};

export default Modal;
