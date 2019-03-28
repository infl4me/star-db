import React from 'react';
import ItemDetails from '../item-details';
import { withHandlers, withSwapiService } from '../hoc-helpers';

const Record = ({
  data, field, label, cn,
}) => <li className={cn}>{`${label}: ${data[field]}`}</li>;

const mapPersonMethodsToProps = ({ getPerson, getPersonImg }) => (
  { getData: getPerson, getImgUrl: getPersonImg }
);
const mapPlanetMethodsToProps = ({ getPlanet, getPlanetImg }) => (
  { getData: getPlanet, getImgUrl: getPlanetImg }
);
const mapStarshipMethodsToProps = ({ getStarship, getStarshipImg }) => (
  { getData: getStarship, getImgUrl: getStarshipImg }
);

const PersonDetails = (props) => {
  const Component = withSwapiService(withHandlers(ItemDetails), mapPersonMethodsToProps);
  return (
    <Component {...props}>
      <Record label="Gender" field="gender" />
      <Record label="Birth year" field="birthYear" />
      <Record label="Eye color" field="eyeColor" />
    </Component>
  );
};


const PlanetDetails = (props) => {
  const Component = withSwapiService(withHandlers(ItemDetails), mapPlanetMethodsToProps);
  return (
    <Component {...props}>
      <Record label="Population" field="population" />
      <Record label="Rotation period" field="rotationPeriod" />
      <Record label="diameter" field="diameter" />
    </Component>
  );
};


const StarshipDetails = (props) => {
  const Component = withSwapiService(withHandlers(ItemDetails), mapStarshipMethodsToProps);
  return (
    <Component {...props}>
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
