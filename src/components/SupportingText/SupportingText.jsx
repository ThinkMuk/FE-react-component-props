import React from 'react';

export default function SupportingText({ isError, children }) {
  const style = {
    color: isError ? 'red' : 'inherit', // isError가 true이면 색상을 빨강으로, 아니면 기본 상속 색상을 사용
    fontSize: '14px',
    marginBottom: '5px',
  };
  return <div style={style}>{children}</div>;
}
