import React from 'react';
import productData from '../product';

const Description = () => {
  return (
    <Card.Text>{productData.description}</Card.Text>
  );
}

export default Description;
