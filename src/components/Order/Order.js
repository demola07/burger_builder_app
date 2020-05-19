import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad </p>
      <p>
        Price: <strong>USD: 12.00</strong>
      </p>
    </div>
  );
};

export default order;
