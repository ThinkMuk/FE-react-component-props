import React from 'react';

export default function Label({ id, children }) {
  return (
    <div style={{ margin: '7px' }}>
      <label htmlFor={{ id }}>{children}</label>
    </div>
  );
}
