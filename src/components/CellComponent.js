import React from 'react';
import PropTypes from 'prop-types';

class CellComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { itemInfo } = this.props;
    const {
      cellClassName, cellID, cellSymbol,
    } = itemInfo;
    let { isCellLeftSide } = itemInfo;
    isCellLeftSide = cellSymbol === '0' ? 'ZeroBtn' : isCellLeftSide;
    return (
      <div className={`InputBox ${cellClassName} ${isCellLeftSide}`} id={`Cell${cellID}`} key={cellID}>
        <button type="button" id={`btn-${cellID}`}>
          {cellSymbol}
        </button>
      </div>
    );
  }
}

CellComponent.propTypes = {
  itemInfo: PropTypes.shape({
    cellClassName: PropTypes.string.isRequired,
    cellID: PropTypes.string.isRequired,
    cellSymbol: PropTypes.string.isRequired,
    isCellLeftSide: PropTypes.string.isRequired,
  }).isRequired,
};

export default CellComponent;
