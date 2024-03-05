import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-200 rounded-md shadow-md">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={input}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map(
          (item, index) => (
            <button
              key={index}
              className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
