import React from 'react';

interface ButtonElementProps {
  text: string;
  handleButtonClick: () => void;
}

const ButtonElement: React.FC<ButtonElementProps> = ({ text, handleButtonClick }) => {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleButtonClick}>
      {text}
    </button>
  );
};

export default ButtonElement;
