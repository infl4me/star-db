import React from 'react';
import ItemDetails from '../item-details';
import { withHandlers, withSwapiService } from '../hoc-helpers';
import { compose } from '../../utils';
import Record from '../record';

const mapPlanetMethodsToProps = ({ getPlanet, getPlanetImg }) => (
  { getData: getPlanet, getImgUrl: getPlanetImg }
);

const PlanetDetails = props => (
  <ItemDetails {...props}>
    <Record label="Population" field="population" />
    <Record label="Rotation period" field="rotationPeriod" />
    <Record label="diameter" field="diameter" />
  </ItemDetails>
);

export default compose(
  withSwapiService(mapPlanetMethodsToProps),
  withHandlers,
)(PlanetDetails);
