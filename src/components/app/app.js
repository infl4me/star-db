/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import Row from '../row';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import './app.css';

export default class App extends React.Component {
  state = {
    selectedId: null,
  }

  onSelected = (id) => {
    this.setState({ selectedId: id });
  };

  render() {
    const { selectedId } = this.state;

    return (
      <div>
        <Header />
        <RandomPlanet />
        <Row
          left={<ItemList onSelected={this.onSelected} />}
          right={selectedId && <ItemDetails selectedId={selectedId} />}
        />
      </div>
    );
  }
}
