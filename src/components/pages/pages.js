import React from 'react';
import Row from '../row';
import {
  PersonList,
  PlanetList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  StarshipList,
} from '../sw-components';

export const PeoplePage = ({ selectedId, onSelected }) => (
  <Row
    left={<PersonList onSelected={onSelected} />}
    right={selectedId && <PersonDetails selectedId={selectedId} />}
  />
);

export const StarshipPage = ({ selectedId, onSelected }) => (
  <Row
    left={<StarshipList onSelected={onSelected} />}
    right={selectedId && <StarshipDetails selectedId={selectedId} />}
  />
);

export const PlanetPage = ({ selectedId, onSelected }) => (
  <Row
    left={<PlanetList onSelected={onSelected} />}
    right={selectedId && <PlanetDetails selectedId={selectedId} />}
  />
);
