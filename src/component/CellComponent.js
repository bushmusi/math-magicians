import React from 'react';
import PropTypes from "prop-types";
import './Calculator.scss';

class CellComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { nameOfClass, itemId, keySymbol } = this.props;
    return (
      <div className={`InputBox ${nameOfClass}`} id={`cell-${itemId}`}>
        <button type="button">{keySymbol}</button>
      </div>
    );
  }
}

CellComponent.propTypes = {
  nameOfClass: PropTypes.String.isRequired,
  itemId: PropTypes.String.isRequired,
  keySymbol: PropTypes.String.isRequired,
};

export default CellComponent;
