import React from 'react';

import './spinner.css';

const Spinner = () => (
  <div className="lds-css spinner ng-scope">
    <div className="lds-rolling">
      <div />
      <div />
    </div>
  </div>
);

export default Spinner;
