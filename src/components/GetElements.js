import React from 'react';
import inputList from './Child-Data';
import CellComponent from './CellComponent';

class GetElements extends React.Component {
  render() {
    const items = [];
    Object.entries(inputList).forEach((key) => {
      const keyClassName = key[1].isOperation === true ? 'operator' : 'number';
      const cellInfo = {
        cellClassName: keyClassName,
        cellID: key[0],
        cellSymbol: key[1].symbol,
        isCellLeftSide: key[1].isLeft ? 'LeftBtn' : '',
      };

      items.push(<CellComponent itemInfo={cellInfo} key={`Cell${key[0]}`} />);
    });
    return items;
  }
}

export default GetElements;
