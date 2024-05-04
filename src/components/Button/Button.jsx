// import './Button.css';

// const Button = ({ isSelected, onClick, children }) => {
//   return (
//     <button className='btn' onClick={onClick} style={{ backgroundColor: isSelected && 'red' }}>
//       {children}
//     </button>
//   );
// };

// export default Button;
import React from 'react';
import './Button.css';
export default function Button({ handleSubmit }) {
  return (
    <div className='center'>
      <button className='btn' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
