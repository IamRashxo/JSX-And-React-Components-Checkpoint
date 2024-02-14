import React from 'react';
import productData from '../product';

const Name = () => {
  return (
    <Card.Title>{productData.name}</Card.Title>
  );
}

export default Name;
