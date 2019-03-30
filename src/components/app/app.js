import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import ErrorBoundary from '../error-boundary';
import { SwapiServiceProvider } from '../swapi-service-context';
// eslint-disable-next-line no-unused-vars
import { SwapiService, DummySwapiService } from '../../services';

import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends React.Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="app">
              <Header />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Welcome!</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails selectedId={id} />;
                  }}
                />
                <Route render={(() => <h2>Page not found</h2>)} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}
