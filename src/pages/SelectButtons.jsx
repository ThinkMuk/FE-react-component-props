import { useState } from 'react';
import Button from '../components/Button/Button';

const SelectButtons = () => {
  const [buttonColor, setButtonColor] = useState(0);
  function handleButtons(idx) {
    console.log(buttonColor);
    setButtonColor(idx);
    console.log(buttonColor);
  }
  return (
    <div className='selectBtns'>
      <Button isSelected={buttonColor === 1} onClick={() => handleButtons(1)}>
        Primary
      </Button>
      <Button isSelected={buttonColor === 2} onClick={() => handleButtons(2)}>
        Secondary
      </Button>
      <Button isSelected={buttonColor === 3} onClick={() => handleButtons(3)}>
        Default
      </Button>
    </div>
  );
};

export default SelectButtons;
