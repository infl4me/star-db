import React from 'react';
import './record.css';

const Record = ({
  data, field, label, cn,
}) => <li className={cn}>{`${label}: ${data[field]}`}</li>;

export default Record;
