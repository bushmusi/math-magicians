import './Calculator.scss';

import React from 'react';
import GetElements from './GetElements';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleOperation = this.handleOperation.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  handleOperation(btnVal) {
    const { obj } = this.state;
    const returnRes = calculate(obj, btnVal);
    this.setState({ obj: returnRes });
  }

  render() {
    const data = this.state;
    const { next, total } = data.obj;
    const result = next !== null ? next : total;
    return (
      <>
        <div className="ResultBox InputBox">
          <h2>
            { result }
          </h2>
        </div>
        <GetElements handleOperation={this.handleOperation} />
      </>
    );
  }
}

export default Calculator;
