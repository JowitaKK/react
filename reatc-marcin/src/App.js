import React from 'react';
import logo from './logo.svg';
import CarInfo from './CarInfo';

function App() {
  return (
    <div>
        <CarInfo id={10} model="Opel" img="opel.jpeg"></CarInfo>
        <CarInfo id={11} model="mazda"></CarInfo>
    </div>
  );
}

export default App;
