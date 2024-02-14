import React from 'react';
import productData from '../product';

const Price = () => {
  return (
    <Card.Text>{`Price: ${productData.price}`}</Card.Text>
  );
}

export default Price;
