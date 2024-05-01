import './Box.css';

const Box = ({ boxColor, txt }) => {
  return (
    <div
      className='box'
      style={{
        backgroundColor: boxColor || 'black',
      }}
    >
      <p>{txt}</p>
    </div>
  );
};

export default Box;
