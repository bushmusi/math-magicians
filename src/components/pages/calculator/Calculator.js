import React, { useState } from 'react';
import GetElements from './GetElements';
import calculate from '../../../logic/calculate';

const Calculator = () => {
  const initialItems = {
    total: null,
    next: null,
    operation: null,
  };

  const [initObj, setItems] = useState(initialItems);

  const handleOperation = (btnVal) => {
    const returnRes = calculate(initObj, btnVal);
    setItems(returnRes);
  };

  const { next, total } = initObj;
  const result = next !== null ? next : total;

  return (
    <>
      <div className="ResultBox InputBox">
        <h2>
          { result }
        </h2>
      </div>
      <GetElements handleOperation={handleOperation} />
    </>
  );
};

export default Calculator;
