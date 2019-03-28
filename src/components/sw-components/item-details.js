import React from 'react';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import { withHandlers } from '../hoc-helpers';

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImg,
  getPlanetImg,
  getStarshipImg,
} = new SwapiService();

const Record = ({
  data, field, label, cn,
}) => <li className={cn}>{`${label}: ${data[field]}`}</li>;

const PersonDetails = (props) => {
  const Component = withHandlers(ItemDetails, getPerson);
  return (
    <Component {...props} getImgUrl={getPersonImg}>
      <Record label="Gender" field="gender" />
      <Record label="Birth year" field="birthYear" />
      <Record label="Eye color" field="eyeColor" />
    </Component>
  );
};


const PlanetDetails = (props) => {
  const Component = withHandlers(ItemDetails, getPlanet);
  return (
    <Component {...props} getImgUrl={getPlanetImg}>
      <Record label="Population" field="population" />
      <Record label="Rotation period" field="rotationPeriod" />
      <Record label="diameter" field="diameter" />
    </Component>
  );
};


const StarshipDetails = (props) => {
  const Component = withHandlers(ItemDetails, getStarship);
  return (
    <Component {...props} getImgUrl={getStarshipImg}>
      <Record label="Model" field="model" />
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
    </Component>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
