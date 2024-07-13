import React, { useState } from 'react';

const Counter = () => {
  const [count, countState] = useState(0);
  const handleInc = () => {
    countState(count + 1);
  };
  const handleDic = () => {
    countState(count - 1);
  };

  const handleReset = () => {
    countState(0);
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleInc} disabled={count >= 5}>
            +
          </button>
          <button className="btn card__btn" onClick={handleDic} disabled={count <= -5}>
            -
          </button>
          <button className="btn card__btn" onClick={handleReset}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
