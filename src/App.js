import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import ImageComponent from './components/Image';
import productData from './product';

import { Card } from 'react-bootstrap';

const firstName = "Glasshour"; 

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px' }}>
        <ImageComponent />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? `${firstName}!` : 'there!'}</p>
      {firstName && <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.u-buy.com.ng%2Fproduct%2F4JR5O22RS-jinyisi-hourglass-60-minutes-sand-hourglass-clock-hourglass-timer-black-wooden-frame-decorative-sand-timer-for-office-kitchen-decor-home&psig=AOvVaw3V3vMtPWutRZOusq7Uv01f&ust=1708036066915000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOD536zwq4QDFQAAAAAdAAAAABAD" alt="Glass hour" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />}
    </div>
  );
}

export default App;
