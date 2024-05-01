import React from 'react';
import './Circle.css';

export default function Circle({ color }) {
  return <div className='circle' style={{ backgroundColor: color }}></div>;
}
