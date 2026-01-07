import React from 'react';
import { TfiClose } from 'react-icons/tfi';

const SideBar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose}>
          <TfiClose />
        </button>
        <div>options</div>
      </div>
    </div>
  );
};

export default SideBar;
