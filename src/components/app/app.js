import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorBoundary from '../error-boundary';
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import './app.css';

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedId: null,
  }

  onSelected = (id) => {
    this.setState({ selectedId: id });
  };

  render() {
    const { selectedId } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="app">
            <Header />
            <RandomPlanet />
            <PeoplePage onSelected={this.onSelected} selectedId={selectedId} />
            {/* <PlanetPage onSelected={this.onSelected} selectedId={selectedId} /> */}
            {/* <StarshipPage onSelected={this.onSelected} selectedId={selectedId} /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
