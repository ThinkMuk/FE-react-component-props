import './Button.css';

const Button = ({ isSelected, onClick, children }) => {
  return (
    <button className='btn' onClick={onClick} style={{ backgroundColor: isSelected && 'red' }}>
      {children}
    </button>
  );
};

export default Button;
