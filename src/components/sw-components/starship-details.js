import React from 'react';
import ItemDetails from '../item-details';
import { withHandlers, withSwapiService } from '../hoc-helpers';
import { compose } from '../../utils';
import Record from '../record';

const mapStarshipMethodsToProps = ({ getStarship, getStarshipImg }) => (
  { getData: getStarship, getImgUrl: getStarshipImg }
);

const StarshipDetails = props => (
  <ItemDetails {...props}>
    <Record label="Model" field="model" />
    <Record label="Length" field="length" />
    <Record label="Cost" field="costInCredits" />
  </ItemDetails>
);

export default compose(
  withSwapiService(mapStarshipMethodsToProps),
  withHandlers,
)(StarshipDetails);
