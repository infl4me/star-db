import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Row
      left={<PersonList onSelected={id2 => history.push(id2)} />}
      right={id && <PersonDetails selectedId={id} />}
    />
  );
};

export default withRouter(PeoplePage);
