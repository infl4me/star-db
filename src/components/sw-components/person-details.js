import React from 'react';
import ItemDetails from '../item-details';
import { withHandlers, withSwapiService } from '../hoc-helpers';
import { compose } from '../../utils';
import Record from '../record';

const mapPersonMethodsToProps = ({ getPerson, getPersonImg }) => (
  { getData: getPerson, getImgUrl: getPersonImg }
);

const PersonDetails = props => (
  <ItemDetails {...props}>
    <Record label="Gender" field="gender" />
    <Record label="Birth year" field="birthYear" />
    <Record label="Eye color" field="eyeColor" />
  </ItemDetails>
);

export default compose(
  withSwapiService(mapPersonMethodsToProps),
  withHandlers,
)(PersonDetails);
