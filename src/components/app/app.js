/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Row from '../row';
import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <Row left={'item-list'} right={'item-details'} />
      </div>
    );
  }
}
