import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-components';

const StarshipsPage = ({ history }) => (
  <StarshipList onSelected={(id) => {
    history.push(`/starships/${id}`);
  }}
  />
);

export default withRouter(StarshipsPage);
