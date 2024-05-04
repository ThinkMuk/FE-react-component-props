import React from 'react';
import Input from '../components/Input/Input';
import { useState } from 'react';
import Button from '../components/Button/Button';
import { useRef } from 'react';

export default function PlayGround() {
  const [isError, setIsError] = useState('');
  const ref = useRef(null);
  const handleSubmit = () => {
    if (ref.current.value) {
      setIsError(false);
      alert(`Your ID is: ${ref.current.value}`);
    } else {
      setIsError(true);
    }
  };

  return (
    <div>
      <Input
        label='USER ID'
        supportingText='아이디를 입력해주세요.'
        isError={isError}
        placeholder='입력해주세요'
        ref={ref}
      />
      <Button handleSubmit={handleSubmit} />
    </div>
  );
}
