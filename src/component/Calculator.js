import React from 'react';
import inputList from './Child-Data';
import CellComponent from './CellComponent';

import './Calculator.scss';

const getElements = () => {
  const items = [];
  Object.entries(inputList).forEach((key) => {
    const keyClassName = key[1].isOperation === true ? 'operator' : 'number';
    const keySymbol = key[1].symbol;
    // const isLeft = key[1].isLeft;
    items.push(<CellComponent nameOfClass={keyClassName} itemId={key[0]} keySymbol={keySymbol} />);
  });
  return items;
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const items = getElements();
    return (
      <>
        <div className="ResultBox InputBox">
          <h3>0</h3>
        </div>
        {items}
      </>
    );
  }
}

export default Calculator;
