import './Calculator.scss';

import React from 'react';
import GetElements from './GetElements';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="ResultBox InputBox">
          <h3>0</h3>
        </div>
        <GetElements />
      </>
    );
  }
}

export default Calculator;
