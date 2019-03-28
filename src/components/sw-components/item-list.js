import React from 'react';
import ItemList from '../item-list';
import { withHandlers, withSwapiService } from '../hoc-helpers';
import { compose } from '../../utils';

const withRenderFn = renderFn => Wrapped => props => (
  <Wrapped {...props} renderItem={renderFn} />
);

const renderPerson = ({ name, birthYear, gender }) => `${name} (${gender} ${birthYear})`;
const renderPlanet = ({ name, diameter }) => `${name} (${diameter} diameter)`;
const renderStarship = ({ name, model }) => `${name} (${model})`;

const mapPersonMethodsToProps = ({ getAllPeople }) => ({ getData: getAllPeople });
const mapPlanetMethodsToProps = ({ getAllPlanets }) => ({ getData: getAllPlanets });
const mapStarshipMethodsToProps = ({ getAllStarships }) => ({ getData: getAllStarships });

export const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withHandlers,
  withRenderFn(renderPerson),
)(ItemList);

export const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withHandlers,
  withRenderFn(renderPlanet),
)(ItemList);

export const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withHandlers,
  withRenderFn(renderStarship),
)(ItemList);
