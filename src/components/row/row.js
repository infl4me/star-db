import React from 'react';
import './row.css';

const Row = ({ left, right }) => (
  <div className="row">
    <div className="row__left">{left}</div>
    <div className="row__right">{right}</div>
  </div>
);

export default Row;
