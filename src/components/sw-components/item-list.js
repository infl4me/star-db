import React from 'react';
import ItemList from '../item-list';
import { withHandlers, withSwapiService } from '../hoc-helpers';

const withRenderFn = (Wrapped, renderFn) => props => (
  <Wrapped {...props} renderItem={renderFn} />
);

const renderPerson = ({ name, birthYear, gender }) => `${name} (${gender} ${birthYear})`;
const renderPlanet = ({ name, diameter }) => `${name} (${diameter} diameter)`;
const renderStarship = ({ name, model }) => `${name} (${model})`;

const mapPersonMethodsToProps = ({ getAllPeople }) => ({ getData: getAllPeople });
const mapPlanetMethodsToProps = ({ getAllPlanets }) => ({ getData: getAllPlanets });
const mapStarshipMethodsToProps = ({ getAllStarships }) => ({ getData: getAllStarships });

export const PersonList = withSwapiService(
  withHandlers(withRenderFn(ItemList, renderPerson)),
  mapPersonMethodsToProps,
);

export const PlanetList = withSwapiService(
  withHandlers(withRenderFn(ItemList, renderPlanet)),
  mapPlanetMethodsToProps,
);

export const StarshipList = withSwapiService(
  withHandlers(withRenderFn(ItemList, renderStarship)),
  mapStarshipMethodsToProps,
);
