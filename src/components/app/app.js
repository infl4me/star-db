import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorBoundary from '../error-boundary';
import { SwapiServiceProvider } from '../swapi-service-context';
import { SwapiService } from '../../services';

import './app.css';

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="app">
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
